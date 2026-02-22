# Feature Research — February 21, 2026

**Source:** Competitive analysis (ChurchSocial.ai, SermonShots, OpusClip, Captions.ai), ChurchTechToday editorial coverage, industry trend analysis.

---

## 🔥 Immediate Market Opportunity: Easter AI Stack

**Easter 2026 = April 5.** Six weeks away. This is the single biggest outreach event for churches every year — their "Super Bowl." 

ChurchTechToday is already pushing the "Easter AI Stack" concept: one sermon → 40+ coordinated content pieces across every channel. Churches are actively looking for this right now.

**Action for Sermon Clips:**
- Build an "Easter Package" landing page or campaign within the app
- Position as: "Upload your Easter sermon. Get your entire Easter content package."
- Email campaign to current users: "Are you ready for Easter?"
- Blog post targeting "Easter sermon clips" / "Easter church social media content"
- This is a NOW opportunity — needs to happen this week.

---

## 📊 Competitor Landscape (Updated)

### ChurchSocial.ai (formerly Discipls) — Direct Competitor
**What they have that we don't:**
- Native social media scheduler (FB, IG, X, TikTok, YouTube, Google Business) with calendar UI
- **Planning Center Online integration** — huge deal for organized churches
- Design Studio — customizable graphics + AI generation ($15/mo addon)
- Team/multi-user collaboration
- Sermon Studio is an **addon at $49/mo** — clips are not their core

**Their weakness:** They're a social media scheduler first, clip tool second. Sermon Studio is bolted on. We're purpose-built for sermon video.

**Their pricing structure (important):**
- Base plan (scheduling + AI captions) + $49/mo Sermon Studio addon
- Total for clips = likely $70-100+/mo
- We're all-in at $29/$59/$149 → competitive if we add the missing features

---

### SermonShots — Direct Competitor
**What they have that we don't:**
- Small Group Discussion Guide generation from transcript
- Blog post generation from transcript
- Devotional content generation
- "Sermon Send" social publishing integration

**Their approach:** Template-first clip selection (choose a template → AI suggests moments). More manual control than we offer.

**Their weakness:** Heavier on templates, lighter on full automation. No translation/dubbing (30+ languages is our differentiator).

---

### OpusClip — Upstream Competitor (General Market)
**What they have:**
- "Virality Score" on every clip — quantified prediction of clip performance
- Contextual B-roll — AI pulls stock footage based on what's said
- Brand Kit (logos, colors, fonts persist across clips)
- Eye contact correction (AI makes it look like speaker faces camera)

**Why they're losing church users:** Not church-specific vocabulary, no theological term handling, no pastoral tone consideration, no small group content, no integration with church tools.

**What we should steal:** Virality Score concept. Churches respond well to data — "this clip has an 87 virality score" is compelling even if they don't know what it means.

---

## 🎯 Feature Gap Analysis

### High Priority (ship in 30 days)

| Feature | Competitor Has | Sermon Clips | Effort |
|---|---|---|---|
| Discussion Guide / Study Guide from transcript | SermonShots ✅ | Stub (needs OpenAI) | Low — transcript already exists |
| Blog post summary from sermon | SermonShots ✅ | Stub | Low |
| "Virality score" / clip confidence score | OpusClip ✅ | ❌ | Medium |
| Easter Campaign landing page | Nobody targeting this | ❌ | Low-Medium |

### Medium Priority (30-90 days)

| Feature | Competitor Has | Sermon Clips | Effort |
|---|---|---|---|
| Planning Center Online integration | ChurchSocial ✅ | ❌ | Medium-High |
| Native social scheduler with calendar | ChurchSocial ✅ | Mosaic Destination (limited UI) | High |
| AI-generated graphics / quote cards | ChurchSocial ✅, SermonShots ✅ | Stub (needs DALL-E/Replicate) | Medium |
| Brand Kit (persistent logo/fonts) | OpusClip ✅ | Unknown | Medium |
| Multi-user team management | ChurchSocial ✅ | Unknown | High |
| Eye contact correction | Captions.ai ✅, OpusClip ✅ | Via Mosaic? | Medium |
| Contextual B-roll (AI selects footage by keyword) | OpusClip ✅ | Via Mosaic (generic) | High |

### Lower Priority (90+ days)

