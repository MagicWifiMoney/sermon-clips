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

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
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
  video_ids?: string[];
  callback_url?: string;
  update_params?: Record<string, unknown>;
}

export interface RunAgentResponse {
  run_id: string;
  status?: string;
}

export async function runAgent(
  agentId: string,
  videoUrls: string[],
  callbackUrl?: string,
  updateParams?: Record<string, unknown>,
  videoIds?: string[]
): Promise<RunAgentResponse> {
  const payload: Record<string, unknown> = {};
  if (videoUrls.length > 0) payload.video_urls = videoUrls;
  if (videoIds && videoIds.length > 0) payload.video_ids = videoIds;
  if (callbackUrl) payload.callback_url = callbackUrl;
  if (updateParams) payload.update_params = updateParams;

  const res = await mosaicFetch<Record<string, unknown>>(`/agent/${agentId}/run`, {
    method: "POST",
    body: JSON.stringify(payload),
  });

  const runId = typeof res.run_id === "string" ? res.run_id : "";
  if (!runId) {
    throw new Error("Mosaic runAgent response missing run_id");
  }

  return {
    run_id: runId,
    status: typeof res.status === "string" ? res.status : undefined,
  };
}

export interface AgentRunStatus {
  run_id?: string;
  agent_id: string;
  status: string;
  outputs: { id?: string; video_url: string | null; thumbnail_url: string | null; original_node_id: string | null }[];
  node_status_counts: { completed: number; in_progress: number; failed: number };
  created_at?: string;
  started_at?: string;
  updated_at?: string;
  status_message?: string | null;
}

export async function getAgentRun(runId: string): Promise<AgentRunStatus> {
  const res = await mosaicFetch<Record<string, unknown>>(`/agent_run/${runId}`);

  const outputsRaw = Array.isArray(res.outputs) ? res.outputs : [];
  const outputs = outputsRaw
    .filter(isObject)
    .map((output) => ({
      id: typeof output.id === "string" ? output.id : undefined,
      video_url: typeof output.video_url === "string" ? output.video_url : null,
      thumbnail_url: typeof output.thumbnail_url === "string" ? output.thumbnail_url : null,
      original_node_id: typeof output.original_node_id === "string" ? output.original_node_id : null,
    }));

  const counts = isObject(res.node_status_counts) ? res.node_status_counts : {};
  const nodeStatusCounts = {
    completed: typeof counts.completed === "number" ? counts.completed : 0,
    in_progress: typeof counts.in_progress === "number" ? counts.in_progress : 0,
    failed: typeof counts.failed === "number" ? counts.failed : 0,
  };

  return {
    run_id: typeof res.run_id === "string" ? res.run_id : runId,
    agent_id: typeof res.agent_id === "string" ? res.agent_id : "",
    status: typeof res.status === "string" ? res.status : "running",
    outputs,
    node_status_counts: nodeStatusCounts,
    created_at: typeof res.created_at === "string" ? res.created_at : undefined,
    started_at: typeof res.started_at === "string" ? res.started_at : undefined,
    updated_at: typeof res.updated_at === "string" ? res.updated_at : undefined,
    status_message: typeof res.status_message === "string" || res.status_message === null
      ? (res.status_message as string | null)
      : undefined,
  };
}

export async function cancelAgentRun(runId: string): Promise<{ success: boolean }> {
  const res = await mosaicFetch<Record<string, unknown>>(`/agent_run/${runId}/cancel`, {
    method: "POST",
  });

  return { success: Boolean(res.success) };
}

// ---- Video Uploads ----

export interface VideoUploadUrlResponse {
  id: string;
  url: string;
  upload_fields: Record<string, string>;
  size_limit: number;
  video_id?: string;
  upload_url?: string;
  max_file_size_bytes?: number;
}

