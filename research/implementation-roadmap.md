# 🏗️ Implementation Roadmap - Sermon Clips

**Prioritized build order for sermon-clips.com to compete with SocialSermons**  
**Date:** February 13, 2026

---

## Phase 1: MVP (P0 Features) — 4-6 Weeks

**Goal:** Launch Essential tier ($99/mo) — 2 sermon clips per week

### Week 1-2: Core Video Processing
| Task | Status | Owner | Priority |
|------|--------|-------|----------|
| ✅ Mosaic API integration complete | Done | - | P0 |
| ✅ Video upload flow (Next.js) | Done | - | P0 |
| ✅ Mosaic clipping functions (6 live) | Done | - | P0 |
| ⬜ GPT-4 transcript analysis pipeline | Todo | - | P0 |
| ⬜ Whisper API transcription (fallback) | Todo | - | P0 |
| ⬜ Clip selection algorithm (identify 2 best moments) | Todo | - | P0 |

**Deliverable:** Upload sermon → Get 2 auto-clipped videos

---

### Week 3-4: Review Portal & Notifications
| Task | Status | Owner | Priority |
|------|--------|-------|----------|
| ✅ Next.js review portal scaffold | Done | - | P0 |
| ⬜ Review page UI (display clips, approve/reject buttons) | Todo | - | P0 |
| ⬜ Revision workflow (feedback → re-generate) | Todo | - | P0 |
| ⬜ SendGrid email notifications | Todo | - | P0 |
| ⬜ Review link generation (secure tokens) | Todo | - | P0 |

**Deliverable:** Pastor receives email → Reviews clips → Approves or requests changes

---

### Week 5-6: Storage, Database & Publishing
| Task | Status | Owner | Priority |
|------|--------|-------|----------|
| ✅ Neon Postgres database | Done | - | P0 |
| ✅ Prisma schema (sermons, clips, reviews) | Done | - | P0 |
| ⬜ Cloudflare R2 video storage | Todo | - | P0 |
| ⬜ Postiz API integration (social publishing) | Todo | - | P0 |
| ⬜ Multi-platform publishing (Instagram, TikTok, YouTube Shorts) | Todo | - | P0 |
| ⬜ Clerk auth & church onboarding flow | Todo | - | P0 |

**Deliverable:** Approved clips auto-publish to church's social accounts

---

### MVP Launch Checklist
- [ ] Church can upload sermon video or YouTube URL
- [ ] AI generates 2 sermon clips (60-90 sec each)
- [ ] Clips have auto-generated captions (Whisper)
- [ ] Clips have church branding (logo overlay)
- [ ] Pastor receives email notification when clips ready
- [ ] Pastor can approve or request revision
- [ ] Approved clips auto-publish to Instagram, TikTok, YouTube
- [ ] $99/mo subscription via Stripe
- [ ] 10 beta churches onboarded

**Success Metric:** 10 beta churches processing 4 sermons/month each = 40 sermons processed in Month 1

---

## Phase 2: Standard Tier (P1 Features) — Weeks 7-12

**Goal:** Launch Standard tier ($149/mo) — Add graphics and text content

### Week 7-8: Quote Posts
| Task | Status | Owner | Priority |
|------|--------|-------|----------|
| ⬜ GPT-4 quote extraction prompt | Todo | - | P1 |
| ⬜ DALL-E 3 background generation | Todo | - | P1 |
| ⬜ Placid.app API integration | Todo | - | P1 |
| ⬜ Church brand template system | Todo | - | P1 |
| ⬜ Quote post generation pipeline | Todo | - | P1 |

**Deliverable:** 1 quote post per sermon (Instagram/Facebook graphic)

---

### Week 9-10: Text Threads & Carousels
| Task | Status | Owner | Priority |
|------|--------|-------|----------|
| ⬜ GPT-4 thread generation prompt (X/Threads style) | Todo | - | P1 |
| ⬜ GPT-4 carousel point extraction (5-7 key points) | Todo | - | P1 |
| ⬜ Placid carousel slide generation | Todo | - | P1 |
| ⬜ Review portal: display text & carousels | Todo | - | P1 |

**Deliverable:** 1 text thread + 1 carousel per sermon

---

