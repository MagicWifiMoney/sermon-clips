import type { ProcessingOptions, PublishMode, SocialPlatform } from "@/types";

// ---- TYPES (for Mosaic team to implement) ----

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
  event: "RUN_STARTED" | "RUN_PROGRESS" | "RUN_FINISHED";
  run_id: string;
  agent_id: string;
  status: string;
  outputs?: MosaicClipOutput[];
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

// ---- STUBS: Agent Runs ----

export async function startSermonProcessing(
  videoUrl: string,
  callbackUrl: string,
  options?: { processingOptions?: ProcessingOptions; publishMode?: PublishMode }
): Promise<MosaicRunResponse> {
  console.log("[Mosaic Stub] startSermonProcessing called with:", { videoUrl, callbackUrl, options });
  // TODO: Mosaic team — POST /agent/{AGENT_ID}/run with dynamic params
  throw new Error("Not implemented — Mosaic team integration pending");
}

export async function getRunStatus(runId: string): Promise<{ run_id: string; status: string; progress: number }> {
  console.log("[Mosaic Stub] getRunStatus called with:", { runId });
  // TODO: Mosaic team — GET /agent_run/{runId}
  throw new Error("Not implemented — Mosaic team integration pending");
}

// ---- STUBS: Uploads ----

export async function getUploadUrl(): Promise<{ upload_url: string; video_id: string }> {
  console.log("[Mosaic Stub] getUploadUrl called");
  // TODO: Mosaic team — POST /uploads/video/get_upload_url
  throw new Error("Not implemented — Mosaic team integration pending");
}

export async function finalizeUpload(videoId: string): Promise<{ video_url: string }> {
  console.log("[Mosaic Stub] finalizeUpload called with:", { videoId });
  // TODO: Mosaic team — POST /uploads/video/finalize_upload
  throw new Error("Not implemented — Mosaic team integration pending");
}

// ---- STUBS: YouTube Triggers ----

export async function registerYouTubeTrigger(
  agentId: string,
  channelId: string
): Promise<MosaicTriggerResponse> {
  console.log("[Mosaic Stub] registerYouTubeTrigger called with:", { agentId, channelId });
  // TODO: Mosaic team — POST /triggers/youtube
  throw new Error("Not implemented — Mosaic team integration pending");
}

export async function removeYouTubeTrigger(
  agentId: string,
  triggerId: string
): Promise<void> {
  console.log("[Mosaic Stub] removeYouTubeTrigger called with:", { agentId, triggerId });
  // TODO: Mosaic team — DELETE /triggers/{triggerId}
  throw new Error("Not implemented — Mosaic team integration pending");
}

// ---- STUBS: Social Destinations ----

export async function connectSocialAccount(
  platform: SocialPlatform,
  oauthCode: string
): Promise<MosaicDestinationResponse> {
  console.log("[Mosaic Stub] connectSocialAccount called with:", { platform, oauthCode });
  // TODO: Mosaic team — POST /destinations/connect
  throw new Error("Not implemented — Mosaic team integration pending");
}

export async function disconnectSocialAccount(
  platform: SocialPlatform,
  accountId: string
): Promise<void> {
  console.log("[Mosaic Stub] disconnectSocialAccount called with:", { platform, accountId });
  // TODO: Mosaic team — DELETE /destinations/{accountId}
  throw new Error("Not implemented — Mosaic team integration pending");
}

export async function publishClip(
  clipUrl: string,
  platform: SocialPlatform,
  caption: string,
  scheduledAt?: Date
): Promise<MosaicPublishResponse> {
  console.log("[Mosaic Stub] publishClip called with:", { clipUrl, platform, caption, scheduledAt });
  // TODO: Mosaic team — POST /destinations/publish
  throw new Error("Not implemented — Mosaic team integration pending");
}

// ---- STUBS: AI Content Generation ----

export async function generateCaption(
  clipTitle: string,
  sermonTitle: string,
  platform: SocialPlatform
): Promise<string> {
  console.log("[Mosaic Stub] generateCaption called with:", { clipTitle, sermonTitle, platform });
  // TODO: Mosaic team — POST /ai/generate-caption
  // Return template caption for now
  return `${clipTitle} from "${sermonTitle}" - Watch the full sermon on our channel! #sermon #faith #church`;
}
