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

    const url = isVideo
      ? (result as { video_url: string }).video_url
      : (result as { image_url: string }).image_url;

    // Update the user's branding config with the new URL
    const currentConfig = (user.brandingConfig as BrandingConfig) ?? {};
    const fieldMap: Record<AssetType, keyof BrandingConfig> = {
      logo: "logoUrl",
      watermark: "watermarkUrl",
      intro: "introVideoUrl",
      outro: "outroVideoUrl",
    };

    const updatedConfig = { ...currentConfig, [fieldMap[assetType]]: url };

    await prisma.user.update({
      where: { id: user.id },
      data: { brandingConfig: updatedConfig as unknown as Prisma.InputJsonValue },
    });

    return NextResponse.json({ data: { url, assetType } });
  } catch (error) {
    console.error("[Branding Upload] Failed to finalize:", error);
    return NextResponse.json({ error: "Failed to finalize upload" }, { status: 500 });
  }
}
