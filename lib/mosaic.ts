import type { ProcessingOptions, PublishMode, BrandingConfig, LanguageConfig, SocialPlatform, ContentType, TransitionStyle, GraphicStyle } from "@/types";
import {
  runAgent,
  getAgentRun,
  getVideoUploadUrl,
  finalizeVideoUpload,
  getAudioUploadUrl,
  finalizeAudioUpload,
  addYouTubeChannels,
  removeYouTubeChannels,
} from "@/lib/mosaic-client";
import { buildMosaicUpdateParams } from "@/lib/mosaic-params";

const MOSAIC_AGENT_ID = process.env.MOSAIC_AGENT_ID ?? "";

// ---- TYPES ----

export interface MosaicRunResponse {
  run_id: string;
  status: string;
}

export interface MosaicClipOutput {
  video_url: string;
  thumbnail_url: string;
  original_node_id: string;
}

export interface MosaicWebhookPayload {
  /** Mosaic sends `flag` — we keep `event` as an alias for backwards compat */
  flag:
    | "RUN_STARTED"
    | "RUN_PROGRESS"
    | "RUN_FINISHED"
    | "TRANSCRIPT_READY"
    | "CONTENT_GENERATED"
    | "GRAPHIC_GENERATED"
    | "MONTAGE_FINISHED"
    | "SUGGESTIONS_READY";
  /** @deprecated Use `flag` — kept for backwards compat */
  event?: MosaicWebhookPayload["flag"];
  run_id: string;
  agent_id: string;
  status: string;
  outputs?: MosaicClipOutput[];
  node_status_counts?: { completed: number; in_progress: number; failed: number };
  inputs?: { video_url: string; thumbnail_url: string }[];
  updated_nodes?: { node_id: string; status: string }[];
  triggered_by?: { type: string; channel_id?: string; video_id?: string };
  transcript?: { segments: { start: number; end: number; text: string; speaker?: string }[] };
  content?: { type: string; title?: string; content: string; metadata?: Record<string, unknown> };
  graphic?: { id: string; imageUrl: string };
  montage?: { videoUrl: string; thumbnailUrl?: string };
  suggestions?: { startTime: number; endTime: number; topic: string; hookScore: number; summary?: string }[];
}

export interface MosaicTriggerResponse {
  trigger_id: string;
  status: string;
}

export interface MosaicDestinationResponse {
  destination_id: string;
  platform: string;
  status: string;
}

export interface MosaicPublishResponse {
  publication_id: string;
  status: string;
  external_url?: string;
}

// ---- LIVE: Agent Runs (via Mosaic API) ----

export async function startSermonProcessing(
  videoUrl: string,
  callbackUrl: string,
  options?: {
    processingOptions?: ProcessingOptions;
    publishMode?: PublishMode;
    branding?: BrandingConfig | null;
    clipPrompt?: string;
    languageConfig?: LanguageConfig | null;
  }
): Promise<MosaicRunResponse> {
  let updateParams: Record<string, unknown> | undefined;

  if (options?.processingOptions) {
    updateParams = buildMosaicUpdateParams(
      options.processingOptions,
      options.branding,
      options.publishMode,
      options.clipPrompt,
      options.languageConfig,
    );
  }

  return runAgent(MOSAIC_AGENT_ID, [videoUrl], callbackUrl, updateParams);
}

export async function getRunStatus(runId: string): Promise<{ run_id: string; status: string; progress: number }> {
  const run = await getAgentRun(runId);
  const counts = run.node_status_counts;
  const total = counts.completed + counts.in_progress + counts.failed;
  const progress = total > 0 ? Math.round((counts.completed / total) * 100) : 0;

  return { run_id: run.run_id, status: run.status, progress };
}

// ---- LIVE: Uploads (via Mosaic API) ----

export async function getUploadUrl(): Promise<{
  upload_url: string;
  upload_fields: Record<string, string>;
  video_id: string;
  size_limit: number;
}> {
  const res = await getVideoUploadUrl();
  return {
    upload_url: res.url,
    upload_fields: res.upload_fields,
    video_id: res.id,
    size_limit: res.size_limit,
  };
}

export async function finalizeUpload(videoId: string): Promise<{ video_url: string }> {
  const res = await finalizeVideoUpload(videoId);
  return { video_url: res.video_url };
}

