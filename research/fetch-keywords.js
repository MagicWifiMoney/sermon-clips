const https = require('https');
const fs = require('fs').promises;
const path = require('path');

const USERNAME = 'jakegiebel@fermatcommerce.com';
const PASSWORD = 'fdfa2690ca8fff85';
const API_BASE = 'api.dataforseo.com';

const auth = 'Basic ' + Buffer.from(`${USERNAME}:${PASSWORD}`).toString('base64');

// Seed keywords organized in batches
const seedBatches = {
  'Core': [
    'sermon clips', 'sermon clipping service', 'sermon video editing', 
    'sermon repurposing', 'church video clips', 'ai sermon clips', 
    'sermon clip maker', 'sermon clip generator'
  ],
  'Church Marketing': [
    'church social media', 'church social media strategy', 'church marketing', 
    'church digital marketing', 'church growth social media', 'church content creation'
  ],
  'Free Tools': [
    'bible verse generator', 'sermon outline generator', 'sermon transcription free', 
    'church social media calendar', 'sermon quote maker', 'sermon illustration finder', 
    'worship background generator', 'bible study questions generator'
  ],
  'Platform Specific': [
    'sermon clips tiktok', 'church tiktok', 'church instagram reels', 
    'church youtube shorts', 'pastor tiktok'
  ],
  'Pain Points': [
    'church video editing takes too long', 'church media team burnout', 
    'how to grow church social media', 'how to create sermon clips'
  ],
  'Competitors': [
    'socialsermons alternative', 'pro church tools alternative', 
    'best sermon clipping software', 'church media service'
  ]
};

function apiRequest(path, body) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(body);
    
    const options = {
      hostname: API_BASE,
      path: path,
      method: 'POST',
      headers: {
        'Authorization': auth,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };
    
    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve(parsed);
        } catch (e) {
          reject(new Error(`Failed to parse response: ${e.message}`));
        }
      });
    });
    
    req.on('error', (e) => {
      reject(e);
    });
    
    req.write(postData);
    req.end();
  });
}

async function getKeywordIdeas(keywords) {
  console.log(`Fetching keyword ideas for ${keywords.length} seed keywords...`);
  
  const data = await apiRequest('/v3/keywords_data/google_ads/keywords_for_keywords/live', [{
    keywords: keywords,
    language_code: 'en',
    location_code: 2840, // United States
    include_seed_keyword: true,
    include_serp_info: true,
    sort_by: 'search_volume'
  }]);

  console.log(`API Status: ${data.status_message}`);
  
  if (data.tasks && data.tasks[0]) {
    if (data.tasks[0].status_code !== 20000) {
      console.error(`Task error: ${data.tasks[0].status_message}`);
      return [];
    }
    
    if (data.tasks[0].result) {
      // Result is an array directly, not wrapped in a keywords property
      const keywords = Array.isArray(data.tasks[0].result) ? data.tasks[0].result : [];
      console.log(`Got ${keywords.length} keyword ideas`);
      return keywords;
    } else {
      console.log('No result in response');
    }
  }
  
  return [];
}

