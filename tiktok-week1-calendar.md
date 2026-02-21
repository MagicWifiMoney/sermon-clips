# @clipyoursermons — TikTok Week 1 Content Calendar
**Week:** Feb 24 – Mar 2, 2026  
**Account:** @clipyoursermons | TikTok ID: 44765  
**Goal:** Establish posting cadence, test content pillars, build initial audience  
**Frequency:** 4 posts this week (Mon/Wed/Fri/Sun) — ramp up in Week 2

---

## Strategy Overview

**Who we're targeting:** Church media directors, comms volunteers, pastors — people already doing (or wanting to do) social media for their church who need help with clips.

**Content pillars this week:**
1. Pain point / relatability (Monday — capture people who feel this)
2. Education / actionable tips (Wednesday — give them real value)
3. How-to framework (Friday — something they can save and use)
4. Emotional/mission-driven (Sunday — remind them WHY it matters)

**Posting times (Central):**
- Sunday: 7:00 PM CST (peak faith content window)
- Monday: 6:00 PM CST
- Wednesday: 4:00 PM CST (Wednesday bump from research)
- Friday: 3:00 PM CST

---

## Week 1 Calendar

### Monday, Feb 24 — Post 1
**Script:** #1 — "The Sunday Backlog"  
**Pillar:** Pain Point / Relatability  
**Tone:** Tired-but-relatable, casual coffee chat  
**Hook text:** "Every Monday morning for church media people 💀"  
**Post time:** 6:00 PM CST  
**Format:** Talking head, phone camera  
**Hashtags:** #churchmedia #sermonclips #churchtiktok #faithcontent #christiancreators  
**CTA:** Follow for weekly tips  
**Status:** 🟡 Script ready — needs recording  
**Post Bridge draft:** Set to SELF_ONLY draft once video is recorded

---

### Wednesday, Feb 26 — Post 2
**Script:** #2 — "The 3-Second Rule"  
**Pillar:** Education / Hook Strategy  
**Tone:** Direct, slightly urgent — "here's what you're getting wrong"  
**Hook text:** "Your sermon clips are failing because of this ONE mistake ❌"  
**Post time:** 4:00 PM CST  
**Format:** Talking head with text overlays  
**Hashtags:** #sermonclips #churchtiktok #faithtok #churchmedia #christiancontent  
**CTA:** Drop your pastor's best recent line in comments  
**Status:** 🟡 Script ready — needs recording  
**Notes:** High engagement hook — ask for comments to boost algorithm signal

---

### Friday, Feb 28 — Post 3
**Script:** #3 — "One Sermon, 7 Days of Content"  
**Pillar:** How-to / Framework  
**Tone:** Informative, upbeat, confident  
**Hook text:** "One sermon = 7 days of content 🤯 Here's how"  
**Post time:** 3:00 PM CST  
**Format:** Talking head OR screen demo with text overlays listing each day  
**Hashtags:** #sermonclips #churchmedia #churchsocialmedia #faithcontent #christiancreators  
**CTA:** Save this video — and comment which day you'll start  
**Status:** 🟡 Script ready — needs recording  
**Notes:** HIGH SAVE POTENTIAL — "save this" content is favored by algorithm  
**Best performer prediction:** This one. Educational + saves + shareable.

---

### Sunday, Mar 1 — Post 4
**Script:** #4 — "What Your Congregation Isn't Seeing"  
**Pillar:** Emotional / Mission-Driven  
**Tone:** Sincere, earnest — no energy, just truth  
**Hook text:** "Your pastor's message could change someone's life this week."  
**Post time:** 7:00 PM CST (post-church prime time)  
**Format:** Talking head, quiet setting, look into camera  
**Hashtags:** #faith #churchmedia #sermonclips #christiancontent #faithtok  
**CTA:** Follow + ask what sermon topic they wish they had a clip of  
**Status:** 🟡 Script ready — needs recording  
**Notes:** Emotional resonance post — best if posted authentically after church service

---

## Week 2 Preview (Mar 3-9)

| Day | Script | Pillar |
|-----|--------|--------|
| Mon Mar 3 | Script #5 — "The 3-Clip Test" | Challenge / Engagement |
| Wed Mar 5 | NEW — Screen demo of a real clip in action | Product Demo |
| Fri Mar 7 | NEW — "Hook templates that actually work for church content" | Education |
| Sun Mar 9 | NEW — Community/comment response post | Engagement loop |

---

## Video Production Checklist

Before recording any script:
- [ ] Phone charged, camera rear-facing (better quality)
- [ ] Good natural light (window in front of speaker, not behind)
- [ ] Clean or intentional background (bookshelf, church, or solid color wall)
- [ ] Caption your video in TikTok app before posting
- [ ] Vertical 9:16 format — DO NOT record horizontal
- [ ] Keep under 60 seconds
- [ ] Read the hook out loud 3x before recording — it needs to feel natural

---

## Post Bridge Workflow (when videos are ready)

1. Upload video file to Post Bridge:
   ```
   POST /v1/media/create-upload-url
   {"mime_type":"video/mp4","size_bytes":<size>,"name":"week1-post1.mp4"}
   ```
2. PUT binary to the returned upload_url
3. Create post as DRAFT (so music can be added manually in TikTok):
   ```json
   {
     "caption": "<paste caption from script>",
     "media": ["<media_id>"],
     "social_accounts": [44765],
     "platform_configurations": {
       "tiktok": { "draft": true, "video_cover_timestamp_ms": 3000 }
     }
   }
   ```
4. Open TikTok app → inbox → find uploaded draft
5. Add trending sound manually (browse TikTok Creative Center first)
6. Publish at scheduled time

**TikTok account ID:** 44765  
**Note:** Draft mode = TikTok saves it in your drafts so you can add trending audio before publishing. This is the recommended workflow.

---

## Success Metrics — Week 1 Targets

| Metric | Target |
|--------|--------|
| Posts published | 4 |
| Total views | 500+ |
| Follows gained | 10+ |
| Comments received | 5+ |
| Top-performing post | Script #3 (saves-focused) |

**Review date:** Sun Mar 2, 2026 — check TikTok analytics before Week 2

---

## Current Status (2026-02-20)

- ✅ Research read and strategy understood
- ✅ 5 video scripts written and saved
- ✅ Week 1 content calendar created
- ✅ Post Bridge account verified (TikTok ID: 44765)
- 🔴 **Video assets:** NONE exist yet — all posts need recording
- 🟡 **Next action for Jake:** Record 4 talking-head videos using the scripts above
  - OR: Source a willing church partner to demo a real clip workflow
- 🟡 **Optional quick win:** Find a royalty-free sermon clip on YouTube (Creative Commons licensed church) and use it for Script #1 demo, crediting the source

---

## Notes on Staging

Since no video assets exist, no posts have been staged via Post Bridge. The workflow is ready and the scripts are written — the bottleneck is having actual video to post.

**Fastest path to first post:**
1. Jake records himself doing Script #1 on his phone (30 seconds, one take, coffee in hand)
2. Upload → Post Bridge draft → add sound → publish
3. Done.

No studio. No editor. That's the whole point of the brand.
