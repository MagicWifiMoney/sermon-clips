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

// ---- STUBS (Mosaic team replaces these) ----

export async function startSermonProcessing(
  videoUrl: string,
  callbackUrl: string
): Promise<MosaicRunResponse> {
  console.log("[Mosaic Stub] startSermonProcessing called with:", { videoUrl, callbackUrl });
  // TODO: Mosaic team — POST /agent/{AGENT_ID}/run
  throw new Error("Not implemented — Mosaic team integration pending");
}

export async function getRunStatus(runId: string) {
  console.log("[Mosaic Stub] getRunStatus called with:", { runId });
  // TODO: Mosaic team — GET /agent_run/{runId}
  throw new Error("Not implemented — Mosaic team integration pending");
}

export async function getUploadUrl() {
  console.log("[Mosaic Stub] getUploadUrl called");
  // TODO: Mosaic team — POST /uploads/video/get_upload_url
  throw new Error("Not implemented — Mosaic team integration pending");
}

export async function finalizeUpload(videoId: string) {
  console.log("[Mosaic Stub] finalizeUpload called with:", { videoId });
  // TODO: Mosaic team — POST /uploads/video/finalize_upload
  throw new Error("Not implemented — Mosaic team integration pending");
}
