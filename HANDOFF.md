# Sermon Clips — Session Handoff (Feb 12, 2026)

## Session Summary
Implemented the full Mosaic feature build across 7 work blocks — every UI surface, API stub, and data model that Sermon Clips owns so the Mosaic team can wire their API calls. All code is on `main`, deployed to sermon-clips.com via Vercel.

---

## Decisions Made

1. **Single branch workflow** — Merged `Claudy` → `main` and deleted `Claudy` branch entirely. All future work goes directly on `main` or new feature branches.

2. **Stale Vercel projects cleaned up** — Deleted `sermon-clips-deploy` and `sermon-clips` Vercel projects. Only `church-clips-landing` (sermon-clips.com) remains. This fixed the false "2/3 checks failing" on GitHub.

3. **Mosaic stubs as throw functions** — All Mosaic integration points throw with `"Not implemented — Mosaic team integration pending"` so the team knows exactly where to wire in. Exception: `generateCaption()` returns a template string so the UI works end-to-end.

4. **Schema uses Json fields for flexible config** — `processingOptions`, `brandingConfig`, `connectedYoutubeChannel` are all `Json?` on their respective models, with TypeScript types enforcing shape on the app side. This avoids rigid migrations as Mosaic's API evolves.

5. **Sidebar sticky positioning** — Changed from `static` to `sticky + h-screen` on desktop so the sidebar fills the full viewport height.

---

## Changes Completed (34 files, 2,881 lines added)

### Schema (prisma/schema.prisma)
- **New models:** `SocialAccount`, `ClipPublication`, `ClipAnalytics`, `ScheduledPost`
- **Modified:** `User` (+plan field), `Sermon` (+processingOptions, +publishMode), `Clip` (+publications, +analytics relations)
- Schema pushed to Neon DB with `prisma db push`

### Types (types/index.ts)
- `ProcessingOptions`, `BrandingConfig`, `YouTubeChannelConfig`, `SocialPlatform`, `DripSchedule`, `PlanTier`, `PLAN_LIMITS`, `AnalyticsSummary`, `ClipPerformanceRow`, `DateRange`, `PublicationStatus`, etc.

### Mosaic Stubs (lib/mosaic.ts)
- `startSermonProcessing()` — now accepts processingOptions + publishMode
- `getRunStatus()`, `getUploadUrl()`, `finalizeUpload()` — refined return types
- **New:** `registerYouTubeTrigger()`, `removeYouTubeTrigger()`, `connectSocialAccount()`, `disconnectSocialAccount()`, `publishClip()`, `generateCaption()`

### New Components (10 files)
| Component | Location |
|-----------|----------|
| ProcessingOptionsPanel | `components/dashboard/processing-options.tsx` |
| BrandingSettings | `components/dashboard/branding-settings.tsx` |
| IntegrationsSettings | `components/dashboard/integrations-settings.tsx` |
| AnalyticsOverview | `components/dashboard/analytics-overview.tsx` |
| ClipPerformanceTable | `components/dashboard/clip-performance-table.tsx` |
| PublishTab | `components/dashboard/publish-tab.tsx` |
| ClipPublishCard | `components/dashboard/clip-publish-card.tsx` |
| SocialAccountBar | `components/dashboard/social-account-bar.tsx` |
| DripSchedule | `components/dashboard/drip-schedule.tsx` |
| ConfirmDialog | `components/ui/confirm-dialog.tsx` |

### New Pages (2 files)
- `/dashboard/analytics` — `app/(dashboard)/dashboard/analytics/page.tsx`
- `/dashboard/publishing` — `app/(dashboard)/dashboard/publishing/page.tsx`

### New API Routes (14 files)
| Route | Method | Purpose |
|-------|--------|---------|
| `/api/settings/branding` | GET, POST | Load/save branding config |
| `/api/integrations/youtube/connect` | POST | YouTube channel connection stub |
| `/api/integrations/youtube/settings` | POST | Auto-process + default options |
| `/api/social/connect` | POST | Social OAuth initiation stub |
| `/api/social/accounts` | GET | List connected accounts |
| `/api/social/[platform]` | DELETE | Disconnect social account |
| `/api/clips/[id]/publish` | POST | Publish clip to platforms |
| `/api/clips/[id]/caption` | POST | AI caption generation stub |
| `/api/sermons/[id]/publications` | GET | Publication status for sermon |
| `/api/sermons/[id]/retry` | POST | Re-trigger processing |
| `/api/analytics` | GET | Analytics data (real aggregation from ClipAnalytics) |
| `/api/schedule` | GET, POST | Drip schedule CRUD |

