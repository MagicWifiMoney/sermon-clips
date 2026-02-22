# Sermon Clips

Turn full-length sermons into short-form video clips ready for social media. Upload a sermon or paste a YouTube link, and the platform handles clip detection, captioning, reframing, and export.

**Live:** [sermon-clips.com](https://sermon-clips.com)

---

## Mosaic Integration — Handoff

> **For the Mosaic team:** Full integration docs in [MOSAIC_HANDOFF.md](./MOSAIC_HANDOFF.md). Start there.

**TL;DR status — All 6 phases complete:**

| Layer | Status |
|---|---|
| **Tile param mapper** | LIVE — `buildMosaicUpdateParams()` maps all 17+ tiles via `update_params` |
| **8 live API functions** | `startSermonProcessing`, uploads (video/audio/image), YouTube triggers, social portal, clip extraction, montage |
| **Webhook handler** | LIVE — `RUN_STARTED`, `RUN_PROGRESS`, `RUN_FINISHED` + 5 future events |
| **Social publishing** | LIVE — Mosaic Destination tile (no Ayrshare/Buffer needed) |
| **Translation/dubbing** | LIVE — Mosaic Voice tile (no ElevenLabs/Deepgram needed) |
| **Branding pipeline** | LIVE — Watermark/Intro/Outro tiles, asset upload via Mosaic API |
| **Enriched UI** | LIVE — Rich captions (colors/fonts/position), clip prompt + chips, AI music (mood/BPM/prompt), dynamic zoom, color presets, filler word toggle |
| **Mosaic agent canvas** | NEEDS SETUP — tiles must be added to agent `bfdf05c7-01f2-4fb9-89ae-f113d959aa8e` |
| **4 remaining stubs** | Need external services: AI content (OpenAI), graphics (DALL-E), transcription (Deepgram), courses (OpenAI) |

The app is fully functional end-to-end once the Mosaic agent canvas has tiles configured.

**Key files:**
```
lib/mosaic-params.ts     ← NEW — update_params mapper (ProcessingOptions → tile params)
lib/mosaic-client.ts     ← Thin HTTP client (15 endpoints)
lib/mosaic.ts            ← Business logic (8 live + 4 external-service stubs)
app/api/webhooks/mosaic/ ← Webhook receiver (signature verified)
app/api/sermons/         ← Auto-triggers processing on create
app/api/upload/          ← Signed upload URL + finalize (video + audio)
MOSAIC_HANDOFF.md        ← Full integration docs, canvas setup guide, tile mapping reference
```

---

## Platform Features

### Core Clip Engine
| Feature | Description | Status |
|---|---|---|
| YouTube URL processing | Paste a link, AI processes the full sermon | Live (via Mosaic) |
| Direct video upload | Drag-and-drop or browse, signed upload to Mosaic | Live (via Mosaic) |
| Audio file upload | MP3, WAV, M4A, FLAC — routes to audio upload endpoint | Live (via Mosaic) |
| Video URL import | Vimeo, Dropbox, Google Drive links | Live (via Mosaic) |
| Clip prompt | Guide AI clip detection with text prompts + quick-pick chips | Live (via Clips tile `prompt`) |
| Duration fine-tuning | Slider from 15-90 seconds + short/medium/long presets | Live (via Clips tile `duration_seconds`) |
| Rich captions | Colors, fonts, position, word count — 3 styles (colored words, stroke, full highlight) | Live (via Captions tile) |
| Multi-format export | Vertical (9:16), landscape (16:9), square (1:1) with dynamic zoom | Live (via Reframe tile) |
| Processing progress | Real-time progress bar via Mosaic webhooks + SWR polling | Live |
| Clip download | Individual clip downloads with download count tracking | Live |
| Retry failed sermons | "Try Again" re-triggers Mosaic with same options + branding | Live |
| Batch processing | Select multiple sermons, process in bulk | UI built, needs Mosaic canvas |

### AI Enhancements
| Feature | Description | Status |
|---|---|---|
| AI B-Roll | Auto-insert contextual visuals | Live (via AI B-Roll tile) |
| AI background music | Genre, mood, intensity, BPM, and free-text prompt | Live (via AI Music tile) |
| Audio enhancement | AI noise removal, normalization | Live (via Audio Enhance tile) |
| Silence removal | Remove silences + optional filler word removal ("um", "uh") | Live (via Silence Removal tile) |
| Color correction | 5 presets: Golden Hour, Filmic, Vibrant, Cool Tones, Neutral Clean | Live (via Color Correction tile) |
| Dynamic zoom | Speaker-tracking zoom for static camera shots | Live (via Reframe tile `dynamic_zoom`) |
| Motion graphics | Animated overlays with style prompt + presets | Live (via Motion Graphics tile) |
| Rough cut | Prompt-guided editing with target duration + mood | Live (via Rough Cut tile) |
| AI avatar | AI-generated video avatars | Live (via AI Avatar tile) |
| AI voiceover | Voiceover in multiple languages with voice selection | Live (via AI Voiceover tile) |
| AI augment | Style and effect modifications | Live (via AI Augment tile) |
| Viral shorts | Hook-optimized shorts via Clips tile with prompt | Live (Clips tile) |
| Smart clip suggestions | AI-detected moments with hook scores | Live (via SUGGESTIONS_READY webhook) |
| Manual clip extraction | Create clips from specific timestamp ranges | Live (thin `runAgent` wrapper) |

### Social Publishing (Mosaic-Native)
| Feature | Description | Status |
|---|---|---|
| Platform connections | TikTok, Instagram, YouTube, Facebook, X, LinkedIn | Live — managed in Mosaic portal |
| Auto-publish | Clips auto-post to connected accounts when ready | Live (via Destination tile `mode: "publish"`) |
| Review mode | Clips queued for review before publishing | Live (via Destination tile `mode: "review"`) |
| AI social captions | AI-generated captions with custom prompt | Live (via Destination tile `caption_prompt`) |
| Scheduled posting | Schedule clips for future publication | UI built, depends on Mosaic Destination |
| Drip scheduling | Auto-space clips across days/platforms | UI built, depends on Mosaic Destination |

### Content Generation
| Feature | Description | Status |
|---|---|---|
| Sermon summaries | Short + long AI-generated summaries | Stub (needs OpenAI/Anthropic) |
| Blog posts, quotes, devotionals, etc. | 8 content types from sermon transcript | Stub (needs OpenAI/Anthropic) |

### Branding & Customization
| Feature | Description | Status |
|---|---|---|
| Logo upload | Upload via Mosaic image API, stored in branding config | Live |
| Brand colors | Primary/secondary color theming | Live |
| Intro/outro videos | Upload via Mosaic video API, passed to Intro/Outro tiles | Live |
| Watermark | Position (5 options), opacity slider, size slider, margin | Live (via Watermark tile) |
| Processing templates | Save and reuse clip settings presets | Live (CRUD + UI) |
| Sermon series | Organize sermons into named series with images | Live (CRUD + UI) |
| Multi-campus | Separate branding per campus location | UI built |

### Translation & Dubbing (Mosaic-Native)
| Feature | Description | Status |
|---|---|---|
| Translation + dubbing | Translate to 30+ languages with lip sync | Live (via Voice tile) |
| Safewords | Protect brand names from translation ("Jesus", church name) | Live (via Voice tile `safewords`) |
| Preserve background audio | Keep original background audio during dubbing | Live (via Voice tile) |
| Custom translation dictionary | Custom term mappings for domain-specific vocabulary | Type defined, UI pending |

### Graphics
| Feature | Description | Status |
|---|---|---|
| Quote cards | Auto-generated social graphics from sermon quotes | Stub (needs DALL-E/Replicate) |
| Thumbnails | AI-generated video thumbnails | Stub |
| Carousel images | Multi-slide social carousel graphics | Stub |

### Montage
| Feature | Description | Status |
|---|---|---|
| Clip montage builder | Combine multiple clips with transitions | Live (thin `runAgent` wrapper) |
| Transition styles | Crossfade, fade-to-black, cut, slide, zoom | Live |

### Study Courses
| Feature | Description | Status |
|---|---|---|
| Course generation | Multi-week study course from sermon series | Stub (needs OpenAI/Anthropic) |
| Module structure | Weekly modules with summaries, scriptures, discussion questions | Schema + UI built |

### Analytics
| Feature | Description | Status |
|---|---|---|
| Dashboard overview | Total views, engagement rate, top platform | UI built, awaiting data |
| Clip performance | Per-clip views, likes, shares, comments by platform | Schema + UI built |
| Platform breakdown | Performance metrics per social platform | UI built |
| ROI metrics | Time saved, content pieces generated, cost per clip | UI built |
| Date range filters | 7d, 30d, 90d, custom date ranges | UI built |

### YouTube Auto-Trigger
| Feature | Description | Status |
|---|---|---|
| Channel connection | Link YouTube channel to auto-detect new uploads | Live (via Mosaic triggers) |
| Auto-processing | New YouTube uploads trigger automatic clip generation | Live (via Mosaic triggers) |
| Default settings | Pre-configured processing options for auto-triggered runs | UI built |

---

## Onboarding & Free Trial Funnel

New users flow through a conversion-optimized funnel:

```
Sign Up (no credit card) → 3-Step Wizard → Free Sermon Upload → Value Recap → Upgrade Gate
```

| Stage | What Happens |
|---|---|
| **Wizard** (`/dashboard/welcome`) | 3 quick steps: church name, role, primary goal. Celebration screen with confetti. |
| **Checklist** (dashboard) | 2/4 steps pre-completed (Zeigarnik effect). CTA: "Clip your first sermon FREE" |
| **Simplified upload** (`?first=true`) | YouTube-only, auto-fetch title, "Create My Clips — It's Free" button |
| **Value recap** (dashboard) | After clips ready: "You saved ~4 hours!" + clip count + upgrade nudge |
| **Upgrade gate** (upload page) | Free users who've used their sermon see testimonial + pricing CTA |
| **Pricing page** (`/dashboard/upgrade`) | 3 tiers, monthly/yearly toggle (20% savings), trust signals |

### Plan Tiers

| | Free | Starter | Growth | Auto-Pilot |
|--|------|---------|--------|------------|
| **Price** | $0 | $29/mo ($278/yr) | $59/mo ($566/yr) | $149/mo ($1,430/yr) |
| **Sermons** | 1 total | 4/month | 8/month | Unlimited |
| **Clips** | 5/sermon | 3/sermon | 5/sermon | 10+/sermon |
| **Formats** | 1 | 1 | 3 | 3 |

Additional tiers (Professional at $299/mo, Suite at $599/mo) exist in the schema for future expansion.

### Usage Enforcement

- `sermonsProcessed` counter on User model, incremented on `RUN_FINISHED` webhook
- `checkSermonQuota()` in `lib/usage.ts` validates before upload
- Upload page shows upgrade gate when quota exceeded
- "Upload New" button on dashboard links to `/dashboard/upgrade` for free users past their limit

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript 5 |
| Auth | Clerk |
| Database | Neon Postgres + Prisma 7 |
| Styling | Tailwind CSS 4 |
| Video Processing | Mosaic API |
| Data Fetching | SWR |
| Validation | Zod |
| Notifications | Sonner |
| Analytics | PostHog |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm
- A [Clerk](https://clerk.com) account (auth)
- A [Neon](https://neon.tech) database (Postgres)
- A [Mosaic](https://mosaic.so) account (video processing)

### Setup

```bash
# Clone the repo
git clone https://github.com/MagicWifiMoney/sermon-clips.git
cd sermon-clips

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in your keys (see Environment Variables below)

# Generate Prisma client + push schema
npx prisma generate
npx prisma db push

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Generate Prisma client + production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Project Structure

```
sermon-clips/
├── app/
│   ├── (auth)/                    # Sign-in / sign-up pages (Clerk)
│   ├── (onboarding)/              # Onboarding wizard (minimal layout, no sidebar)
│   │   └── dashboard/welcome/     # 3-step wizard page
│   ├── (dashboard)/               # Authenticated dashboard layout (sidebar + header)
│   │   └── dashboard/
│   │       ├── page.tsx           # Main dashboard (state machine: wizard redirect / checklist / value recap / normal)
│   │       ├── upload/            # Upload form (simplified for free trial, full for paid)
│   │       ├── upgrade/           # In-app pricing page with monthly/yearly toggle
│   │       ├── sermons/[id]/      # Sermon detail (progress bar, clip grid, downloads)
│   │       ├── analytics/         # Analytics dashboard
│   │       ├── publishing/        # Social publishing management
│   │       ├── montage/           # Clip montage builder
│   │       ├── series/[id]/       # Sermon series detail
│   │       └── settings/          # Account, branding, integrations, templates, series, campuses
│   ├── api/
│   │   ├── me/                    # Current user info + plan + onboarding + backfill
│   │   ├── onboarding/            # POST wizard data (church name, role, goal)
│   │   ├── usage/check/           # GET sermon quota check
│   │   ├── sermons/               # CRUD + auto-trigger Mosaic processing
│   │   ├── upload/                # Signed upload URL + finalize
│   │   ├── clips/                 # Download, publish, caption generation
│   │   ├── webhooks/
│   │   │   ├── clerk/             # Clerk user sync webhook
│   │   │   └── mosaic/            # Mosaic processing events + sermonsProcessed increment
│   │   ├── integrations/youtube/  # YouTube channel connect + auto-triggers
│   │   ├── social/                # Social account management
│   │   ├── analytics/             # Analytics + ROI endpoints
│   │   ├── series/                # Sermon series CRUD + course generation
│   │   ├── templates/             # Processing template CRUD
│   │   ├── settings/              # Branding config
│   │   ├── batch/                 # Batch processing
│   │   ├── montage/               # Montage CRUD
│   │   ├── schedule/              # Scheduled post management
│   │   ├── campuses/              # Multi-campus management
│   │   └── courses/               # Study course management
│   ├── blog/                      # SEO blog (8 articles)
│   └── page.tsx                   # Landing page (hero, features, pricing, FAQ, testimonials)
├── components/
│   ├── dashboard/                 # Dashboard components (sermon card, upload form, sidebar, etc.)
│   ├── onboarding/                # Wizard, checklist, value recap, celebration, confetti
│   └── ui/                        # Shared UI primitives (button, card, tabs, skeleton, etc.)
├── lib/
│   ├── mosaic-client.ts           # Thin HTTP client for Mosaic REST API (15 endpoints)
│   ├── mosaic.ts                  # Business logic (8 live functions + 4 external-service stubs)
│   ├── mosaic-params.ts           # update_params mapper (ProcessingOptions → Mosaic tile params)
│   ├── prisma.ts                  # Prisma client singleton (Neon adapter)
│   ├── plan-gate.ts               # Plan tier logic, feature checks, sermon quota validation
│   ├── usage.ts                   # checkSermonQuota() utility
│   └── utils.ts                   # Formatting helpers, fetchYouTubeTitle
├── prisma/
│   └── schema.prisma              # Database schema (15 models)
├── types/
│   └── index.ts                   # Shared TypeScript types + plan definitions
├── MOSAIC_HANDOFF.md              # Full Mosaic integration handoff document
└── README.md
```

---

## Architecture

```
┌──────────────────────────────────────────────────────────────────────┐
│                          Browser                                     │
│                                                                      │
│  Landing ──▶ Sign Up ──▶ Onboarding Wizard ──▶ Dashboard             │
│                                                   │                  │
│                              ┌────────────────────┤                  │
│                              │                    │                  │
│                         Upload Form         Sermon Detail            │
│                         (simplified /        (progress +             │
│                          full mode)           clip grid)             │
│                              │                    ▲                  │
│                              ▼                    │                  │
│                      ┌───────────────┐    ┌───────┴──────────┐       │
│                      │  API Routes   │    │ Webhook Handler   │       │
│                      │  /api/sermons │    │ /api/webhooks/    │       │
│                      │  /api/upload  │    │ mosaic            │       │
│                      │  /api/me      │    │                   │       │
│                      │  /api/usage   │    │ Increments        │       │
│                      │  /api/onboard │    │ sermonsProcessed  │       │
│                      └──────┬────────┘    └──────▲────────────┘       │
│                             │                    │                    │
└─────────────────────────────┼────────────────────┼────────────────────┘
                              │                    │
                              ▼                    │
┌─────────────────────────────────────────────────────────────────────┐
│                       External Services                              │
│                                                                      │
│  ┌─────────────────┐  ┌──────────────────┐  ┌────────────────────┐  │
│  │  Neon Postgres   │  │   Mosaic API     │  │   Clerk Auth       │  │
│  │  (via Prisma)    │  │   api.mosaic.so  │  │   clerk.com        │  │
│  │                  │  │                  │  │                    │  │
│  │  15 models:      │  │  Agent runs      │  │  User management   │  │
│  │  User, Sermon,   │  │  Video uploads   │  │  Webhook sync      │  │
│  │  Clip, Content,  │  │  YouTube triggers│  │  Sign-in/up pages  │  │
│  │  Social, Series, │  │  Webhooks ──▶    │  │                    │  │
│  │  Templates, etc. │  │  our endpoint    │  │                    │  │
│  └─────────────────┘  └──────────────────┘  └────────────────────┘  │
│                                                                      │
│  ┌─────────────────┐  ┌──────────────────┐                          │
│  │  PostHog         │  │   Vercel         │                          │
│  │  Analytics +     │  │   Deployment +   │                          │
│  │  funnel tracking │  │   hosting        │                          │
│  └─────────────────┘  └──────────────────┘                          │
└─────────────────────────────────────────────────────────────────────┘
```

**Processing flow:**
1. User submits YouTube URL, video URL, or uploads a video/audio file
2. API creates a Sermon record, `buildMosaicUpdateParams()` maps all options to tile params
3. `runAgent` sends video URL + `update_params` (clips, captions, reframe, music, branding, destination, etc.)
4. Mosaic processes through configured tiles, sends webhooks: `RUN_STARTED` → `RUN_PROGRESS` → `RUN_FINISHED`
5. On `RUN_FINISHED`, Clip records are created from `outputs[]` and `sermonsProcessed` is incremented
6. If `destination.mode === "publish"`, Mosaic auto-posts to connected social accounts
7. Dashboard polls via SWR and shows clips when ready

**Onboarding flow:**
1. New user signs up via Clerk (no credit card)
2. Dashboard detects `onboardingStep === null` → redirects to `/dashboard/welcome`
3. 3-step wizard saves church name, role, goal → celebration screen
4. Dashboard shows getting-started checklist (2/4 pre-completed)
5. Simplified upload form: YouTube URL only, auto-fetch title, "Create My Clips — It's Free"
6. After clips ready: value recap banner ("You saved ~4 hours!")
7. Second upload attempt → upgrade gate → `/dashboard/upgrade`

---

## Database

The schema is managed with Prisma (15 models). Key models:

| Model | Purpose |
|---|---|
| **User** | Synced from Clerk via webhook. Stores plan, `sermonsProcessed`, onboarding data, branding config, YouTube channel. |
| **Sermon** | Source URL, processing status/progress, Mosaic run ID, processing options, series membership. |
| **Clip** | Generated clips with video URL, thumbnail, format, download count. |
| **ContentPiece** | AI-generated content (summaries, blog posts, quotes, devotionals). |
| **SocialAccount** | Connected social platforms per user. |
| **ClipPublication** | Tracks where/when clips are published, with status + external URL. |
| **ClipAnalytics** | Per-clip performance metrics by platform and date. |
| **ScheduledPost** | Future-dated posts with platform, caption, status. |
| **ProcessingTemplate** | Saved presets for clip count, duration, captions, features. |
| **SermonSeries** | Named groups of sermons with images and date ranges. |
| **Montage** | Combined multi-clip videos with transition styles. |
| **Graphic** | AI-generated images (quote cards, thumbnails, carousels). |
| **Campus** | Multi-campus locations with per-campus branding. |
| **SuggestedClip** | AI-detected clip-worthy moments with topic, hook score, timestamps. |
| **Course** | Multi-week study courses generated from sermon series. |

```bash
# Push schema changes to database
npx prisma db push

# Open Prisma Studio
npx prisma studio
```

---

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_APP_URL` | Public URL (e.g. `https://sermon-clips.com`) |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key |
| `CLERK_SECRET_KEY` | Clerk secret key |
| `CLERK_WEBHOOK_SECRET` | Clerk webhook signing secret |
| `DATABASE_URL` | Neon Postgres connection string (pooled) |
| `DIRECT_URL` | Neon Postgres direct connection string |
| `MOSAIC_API_KEY` | Mosaic API key (`mk_` prefix) |
| `MOSAIC_WEBHOOK_SECRET` | Mosaic webhook secret (`whsk_` prefix) |
| `NEXT_PUBLIC_POSTHOG_KEY` | PostHog project API key |
| `NEXT_PUBLIC_POSTHOG_HOST` | PostHog API host (default: `https://us.i.posthog.com`) |

---

## PostHog Funnel Events

| Event | Funnel Position |
|---|---|
| `onboarding_started` | Top of funnel |
| `onboarding_step_completed` | |
| `onboarding_completed` | |
| `onboarding_skipped` | |
| `free_upload_started` | |
| `sermon_created` | |
| `free_clips_viewed` | Aha moment |
| `upgrade_gate_shown` | Conversion point |
| `upgrade_page_viewed` | |
| `upgrade_plan_selected` | |

---

## Deployment

Deployed on Vercel. Pushes to `main` trigger automatic deployments.

```bash
# Check deployment status
vercel ls

# Monitor a build
vercel inspect --logs --wait <deployment-url>
```

---

## License

Private repository.
