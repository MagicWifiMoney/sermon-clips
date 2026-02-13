import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const createSermonSchema = z.object({
  title: z.string().min(1).max(200),
  sourceType: z.enum(["youtube", "upload", "url"]),
  sourceUrl: z.string().url().optional(),
  processingOptions: z.object({
    clipCount: z.number().min(1).max(15),
    clipDuration: z.enum(["short", "medium", "long"]),
    captionStyle: z.enum(["none", "standard", "cinematic", "with-emojis"]),
    outputFormats: z.array(z.enum(["vertical", "landscape", "square"])).min(1),
    features: z.object({
      silenceRemoval: z.boolean().optional(),
      audioEnhancement: z.boolean().optional(),
      colorCorrection: z.boolean().optional(),
      aiBackgroundMusic: z.boolean().optional(),
      aiBRoll: z.boolean().optional(),
      motionGraphics: z.boolean().optional(),
    }),
    applyBranding: z.boolean(),
  }).optional(),
  publishMode: z.enum(["auto", "review", "draft"]).optional(),
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

  const { title, sourceType, sourceUrl, processingOptions, publishMode } = parsed.data;

  const sermon = await prisma.sermon.create({
    data: {
      userId,
      title,
      sourceType,
      sourceUrl,
      processingOptions: processingOptions ?? undefined,
      publishMode: publishMode ?? "review",
      status: sourceType === "upload" ? "UPLOADING" : "PENDING",
    },
  });

  // TODO: Mosaic team — trigger processing here
  // import { startSermonProcessing } from '@/lib/mosaic';
  // const callbackUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/webhooks/mosaic`;
  // const run = await startSermonProcessing(sourceUrl, callbackUrl);
  // await prisma.sermon.update({ where: { id: sermon.id }, data: { mosaicRunId: run.run_id, status: 'PROCESSING' } });

  return NextResponse.json({ data: sermon }, { status: 201 });
}