export async function getVideoUploadUrl(): Promise<VideoUploadUrlResponse> {
  const res = await mosaicFetch<Record<string, unknown>>("/uploads/video/get_upload_url", {
    method: "POST",
  });

  const videoId =
    typeof res.video_id === "string"
      ? res.video_id
      : typeof res.id === "string"
        ? res.id
        : "";
  const uploadUrl =
    typeof res.upload_url === "string"
      ? res.upload_url
      : typeof res.url === "string"
        ? res.url
        : "";
  const uploadFields =
    isObject(res.upload_fields)
      ? Object.fromEntries(Object.entries(res.upload_fields).map(([k, v]) => [k, String(v)]))
      : {};
  const sizeLimit =
    typeof res.max_file_size_bytes === "number"
      ? res.max_file_size_bytes
      : typeof res.size_limit === "number"
        ? res.size_limit
        : 0;

  if (!videoId || !uploadUrl) {
    throw new Error("Mosaic video upload response missing required fields");
  }

  return {
    id: videoId,
    url: uploadUrl,
    upload_fields: uploadFields,
    size_limit: sizeLimit,
    video_id: videoId,
    upload_url: uploadUrl,
    max_file_size_bytes: sizeLimit,
  };
}

export interface FinalizeUploadResponse {
  id: string;
  video_id: string;
}

export async function finalizeVideoUpload(assetId: string): Promise<FinalizeUploadResponse> {
  const res = await mosaicFetch<Record<string, unknown>>("/uploads/video/finalize_upload", {
    method: "POST",
    body: JSON.stringify({ video_id: assetId }),
  });

  const videoId =
    typeof res.video_id === "string"
      ? res.video_id
      : typeof res.id === "string"
        ? res.id
        : assetId;

  return {
    id: videoId,
    video_id: videoId,
  };
}

// ---- YouTube Triggers ----

export interface YouTubeChannelDetails {
  channel_id: string;
  channel_name?: string;
  channel_handle?: string | null;
  thumbnail_url?: string | null;
  subscriber_count?: number | null;
}

export interface YouTubeTriggerResponse {
  trigger_id?: string;
  agent_id?: string;
  channels?: string[];
  status?: string;
  message?: string;
  channel_ids?: string[];
  youtube_channel_details?: YouTubeChannelDetails[];
}

export async function addYouTubeChannels(
  agentId: string,
  channels: string[],
  callbackUrl?: string
): Promise<YouTubeTriggerResponse> {
  const res = await mosaicFetch<Record<string, unknown>>(
    `/agent/${agentId}/triggers/add_youtube_channels`,
    {
      method: "POST",
      body: JSON.stringify({
        youtube_channels: channels,
        trigger_callback_url: callbackUrl,
      }),
    }
  );

  const channelIds = Array.isArray(res.channel_ids)
    ? res.channel_ids.filter((c): c is string => typeof c === "string")
    : Array.isArray(res.channels)
      ? res.channels.filter((c): c is string => typeof c === "string")
      : [];

  const channelDetails = Array.isArray(res.youtube_channel_details)
    ? res.youtube_channel_details
      .filter(isObject)
      .map((d) => ({
        channel_id: typeof d.channel_id === "string" ? d.channel_id : "",
        channel_name: typeof d.channel_name === "string" ? d.channel_name : undefined,
        channel_handle:
          typeof d.channel_handle === "string" || d.channel_handle === null
            ? (d.channel_handle as string | null)
            : undefined,
        thumbnail_url:
          typeof d.thumbnail_url === "string" || d.thumbnail_url === null
            ? (d.thumbnail_url as string | null)
            : undefined,
        subscriber_count:
          typeof d.subscriber_count === "number" || d.subscriber_count === null
            ? (d.subscriber_count as number | null)
            : undefined,
      }))
      .filter((d) => d.channel_id.length > 0)
    : undefined;

  return {
    trigger_id: typeof res.trigger_id === "string" ? res.trigger_id : undefined,
    agent_id: typeof res.agent_id === "string" ? res.agent_id : undefined,
    channels: Array.isArray(res.channels)
      ? res.channels.filter((c): c is string => typeof c === "string")
      : undefined,
    status: typeof res.status === "string" ? res.status : undefined,
    message: typeof res.message === "string" ? res.message : undefined,
    channel_ids: channelIds,
    youtube_channel_details: channelDetails,
  };
}

