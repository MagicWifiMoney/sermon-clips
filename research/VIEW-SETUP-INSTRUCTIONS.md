# Notion View Setup Instructions
**For Master Database:** https://www.notion.so/3053f6f42e108106bfa4fcfb4274aa72

Follow these steps to create all 8 recommended views. Each takes ~2 minutes.

---

## View 1: Pain Points Dashboard

**Purpose:** Feature prioritization, see all pain points organized by category

**Steps:**
1. Open the database
2. Click "+ Add a view" (top right)
3. Select "Table" view type
4. Name it: "Pain Points Dashboard"
5. **Add Filter:**
   - Property: Type
   - Condition: Is
   - Value: Pain Point
6. **Add Sort:**
   - Property: Impact Score
   - Direction: Descending
7. **Add Group:**
   - Property: Category
   - Order: By value
8. **Hide Properties:** (click property name → Hide)
   - Type (already filtered)
   - Decision Authority (N/A for pain points)
9. **Show Properties:**
   - Name
   - Severity / Priority
   - Church Size
   - Implementation Priority
   - Related ICPs
   - Mosaic Features
   - Impact Score
10. Click "Done"

---

## View 2: ICP Profiles

**Purpose:** Sales targeting, understand decision-makers

**Steps:**
1. Click "+ Add a view"
2. Select "Table" view type
3. Name it: "ICP Profiles"
4. **Add Filter:**
   - Property: Type
   - Condition: Is
   - Value: ICP
5. **Add Sort:**
   - Property: Severity / Priority
   - Direction: Ascending (shows Primary ICPs first)
6. **Add Group:**
   - Property: Decision Authority
   - Order: Custom (drag to order: Primary Decision Maker, Budget Holder, Influencer, End User)
7. **Hide Properties:**
   - Type (filtered)
   - Category (N/A for ICPs)
   - Mosaic Features (N/A for ICPs)
   - Competitor Gap? (N/A for ICPs)
   - Implementation Priority (N/A for ICPs)
   - Premium Tier (N/A for ICPs)
8. **Show Properties:**
   - Name
   - Church Size
   - Decision Authority
   - Buying Triggers
   - Messaging Angle
   - Description / Solution (shows top 3 pain points)
   - Impact Score
9. Click "Done"

---

## View 3: Must-Have Features (Launch Roadmap)

**Purpose:** Phase 1 product plan, what to build first

**Steps:**
1. Click "+ Add a view"
2. Select "Board" view type (Kanban board by category)
3. Name it: "Must-Have Features"
4. **Add Filters (2 filters):**
   - Filter 1: Type → Is → Pain Point
   - Filter 2: Implementation Priority → Is → Must-Have (Launch)
5. **Board Group By:**
   - Property: Category
6. **Add Sort:**
   - Property: Impact Score
   - Direction: Descending
7. **Card Preview:** (customize card display)
   - Show: Mosaic Features, Premium Tier, Related ICPs
8. **Hide Properties:**
   - Type (filtered)
   - Implementation Priority (filtered)
9. Click "Done"

**Tip:** Drag cards between categories if needed to reorganize

---

## View 4: Competitor Gaps

**Purpose:** Differentiation messaging, features competitors don't have

**Steps:**
1. Click "+ Add a view"
2. Select "Table" view type
3. Name it: "Competitor Gaps"
4. **Add Filters (2 filters):**
   - Filter 1: Type → Is → Pain Point
   - Filter 2: Competitor Gap? → Checkbox is checked
5. **Add Sort:**
   - Property: Impact Score
   - Direction: Descending
6. **Show Properties:**
   - Name
   - Category
   - Severity / Priority
   - Church Size
   - Premium Tier
   - Related ICPs
   - Messaging Angle
   - Impact Score
7. **Color Code:** (optional but helpful)
   - Click three dots next to "Competitor Gap?" property
   - Enable "Show as color"
   - Checked items will stand out
8. Click "Done"

---

## View 5: By Church Size

**Purpose:** Understand what small vs. large churches need

**Steps:**
1. Click "+ Add a view"
2. Select "Table" view type
3. Name it: "By Church Size"
4. **No filters** (show all types)
5. **Add Group:**
   - Property: Church Size
   - Order: Custom (drag to order: Small, Mid-Size, Large, Mega, All Sizes)
6. **Add Sort:**
   - Property: Impact Score
   - Direction: Descending
7. **Show Properties:**
   - Name
   - Type
   - Severity / Priority
   - Related ICPs (if pain point) OR Decision Authority (if ICP)
   - Messaging Angle
   - Impact Score
8. Click "Done"

**Note:** Some entries have multiple church sizes selected - they'll appear in multiple groups

---

## View 6: By Premium Tier

**Purpose:** Validate pricing, see what features go in each tier