### Week 11-12: Multi-Platform Publishing
| Task | Status | Owner | Priority |
|------|--------|-------|----------|
| ⬜ Facebook page publishing | Todo | - | P1 |
| ⬜ LinkedIn post publishing | Todo | - | P1 |
| ⬜ Twitter/X thread publishing | Todo | - | P1 |
| ⬜ Threads (Meta) publishing | Todo | - | P1 |
| ⬜ Platform-specific formatting (carousel vs. PDF) | Todo | - | P1 |

**Deliverable:** Content publishes correctly across all major platforms

---

## Phase 3: Complete Tier (P1 Features) — Weeks 13-18

**Goal:** Launch Complete tier ($249/mo) — Add blog posts and YouTube videos

### Week 13-14: Blog Posts
| Task | Status | Owner | Priority |
|------|--------|-------|----------|
| ⬜ GPT-4 blog generation prompt (750-2,000 words) | Todo | - | P1 |
| ⬜ SEO optimization (meta title, description, H2/H3) | Todo | - | P1 |
| ⬜ Scripture reference parsing | Todo | - | P1 |
| ⬜ WordPress API integration (auto-publish draft) | Todo | - | P1 |
| ⬜ Markdown export (for non-WordPress churches) | Todo | - | P1 |

**Deliverable:** 1 SEO-optimized blog post per sermon

---

### Week 15-16: YouTube Videos
| Task | Status | Owner | Priority |
|------|--------|-------|----------|
| ⬜ Mosaic API 10-15 min clip (topic-based) | Todo | - | P1 |
| ⬜ FFmpeg intro/outro template system | Todo | - | P1 |
| ⬜ DALL-E 3 thumbnail generation | Todo | - | P1 |
| ⬜ Placid thumbnail text overlay | Todo | - | P1 |
| ⬜ GPT-4 YouTube metadata (SEO title, description, tags) | Todo | - | P1 |

**Deliverable:** 1 YouTube video per sermon (10-15 min) with thumbnail and metadata

---