export async function removeYouTubeChannels(
  agentId: string,
  channels: string[]
): Promise<void> {
  await mosaicFetch(`/agent/${agentId}/triggers/remove_youtube_channels`, {
    method: "POST",
    body: JSON.stringify({ youtube_channels: channels }),
  });
}

// ---- Image Uploads ----

export interface ImageUploadUrlResponse {
  id: string;
  url: string;
  upload_fields: Record<string, string>;
  size_limit: number;
  image_id?: string;
  upload_url?: string;
  max_file_size_bytes?: number;
}

export async function getImageUploadUrl(): Promise<ImageUploadUrlResponse> {
  const res = await mosaicFetch<Record<string, unknown>>("/uploads/image/get_upload_url", {
    method: "POST",
  });

  const imageId =
    typeof res.image_id === "string"
      ? res.image_id
      : typeof res.id === "string"
        ? res.id
        : "";
  const uploadUrl =
    typeof res.upload_url === "string"
      ? res.upload_url
      : typeof res.url === "string"
        ? res.url
        : "";
  const uploadFields =
    isObject(res.upload_fields)
      ? Object.fromEntries(Object.entries(res.upload_fields).map(([k, v]) => [k, String(v)]))
      : {};
  const sizeLimit =
    typeof res.max_file_size_bytes === "number"
      ? res.max_file_size_bytes
      : typeof res.size_limit === "number"
        ? res.size_limit
        : 0;

  if (!imageId || !uploadUrl) {
    throw new Error("Mosaic image upload response missing required fields");
  }

  return {
    id: imageId,
    url: uploadUrl,
    upload_fields: uploadFields,
    size_limit: sizeLimit,
    image_id: imageId,
    upload_url: uploadUrl,
    max_file_size_bytes: sizeLimit,
  };
}

export interface FinalizeImageUploadResponse {
  id: string;
  image_id: string;
}

export async function finalizeImageUpload(assetId: string): Promise<FinalizeImageUploadResponse> {
  const res = await mosaicFetch<Record<string, unknown>>("/uploads/image/finalize_upload", {
    method: "POST",
    body: JSON.stringify({ image_id: assetId }),
  });

  const imageId =
    typeof res.image_id === "string"
      ? res.image_id
      : typeof res.id === "string"
        ? res.id
        : assetId;

  return {
    id: imageId,
    image_id: imageId,
  };
}

// ---- Audio Uploads ----

export interface AudioUploadUrlResponse {
  id: string;
  url: string;
  upload_fields: Record<string, string>;
  size_limit: number;
  audio_id?: string;
  upload_url?: string;
  max_file_size_bytes?: number;
}

export async function getAudioUploadUrl(): Promise<AudioUploadUrlResponse> {
  const res = await mosaicFetch<Record<string, unknown>>("/uploads/audio/get_upload_url", {
    method: "POST",
  });

  const audioId =
    typeof res.audio_id === "string"
      ? res.audio_id
      : typeof res.id === "string"
        ? res.id
        : "";
  const uploadUrl =
    typeof res.upload_url === "string"
      ? res.upload_url
      : typeof res.url === "string"
        ? res.url
        : "";
  const uploadFields =
    isObject(res.upload_fields)
      ? Object.fromEntries(Object.entries(res.upload_fields).map(([k, v]) => [k, String(v)]))
      : {};
  const sizeLimit =
    typeof res.max_file_size_bytes === "number"
      ? res.max_file_size_bytes
      : typeof res.size_limit === "number"
        ? res.size_limit
        : 0;

  if (!audioId || !uploadUrl) {
    throw new Error("Mosaic audio upload response missing required fields");
  }

  return {
    id: audioId,
    url: uploadUrl,
    upload_fields: uploadFields,
    size_limit: sizeLimit,
    audio_id: audioId,
    upload_url: uploadUrl,
    max_file_size_bytes: sizeLimit,
  };
}

