import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import type { MosaicWebhookPayload } from "@/lib/mosaic";

// POST /api/webhooks/mosaic — receive processing events from Mosaic
// STUB: Structure is in place — Mosaic team fills in validation + parsing details
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as MosaicWebhookPayload;
    const { event, run_id, status, outputs } = body;

    // TODO: Mosaic team — verify webhook signature/auth

    // Find the sermon by Mosaic run ID
    const sermon = await prisma.sermon.findUnique({
      where: { mosaicRunId: run_id },
    });

    if (!sermon) {
      console.error("[Mosaic Webhook] Sermon not found for run_id:", run_id);
      return NextResponse.json({ error: "Sermon not found" }, { status: 404 });
    }

    switch (event) {
      case "RUN_STARTED":
        await prisma.sermon.update({
          where: { id: sermon.id },
          data: { status: "PROCESSING", progress: 10 },
        });
        break;

      case "RUN_PROGRESS":
        // TODO: Mosaic team — extract progress percentage from payload
        await prisma.sermon.update({
          where: { id: sermon.id },
          data: { progress: 50 }, // Replace with actual progress
        });
        break;

      case "RUN_FINISHED":
        if (status === "completed" && outputs) {
          // Create clip records from Mosaic outputs
          await prisma.$transaction([
            prisma.sermon.update({
              where: { id: sermon.id },
              data: { status: "COMPLETED", progress: 100 },
            }),
            ...outputs.map((output) =>
              prisma.clip.create({
                data: {
                  sermonId: sermon.id,
                  videoUrl: output.video_url,
                  thumbnailUrl: output.thumbnail_url,
                  // TODO: Mosaic team — extract title, duration, format from output
                },
              })
            ),
          ]);
        } else {
          await prisma.sermon.update({
            where: { id: sermon.id },
            data: {
              status: "FAILED",
              errorMessage: `Processing failed with status: ${status}`,
            },
          });
        }
        break;

      default:
        console.log("[Mosaic Webhook] Unknown event:", event);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("[Mosaic Webhook]", error);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}