### Modified Files
| File | Changes |
|------|---------|
| `components/dashboard/upload-form.tsx` | Added ProcessingOptions panel, Video URL tab, shared submit helper |
| `components/dashboard/sidebar.tsx` | Added Analytics + Publishing nav, sticky positioning |
| `components/dashboard/processing-status.tsx` | Added `onRetry` prop, wired Try Again + Contact Support mailto |
| `app/(dashboard)/dashboard/settings/page.tsx` | Tabbed layout (Account/Branding/Integrations), cleaned Clerk widget |
| `app/(dashboard)/dashboard/sermons/[id]/page.tsx` | Added Clips/Publish/Schedule tabs, Download All, Delete with confirm, retry |
| `app/api/sermons/route.ts` | Accepts processingOptions + publishMode, "url" source type |
| `app/api/sermons/[id]/route.ts` | Added DELETE method |

---

## Blockers / Unresolved

1. **Notion MCP token expired** — Can't fetch the Mosaic engineering spec from Notion (`https://www.notion.so/Mosaic-Sermon-Clips-963825fdf9364e40a7063f30227a4977`). Need to re-authorize in Claude Code settings, OR paste the doc content into chat for gap analysis.

2. **Clerk UserProfile CSS overrides** — Used `[&_.cl-navbar]:hidden` CSS hack to hide Clerk's internal nav. Works but fragile — Clerk could change class names in updates. The Clerk widget still has its own internal "Account" header that's hard to fully suppress.

3. **GitHub checks still show old failure** — The `sermon-clips-deploy` project was deleted but the existing commit status (X on e58e2c8) is permanent on that SHA. Next push to main will show clean checks since the stale project no longer exists.

4. **No file upload integration** — The drag-drop file upload creates a sermon record but doesn't actually upload the file anywhere. The upload flow creates the DB record then calls `/api/upload/start` which is a stub. Mosaic needs to provide the upload URL mechanism.

---

## Next Steps (Priority Order)

### Immediate: Notion Spec Gap Analysis
- Re-auth Notion MCP or paste the doc content
- Compare the Mosaic engineering spec against what's built
- Identify any missing workflows, API contracts, or UI surfaces
- Build anything that's missing

### From the Original Plan (Features to Verify/Complete)
1. **Verify all 19 checklist items** from the plan pass on the live site
2. **Mobile responsiveness** — Test all new pages on mobile viewport
3. **Plan tier gating** — Enhancement toggles show lock icons but don't actually enforce tier limits. Need to read `user.plan` and disable features accordingly.
4. **Real file uploads** — When Mosaic provides upload URLs, wire the drag-drop to actually upload
5. **Webhook handling** — The Mosaic webhook receiver exists at `/api/webhooks/mosaic` but needs to handle the new `ClipPublication` and `ClipAnalytics` models

### Infrastructure
- Consider adding error boundaries around the new pages
- The analytics page currently uses static empty data — wire to SWR fetch from `/api/analytics`

---

## Key File Paths
```
/Users/jacobgiebel/sermon-clips/          — repo root
├── prisma/schema.prisma                   — 4 new models
├── types/index.ts                         — all shared types
├── lib/mosaic.ts                          — Mosaic API stubs
├── lib/prisma.ts                          — Prisma client (Neon adapter)
├── components/dashboard/                  — all dashboard UI
├── components/ui/                         — shared UI primitives
├── app/(dashboard)/dashboard/             — dashboard pages
├── app/api/                               — all API routes
└── HANDOFF.md                             — this file
```

## Environment
- **Repo:** github.com/MagicWifiMoney/sermon-clips (branch: `main`)
- **Live:** sermon-clips.com (Vercel project: `church-clips-landing`)
- **DB:** Neon project `odd-mode-57390865`, database `neondb`
- **Auth:** Clerk
- **Last commit:** `2cffc52` "Fix sidebar to stretch full viewport height"
