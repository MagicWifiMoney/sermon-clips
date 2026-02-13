# Mosaic Integration — Handoff Document

> Last updated: 2026-02-13

---

## 1. What's Done (All 6 Phases Complete)

The full Mosaic integration is built. Everything flows through `update_params` on `POST /v1/agents/{id}/runs` — one mapper function builds the correct tile configuration from our `ProcessingOptions`.

### Core API Functions (LIVE)
| Function | File | Status |
|---|---|---|
| `startSermonProcessing` | `lib/mosaic.ts` | LIVE — calls `runAgent` with `buildMosaicUpdateParams()` |
| `getRunStatus` | `lib/mosaic.ts` | LIVE — progress from `node_status_counts` |
| `getUploadUrl` / `finalizeUpload` | `lib/mosaic.ts` | LIVE — video upload |
| `getAudioUploadUrlWrapper` / `finalizeAudioUploadWrapper` | `lib/mosaic.ts` | LIVE — audio upload |
| `registerYouTubeTrigger` / `removeYouTubeTrigger` | `lib/mosaic.ts` | LIVE — YouTube auto-triggers |
| `getMosaicSocialPortalUrl` | `lib/mosaic.ts` | LIVE — Mosaic destination portal |
| `createClipFromTimestamps` | `lib/mosaic.ts` | LIVE — thin `runAgent` wrapper |
| `createMontage` | `lib/mosaic.ts` | LIVE — thin `runAgent` wrapper |

### Tile Param Mapper (NEW)
**`lib/mosaic-params.ts`** — `buildMosaicUpdateParams()` maps our `ProcessingOptions` + `BrandingConfig` + `PublishMode` + `LanguageConfig` to Mosaic's tile parameter structure.

### Mosaic Client (LIVE)
**`lib/mosaic-client.ts`** — 15 endpoints:
- Agent runs: `runAgent`, `getAgentRun`, `cancelAgentRun`
- Video: `getVideoUploadUrl`, `finalizeVideoUpload`
- Audio: `getAudioUploadUrl`, `finalizeAudioUpload`
- Image: `getImageUploadUrl`, `finalizeImageUpload`
- YouTube: `addYouTubeChannels`, `removeYouTubeChannels`
- Triggers: `getAgentTriggers`
- Utility: `whoami`

### Webhook Handler (LIVE)
`app/api/webhooks/mosaic/route.ts`:
- Verifies `X-Mosaic-Signature` header
- Handles `flag` field (with `event` fallback)
- 3 live events: `RUN_STARTED`, `RUN_PROGRESS`, `RUN_FINISHED`
- 5 future events: `TRANSCRIPT_READY`, `CONTENT_GENERATED`, `GRAPHIC_GENERATED`, `MONTAGE_FINISHED`, `SUGGESTIONS_READY`

### API Routes Wired
| Route | Function |
|---|---|
| `POST /api/sermons` | Creates sermon + auto-triggers Mosaic with full tile params |
| `POST /api/sermons/[id]/retry` | Re-triggers `startSermonProcessing` (was TODO, now wired) |
| `POST /api/upload/start` | Returns signed upload URL (video or audio) |
| `POST /api/upload/finalize` | Finalizes upload + triggers processing with branding |
| `POST /api/social/connect` | Returns Mosaic social portal redirect URL |
| `POST /api/settings/branding/upload` | Get presigned URL for branding assets via Mosaic |
| `PUT /api/settings/branding/upload` | Finalize branding asset upload + store URL |
| `POST /api/integrations/youtube/connect` | Registers Mosaic YouTube trigger |

---