| Feature | Status | Notes |
|---|---|---|
| Planning Center calendar sync | Would be a moat | They publish service orders — we auto-clip when sermon is uploaded |
| Devotional content generation | SermonShots shipping | Useful upsell for daily engagement |
| Podcast show notes automation | Nobody church-specific | Good SEO content too |
| Multi-language dubbing (not just captions) | We have via Mosaic | Should be prominently marketed |
| Sermon archive + search | Nobody has this church-specific | Long-term SEO moat |

---

## 🏃 Quick Wins (This Week)

### 1. Discussion Guide / Study Guide
The sermon transcript is already generated. Sending it to OpenAI/Claude with a prompt to generate 5-7 discussion questions, a summary, and a key verse takes ~30 seconds. This could unlock:
- A new tab in the clip dashboard: "Study Content"
- Adds value for pastors and small group leaders, not just media teams
- Potential upsell: "Study Guide generation" as part of Growth/AutoPilot plans

**Prompt template:**
```
You are a church curriculum writer. Based on this sermon transcript, generate:
1. A 3-sentence sermon summary suitable for the bulletin/email
2. 5-7 small group discussion questions
3. The 2-3 key Scripture references mentioned
4. One "takeaway" sentence for social media

Transcript: [transcript]
```

### 2. Easter Campaign Positioning
Add an "Easter" section or badge to the app and landing page. "🐣 Easter is April 5. Get your Easter content ready." This is pure marketing but timed perfectly.

### 3. Clip Confidence Score
Mosaic likely returns scoring metadata with clips. Surface it as a "Reach Score" or "Share Score" on each clip card. Even if it's not perfect, it gives media teams a decision-making shortcut.

---

## 🚨 Planning Center Integration — The Big Moat

**Planning Center Online (PCO)** is the dominant church management software — used by thousands of mid-to-large churches. It handles service planning, volunteer scheduling, giving, check-in, and more.

ChurchSocial has an integration. SermonShots does not. We don't.

**Why this matters:** When a church sets up their Sunday service in PCO, they're already organizing their sermon content. If Sermon Clips integrates with PCO:
- We know the sermon series name, the Scripture passage, the pastor name — automatically
- We can auto-suggest clip titles and hashtags
- We can notify the media team when the service is complete (trigger upload workflow)
- We become part of their existing Sunday workflow, not an extra tool

**PCO has an API:** https://developer.planning.center/

This is a 30-60 day engineering project but it creates a defensible moat that ChurchSocial holds right now.

---

## 📈 Market Signals

### "AI Stack" Thinking is Mainstream in Churches
ChurchTechToday is positioning "Easter AI Stack" as the 2026 standard. Churches now think in terms of connected pipelines, not individual tools. Our pitch needs to match this: "Sermon Clips is your church's content pipeline, not just a clip tool."

### Agentic AI is the New Vocabulary
Churches are learning to think about AI that *does* things rather than just answering questions. Sermon Clips is already agentic — you upload a sermon and it executes an entire workflow. The word "agent" should be in our vocabulary.

### Small Church Market is Underserved
The big tools (OpusClip, Captions.ai) serve creators with budgets. ChurchSocial and SermonShots serve organized church media teams. Nobody is clearly winning the "small church with no media team" segment — 1-3 person staff, volunteer-run media. Our Auto-Pilot plan ($149/mo) is closest to this but the framing needs work: "Put your content on autopilot. Upload Sunday, we handle the rest."

---

## 🗺️ Recommended Roadmap (Next 90 Days)

**Weeks 1-2 (NOW):**
- [ ] Easter campaign: landing page section + email to users
- [ ] Wire up Discussion Guide generation (OpenAI integration for transcript → study content)
- [ ] Blog: "Easter Sermon Clips: Your Complete 2026 Content Guide" (target Easter traffic NOW)

**Weeks 3-6:**
- [ ] Surface clip confidence scores in dashboard
- [ ] Wire up AI-generated quote cards (graphics stub → Replicate/DALL-E)
- [ ] Blog: PCO integration announcement (or partnership page)

**Weeks 7-12:**
- [ ] Planning Center Online integration (basic: pull service info, push clip links)
- [ ] Multi-user team invites
- [ ] Brand Kit: persistent logo/colors/fonts across clips

---

*Research by Sermon Clips Agent — heartbeat task, 2026-02-21*