async function main() {
  try {
    console.log('Starting DataForSEO keyword research...\n');
    
    // Collect all seed keywords
    const allSeeds = Object.values(seedBatches).flat();
    console.log(`Total seed keywords: ${allSeeds.length}\n`);
    
    // Get keyword ideas - batch into groups of 20 (API limit)
    let allKeywordIdeas = [];
    const batchSize = 20;
    
    for (let i = 0; i < allSeeds.length; i += batchSize) {
      const batch = allSeeds.slice(i, i + batchSize);
      console.log(`Processing batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(allSeeds.length/batchSize)}...`);
      const ideas = await getKeywordIdeas(batch);
      allKeywordIdeas = allKeywordIdeas.concat(ideas);
      
      // Small delay to avoid rate limits
      if (i + batchSize < allSeeds.length) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    const keywordIdeas = allKeywordIdeas;
    
    // Extract unique keywords (combine seed + related ideas)
    const uniqueKeywords = new Set();
    const keywordDataMap = new Map();
    
    keywordIdeas.forEach(kw => {
      const keyword = kw.keyword.toLowerCase();
      uniqueKeywords.add(keyword);
      
      // Store the data if we don't have it or if this has more data
      if (!keywordDataMap.has(keyword) || kw.search_volume > (keywordDataMap.get(keyword).search_volume || 0)) {
        keywordDataMap.set(keyword, {
          keyword: kw.keyword,
          search_volume: kw.search_volume,
          competition: kw.competition,
          competition_index: kw.competition_index,
          cpc: kw.cpc,
          monthly_searches: kw.monthly_searches
        });
      }
    });
    
    console.log(`\nUnique keywords collected: ${uniqueKeywords.size}`);
    
    // If we need more data, get search volumes (but we already have it from keywords_for_keywords)
    const allKeywordData = Array.from(keywordDataMap.values());
    
    // Save raw data
    const rawDataPath = path.join(__dirname, 'keyword-data-raw.json');
    await fs.writeFile(rawDataPath, JSON.stringify({
      timestamp: new Date().toISOString(),
      total_keywords: allKeywordData.length,
      seed_batches: seedBatches,
      keywords: allKeywordData
    }, null, 2));
    
    console.log(`\nRaw data saved to: ${rawDataPath}`);
    console.log(`Total keywords analyzed: ${allKeywordData.length}`);
    
    // Analyze and generate report
    await generateReport(allKeywordData, seedBatches);
    
    console.log('\n✓ Keyword research complete!');
    
  } catch (error) {
    console.error('Error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

async function generateReport(keywords, seedBatches) {
  // Calculate opportunity score: volume × (1 - competition_index/100)
  const scored = keywords.map(kw => ({
    ...kw,
    opportunity_score: (kw.search_volume || 0) * (1 - (kw.competition_index || 50) / 100)
  })).filter(kw => kw.search_volume > 0); // Filter out zero-volume keywords
  
  // Sort by opportunity score
  scored.sort((a, b) => b.opportunity_score - a.opportunity_score);
  
  // Easy wins: High volume (>500), low competition (<40)
  const easyWins = scored.filter(kw => 
    kw.search_volume > 500 && kw.competition_index < 40
  ).slice(0, 30);
  
  // Money keywords: High CPC (>$2), decent volume
  const moneyKeywords = scored.filter(kw => 
    (kw.cpc || 0) > 2 && kw.search_volume > 100
  ).sort((a, b) => b.cpc - a.cpc).slice(0, 20);
  
  // Free tool opportunities: "generator", "maker", "finder", "calculator", etc.
  const toolKeywords = scored.filter(kw => 
    /generator|maker|finder|calculator|creator|builder|tool/i.test(kw.keyword) &&
    kw.search_volume > 200
  ).slice(0, 20);
  
  // High volume, any competition (content gaps to explore)
  const highVolume = scored.filter(kw => kw.search_volume > 1000).slice(0, 30);
  
  // Generate markdown report
  let report = `# Sermon Clips Keyword Research - Real Data\n\n`;
  report += `**Generated:** ${new Date().toLocaleString()}\n`;
  report += `**Total Keywords Analyzed:** ${keywords.length}\n`;
  report += `**Keywords with Search Volume:** ${scored.length}\n\n`;
  
  report += `---\n\n`;
  
  // Easy Wins
  report += `## 🎯 Easy Wins (High Volume + Low Competition)\n\n`;
  report += `Quick ranking opportunities with blog posts:\n\n`;
  report += `| Keyword | Volume | Competition | CPC | Opportunity |\n`;
  report += `|---------|--------|-------------|-----|-------------|\n`;
  easyWins.forEach(kw => {
    report += `| ${kw.keyword} | ${kw.search_volume.toLocaleString()} | ${kw.competition_index}/100 | $${(kw.cpc || 0).toFixed(2)} | ${kw.opportunity_score.toFixed(0)} |\n`;
  });
  
  report += `\n---\n\n`;
  
  // Money Keywords
  report += `## 💰 Money Keywords (High CPC = Buying Intent)\n\n`;
  report += `| Keyword | Volume | CPC | Competition | Opportunity |\n`;
  report += `|---------|--------|-----|-------------|-------------|\n`;
  moneyKeywords.forEach(kw => {
    report += `| ${kw.keyword} | ${kw.search_volume.toLocaleString()} | $${(kw.cpc || 0).toFixed(2)} | ${kw.competition_index}/100 | ${kw.opportunity_score.toFixed(0)} |\n`;
  });
  
  report += `\n---\n\n`;
  
  // Free Tool Opportunities
  report += `## 🛠️ Free Tool Opportunities\n\n`;
  report += `Build these simple tools = instant traffic:\n\n`;
  report += `| Tool Keyword | Volume | Competition | Opportunity |\n`;
  report += `|--------------|--------|-------------|-------------|\n`;
  toolKeywords.forEach(kw => {
    report += `| ${kw.keyword} | ${kw.search_volume.toLocaleString()} | ${kw.competition_index}/100 | ${kw.opportunity_score.toFixed(0)} |\n`;
  });
  
  report += `\n---\n\n`;
  
  // Content Gaps
  report += `## 🔍 Content Gaps (High Volume Topics)\n\n`;
  report += `| Keyword | Volume | Competition | CPC |\n`;
  report += `|---------|--------|-------------|-----|\n`;
  highVolume.forEach(kw => {
    report += `| ${kw.keyword} | ${kw.search_volume.toLocaleString()} | ${kw.competition_index}/100 | $${(kw.cpc || 0).toFixed(2)} |\n`;
  });
  
  report += `\n---\n\n`;
  
  // Blog Post Ideas
  report += `## ✍️ 20 Quick Blog Post Ideas\n\n`;
  report += `Targeting easy-win keywords with specific outlines:\n\n`;
  
  const blogIdeas = [
    ...easyWins.slice(0, 15),
    ...toolKeywords.slice(0, 5)
  ].slice(0, 20);
  
  blogIdeas.forEach((kw, i) => {
    const title = generateBlogTitle(kw.keyword);
    report += `### ${i + 1}. ${title}\n`;
    report += `**Target Keyword:** ${kw.keyword} (${kw.search_volume.toLocaleString()} searches/mo, ${kw.competition_index}/100 competition)\n\n`;
    report += `**Outline:**\n`;
    report += `- Introduction: What is ${kw.keyword}?\n`;
    report += `- Why ${kw.keyword} matters for churches\n`;
    report += `- Step-by-step guide / best practices\n`;
    report += `- Common mistakes to avoid\n`;
    report += `- Tools and resources (mention sermon-clips.com)\n`;
    report += `- Conclusion & CTA\n\n`;
  });
  
  report += `\n---\n\n`;
  
  // Full keyword table
  report += `## 📊 Full Keyword Table (Sorted by Opportunity Score)\n\n`;
  report += `Opportunity Score = Search Volume × (1 - Competition Index/100)\n\n`;
  report += `| Keyword | Volume | Competition | CPC | Opportunity |\n`;
  report += `|---------|--------|-------------|-----|-------------|\n`;
  scored.slice(0, 100).forEach(kw => {
    report += `| ${kw.keyword} | ${kw.search_volume.toLocaleString()} | ${kw.competition_index}/100 | $${(kw.cpc || 0).toFixed(2)} | ${kw.opportunity_score.toFixed(0)} |\n`;
  });
  
  const reportPath = path.join(__dirname, 'keyword-research-real-data.md');
  await fs.writeFile(reportPath, report);
  console.log(`Report saved to: ${reportPath}`);
}

function generateBlogTitle(keyword) {
  const templates = [
    `The Ultimate Guide to ${keyword}`,
    `How to Master ${keyword} in 2026`,
    `${keyword}: Everything You Need to Know`,
    `${keyword} - Complete Guide for Churches`,
    `10 Best Practices for ${keyword}`,
    `${keyword}: A Step-by-Step Tutorial`,
    `Why ${keyword} is Essential for Church Growth`
  ];
  
  // Capitalize first letter of each word
  const capitalized = keyword.split(' ').map(w => 
    w.charAt(0).toUpperCase() + w.slice(1)
  ).join(' ');
  
  return templates[Math.floor(Math.random() * templates.length)].replace(keyword, capitalized);
}

main();