**Steps:**
1. Click "+ Add a view"
2. Select "Table" view type
3. Name it: "By Premium Tier"
4. **Add Filter:**
   - Property: Type
   - Condition: Is
   - Value: Pain Point
5. **Add Group:**
   - Property: Premium Tier
   - Order: Custom (drag to order: Starter $29, Growth $59, Pro $99, Auto-Pilot $149, Multi-Campus $249, Content Machine $399)
6. **Add Sort:**
   - Property: Impact Score
   - Direction: Descending
7. **Show Properties:**
   - Name
   - Category
   - Severity / Priority
   - Implementation Priority
   - Mosaic Features
   - Impact Score
8. **Add Summary Row:** (bottom of table)
   - Count: Name (shows how many features per tier)
   - Average: Impact Score
9. Click "Done"

**Use this to validate:** Does each tier have enough high-impact features to justify the price?

---

## View 7: Decision Maker Map

**Purpose:** Understand buying process, who approves what

**Steps:**
1. Click "+ Add a view"
2. Select "Board" view type
3. Name it: "Decision Maker Map"
4. **Add Filter:**
   - Property: Type
   - Condition: Is
   - Value: ICP
5. **Board Group By:**
   - Property: Decision Authority
   - Order: Custom (Primary Decision Maker, Budget Holder, Influencer, End User)
6. **Add Sort:**
   - Property: Impact Score
   - Direction: Descending
7. **Card Preview:**
   - Show: Church Size, Buying Triggers
8. Click "Done"

**Visual Result:** Kanban board showing ICPs organized by their role in buying process

---

## View 8: Mosaic Feature Usage

**Purpose:** See which API capabilities are most valuable

**Steps:**
1. Click "+ Add a view"
2. Select "Table" view type
3. Name it: "Mosaic Feature Usage"
4. **Add Filter:**
   - Property: Type
   - Condition: Is
   - Value: Pain Point
5. **Add Group:**
   - Property: Mosaic Features
   - Order: By count (most used first)
6. **Add Sort (within groups):**
   - Property: Implementation Priority
   - Direction: Ascending (Must-Have first)
7. **Show Properties:**
   - Name
   - Category
   - Implementation Priority
   - Premium Tier
   - Impact Score
8. **Add Summary Row:**
   - Count: Name (shows how many pain points each Mosaic feature solves)
9. Click "Done"

**Insight:** Features that solve the most high-impact pain points = highest value capabilities

---

## 🎨 Bonus: Visual Customizations

### Add Icons to Views
1. Hover over view name
2. Click to edit
3. Add emoji:
   - 🎯 Pain Points Dashboard
   - 👥 ICP Profiles
   - 🚀 Must-Have Features
   - ⚡ Competitor Gaps
   - 📊 By Church Size
   - 💰 By Premium Tier
   - 🗺️ Decision Maker Map
   - 🔧 Mosaic Feature Usage

### Color Code Priorities
1. Go to any table view
2. Click three dots next to "Severity / Priority"
3. Select "Color columns"
4. Result: 🔴 Critical, 🟠 High, 🟡 Medium, 🟢 Low

### Pin Important Views
1. Hover over view tab
2. Click three dots
3. Select "Pin view"
4. Pinned views stay visible even when scrolling

---

## ⚙️ Quick Setup (15 Minutes Total)

**Recommended Order:**
1. Pain Points Dashboard (3 min) - Your main working view
2. ICP Profiles (2 min) - Sales reference
3. Must-Have Features (3 min) - Product roadmap
4. Competitor Gaps (2 min) - Differentiation
5. By Premium Tier (2 min) - Pricing validation
6. By Church Size (2 min) - Market segmentation
7. Decision Maker Map (1 min) - Sales process
8. Mosaic Feature Usage (2 min) - Technical strategy

**Total: ~15 minutes to set up all 8 views**

---

## 🔗 After Setup

Once views are created, share with team:
- **Product Team:** Must-Have Features, Mosaic Feature Usage
- **Sales Team:** ICP Profiles, Decision Maker Map, By Church Size
- **Marketing Team:** Competitor Gaps, Messaging Angle column
- **Pricing/Strategy:** By Premium Tier, Pain Points Dashboard

---

## 📋 View Checklist

- [ ] Pain Points Dashboard
- [ ] ICP Profiles
- [ ] Must-Have Features
- [ ] Competitor Gaps
- [ ] By Church Size
- [ ] By Premium Tier
- [ ] Decision Maker Map
- [ ] Mosaic Feature Usage
- [ ] Added icons/emojis
- [ ] Color-coded priorities
- [ ] Pinned top 3 views
- [ ] Shared with team

---

**Database URL:** https://www.notion.so/3053f6f42e108106bfa4fcfb4274aa72
**Support:** See MASTER-DATABASE-GUIDE.md for usage tips
