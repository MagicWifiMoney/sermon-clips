# Sermon Clips Master Database Guide
**Database URL:** https://www.notion.so/3053f6f42e108106bfa4fcfb4274aa72
**Created:** Feb 12, 2026
**Status:** 23 entries (10 Pain Points + 8 ICPs + 5 additional pain points)

---

## 🎯 What This Database Does

This is a **unified research database** that combines:
- Pain Points (what problems exist)
- ICPs (who has the problems)
- Solutions (how Mosaic solves them)
- Messaging (how to sell it)
- Implementation priorities

**Key Advantage:** Filter/view the same data from multiple perspectives without maintaining separate databases.

---

## 📊 Database Properties Explained

### Core Properties
- **Name** - The pain point or ICP name
- **Type** - Pain Point | ICP | Solution | Feature (filter by this!)
- **Description / Solution** - Details, top 3 pain points, or solution explanation

### For Pain Points
- **Category** - Time & Resources, Platform Formats, Distribution, etc.
- **Severity / Priority** - 🔴 Critical, 🟠 High, 🟡 Medium, 🟢 Low
- **Related ICPs** - Which roles experience this pain point (multi-select)
- **Mosaic Features** - Which API capabilities solve it
- **Competitor Gap?** - Do competitors miss this? (checkbox)
- **Implementation Priority** - Must-Have (Launch), Should-Have (Month 2), etc.
- **Premium Tier** - Which pricing tier gets this feature

### For ICPs
- **Church Size** - Small (<200), Mid-Size, Large, Mega, All Sizes
- **Decision Authority** - Primary Decision Maker, Influencer, End User, Budget Holder
- **Buying Triggers** - Burnout Prevention, Volunteer Turnover, etc.
- **Messaging Angle** - Tailored hook for this ICP

### Universal Properties
- **Impact Score** - 1-100 rating (Severity × Frequency × Market Size)
- **Source / Evidence** - Research citations, quotes, URLs

---

## 🔍 Recommended Views to Create

### View 1: Pain Points Dashboard
**Filter:** Type = "Pain Point"
**Sort:** Impact Score (descending)
**Group By:** Category
**Show:** Name, Severity, Church Size, Implementation Priority, Related ICPs

**Use For:** Feature prioritization, understanding what to build first

### View 2: ICP Profiles
**Filter:** Type = "ICP"
**Sort:** Severity / Priority (Primary first)
**Group By:** Church Size
**Show:** Name, Decision Authority, Buying Triggers, Messaging Angle, Impact Score

**Use For:** Sales/marketing targeting, understanding decision-makers

### View 3: Must-Have Features (Launch Roadmap)
**Filter:** Type = "Pain Point" AND Implementation Priority = "Must-Have (Launch)"
**Sort:** Impact Score (descending)
**Show:** Name, Category, Mosaic Features, Premium Tier, Competitor Gap?

**Use For:** Phase 1 product roadmap

### View 4: By Church Size
**Filter:** (All types)
**Group By:** Church Size
**Sort:** Impact Score (descending)

**Use For:** Understanding what matters to small vs. large churches

### View 5: Competitor Gaps
**Filter:** Type = "Pain Point" AND Competitor Gap? = Checked
**Sort:** Impact Score (descending)
**Show:** Name, Category, Premium Tier, Related ICPs, Messaging Angle

**Use For:** Sales differentiation, competitive positioning

### View 6: Decision Maker Map
**Filter:** Type = "ICP"
**Group By:** Decision Authority
**Show:** Name, Church Size, Buying Triggers, Impact Score

**Use For:** Understanding buying process, who approves what

### View 7: By Premium Tier
**Filter:** Type = "Pain Point"
**Group By:** Premium Tier
**Sort:** Impact Score (descending)

**Use For:** Pricing strategy validation, feature clustering

### View 8: Mosaic Feature Usage
**Filter:** Type = "Pain Point"
**Group By:** Mosaic Features
**Show:** Name, Category, Implementation Priority

**Use For:** Understanding which Mosaic capabilities are most valuable

---

## 💡 How to Use This Database

### For Product Strategy
1. Create "Must-Have Features" view
2. Sort by Impact Score
3. Filter by "Competitor Gap?" = Checked
4. **Result:** Phase 1 feature list prioritized by impact and differentiation

