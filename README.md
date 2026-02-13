# Sermon Clips

Turn full-length sermons into short-form video clips ready for social media. Upload a sermon or paste a YouTube link, and the platform handles clip detection, captioning, reframing, and export.

**Live:** [sermon-clips.com](https://sermon-clips.com)

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
│   ├── (auth)/              # Sign-in / sign-up pages (Clerk)
│   ├── (dashboard)/         # Authenticated dashboard layout
│   │   └── dashboard/
│   │       ├── page.tsx         # Main dashboard (stats + sermon list)
│   │       ├── upload/          # Upload / YouTube URL form
│   │       ├── sermons/[id]/    # Sermon detail (progress, clips, downloads)
│   │       ├── analytics/       # Analytics page
│   │       ├── publishing/      # Social publishing
│   │       ├── montage/         # Clip montage builder
│   │       ├── series/[id]/     # Sermon series detail
│   │       └── settings/        # Account + branding settings
│   ├── api/
│   │   ├── sermons/             # CRUD + auto-trigger Mosaic processing
│   │   ├── upload/              # Signed upload URL + finalize
│   │   ├── clips/               # Download, publish, caption generation
│   │   ├── webhooks/
│   │   │   ├── clerk/           # Clerk user sync webhook
│   │   │   └── mosaic/          # Mosaic processing event webhook
│   │   ├── integrations/youtube/ # YouTube channel connect + triggers
│   │   ├── social/              # Social account management
│   │   ├── analytics/           # Analytics + ROI endpoints
│   │   ├── series/              # Sermon series management
│   │   ├── templates/           # Processing template CRUD
│   │   ├── settings/            # Branding config
│   │   └── ...                  # Montage, schedule, batch, etc.
│   ├── blog/                # SEO blog pages
│   └── page.tsx             # Landing page
├── components/
│   ├── dashboard/           # Dashboard-specific components
│   └── ui/                  # Shared UI primitives
├── lib/
│   ├── mosaic-client.ts     # Thin HTTP client for Mosaic REST API
│   ├── mosaic.ts            # Business logic (6 live + 15 stubs)
│   └── prisma.ts            # Prisma client singleton (Neon adapter)
├── prisma/
│   └── schema.prisma        # Database schema
├── types/
│   └── index.ts             # Shared TypeScript types
└── MOSAIC_HANDOFF.md        # Integration handoff doc
```

---

## Architecture

```
┌──────────────────────────────────────────────────┐
│                  Browser                         │
│                                                  │
│  Landing ──▶ Sign In ──▶ Dashboard               │
│                          │                       │
│                    Upload / YouTube URL           │
│                          │                       │
└──────────────────────────┼───────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────┐
│              Next.js API Routes                  │
│                                                  │
│  POST /api/sermons ──▶ startSermonProcessing()   │
│  POST /api/upload/start ──▶ getUploadUrl()       │
│  POST /api/upload/finalize ──▶ finalizeUpload()  │
│  POST /api/webhooks/mosaic ◀── Mosaic webhooks   │
│                                                  │
└───────────┬──────────────────────┬───────────────┘
            │                      │
            ▼                      ▼
┌───────────────────┐  ┌───────────────────────────┐
│   Neon Postgres   │  │      Mosaic API            │
│   (via Prisma)    │  │   api.mosaic.so            │
│                   │  │                             │
│  Users            │  │  Agent Runs                 │
│  Sermons          │  │  Video Uploads              │
│  Clips            │  │  YouTube Triggers           │
│  Content Pieces   │  │  Webhooks ──▶ our endpoint  │
│  Social Accounts  │  │                             │
│  ...              │  └─────────────────────────────┘
└───────────────────┘
```

**Processing flow:**
1. User submits YouTube URL or uploads a video file
2. API creates a Sermon record and calls Mosaic's `runAgent`
3. Mosaic processes the video (clip detection, captions, reframing)
4. Mosaic sends webhooks: `RUN_STARTED` → `RUN_PROGRESS` → `RUN_FINISHED`
5. On `RUN_FINISHED`, Clip records are created from `outputs[]`
6. Dashboard polls via SWR and shows clips when ready

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
| `MOSAIC_AGENT_ID` | Mosaic agent UUID |

---

## Database

The schema is managed with Prisma. Key models:

- **User** — synced from Clerk via webhook, stores branding config + YouTube channel
- **Sermon** — tracks source, processing status, progress, Mosaic run ID
- **Clip** — generated clips with video URL, thumbnail, download count
- **ContentPiece** — AI-generated content (summaries, blog posts, quotes)
- **SocialAccount** — connected social platforms
- **ClipPublication** — tracks where clips are published
- **SuggestedClip** — AI-detected clip-worthy moments

```bash
# Push schema changes to database
npx prisma db push

# Open Prisma Studio
npx prisma studio
```

---

## Mosaic Integration

6 core functions are live (see `lib/mosaic.ts`):

| Function | What It Does |
|---|---|
| `startSermonProcessing` | Triggers a Mosaic agent run on a video |
| `getRunStatus` | Polls run status + calculates progress |
| `getUploadUrl` | Gets a signed URL for direct file upload |
| `finalizeUpload` | Marks upload complete, returns video URL |
| `registerYouTubeTrigger` | Auto-process new uploads from a channel |
| `removeYouTubeTrigger` | Remove a YouTube auto-trigger |

15 additional stubs exist for features that need separate services (social publishing, AI content, graphics, translation). See [MOSAIC_HANDOFF.md](./MOSAIC_HANDOFF.md) for details.

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
