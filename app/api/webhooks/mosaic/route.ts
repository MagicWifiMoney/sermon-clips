import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { buildMosaicWebhookCallback, startBrandingPassFromNodeRenders, type MosaicWebhookPayload } from "@/lib/mosaic";
import type { BrandingConfig } from "@/types";

// POST /api/webhooks/mosaic — receive processing events from Mosaic
export async function POST(request: NextRequest) {
  try {
    const stage = request.nextUrl.searchParams.get("stage") ?? "default";

    // Verify webhook signature
    const signature = request.headers.get("X-Mosaic-Signature");
    const webhookSecret = process.env.MOSAIC_WEBHOOK_SECRET;
    if (webhookSecret && signature !== webhookSecret) {
      console.error("[Mosaic Webhook] Invalid signature");
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const body = (await request.json()) as MosaicWebhookPayload;

    // Mosaic sends `flag`, but we support `event` as a fallback for backwards compat
    const eventType = body.flag ?? body.event;
    const { run_id, status, outputs, node_status_counts } = body;

    if (!eventType || !run_id) {
      return NextResponse.json({ error: "Missing flag or run_id" }, { status: 400 });
    }

    // Find the sermon by Mosaic run ID
    const sermon = await prisma.sermon.findUnique({
      where: { mosaicRunId: run_id },
    });

    if (!sermon) {
      console.error("[Mosaic Webhook] Sermon not found for run_id:", run_id);
      return NextResponse.json({ error: "Sermon not found" }, { status: 404 });
    }

    switch (eventType) {
      case "RUN_STARTED":
        await prisma.sermon.update({
          where: { id: sermon.id },
          data: { status: "PROCESSING", progress: 5 },
        });
        break;

      case "RUN_PROGRESS": {
        let progress = 50;
        if (node_status_counts) {
          const total = node_status_counts.completed + node_status_counts.in_progress + node_status_counts.failed;
          progress = total > 0 ? Math.round((node_status_counts.completed / total) * 100) : 0;
          // Clamp between 5-95 during progress (never show 0 or 100 mid-run)
          progress = Math.max(5, Math.min(95, progress));
        }
        await prisma.sermon.update({
          where: { id: sermon.id },
          data: { progress },
        });
        break;
      }

      case "RUN_FINISHED":
        if (!(status === "completed" && outputs && outputs.length > 0)) {
          await prisma.sermon.update({
            where: { id: sermon.id },
            data: {
              status: "FAILED",
              progress: 100,
              errorMessage: `Processing failed with status: ${status}`,
            },
          });
          break;
        }

        const validOutputs = outputs.filter((output) => Boolean(output.video_url));

        if (stage === "stage1") {
          const nodeRenderIds = outputs
            .map((output) => output.id)
            .filter((id): id is string => typeof id === "string" && id.length > 0);

          if (nodeRenderIds.length === 0) {
            await prisma.sermon.update({
              where: { id: sermon.id },
              data: {
                status: "FAILED",
                progress: 100,
                errorMessage: "Stage 1 completed without node render IDs for stage 2",
              },
            });
            break;
          }

          const user = await prisma.user.findUnique({
            where: { id: sermon.userId },
            select: { brandingConfig: true },
          });

          const processingOptions =
            (sermon.processingOptions as { applyBranding?: boolean } | null) ?? null;
          const applyBranding = Boolean(processingOptions?.applyBranding);
          const branding = applyBranding ? ((user?.brandingConfig as BrandingConfig) ?? null) : null;

          const stage2Run = await startBrandingPassFromNodeRenders(
            nodeRenderIds,
            buildMosaicWebhookCallback("stage2"),
            { branding }
          );

          await prisma.sermon.update({
            where: { id: sermon.id },
            data: {
              mosaicRunId: stage2Run.run_id,
              status: "PROCESSING",
              progress: 96,
            },
          });
          break;
        }

        await prisma.$transaction([
          prisma.sermon.update({
            where: { id: sermon.id },
            data: { status: "COMPLETED", progress: 100 },
          }),
          prisma.user.update({
            where: { id: sermon.userId },
            data: { sermonsProcessed: { increment: 1 } },
          }),
          ...validOutputs.map((output) =>
            prisma.clip.create({
              data: {
                sermonId: sermon.id,
                videoUrl: output.video_url as string,
                thumbnailUrl: output.thumbnail_url ?? "",
              },
            })
          ),
        ]);
        break;

      // --- Future event handlers (for non-Mosaic services) ---

      case "TRANSCRIPT_READY":
        await prisma.sermon.update({
          where: { id: sermon.id },
          data: {
            transcript: (body as unknown as { transcript: unknown }).transcript ?? Prisma.DbNull,
          },
        });
        break;

      case "CONTENT_GENERATED": {
        const contentPayload = body as unknown as {
          pieceId: string;
          content: string;
          title?: string;
        };
        if (contentPayload.pieceId) {
          await prisma.contentPiece.update({
            where: { id: contentPayload.pieceId },
            data: {
              content: contentPayload.content ?? "",
              title: contentPayload.title ?? undefined,
              status: "COMPLETED",
            },
          });
        }
        break;
      }

      case "GRAPHIC_GENERATED": {
        const graphicPayload = body as unknown as {
          graphicId: string;
          imageUrl: string;
        };
        if (graphicPayload.graphicId) {
          await prisma.graphic.update({
            where: { id: graphicPayload.graphicId },
            data: {
              imageUrl: graphicPayload.imageUrl ?? null,
              status: "completed",
            },
          });
        }
        break;
      }

      case "MONTAGE_FINISHED": {
        const montagePayload = body as unknown as {
          montageRunId: string;
          videoUrl?: string;
          thumbnailUrl?: string;
          error?: string;
        };
        const montage = await prisma.montage.findUnique({
          where: { mosaicRunId: montagePayload.montageRunId },
        });
        if (montage) {
          if (montagePayload.videoUrl) {
            await prisma.montage.update({
              where: { id: montage.id },
              data: {
                status: "COMPLETED",
                progress: 100,
                videoUrl: montagePayload.videoUrl,
                thumbnailUrl: montagePayload.thumbnailUrl ?? null,
              },
            });
          } else {
            await prisma.montage.update({
              where: { id: montage.id },
              data: {
                status: "FAILED",
                errorMessage: montagePayload.error ?? "Montage rendering failed",
              },
            });
          }
        }
        break;
      }

      case "SUGGESTIONS_READY": {
        const suggestionsPayload = body as unknown as {
          suggestions: {
            startTime: number;
            endTime: number;
            topic: string;
            hookScore: number;
            summary?: string;
          }[];
        };
        if (suggestionsPayload.suggestions?.length) {
          await prisma.suggestedClip.createMany({
            data: suggestionsPayload.suggestions.map((s) => ({
              sermonId: sermon.id,
              startTime: s.startTime,
              endTime: s.endTime,
              topic: s.topic,
              hookScore: s.hookScore,
              summary: s.summary ?? null,
            })),
          });
        }
        break;
      }

      default:
        console.log("[Mosaic Webhook] Unknown event:", eventType);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("[Mosaic Webhook]", error);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}