export interface FinalizeAudioUploadResponse {
  id: string;
  audio_id: string;
}

export async function finalizeAudioUpload(assetId: string): Promise<FinalizeAudioUploadResponse> {
  const res = await mosaicFetch<Record<string, unknown>>("/uploads/audio/finalize_upload", {
    method: "POST",
    body: JSON.stringify({ audio_id: assetId }),
  });

  const audioId =
    typeof res.audio_id === "string"
      ? res.audio_id
      : typeof res.id === "string"
        ? res.id
        : assetId;

  return {
    id: audioId,
    audio_id: audioId,
  };
}

// ---- Agent Triggers ----

export interface AgentTrigger {
  trigger_id: string;
  type: string;
  channels?: string[];
  status?: string;
  callback_url?: string | null;
  youtube_channel_details?: YouTubeChannelDetails[];
}

export async function getAgentTriggers(agentId: string): Promise<AgentTrigger[]> {
  const res = await mosaicFetch<unknown>(`/agent/${agentId}/triggers`);

  if (!Array.isArray(res)) return [];

  return res
    .filter(isObject)
    .map((trigger) => ({
      trigger_id:
        typeof trigger.trigger_id === "string"
          ? trigger.trigger_id
          : typeof trigger.id === "string"
            ? trigger.id
            : "",
      type: typeof trigger.type === "string" ? trigger.type : "youtube",
      channels: Array.isArray(trigger.channels)
        ? trigger.channels.filter((c): c is string => typeof c === "string")
        : Array.isArray(trigger.youtube_channels)
          ? trigger.youtube_channels.filter((c): c is string => typeof c === "string")
          : undefined,
      status: typeof trigger.status === "string" ? trigger.status : undefined,
      callback_url:
        typeof trigger.callback_url === "string" || trigger.callback_url === null
          ? (trigger.callback_url as string | null)
          : undefined,
      youtube_channel_details: Array.isArray(trigger.youtube_channel_details)
        ? trigger.youtube_channel_details
          .filter(isObject)
          .map((d) => ({
            channel_id: typeof d.channel_id === "string" ? d.channel_id : "",
            channel_name: typeof d.channel_name === "string" ? d.channel_name : undefined,
            channel_handle:
              typeof d.channel_handle === "string" || d.channel_handle === null
                ? (d.channel_handle as string | null)
                : undefined,
            thumbnail_url:
              typeof d.thumbnail_url === "string" || d.thumbnail_url === null
                ? (d.thumbnail_url as string | null)
                : undefined,
            subscriber_count:
              typeof d.subscriber_count === "number" || d.subscriber_count === null
                ? (d.subscriber_count as number | null)
                : undefined,
          }))
          .filter((d) => d.channel_id.length > 0)
        : undefined,
    }))
    .filter((trigger) => trigger.trigger_id.length > 0);
}

// ---- Utility ----

export interface WhoamiResponse {
  user_id: string;
  email: string;
  plan?: string;
  is_admin?: boolean;
  api_key_id?: string;
  created_at?: string;
  last_used_at?: string | null;
}

export async function whoami(): Promise<WhoamiResponse> {
  const res = await mosaicFetch<Record<string, unknown>>("/whoami");

  if (typeof res.user_id !== "string" || typeof res.email !== "string") {
    throw new Error("Mosaic whoami response missing user_id or email");
  }

  return {
    user_id: res.user_id,
    email: res.email,
    plan: typeof res.plan === "string" ? res.plan : undefined,
    is_admin: typeof res.is_admin === "boolean" ? res.is_admin : undefined,
    api_key_id: typeof res.api_key_id === "string" ? res.api_key_id : undefined,
    created_at: typeof res.created_at === "string" ? res.created_at : undefined,
    last_used_at:
      typeof res.last_used_at === "string" || res.last_used_at === null
        ? (res.last_used_at as string | null)
        : undefined,
  };
}

export { MosaicApiError };
