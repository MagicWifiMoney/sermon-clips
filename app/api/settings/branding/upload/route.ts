import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { put } from "@vercel/blob";
import {
  getImageUploadUrl,
  finalizeImageUpload,
  getVideoUploadUrl,
  finalizeVideoUpload,
} from "@/lib/mosaic-client";
import type { Prisma } from "@prisma/client";
import type { BrandingConfig } from "@/types";

type AssetType = "logo" | "watermark" | "intro" | "outro";

function sanitizeFileName(fileName: string): string {
  return fileName.replace(/[^a-zA-Z0-9._-]/g, "-");
}

async function uploadBytesToMosaic(
  uploadUrl: string,
  uploadFields: Record<string, string>,
  fileName: string,
  mimeType: string,
  bytes: ArrayBuffer
): Promise<void> {
  const form = new FormData();
  for (const [key, value] of Object.entries(uploadFields)) {
    form.append(key, value);
  }

  const blob = new Blob([bytes], { type: mimeType });
  form.append("file", blob, fileName);

  const uploadRes = await fetch(uploadUrl, { method: "POST", body: form });
  if (!uploadRes.ok) {
    throw new Error(`Mosaic upload failed with status ${uploadRes.status}`);
  }
}

// POST /api/settings/branding/upload — upload to Blob, then mirror to Mosaic, then store IDs/URLs
export async function POST(request: NextRequest) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const formData = await request.formData();
  const assetType = formData.get("assetType");
  const file = formData.get("file");

  if (
    typeof assetType !== "string" ||
    !["logo", "watermark", "intro", "outro"].includes(assetType)
  ) {
    return NextResponse.json({ error: "Invalid assetType" }, { status: 400 });
  }
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "File is required" }, { status: 400 });
  }

  const typedAssetType = assetType as AssetType;

  try {
    const isVideo = typedAssetType === "intro" || typedAssetType === "outro";
    const now = Date.now();
    const blobPath = `branding/${user.id}/${typedAssetType}/${now}-${sanitizeFileName(file.name)}`;

    // 1) Upload user's asset to our own Blob storage first.
    const blobRecord = await put(blobPath, file, {
      access: "public",
      addRandomSuffix: false,
      token: process.env.BLOB_READ_WRITE_TOKEN,
      contentType: file.type || undefined,
    });

    // 2) Fetch the just-uploaded Blob bytes and mirror into Mosaic uploads.
    const blobRead = await fetch(blobRecord.url);
    if (!blobRead.ok) {
      throw new Error(`Failed reading blob asset. Status ${blobRead.status}`);
    }
    const blobBytes = await blobRead.arrayBuffer();

    const mosaicUpload = isVideo
      ? await getVideoUploadUrl()
      : await getImageUploadUrl();

    await uploadBytesToMosaic(
      mosaicUpload.url,
      mosaicUpload.upload_fields,
      file.name,
      file.type || "application/octet-stream",
      blobBytes
    );

    const finalized = isVideo
      ? await finalizeVideoUpload(mosaicUpload.id)
      : await finalizeImageUpload(mosaicUpload.id);

    const mosaicAssetId = finalized.id;

    // 3) Persist both our Blob view URL (for UI) and Mosaic asset ID (for update_params).
    const currentConfig = (user.brandingConfig as BrandingConfig) ?? {};
    const idFieldMap: Record<AssetType, keyof BrandingConfig> = {
      logo: "logoImageId",
      watermark: "watermarkImageId",
      intro: "introVideoId",
      outro: "outroVideoId",
    };
    const urlFieldMap: Record<AssetType, keyof BrandingConfig> = {
      logo: "logoUrl",
      watermark: "watermarkUrl",
      intro: "introVideoUrl",
      outro: "outroVideoUrl",
    };

    const updatedConfig: BrandingConfig = {
      ...currentConfig,
      [idFieldMap[typedAssetType]]: mosaicAssetId,
      [urlFieldMap[typedAssetType]]: blobRecord.url,
    };

    await prisma.user.update({
      where: { id: user.id },
      data: { brandingConfig: updatedConfig as unknown as Prisma.InputJsonValue },
    });

    return NextResponse.json({
      data: {
        assetType: typedAssetType,
        assetId: mosaicAssetId,
        url: blobRecord.url,
      },
    });
  } catch (error) {
    console.error("[Branding Upload] Failed:", error);
    return NextResponse.json({ error: "Failed to upload branding asset" }, { status: 500 });
  }
}

// PUT kept for backwards compatibility with old 2-step client flow.
export async function PUT(request: NextRequest) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { assetId, assetType } = (await request.json()) as { assetId: string; assetType: AssetType };
  if (!assetId || !assetType) {
    return NextResponse.json({ error: "assetId and assetType required" }, { status: 400 });
  }

  try {
    const isVideo = assetType === "intro" || assetType === "outro";
    const result = isVideo
      ? await finalizeVideoUpload(assetId)
      : await finalizeImageUpload(assetId);

    // Upload finalize returns IDs; store those for update_params usage.
    const finalizedAssetId = result.id;

    // Update the user's branding config with the new asset ID
    const currentConfig = (user.brandingConfig as BrandingConfig) ?? {};
    const idFieldMap: Record<AssetType, keyof BrandingConfig> = {
      logo: "logoImageId",
      watermark: "watermarkImageId",
      intro: "introVideoId",
      outro: "outroVideoId",
    };

    const updatedConfig = { ...currentConfig, [idFieldMap[assetType]]: finalizedAssetId };

    await prisma.user.update({
      where: { id: user.id },
      data: { brandingConfig: updatedConfig as unknown as Prisma.InputJsonValue },
    });

    return NextResponse.json({
      data: { assetId: finalizedAssetId, assetType, message: "Upload finalized and linked." },
    });
  } catch (error) {
    console.error("[Branding Upload] Failed to finalize:", error);
    return NextResponse.json({ error: "Failed to finalize upload" }, { status: 500 });
  }
}