## 2. Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                     sermon-clips.com                             │
│                                                                  │
│  ┌──────────┐    ┌──────────┐    ┌────────────────────────────┐  │
│  │  Upload   │    │ YouTube  │    │   Sermon Detail            │  │
│  │  Form     │    │ URL Form │    │   (progress + clips)       │  │
│  │  (video   │    │          │    │                            │  │
│  │  + audio) │    │          │    │                            │  │
│  └────┬─────┘    └────┬─────┘    └────────────────────────────┘  │
│       │               │                     ▲                    │
│       ▼               ▼                     │                    │
│  ┌──────────────────────────────────┐  ┌────┴──────────────────┐ │
│  │     API Routes                   │  │  Webhook Handler       │ │
│  │  /api/sermons (POST)             │  │  /api/webhooks/mosaic  │ │
│  │  /api/sermons/[id]/retry (POST)  │  │                        │ │
│  │  /api/upload/start + finalize    │  │  RUN_STARTED           │ │
│  │  /api/social/connect             │  │  RUN_PROGRESS          │ │
│  │  /api/settings/branding/upload   │  │  RUN_FINISHED          │ │
│  └────────────┬─────────────────────┘  └────▲──────────────────┘ │
│               │                              │                    │
│               │  buildMosaicUpdateParams()   │                    │
│               │  (lib/mosaic-params.ts)      │                    │
│               │                              │                    │
└───────────────┼──────────────────────────────┼────────────────────┘
                │                              │
                ▼                              │
┌──────────────────────────────────────────────┘────────────────────┐
│        Mosaic API  (api.mosaic.so)                                │
│                                                                   │
│  POST /v1/agents/:id/runs                                        │
│  ├── video_urls: [source video/audio]                            │
│  ├── callback_url: sermon-clips.com/api/webhooks/mosaic          │
│  └── update_params: {                                            │
│        clips: { number_of_clips, duration_seconds, prompt }      │
│        captions: { style, colors, fonts, position }              │
│        reframe: { aspect_ratios, dynamic_zoom }                  │
│        silence_removal: { enabled, remove_filler_words }         │
│        audio_enhance: { enabled }                                │
│        color_correction: { preset }                              │
│        ai_music: { genre, mood, intensity, bpm, prompt }         │
│        ai_broll: { enabled }                                     │
│        motion_graphics: { style_prompt, preset }                 │
│        rough_cut: { prompt, target_duration_seconds, mood }      │
│        ai_voiceover: { voice_id, script, language }              │
│        ai_avatar: { avatar_id, script, voice_id }               │
│        ai_augment: { style, effect }                             │
│        watermark: { image_url, position, size_percent, opacity } │
│        intro: { intro_video_url }                                │
│        outro: { outro_video_url }                                │
│        destination: { mode, caption_prompt }                     │
│        voice: { target_language, lip_sync, safewords }           │
│      }                                                           │
│                                                                   │
│  Agent: bfdf05c7-01f2-4fb9-89ae-f113d959aa8e                    │
│  (NEEDS CANVAS TILE SETUP — see Section 3)                       │
└──────────────────────────────────────────────────────────────────┘
```

---

## 3. Mosaic Canvas Setup (CRITICAL — Required for Any Output)

The agent (`bfdf05c7-01f2-4fb9-89ae-f113d959aa8e`) needs tiles configured in the Mosaic dashboard. The code passes all tile params via `update_params` — tiles just need to exist on the canvas.

### Required Tiles (Core Pipeline)
| Tile | What It Does | update_params Key |
|---|---|---|
| Video Input | Accepts video/audio URL | (automatic from `video_urls`) |
| Clips | Detects clip-worthy moments | `clips` |
| Captions | Adds word-level captions | `captions` / `cinematic_captions` / `captions_with_emojis` |
| Reframe | Multi-format output (9:16, 16:9, 1:1) | `reframe` |
| Output | Produces final clips | (automatic) |

### Enhancement Tiles (Plan-Gated)
| Tile | update_params Key | Notes |
|---|---|---|
| Silence Removal | `silence_removal` | Includes filler word removal toggle |
| Audio Enhance | `audio_enhance` | No params, just enabled |
| Color Correction | `color_correction` | 5 presets (golden_hour, filmic, vibrant, cool_tones, neutral_clean) |
| AI Music | `ai_music` | Genre, mood, intensity, BPM, prompt |
| AI B-Roll | `ai_broll` | Boolean toggle |
| Motion Graphics | `motion_graphics` | Style prompt, full screen, preset |
| Rough Cut | `rough_cut` | Prompt-guided editing with target duration |

### Branding Tiles
| Tile | update_params Key | Notes |
|---|---|---|
| Watermark | `watermark` | image_url, position, size_percent, opacity, margin_px |
| Intro | `intro` | intro_video_url (from branding settings) |
| Outro | `outro` | outro_video_url (from branding settings) |

### Social Publishing Tile
| Tile | update_params Key | Notes |
|---|---|---|
| Destination | `destination` | `mode: "publish"` or `"review"`, caption_prompt for AI captions |

Social accounts are connected in the **Mosaic dashboard** — we redirect users there via `getMosaicSocialPortalUrl()`.

### Translation/Dubbing Tile
| Tile | update_params Key | Notes |
|---|---|---|
| Voice | `voice` | target_language, lip_sync, safewords, preserve_background_audio |

### AI Feature Tiles (Higher Tiers)
| Tile | update_params Key | Notes |
|---|---|---|
| AI Voiceover | `ai_voiceover` | voice_id, script, language |
| AI Avatar | `ai_avatar` | avatar_id, script, voice_id |
| AI Augment | `ai_augment` | style, effect |

### Setup Instructions
1. Open Mosaic dashboard → agent `bfdf05c7-01f2-4fb9-89ae-f113d959aa8e`
2. Add tiles in this pipeline order: Video Input → Clips → Captions → Reframe → (enhancement tiles) → Watermark → Intro → Outro → Destination → Output
3. Each tile reads its config from `update_params` — the code handles building the correct structure
4. Set callback URL: `https://sermon-clips.com/api/webhooks/mosaic`
5. Test with: `curl -X POST https://api.mosaic.so/v1/agents/bfdf05c7.../runs -H "Authorization: Bearer $MOSAIC_API_KEY" -d '{"video_urls":["https://youtube.com/watch?v=..."]}'`

