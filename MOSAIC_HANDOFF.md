# Mosaic Integration — Handoff Document

> Last updated: 2026-02-12

---

## 1. What's Done

The **6 core Mosaic API functions** are fully wired and live:

| Function | File | Status |
|---|---|---|
| `startSermonProcessing` | `lib/mosaic.ts` | LIVE — calls `POST /v1/agents/:id/runs` |
| `getRunStatus` | `lib/mosaic.ts` | LIVE — calls `GET /v1/runs/:id`, calculates progress from `node_status_counts` |
| `getUploadUrl` | `lib/mosaic.ts` | LIVE — calls `POST /v1/videos/upload` for signed URL |
| `finalizeUpload` | `lib/mosaic.ts` | LIVE — calls `POST /v1/videos/:id/finalize` |
| `registerYouTubeTrigger` | `lib/mosaic.ts` | LIVE — calls `POST /v1/agents/:id/triggers/youtube` |
| `removeYouTubeTrigger` | `lib/mosaic.ts` | LIVE — calls `DELETE /v1/agents/:id/triggers/youtube` |

**Webhook handler** (`app/api/webhooks/mosaic/route.ts`):
- Verifies `X-Mosaic-Signature` header
- Handles `flag` field (Mosaic's actual field name, with `event` fallback)
- Processes 3 Mosaic events: `RUN_STARTED`, `RUN_PROGRESS`, `RUN_FINISHED`
- 5 additional event handlers ready for future services

**API routes wired:**
- `POST /api/sermons` — auto-triggers Mosaic processing for YouTube/URL sources
- `POST /api/upload/start` — returns signed upload URL from Mosaic
- `POST /api/upload/finalize` — finalizes upload + triggers processing
- `POST /api/integrations/youtube/connect` — registers Mosaic YouTube trigger

**Upload UI** (`components/dashboard/upload-form.tsx`):
- Full 3-step flow: get signed URL → upload to Mosaic → finalize + process

---

## 2. Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     sermon-clips.com                        │
│                                                             │
│  ┌──────────┐    ┌──────────┐    ┌───────────────────────┐  │
│  │  Upload   │    │ YouTube  │    │   Sermon Detail       │  │
│  │  Form     │    │ URL Form │    │   (progress + clips)  │  │
│  └────┬─────┘    └────┬─────┘    └───────────────────────┘  │
│       │               │                     ▲               │
│       ▼               ▼                     │               │
│  ┌─────────────────────────────┐    ┌───────┴────────────┐  │
│  │     API Routes              │    │  Webhook Handler    │  │
│  │  /api/upload/start          │    │  /api/webhooks/     │  │
│  │  /api/upload/finalize       │    │  mosaic             │  │
│  │  /api/sermons (POST)        │    │                     │  │
│  └────────────┬────────────────┘    └───────▲────────────┘  │
│               │                             │               │
└───────────────┼─────────────────────────────┼───────────────┘
                │                             │
                ▼                             │
┌───────────────────────────────┐             │
│        Mosaic API             │             │
│   api.mosaic.so               │             │
│                               │             │
│  ┌─────────────────────────┐  │             │
│  │ POST /v1/agents/:id/runs│──┼─────────────┘
│  │ GET  /v1/runs/:id       │  │  (webhooks: RUN_STARTED,
│  │ POST /v1/videos/upload  │  │   RUN_PROGRESS, RUN_FINISHED)
│  │ POST /v1/videos/:id/    │  │
│  │      finalize            │  │
│  │ YouTube triggers         │  │
│  └─────────────────────────┘  │
│                               │
│  Agent: bfdf05c7-01f2-4fb9-  │
│  89ae-f113d959aa8e            │
│  (NEEDS CANVAS SETUP ⚠️)      │
└───────────────────────────────┘
```

---

## 3. Mosaic Canvas Setup Guide (CRITICAL)

The Mosaic agent (`bfdf05c7-01f2-4fb9-89ae-f113d959aa8e`) is a **blank canvas**. It needs tiles/nodes configured before it can actually process sermons.

**Required tiles for sermon clip generation:**

1. **Video Input** — accepts the video URL passed via `video_urls`
2. **Clip Detection** — identifies clip-worthy moments (Mosaic's AI)
3. **Caption Generation** — adds captions (standard, cinematic, with-emojis)
4. **Aspect Ratio Reframing** — produces vertical (9:16), landscape (16:9), square (1:1) outputs
5. **Audio Enhancement** — silence removal, audio normalization
6. **Output** — produces final clips as `outputs[]` in the webhook payload

**Optional tiles (based on user plan features):**
- B-roll insertion
- Background music
- Eye-contact correction
- Color correction
- Motion graphics
- Branding overlay (intro/outro, watermark, logo)

**How to set this up:**
1. Go to the Mosaic dashboard
2. Open agent `bfdf05c7-01f2-4fb9-89ae-f113d959aa8e`
3. Add the tiles above in a pipeline
4. Configure the callback URL: `https://sermon-clips.com/api/webhooks/mosaic`
5. Test with a sample YouTube URL using the API or dashboard

**Without canvas setup, `startSermonProcessing` will succeed (creates a run) but produce no outputs.**

---

## 4. What Still Needs Integration

The remaining **15 stub functions** are grouped by the external service they need:

### Social Publishing (Ayrshare / Buffer / Direct Platform APIs)
| Function | Description |
|---|---|
| `connectSocialAccount` | OAuth flow to connect TikTok, Instagram, YouTube, etc. |
| `disconnectSocialAccount` | Revoke platform connection |
| `publishClip` | Post a clip to a platform (optionally scheduled) |

### AI Content Generation (OpenAI / Anthropic)
| Function | Description |
|---|---|
| `generateCaption` | Currently returns a placeholder template |
| `generateSermonContent` | Summaries, blog posts, discussion guides, etc. |
| `generateCourse` | Multi-week study course from sermon series |

### Transcription (Deepgram / AssemblyAI)
| Function | Description |
|---|---|
| `getTranscript` | Speaker-diarized transcript with timestamps |

### Graphics (DALL-E / Replicate)
| Function | Description |
|---|---|
| `generateGraphic` | Quote cards, thumbnails, carousels |

### Advanced Mosaic (depends on canvas tile capabilities)
| Function | Description |
|---|---|
| `createClipFromTimestamps` | Manual clip extraction from specific time range |
| `createMontage` | Combine multiple clips with transitions |
| `detectClipMoments` | AI-powered clip suggestion |
| `generateViralShorts` | Auto-generate hook-optimized short clips |

### Translation (Deepgram / ElevenLabs)
| Function | Description |
|---|---|
| `translateCaptions` | Translate captions to target language |
| `generateVoiceover` | AI voiceover in different languages |

---

## 5. Webhook Events

### Live (Mosaic API)
| Event | Trigger | What We Do |
|---|---|---|
| `RUN_STARTED` | Agent run begins | Set sermon status → `PROCESSING`, progress → 5% |
| `RUN_PROGRESS` | Node completes in pipeline | Calculate progress from `node_status_counts` |
| `RUN_FINISHED` | All nodes complete | Create Clip records from `outputs[]`, set status → `COMPLETED` |

### Ready for Future Services
| Event | Service Needed | What It Will Do |
|---|---|---|
| `TRANSCRIPT_READY` | Deepgram | Store transcript JSON on sermon |
| `CONTENT_GENERATED` | OpenAI/Anthropic | Update ContentPiece record |
| `GRAPHIC_GENERATED` | DALL-E/Replicate | Update Graphic record with image URL |
| `MONTAGE_FINISHED` | Mosaic advanced | Update Montage record with video URL |
| `SUGGESTIONS_READY` | Mosaic advanced | Create SuggestedClip records |

---

## 6. Environment Variables

| Variable | Format | Where Set |
|---|---|---|
| `MOSAIC_API_KEY` | `mk_...` | Vercel + `.env.local` |
| `MOSAIC_WEBHOOK_SECRET` | `whsk_...` | Vercel + `.env.local` |
| `MOSAIC_AGENT_ID` | UUID | Vercel + `.env.local` |
| `NEXT_PUBLIC_APP_URL` | `https://sermon-clips.com` | Vercel (already set) |

---

## 7. Testing Guide

### Verify API Key
```bash
curl -H "Authorization: Bearer $MOSAIC_API_KEY" https://api.mosaic.so/v1/whoami
```

### Test Upload Flow
1. Create a sermon with `sourceType: "upload"` via the UI
2. The upload form will:
   - `POST /api/upload/start` → get signed URL
   - Upload file to signed URL
   - `POST /api/upload/finalize` → triggers processing
3. Check sermon detail page for progress updates

### Test YouTube Processing
1. Create a sermon with `sourceType: "youtube"` and a YouTube URL
2. The API route auto-calls `startSermonProcessing`
3. Mosaic sends webhooks as the run progresses
4. Clips appear on the sermon detail page when finished

### Test Webhook Handler
```bash
curl -X POST https://sermon-clips.com/api/webhooks/mosaic \
  -H "Content-Type: application/json" \
  -H "X-Mosaic-Signature: $MOSAIC_WEBHOOK_SECRET" \
  -d '{
    "flag": "RUN_STARTED",
    "run_id": "test-run-id",
    "agent_id": "bfdf05c7-01f2-4fb9-89ae-f113d959aa8e",
    "status": "running"
  }'
```
Expected: 404 (no sermon with that run_id) — but verifies signature check works.

### Verify YouTube Trigger
1. Connect a YouTube channel in Settings
2. Check Mosaic dashboard for the registered trigger
3. Upload a video to the connected channel
4. Mosaic should auto-trigger a run + send webhooks

---

## Key Files

```
lib/mosaic-client.ts     ← Thin HTTP wrapper for Mosaic REST API
lib/mosaic.ts            ← Business logic (6 live + 15 stubs)
app/api/webhooks/mosaic/ ← Webhook receiver (signature verified)
app/api/sermons/         ← Auto-triggers processing on create
app/api/upload/start/    ← Gets signed upload URL
app/api/upload/finalize/ ← Finalizes upload + starts processing
app/api/integrations/youtube/connect/ ← Registers YouTube trigger
```
