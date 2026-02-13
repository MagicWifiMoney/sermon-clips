/**
 * Thin HTTP client for the Mosaic REST API (https://api.mosaic.so).
 * All outbound Mosaic calls go through this file.
 */

const MOSAIC_BASE_URL = "https://api.mosaic.so";

class MosaicApiError extends Error {
  constructor(
    public status: number,
    public body: unknown,
    message?: string
  ) {
    super(message ?? `Mosaic API error ${status}`);
    this.name = "MosaicApiError";
  }
}

function getApiKey(): string {
  const key = process.env.MOSAIC_API_KEY;
  if (!key) throw new Error("MOSAIC_API_KEY is not set");
  return key;
}

async function mosaicFetch<T = unknown>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${MOSAIC_BASE_URL}${path}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getApiKey()}`,
      ...options.headers,
    },
  });

  if (!res.ok) {
    const body = await res.json().catch(() => res.text());
    throw new MosaicApiError(res.status, body, `Mosaic API ${res.status}: ${JSON.stringify(body)}`);
  }

  // 204 No Content
  if (res.status === 204) return undefined as T;

  return res.json() as Promise<T>;
}

// ---- Agent Runs ----

export interface RunAgentParams {
  video_urls: string[];
  callback_url?: string;
  update_params?: Record<string, unknown>;
}

export interface RunAgentResponse {
  run_id: string;
  status: string;
}

export async function runAgent(
  agentId: string,
  videoUrls: string[],
  callbackUrl?: string,
  updateParams?: Record<string, unknown>
): Promise<RunAgentResponse> {
  return mosaicFetch<RunAgentResponse>(`/v1/agents/${agentId}/runs`, {
    method: "POST",
    body: JSON.stringify({
      video_urls: videoUrls,
      callback_url: callbackUrl,
      update_params: updateParams,
    }),
  });
}

export interface AgentRunStatus {
  run_id: string;
  agent_id: string;
  status: string;
  outputs: { video_url: string; thumbnail_url: string; original_node_id: string }[];
  node_status_counts: { completed: number; in_progress: number; failed: number };
  created_at: string;
  updated_at: string;
}

export async function getAgentRun(runId: string): Promise<AgentRunStatus> {
  return mosaicFetch<AgentRunStatus>(`/v1/runs/${runId}`);
}

export async function cancelAgentRun(runId: string): Promise<{ success: boolean }> {
  return mosaicFetch<{ success: boolean }>(`/v1/runs/${runId}/cancel`, {
    method: "POST",
  });
}

// ---- Video Uploads ----

export interface VideoUploadUrlResponse {
  id: string;
  url: string;
  upload_fields: Record<string, string>;
  size_limit: number;
}

export async function getVideoUploadUrl(): Promise<VideoUploadUrlResponse> {
  return mosaicFetch<VideoUploadUrlResponse>("/v1/videos/upload", {
    method: "POST",
  });
}

export interface FinalizeUploadResponse {
  id: string;
  video_url: string;
  status: string;
}

export async function finalizeVideoUpload(assetId: string): Promise<FinalizeUploadResponse> {
  return mosaicFetch<FinalizeUploadResponse>(`/v1/videos/${assetId}/finalize`, {
    method: "POST",
  });
}

// ---- YouTube Triggers ----

export interface YouTubeTriggerResponse {
  trigger_id: string;
  agent_id: string;
  channels: string[];
  status: string;
}

export async function addYouTubeChannels(
  agentId: string,
  channels: string[],
  callbackUrl?: string
): Promise<YouTubeTriggerResponse> {
  return mosaicFetch<YouTubeTriggerResponse>(`/v1/agents/${agentId}/triggers/youtube`, {
    method: "POST",
    body: JSON.stringify({ channels, callback_url: callbackUrl }),
  });
}

export async function removeYouTubeChannels(
  agentId: string,
  channels: string[]
): Promise<void> {
  await mosaicFetch(`/v1/agents/${agentId}/triggers/youtube`, {
    method: "DELETE",
    body: JSON.stringify({ channels }),
  });
}

// ---- Image Uploads ----

export interface ImageUploadUrlResponse {
  id: string;
  url: string;
  upload_fields: Record<string, string>;
  size_limit: number;
}

export async function getImageUploadUrl(): Promise<ImageUploadUrlResponse> {
  return mosaicFetch<ImageUploadUrlResponse>("/v1/images/upload", {
    method: "POST",
  });
}

export interface FinalizeImageUploadResponse {
  id: string;
  image_url: string;
  status: string;
}

export async function finalizeImageUpload(assetId: string): Promise<FinalizeImageUploadResponse> {
  return mosaicFetch<FinalizeImageUploadResponse>(`/v1/images/${assetId}/finalize`, {
    method: "POST",
  });
}

// ---- Audio Uploads ----

export interface AudioUploadUrlResponse {
  id: string;
  url: string;
  upload_fields: Record<string, string>;
  size_limit: number;
}

export async function getAudioUploadUrl(): Promise<AudioUploadUrlResponse> {
  return mosaicFetch<AudioUploadUrlResponse>("/v1/audio/upload", {
    method: "POST",
  });
}

export interface FinalizeAudioUploadResponse {
  id: string;
  audio_url: string;
  status: string;
}

export async function finalizeAudioUpload(assetId: string): Promise<FinalizeAudioUploadResponse> {
  return mosaicFetch<FinalizeAudioUploadResponse>(`/v1/audio/${assetId}/finalize`, {
    method: "POST",
  });
}

// ---- Agent Triggers ----

export interface AgentTrigger {
  trigger_id: string;
  type: string;
  channels?: string[];
  status: string;
}

export async function getAgentTriggers(agentId: string): Promise<AgentTrigger[]> {
  return mosaicFetch<AgentTrigger[]>(`/v1/agents/${agentId}/triggers`);
}

// ---- Utility ----

export interface WhoamiResponse {
  user_id: string;
  email: string;
  plan: string;
}

export async function whoami(): Promise<WhoamiResponse> {
  return mosaicFetch<WhoamiResponse>("/v1/whoami");
}

export { MosaicApiError };
