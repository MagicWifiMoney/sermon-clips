import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { startSermonProcessing } from "@/lib/mosaic";
import type { BrandingConfig, ProcessingOptions, PublishMode } from "@/types";

const captionConfigSchema = z.object({
  enabled: z.boolean(),
  style: z.enum(["colored_words", "stroke_text", "full_highlight"]),
  baseColor: z.string().optional(),
  highlightColor: z.string().optional(),
  strokeColor: z.string().optional(),
  fontFamily: z.string().optional(),
  fontWeight: z.number().optional(),
  fontSize: z.enum(["small", "medium", "large"]).optional(),
  verticalPosition: z.number().min(0).max(100).optional(),
  minWords: z.number().min(1).max(10).optional(),
  maxWords: z.number().min(1).max(10).optional(),
}).optional();

const aiMusicSchema = z.object({
  enabled: z.boolean(),
  genre: z.string().optional(),
  mood: z.string().optional(),
  intensity: z.number().min(1).max(10).optional(),
  bpm: z.number().min(40).max(200).optional(),
  prompt: z.string().max(500).optional(),
  volume: z.number().min(0).max(100).optional(),
}).optional();

const aiVoiceoverSchema = z.object({
  enabled: z.boolean(),
  language: z.string().optional(),
  voice: z.string().optional(),
  script: z.string().optional(),
}).optional();

const roughCutSchema = z.object({
  enabled: z.boolean(),
  prompt: z.string().max(500).optional(),
  targetDurationSeconds: z.number().optional(),
  mood: z.string().optional(),
}).optional();

const motionGraphicsSchema = z.union([
  z.boolean(),
  z.object({
    enabled: z.boolean(),
    stylePrompt: z.string().max(500).optional(),
    fullScreen: z.boolean().optional(),
    preset: z.string().optional(),
  }),
]).optional();

const createSermonSchema = z.object({
  title: z.string().min(1).max(200),
  sourceType: z.enum(["youtube", "upload", "url"]),
  sourceUrl: z.string().url().optional(),
  processingOptions: z.object({
    clipCount: z.number().min(1).max(15),
    clipDuration: z.enum(["short", "medium", "long"]),
    clipDurationSeconds: z.number().min(15).max(120).optional(),
    clipPrompt: z.string().max(500).optional(),
    captionStyle: z.enum(["none", "standard", "cinematic", "with-emojis"]),
    captionConfig: captionConfigSchema,
    outputFormats: z.array(z.enum(["vertical", "landscape", "square"])).min(1),
    dynamicZoom: z.boolean().optional(),
    features: z.object({
      silenceRemoval: z.boolean().optional(),
      silenceRemovalFillerWords: z.boolean().optional(),
      audioEnhancement: z.boolean().optional(),
      colorCorrection: z.union([z.boolean(), z.enum(["golden_hour", "filmic", "vibrant", "cool_tones", "neutral_clean"])]).optional(),
      aiBackgroundMusic: z.boolean().optional(),
      aiBRoll: z.boolean().optional(),
      motionGraphics: motionGraphicsSchema,
      aiAvatar: z.union([z.boolean(), z.object({ enabled: z.boolean(), avatarId: z.string().optional(), script: z.string().optional(), voiceId: z.string().optional() })]).optional(),
      aiVoiceover: aiVoiceoverSchema,
      aiAugment: z.union([z.boolean(), z.object({ enabled: z.boolean(), style: z.string().optional(), effect: z.string().optional() })]).optional(),
      roughCut: z.union([z.boolean(), roughCutSchema]).optional(),
      voiceModification: z.boolean().optional(),
      aiMusic: aiMusicSchema,
      viralShorts: z.boolean().optional(),
    }),
    applyBranding: z.boolean(),
    captionPrompt: z.string().max(500).optional(),
  }).optional(),
  publishMode: z.enum(["auto", "review", "draft"]).optional(),
  seriesId: z.string().optional(),
  campusId: z.string().optional(),
});

// GET /api/sermons — list user's sermons + stats
export async function GET() {
  const { userId: clerkId } = await auth();
  if (!clerkId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const [sermons, totalClips, processingCount] = await Promise.all([
    prisma.sermon.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: "desc" },
      include: { _count: { select: { clips: true } } },
    }),
    prisma.clip.count({
      where: { sermon: { userId: user.id } },
    }),
    prisma.sermon.count({
      where: { userId: user.id, status: { in: ["UPLOADING", "PENDING", "PROCESSING"] } },
    }),
  ]);

  return NextResponse.json({
    sermons,
    stats: {
      totalSermons: sermons.length,
      totalClips,
      processingCount,
    },
  });
}

// POST /api/sermons — create a new sermon
export async function POST(request: NextRequest) {
  const { userId: clerkId } = await auth();
  if (!clerkId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) {
    // Auto-create user if webhook hasn't fired yet
    const clerkUser = await fetch(`https://api.clerk.com/v1/users/${clerkId}`, {
      headers: { Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}` },
    }).then((r) => r.json()).catch(() => null);

    if (!clerkUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const newUser = await prisma.user.create({
      data: {
        clerkId,
        email: clerkUser.email_addresses?.[0]?.email_address ?? "",
        name: [clerkUser.first_name, clerkUser.last_name].filter(Boolean).join(" ") || null,
        imageUrl: clerkUser.image_url ?? null,
      },
    });

    return createSermon(request, newUser.id);
  }

  return createSermon(request, user.id);
}

async function createSermon(request: NextRequest, userId: string) {
  const body = await request.json();
  const parsed = createSermonSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { title, sourceType, sourceUrl, processingOptions, publishMode, seriesId, campusId } = parsed.data;

  const sermon = await prisma.sermon.create({
    data: {
      userId,
      title,
      sourceType,
      sourceUrl,
      processingOptions: processingOptions ?? undefined,
      publishMode: publishMode ?? "review",
      status: sourceType === "upload" ? "UPLOADING" : "PENDING",
      seriesId: seriesId ?? undefined,
      campusId: campusId ?? undefined,
    },
  });

  // Trigger Mosaic processing for YouTube/URL sources
  if ((sourceType === "youtube" || sourceType === "url") && sourceUrl) {
    try {
      // Fetch branding config if applyBranding is enabled
      let branding: BrandingConfig | null = null;
      if (processingOptions?.applyBranding) {
        const user = await prisma.user.findUnique({ where: { id: userId }, select: { brandingConfig: true } });
        branding = (user?.brandingConfig as BrandingConfig) ?? null;
      }

      const callbackUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/webhooks/mosaic`;
      const run = await startSermonProcessing(sourceUrl, callbackUrl, {
        processingOptions: processingOptions as ProcessingOptions | undefined,
        publishMode: publishMode as PublishMode | undefined,
        branding,
        clipPrompt: processingOptions?.clipPrompt,
      });
      await prisma.sermon.update({
        where: { id: sermon.id },
        data: { mosaicRunId: run.run_id, status: "PROCESSING", progress: 0 },
      });
      sermon.mosaicRunId = run.run_id;
      sermon.status = "PROCESSING";
    } catch (error) {
      console.error("[Sermons] Failed to start Mosaic processing:", error);
      await prisma.sermon.update({
        where: { id: sermon.id },
        data: { status: "FAILED", errorMessage: "Failed to start processing" },
      });
      sermon.status = "FAILED";
    }
  }

  return NextResponse.json({ data: sermon }, { status: 201 });
}
