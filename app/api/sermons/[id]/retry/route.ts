import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { buildMosaicWebhookCallback, startSermonProcessing } from "@/lib/mosaic";
import type { BrandingConfig, ProcessingOptions, PublishMode } from "@/types";

// POST /api/sermons/[id]/retry — re-trigger processing
export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { userId: clerkId } = await auth();
  if (!clerkId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const { id } = await params;

  const sermon = await prisma.sermon.findFirst({
    where: { id, userId: user.id },
  });
  if (!sermon) return NextResponse.json({ error: "Sermon not found" }, { status: 404 });

  if (!sermon.sourceUrl) {
    return NextResponse.json({ error: "No source URL — cannot retry" }, { status: 400 });
  }

  const processingOptions = sermon.processingOptions as ProcessingOptions | null;

  // Fetch branding if applyBranding is enabled
  let branding: BrandingConfig | null = null;
  if (processingOptions?.applyBranding) {
    branding = (user.brandingConfig as BrandingConfig) ?? null;
  }

  try {
    // Reset status to PROCESSING
    await prisma.sermon.update({
      where: { id },
      data: {
        status: "PROCESSING",
        progress: 0,
        errorMessage: null,
        mosaicRunId: null,
      },
    });

    const callbackUrl = buildMosaicWebhookCallback("stage1");
    const run = await startSermonProcessing(sermon.sourceUrl, callbackUrl, {
      processingOptions: processingOptions ?? undefined,
      publishMode: (sermon.publishMode as PublishMode) ?? "review",
      branding,
      clipPrompt: processingOptions?.clipPrompt,
    });

    await prisma.sermon.update({
      where: { id },
      data: { mosaicRunId: run.run_id },
    });

    return NextResponse.json({ success: true, runId: run.run_id });
  } catch (error) {
    console.error("[Retry] Failed to restart processing:", error);
    await prisma.sermon.update({
      where: { id },
      data: { status: "FAILED", errorMessage: "Retry failed — could not start processing" },
    });
    return NextResponse.json({ error: "Failed to restart processing" }, { status: 500 });
  }
}