**Without tiles, `startSermonProcessing` creates a run but produces no outputs.**

---

## 4. Remaining Stubs (Need External Services — NOT Mosaic)

These functions genuinely need services Mosaic doesn't provide:

| Function | File | Service Needed |
|---|---|---|
| `generateSermonContent` | `lib/mosaic.ts` | OpenAI / Anthropic (summaries, blog posts, devotionals) |
| `generateCourse` | `lib/mosaic.ts` | OpenAI / Anthropic (multi-week study courses) |
| `generateGraphic` | `lib/mosaic.ts` | DALL-E / Replicate (quote cards, thumbnails) |
| `getTranscript` | `lib/mosaic.ts` | Deepgram (or via TRANSCRIPT_READY webhook) |

### Previously Stubbed → Now Mosaic-Native
These were stubs that are **now handled via Mosaic tiles**:

| Old Stub | Replaced By |
|---|---|
| `connectSocialAccount` / `disconnectSocialAccount` | Mosaic Destination tile + portal redirect |
| `publishClip` | Destination tile's `mode: "publish"` in update_params |
| `generateCaption` | Destination tile's `caption_prompt` |
| `translateCaptions` | Voice tile's `target_language` |
| `generateVoiceover` | Voice tile / AI Voiceover tile |
| `detectClipMoments` | Clips tile with `prompt` param |
| `generateViralShorts` | Clips tile with `prompt: "hook-optimized viral shorts"` |

---

## 5. Tile Parameter Mapping Reference

The complete mapping lives in `lib/mosaic-params.ts`. Here's the reference:

