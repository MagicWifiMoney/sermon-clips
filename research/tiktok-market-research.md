# Sermon Clips TikTok Market Research
**Date:** 2026-02-12
**Purpose:** Market intelligence for TikTok content strategy (no hooks/features — pending Jake's updated PRD)

---

## 1. Competitive Landscape — Sermon Clipping Tools

### Direct Competitors (Church-Specific)

| Tool | Pricing | Key Features | Weaknesses |
|------|---------|-------------|------------|
| **SocialSermons** | $499-$2,399/mo | Full-service (done-for-you), human editors, hooks injected into first seconds, quote posts, carousels, blog posts | Expensive, not scalable for small churches |
| **ChurchSocial.ai** | Base + $49/mo addon | AI sermon clips, auto-crop tracking, scheduling, caption writer, PCO integration | Addon model, limited customization |
| **Sermon Shots** | ~$29-49/mo | Won 40% in blind clip comparison, good speaker tracking, brand kit, logo/background overlay | Limited to clipping only |
| **Outreach Social** | Unknown | AI skips worship, transcribes, clips, crops portrait, centers speaker, adds captions + logo | Part of larger Outreach platform |
| **Pulpit.ai** | Unknown | Church-specific AI clipping | Newer, less established |
| **Post Sunday** | Unknown | Sermon repurposing | Limited info |

### General AI Clipping Tools (Used by Churches)

| Tool | Pricing | Notes |
|------|---------|-------|
| **Opus Clip** | $9-19/mo | Best value, good for first-timers, less customization |
| **Munch** | ~$49/mo | Best UX, good multi-step process |
| **AutoClip.ai** | ~$29/mo | Clips sometimes too long per industry feedback |
| **Vizard** | ~$20/mo | General purpose, not church-optimized |
| **Kapwing** | ~$24/mo | General editor with AI features |

### Key Insight: MASSIVE Price Gap
- **Done-for-you:** $499-$2,399/mo (SocialSermons)
- **DIY AI tools:** $9-49/mo (Opus Clip, Sermon Shots, etc.)
- **The gap:** Nothing between $49 and $499 that combines AI automation with church-specific optimization

### Competitor Pain Points (from user feedback)
- Generic AI tools don't understand sermon structure (worship vs teaching vs altar call)
- Auto-selected clips often miss the best moments
- Speaker tracking inconsistent across platforms
- No tool handles the full pipeline: clip → caption → schedule → post → analyze
- Churches lack technical staff to use complex tools
- Most tools are clip-only — no broader content strategy

---

## 2. Church Social Media Market

### Market Size
- ~380,000 churches in the US
- ~60-70% have some social media presence
- ~20-30% actively post weekly
- Typical church media budget: $0-500/mo (small), $500-2,000/mo (medium), $2,000+/mo (large/mega)
- Most churches rely on volunteers for social media

### Who Makes Buying Decisions
1. **Senior/Lead Pastor** — final say, but rarely manages execution
2. **Communications/Media Director** — primary user, makes recommendations (exists at churches 500+ attendance)
3. **Youth Pastor** — often the most tech-savvy, pushes for modern tools
4. **Volunteer coordinator** — at smaller churches, a volunteer manages everything
5. **Executive Pastor/Church Admin** — budget approval

### Key Pain Points (from community research)
1. **"We value social media but we're already spread too thin"** — #1 complaint (SocialSermons founder confirms)
2. **Consistency** — churches post sporadically, no content calendar
3. **Technical skills** — volunteers don't know video editing
4. **Time** — pastors spend 15-25 hours writing sermons, zero time left for repurposing
5. **Reach beyond congregation** — most content only reaches existing members
6. **Youth engagement** — churches losing Gen Z/Millennial audience
7. **Measuring impact** — no clear ROI metrics for social media ministry

### Where Church Media People Hang Out
- Facebook Groups: "Church Communications" (45K+), "Church Social Media Ideas" (30K+)
- Reddit: r/churchtechnology, r/churchav
- Conferences: Church Communications Conference (Sept), Orange Conference, SALT Conference
- Podcasts: Pro Church Tools, Church Juice, The Unstuck Church
- Platforms: Planning Center Online community, Churchfluence.com

---

## 3. Top Christian TikTok Creators (by followers)

| Creator | Handle | Followers | Style |
|---------|--------|-----------|-------|
| Ariel Fitz | @ariel.fitz | 3.3M | Music/faith lifestyle |
| Jacob Petersen | @jacobpetersen_ | 3M | Couples/faith |
| Joe Navarro | @joechristianguy | 2.5M | Personality-driven faith |
| Lee Snow | @leemsnow | 1.9M | Comedy + faith |
| Sibongile Kajane | @sibongilekajane | 1.3M | Faith lifestyle |
| Aatiqah J | @aatiqahj | 1.1M | Cozy faith + motherhood |
| Ashley Hetherington | @ashleyhetherington | 840K | Big sis in Christ |
| Julia Petersen | @juliaapoee | 824K | Faith devotional |
| Mitch Muller | @mitch_muller | 783K | Empowering warriors for Christ |
| Josh Benson | @joshbensontherapper | 706K | Christian rap |
| Dayne | @daynekamela | 651K | Daily prayer |
| Julienne | @julienneipapo | 590K | Storytelling/wisdom |
| Zack & Megh | @zackandmegh | 584K | Married pastor couple |

### Content Format Observations
- **Individual influencers dominate** (not churches) — personal brands > institutional accounts
- **Talking head + text overlay** is the dominant format for sermons
- **Quote/text slideshows** (what we'd build) are underutilized in sermon space
- **Comedy/relatability** outperforms pure preaching
- **Music + worship clips** go viral on YouTube Shorts more than TikTok
- **Seasonal content** (Christmas carols, Easter) consistently outperforms

### What Goes Viral
- Emotional moments (altar calls, testimonies, breakthroughs)
- Surprising/provocative statements from pastors
- Relatable "church kid" humor
- Before/after spiritual transformation stories
- Trending sound + faith twist

---

## 4. TikTok Platform Intelligence

### Carousel/Slideshow Specs (2026)
- **Recommended size:** 1080x1920px (9:16 portrait)
- **Also works:** 1080x1350 (4:5), 1080x1080 (1:1)
- **Image count:** 2-35 images per carousel
- **Max file size:** 500MB total
- **Format:** JPEG, PNG, WEBP
- **Photo Mode vs Slideshow:** Photo Mode = manual swipe (higher engagement signal), Slideshow = auto-play

### TikTok Content Posting API
- **Direct post supported:** Yes (video + photo)
- **Privacy levels:** PUBLIC_TO_EVERYONE, MUTUAL_FOLLOW_FRIENDS, FOLLOWER_OF_CREATOR, SELF_ONLY (drafts)
- **Music via API:** `autoAddMusic` option exists (TikTok picks), but can't specify a trending sound
- **Limitation:** Music must be added manually for trending sounds (same as Oliver's workflow)

### Posting Tools with TikTok API

| Tool | Carousel Support | API | Pricing |
|------|-----------------|-----|---------|
| **Postiz** | Yes (slideshows) | Full REST API | ~$20/mo (Standard) |
| **PostFast** | Yes (carousels) | REST API | ~$15/mo |
| **Buffer** | Limited | No public API | $6-120/mo |
| **Later** | Limited | No public API | $25-80/mo |
| **Direct TikTok API** | Yes | Free but requires app approval | Free |

### Postiz Key Details (Oliver's choice)
- Has REST API included in plan
- Good documentation for AI agents to understand
- Supports slideshows as drafts (SELF_ONLY privacy)
- Can't add trending music via API — must be done manually
- Relatively cheap (~$20/mo)

### Algorithm Notes (2025-2026)
- **Carousels get boosted** — TikTok pushing Photo Mode to compete with Instagram
- **Engagement signal:** Time spent swiping through slides counts as engagement
- **Save rate** is the #1 metric for carousel distribution
- **Optimal post frequency:** 1-3x/day for growth, minimum 3x/week to stay relevant
- **Best posting times for faith content:** 7-9am (morning devotional), 7-9pm (evening scroll), Sunday 12-3pm (post-church)

---

## 5. Key Takeaways for Sermon Clips Strategy

1. **Massive price gap** between DIY ($9-49/mo) and done-for-you ($499-2,399/mo) — room for an automated middle ground
2. **Individual creators > church accounts** on TikTok — consider building a personality-driven brand
3. **Carousels/slideshows are underutilized** in the sermon niche — mostly video clips right now
4. **Churches' #1 pain:** "Too busy to post consistently" — automation is the answer
5. **Music must be added manually** — same workflow as Oliver (draft → add sound → publish)
6. **Postiz or PostFast** for API-based posting — both support slideshows
7. **Save rate > views** for TikTok carousel distribution
8. **Seasonal content** (Christmas, Easter) has proven viral potential in faith space
9. **The "discovery era"** favors short-form content placed in front of new audiences — perfect for sermon clips
10. **Competitor blind spot:** Nobody is doing AI-generated visual slideshows from sermon content — they're all doing video clips
