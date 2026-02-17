import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import {
  getImageUploadUrl,
  finalizeImageUpload,
  getVideoUploadUrl,
  finalizeVideoUpload,
} from "@/lib/mosaic-client";
import type { Prisma } from "@prisma/client";
import type { BrandingConfig } from "@/types";

type AssetType = "logo" | "watermark" | "intro" | "outro";

// POST /api/settings/branding/upload — get a presigned upload URL for branding assets
export async function POST(request: NextRequest) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { assetType } = (await request.json()) as { assetType: AssetType };
  if (!["logo", "watermark", "intro", "outro"].includes(assetType)) {
    return NextResponse.json({ error: "Invalid assetType" }, { status: 400 });
  }

  try {
    const isVideo = assetType === "intro" || assetType === "outro";
    const uploadData = isVideo
      ? await getVideoUploadUrl()
      : await getImageUploadUrl();

    return NextResponse.json({
      data: {
        uploadUrl: uploadData.url,
        uploadFields: uploadData.upload_fields,
        assetId: uploadData.id,
        sizeLimit: uploadData.size_limit,
        assetType,
      },
    });
  } catch (error) {
    console.error("[Branding Upload] Failed to get upload URL:", error);
    return NextResponse.json({ error: "Failed to get upload URL" }, { status: 500 });
  }
}

// PUT /api/settings/branding/upload — finalize upload and store URL in branding config
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
    const finalizedAssetId = isVideo ? result.video_id : result.image_id;

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