| Our Field | Mosaic Tile | Tile Param |
|---|---|---|
| `clipCount` | Clips | `number_of_clips` |
| `clipDuration` (short→25s, medium→45s, long→75s) | Clips | `duration_seconds` |
| `clipDurationSeconds` (fine-tune slider) | Clips | `duration_seconds` |
| `clipPrompt` | Clips | `prompt` |
| `captionStyle` (standard/cinematic/with-emojis) | Captions variants | tile name selection |
| `captionConfig.style` | Captions | `style` |
| `captionConfig.baseColor/highlightColor/strokeColor` | Captions | `base_color`, `highlight_color`, `stroke_color` |
| `captionConfig.fontFamily/fontWeight/fontSize` | Captions | `font_family`, `font_weight`, `font_size` |
| `captionConfig.verticalPosition` | Captions | `vertical_position` |
| `captionConfig.minWords/maxWords` | Captions | `min_words`, `max_words` |
| `outputFormats` (vertical/landscape/square) | Reframe | `aspect_ratios` (9:16/16:9/1:1) |
| `dynamicZoom` | Reframe | `dynamic_zoom` |
| `features.silenceRemoval` | Silence Removal | `enabled` |
| `features.silenceRemovalFillerWords` | Silence Removal | `remove_filler_words` |
| `features.audioEnhancement` | Audio Enhance | `enabled` |
| `features.colorCorrection` (boolean or preset string) | Color Correction | `enabled`, `preset` |
| `features.aiMusic.genre/mood/intensity/bpm/prompt` | AI Music | same names |
| `features.aiBRoll` | AI B-Roll | `enabled` |
| `features.motionGraphics.stylePrompt/fullScreen/preset` | Motion Graphics | `style_prompt`, `full_screen`, `preset` |
| `features.roughCut.prompt/targetDurationSeconds/mood` | Rough Cut | `prompt`, `target_duration_seconds`, `mood` |
| `features.aiVoiceover.voice/script/language` | AI Voiceover | `voice_id`, `script`, `language` |
| `features.aiAvatar.avatarId/script/voiceId` | AI Avatar | `avatar_id`, `script`, `voice_id` |
| `features.aiAugment.style/effect` | AI Augment | `style`, `effect` |
| `branding.watermarkUrl` | Watermark | `image_url` |
| `branding.watermarkPosition/Size/Opacity/Margin` | Watermark | `position`, `size_percent`, `opacity`, `margin_px` |
| `branding.introVideoUrl` | Intro | `intro_video_url` |
| `branding.outroVideoUrl` | Outro | `outro_video_url` |
| `publishMode` (auto/review) | Destination | `mode` (publish/review) |
| `captionPrompt` | Destination | `caption_prompt` |
| `languageConfig.targetLanguages[0]` | Voice | `target_language` |
| `languageConfig.lipSync` | Voice | `lip_sync` |
| `languageConfig.safewords` | Voice | `safewords` |
| `languageConfig.preserveBackgroundAudio` | Voice | `preserve_background_audio` |

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

### Test Full Processing Flow
1. Create a sermon via UI with YouTube URL + all processing options
2. API calls `startSermonProcessing` → `buildMosaicUpdateParams()` → `runAgent`
3. Check that `update_params` includes: `clips`, `captions`, `reframe`, `silence_removal`, etc.
4. Mosaic sends webhooks → clips appear on sermon detail page

### Test Retry
1. Find a FAILED sermon
2. Click "Try Again" → hits `POST /api/sermons/[id]/retry`
3. Verify it re-triggers with the same options + branding

### Test Branding Pipeline
1. Upload a watermark in Settings → Branding
2. Set opacity, size, position, margin
3. Create a sermon with "Apply my branding" checked
4. Verify `update_params` includes `watermark`, `intro`, `outro` sections

### Test Social Publishing
1. Go to Settings → Integrations
2. Click "Manage Social Accounts in Mosaic" → opens Mosaic portal
3. Create a sermon with `publishMode: "auto"` and a caption prompt
4. Verify `update_params` includes `destination: { mode: "publish", caption_prompt: "..." }`

### Test Audio Upload
1. Drop an MP3/WAV/M4A file in the upload form
2. Verify it routes to the audio upload endpoint (`/v1/audio/upload`)

### Webhook Test
```bash
curl -X POST https://sermon-clips.com/api/webhooks/mosaic \
  -H "Content-Type: application/json" \
  -H "X-Mosaic-Signature: $MOSAIC_WEBHOOK_SECRET" \
  -d '{"flag":"RUN_STARTED","run_id":"test","agent_id":"bfdf05c7-01f2-4fb9-89ae-f113d959aa8e","status":"running"}'
```

---

## 8. Key Files

```
lib/mosaic-params.ts          ← NEW — update_params mapper (ProcessingOptions → tile params)
lib/mosaic-client.ts          ← Thin HTTP client (15 endpoints)
lib/mosaic.ts                 ← Business logic (8 live functions + 4 external-service stubs)
app/api/webhooks/mosaic/      ← Webhook receiver (signature verified)
app/api/sermons/              ← Auto-triggers processing on create
app/api/sermons/[id]/retry/   ← Re-triggers processing (was TODO, now wired)
app/api/upload/start/         ← Gets signed upload URL (video + audio)
app/api/upload/finalize/      ← Finalizes upload + starts processing
app/api/social/connect/       ← Returns Mosaic portal redirect URL
app/api/settings/branding/upload/ ← Upload branding assets via Mosaic API
types/index.ts                ← All types (ProcessingOptions, CaptionConfig, AiMusicConfig, etc.)
```