export async function getAudioUploadUrlWrapper(): Promise<{
  upload_url: string;
  upload_fields: Record<string, string>;
  audio_id: string;
  size_limit: number;
}> {
  const res = await getAudioUploadUrl();
  return {
    upload_url: res.url,
    upload_fields: res.upload_fields,
    audio_id: res.id,
    size_limit: res.size_limit,
  };
}

export async function finalizeAudioUploadWrapper(audioId: string): Promise<{ audio_url: string }> {
  const res = await finalizeAudioUpload(audioId);
  return { audio_url: res.audio_url };
}

// ---- LIVE: YouTube Triggers (via Mosaic API) ----

export async function registerYouTubeTrigger(
  agentId: string,
  channelId: string
): Promise<MosaicTriggerResponse> {
  const callbackUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/webhooks/mosaic`;
  const res = await addYouTubeChannels(agentId, [channelId], callbackUrl);
  return { trigger_id: res.trigger_id, status: res.status };
}

export async function removeYouTubeTrigger(
  agentId: string,
  triggerId: string
): Promise<void> {
  await removeYouTubeChannels(agentId, [triggerId]);
}

// ---- Social Publishing ----
// Social account connections are managed in Mosaic's dashboard portal.
// Publishing is handled by the Destination tile in update_params.
// See lib/mosaic-params.ts for the destination tile mapping.

/** Get the URL to Mosaic's social account management portal */
export function getMosaicSocialPortalUrl(): string {
  return `https://app.mosaic.so/agents/${MOSAIC_AGENT_ID}/destinations`;
}

// ---- STUBS: AI Content Generation (needs OpenAI/Anthropic) ----

export async function generateSermonContent(
  sermonId: string,
  type: ContentType,
  options?: { platform?: SocialPlatform }
): Promise<{ contentId: string; status: string }> {
  console.log("[Stub] generateSermonContent:", { sermonId, type, options });
  throw new Error("Not implemented — needs AI content service (OpenAI/Anthropic)");
}

export async function getTranscript(
  runId: string
): Promise<{ segments: { start: number; end: number; text: string; speaker?: string }[] }> {
  console.log("[Stub] getTranscript:", { runId });
  throw new Error("Not implemented — needs transcription service (Deepgram)");
}

export async function createClipFromTimestamps(
  videoUrl: string,
  startTime: number,
  endTime: number,
  options?: { title?: string }
): Promise<MosaicRunResponse> {
  const callbackUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/webhooks/mosaic`;
  return runAgent(MOSAIC_AGENT_ID, [videoUrl], callbackUrl, {
    clips: {
      number_of_clips: 1,
      timestamps: [{ start: startTime, end: endTime }],
    },
  });
}

// ---- Translation / Dubbing ----
// Translation, dubbing, and lip sync are handled by the Voice tile in update_params.
// See lib/mosaic-params.ts for the voice tile mapping.

// ---- Montage (via separate Mosaic agent run) ----

export async function createMontage(
  clipUrls: string[],
  options: { transitionStyle?: TransitionStyle; title?: string }
): Promise<MosaicRunResponse> {
  const callbackUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/webhooks/mosaic`;
  return runAgent(MOSAIC_AGENT_ID, clipUrls, callbackUrl, {
    montage: {
      enabled: true,
      transition_style: options.transitionStyle ?? "crossfade",
    },
  });
}

// ---- STUBS: Graphics (needs DALL-E/Replicate) ----

export async function generateGraphic(
  text: string,
  style: GraphicStyle,
  format: string
): Promise<{ graphicId: string; status: string }> {
  console.log("[Stub] generateGraphic:", { text, style, format });
  throw new Error("Not implemented — needs image generation service (DALL-E/Replicate)");
}

// ---- Smart Clips ----
// Clip detection and viral shorts are handled by the Clips tile with prompt parameter.
// Pass clipPrompt: "hook-optimized viral shorts" for viral content.
// Clip suggestions come via SUGGESTIONS_READY webhook.

// ---- STUBS: Course (needs OpenAI/Anthropic) ----

export async function generateCourse(
  sermonIds: string[],
  title: string
): Promise<{ courseId: string; status: string }> {
  console.log("[Stub] generateCourse:", { sermonIds, title });
  throw new Error("Not implemented — needs AI content service (OpenAI/Anthropic)");
}