### Week 17-18: End-of-Year Book (Annual)
| Task | Status | Owner | Priority |
|------|--------|-------|----------|
| ⬜ Content curation logic (track all year's content) | Todo | - | P2 |
| ⬜ GPT-4 "best of" selection (based on engagement) | Todo | - | P2 |
| ⬜ Canva API book layout generation | Todo | - | P2 |
| ⬜ Print-ready PDF export (CMYK, bleed, margins) | Todo | - | P2 |
| ⬜ Printful integration (optional direct printing) | Todo | - | P2 |

**Deliverable:** Print-ready PDF book at end of year (triggered December 1)

---

## Phase 4: Ultimate Tier (P2 Features) — Weeks 19-24

**Goal:** Launch Ultimate tier ($399/mo) — Add analytics, DM automation

### Week 19-20: Quarterly Reports
| Task | Status | Owner | Priority |
|------|--------|-------|----------|
| ⬜ Instagram Graph API analytics pull | Todo | - | P2 |
| ⬜ Facebook Graph API analytics pull | Todo | - | P2 |
| ⬜ YouTube Data API analytics pull | Todo | - | P2 |
| ⬜ GPT-4 executive summary generation | Todo | - | P2 |
| ⬜ Placid PDF report generation | Todo | - | P2 |
| ⬜ SendGrid quarterly report email | Todo | - | P2 |

**Deliverable:** Quarterly PDF report (every 3 months) with engagement metrics

---

### Week 21-22: Instagram DM Automation
| Task | Status | Owner | Priority |
|------|--------|-------|----------|
| ⬜ Instagram Graph API webhook setup | Todo | - | P2 |
| ⬜ Meta app approval process (can take 4+ weeks) | Todo | - | P2 |
| ⬜ GPT-4 conversational chatbot prompt | Todo | - | P2 |
| ⬜ Pre-set flow system (service times, location, etc.) | Todo | - | P2 |
| ⬜ DM analytics dashboard | Todo | - | P2 |

**Deliverable:** Auto-respond to Instagram DMs with contextual replies

---

### Week 23-24: Pastor Portraits (Optional)
| Task | Status | Owner | Priority |
|------|--------|-------|----------|
| ⬜ Photo upload flow (church provides 100-200 photos) | Todo | - | P3 |
| ⬜ Cloudflare Images storage & CDN | Todo | - | P3 |
| ⬜ Remove.bg API integration (background removal) | Todo | - | P3 |
| ⬜ DALL-E 3 new background generation | Todo | - | P3 |
| ⬜ AI photo enhancement (Remini API optional) | Todo | - | P3 |

**Deliverable:** 2 edited pastor portraits per week (from existing photos)

**Note:** In-person photoshoots are SKIPPED — not automatable, not scalable

---

## Phase 5: Scale & Polish — Ongoing (Month 7+)

### Quality Improvements
| Task | Status | Owner | Priority |
|------|--------|-------|----------|
| ⬜ GPT-4 fine-tuning on top church content | Todo | - | P1 |
| ⬜ Church-specific style guide system | Todo | - | P1 |
| ⬜ A/B testing (AI generates 2-3 options) | Todo | - | P1 |
| ⬜ Feedback loop (learn from pastor approvals/rejections) | Todo | - | P1 |
| ⬜ Multi-language support (Spanish, French) | Todo | - | P1 |

---

### Analytics & Dashboard
| Task | Status | Owner | Priority |
|------|--------|-------|----------|
| ⬜ Church dashboard (ROI, engagement, growth) | Todo | - | P1 |
| ⬜ Content performance tracking | Todo | - | P1 |
| ⬜ A/B test results visualization | Todo | - | P2 |
| ⬜ Predictive analytics (what content will perform best) | Todo | - | P2 |

---

### Marketplace & Community
| Task | Status | Owner | Priority |
|------|--------|-------|----------|
| ⬜ Template marketplace (churches share/buy templates) | Todo | - | P2 |
| ⬜ Community forum (churches share what's working) | Todo | - | P2 |
| ⬜ Trend detection (scrape TikTok/Instagram trending sounds) | Todo | - | P2 |
| ⬜ Monthly template library updates | Todo | - | P2 |

---

## Launch Timeline

### Beta Phase (Month 1-2)
- **Week 1-6:** Build MVP (Essential tier only)
- **Week 7-8:** Onboard 10 beta churches at $49/mo
- **Goal:** Validate AI quality, iterate on pastor feedback

### Public Launch (Month 3)
- **Pricing:** $99/mo (Essential), $149/mo (Standard — if ready)
- **Target:** 25 paying churches ($2,500 MRR)
- **Marketing:** 
  - Launch blog with sermon repurposing guides
  - Run YouTube ads targeting "church social media"
  - Outreach to church Facebook groups
  - Free tier: 1 clip per sermon (watermarked)

### Growth Phase (Month 4-6)
- **Launch Standard tier:** $149/mo (quote posts, threads, carousels)
- **Target:** 50 churches ($10,000 MRR)
- **Marketing:**
  - Case studies from beta churches
  - Referral program (church refers church = both get 1 month free)
  - Partner with church tech podcasts

### Scale Phase (Month 7-12)
- **Launch Complete tier:** $249/mo (+ blog, YouTube)
- **Launch Ultimate tier:** $399/mo (+ reports, DM automation)
- **Target:** 100 churches ($20,000 MRR)
- **Marketing:**
  - Content marketing (blog, YouTube, podcast)
  - Annual discount (2 months free)
  - Multi-campus discounts

---

## Revenue Projections

### Conservative Scenario
| Month | Churches | Avg Price | MRR | Notes |
|-------|----------|-----------|-----|-------|
| 1-2 (Beta) | 10 | $49 | $490 | Beta pricing |
| 3 | 25 | $99 | $2,475 | Public launch |
| 4 | 35 | $115 | $4,025 | Some Standard upgrades |
| 5 | 45 | $125 | $5,625 | More Standard |
| 6 | 60 | $135 | $8,100 | Complete launches |
| 9 | 80 | $150 | $12,000 | Ultimate launches |
| 12 | 100 | $165 | $16,500 | Mix across all tiers |

**Year 1 ARR:** ~$200k

---

### Aggressive Scenario
| Month | Churches | Avg Price | MRR | Notes |
|-------|----------|-----------|-----|-------|
| 1-2 (Beta) | 20 | $49 | $980 | Larger beta |
| 3 | 50 | $99 | $4,950 | Strong launch |
| 4 | 75 | $120 | $9,000 | Rapid growth |
| 5 | 100 | $140 | $14,000 | Complete tier |
| 6 | 125 | $160 | $20,000 | Ultimate tier |
| 9 | 175 | $180 | $31,500 | Word of mouth |
| 12 | 250 | $199 | $49,750 | Viral growth |

**Year 1 ARR:** ~$600k

---

## Key Risks & Mitigations

### Risk 1: AI Quality (10-20% rejection rate)
**Mitigation:**
- Robust approval workflow (pastor always reviews)
- GPT-4 fine-tuning on church content
- Iterative feedback loop (AI learns from rejections)
- Position as "AI-accelerated, pastor-approved" not "fully automated"

### Risk 2: SocialSermons copies us (launches AI tier)
**Mitigation:**
- Move fast — ship MVP in 6 weeks, not 6 months
- Undercut pricing (they can't go below $300/mo without cannibalizing)
- Open-source parts of stack (build community, not just customers)
- Focus on speed: 10 minutes vs. their 3-5 days

### Risk 3: Churches don't trust AI
**Mitigation:**
- Freemium tier (1 free clip per sermon — prove quality)
- Money-back guarantee (first sermon, full refund if not satisfied)
- Testimonials from beta churches
- Transparency ("AI-powered, pastor-approved")

### Risk 4: Platform API changes (Instagram, TikTok, etc.)
**Mitigation:**
- Use Postiz (they handle API changes, not us)
- Diversify platforms (don't rely on one)
- Email export option (churches can post manually if APIs break)

### Risk 5: Mosaic API pricing increases
**Mitigation:**
- Negotiate volume discounts (100+ sermons/month)
- Build fallback to FFmpeg + Whisper (slower, but cheaper)
- Pass cost increases to customers (+$10/mo if necessary)

---

## Success Metrics (Month 6)

| Metric | Target | Actual | Notes |
|--------|--------|--------|-------|
| **Paying churches** | 60 | - | |
| **MRR** | $8,000 | - | |
| **Churn rate** | <10% | - | |
| **Sermons processed/month** | 240 | - | 60 churches × 4 sermons |
| **Approval rate (first submission)** | >80% | - | Pastor approves without revision |
| **Avg time to approve** | <24 hrs | - | From email to approval |
| **NPS (Net Promoter Score)** | >50 | - | Would you recommend? |

---

## Decision Points

### End of Month 2 (Beta Complete)
**Go/No-Go Decision:**
- ✅ GO if: 8+ of 10 beta churches renew at $99/mo
- ❌ NO-GO if: <5 beta churches renew (pivot or shut down)

### End of Month 6 (Standard/Complete Launched)
**Scale or Pivot Decision:**
- ✅ SCALE if: $8k+ MRR, <10% churn, >80% approval rate
- 🔄 PIVOT if: $4-8k MRR, 10-20% churn (refine positioning, features)
- ❌ SUNSET if: <$4k MRR, >20% churn (market doesn't want it)

---

## Next Immediate Actions (This Week)

1. **Week of Feb 13-19:**
   - [ ] Finalize GPT-4 transcript analysis pipeline
   - [ ] Build Whisper transcription fallback
   - [ ] Test clip selection algorithm on 10 sample sermons
   - [ ] Design review portal UI mockups
   - [ ] Set up Cloudflare R2 storage

2. **Week of Feb 20-26:**
   - [ ] Build review portal frontend (Next.js)
   - [ ] Integrate SendGrid email notifications
   - [ ] Build revision workflow (feedback → re-generate)
   - [ ] Set up Postiz API for Instagram publishing
   - [ ] Create onboarding flow for beta churches

3. **Week of Feb 27-Mar 5:**
   - [ ] Full end-to-end test: upload sermon → clips → review → publish
   - [ ] Recruit 5 beta churches from personal network
   - [ ] Set up Stripe subscription billing
   - [ ] Build landing page (sermon-clips.com)
   - [ ] Prepare beta launch email

---

**TARGET MVP LAUNCH:** Week of March 6, 2026 (3 weeks from now)

**BETA GOAL:** 10 churches processing 4 sermons/month = 40 sermons in Month 1

**PUBLIC LAUNCH:** April 1, 2026 (6 weeks from now)

---

**LET'S SHIP IT.** 🚀