### For Pricing/Packaging
1. Create view filtered by Premium Tier
2. Group by tier
3. Count pain points per tier
4. **Validate:** Does each tier solve enough problems to justify price?

### For Sales/Marketing
1. Create "ICP Profiles" view
2. For each ICP, note:
   - Decision Authority (who approves?)
   - Buying Triggers (when to reach out?)
   - Messaging Angle (what hook to use?)
3. Filter Pain Points by "Related ICPs" = target ICP
4. **Result:** Complete sales playbook per customer type

### For Competitive Positioning
1. Filter by "Competitor Gap?" = Checked
2. Note which categories have most gaps
3. Cross-reference with Impact Score
4. **Result:** Differentiators that actually matter

---

## 🚀 Action Items Using This Database

### Immediate (This Week)
- [ ] Create "Must-Have Features" view → Share with product team
- [ ] Export top 5 pain points → Update sermon-clips.com homepage
- [ ] Create "ICP Decision Map" → Share with sales

### Short-Term (Next 2 Weeks)
- [ ] Map existing customers to ICPs → Identify expansion opportunities
- [ ] For each Competitor Gap, write differentiation copy
- [ ] Create pricing tier validation sheet (pain points per tier)

### Ongoing
- [ ] Add new pain points as discovered
- [ ] Update Impact Scores based on customer feedback
- [ ] Track which pain points drive most conversions
- [ ] Add "Status" property: Planned → In Progress → Shipped

---

## 🔗 Related Resources

**Original Separate Databases (deprecated, use Master instead):**
- Pain Points: notion.so/3053f6f42e10813c9be9fab70cc6dc35
- ICPs: notion.so/3053f6f42e108156aaf5d5e84c727ab0

**Research Files:**
- `/projects/sermon-clips/research/INDEX.md` - Full research index
- `/projects/sermon-clips/research/RESEARCH-SUMMARY.md` - Executive summary
- `/projects/sermon-clips/research/enhancement-recommendations.md` - Mosaic strategy
- `/projects/sermon-clips/research/growth-strategy-report.md` - Revenue projections

---

## 📝 Database Maintenance Tips

### When to Add New Entries

**Pain Point:**
- Customer mentions a problem 3+ times
- Competitor launches feature addressing it
- New data shows market need (e.g., "sermon engagement" metric)

**ICP:**
- Discover new decision-maker role
- Church structure changes (e.g., "Digital Pastor" role emerges)

**Solution:**
- Mosaic adds new API capability
- Discover new integration possibility

### Keep It Clean
- **Archive, don't delete** - Add "Status: Archived" property instead
- **One entry per pain point** - Don't duplicate
- **Use Related ICPs** - Link pain points to ICPs instead of duplicating info
- **Consistent naming** - "Captions require..." not "No captions"

---

## 🎯 Power User Tips

### Quick Filters You'll Use Often
1. "High-Impact Gaps" - Severity = Critical + Competitor Gap? = True
2. "Quick Wins" - Priority = Must-Have + Impact > 80
3. "Enterprise Features" - Church Size includes "Mega (2000+)"
4. "Budget-Sensitive" - Buying Triggers includes "Budget Availability"

### Formulas You Can Add
- **ROI Score** = (Impact Score × 10) / (Implementation Months × 100)
- **Urgency** = If(Severity = "Critical", 3, If(Severity = "High", 2, 1))
- **Market Size** = Count(Church Size options selected)

### Integration Ideas
- Export to CSV → Import to CRM (map ICPs to contacts)
- Link to Jira/Linear tickets → Track implementation
- Webhook to Slack → Notify when high-impact pain point added

---

## ✅ Quick Start Checklist

- [ ] Open master database: notion.so/3053f6f42e108106bfa4fcfb4274aa72
- [ ] Create "Pain Points Dashboard" view (filter: Type = Pain Point)
- [ ] Create "ICP Profiles" view (filter: Type = ICP)
- [ ] Sort both by Impact Score (descending)
- [ ] Group Pain Points by Category
- [ ] Group ICPs by Decision Authority
- [ ] Share with team
- [ ] Archive old separate databases (or keep for backup)

---

**Status:** ✅ Master Database Live
**Next:** Create views, validate with team, update marketing materials
