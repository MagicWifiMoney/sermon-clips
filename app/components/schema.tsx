// Schema markup for Sermon Clips
// Deployed: Feb 15, 2026 - Marketing CMO

export const OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sermon Clips",
  "url": "https://sermon-clips.com",
  "logo": "https://sermon-clips.com/logo.png",
  "description": "Transform your weekly sermons into scroll-stopping social clips. Professional sermon clipping service for churches.",
  "sameAs": [
    "https://twitter.com/sermonclips",
    "https://facebook.com/sermonclips",
    "https://instagram.com/sermonclips"
  ]
};

export const SoftwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Sermon Clips",
  "applicationCategory": "VideoEditingApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Free trial available"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  },
  "description": "AI-powered sermon clip creation platform for churches. Automatically turns your weekly messages into scroll-stopping social clips.",
  "featureList": [
    "AI clip detection and selection",
    "Auto-captioning with church-specific accuracy",
    "Platform-specific formatting (TikTok, Reels, Shorts)",
    "Automated publishing to social media",
    "Analytics and engagement tracking"
  ]
};

export const FAQPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long should sermon clips be?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The sweet spot is 20-45 seconds. Long enough to deliver value, short enough to maintain attention. For exceptionally powerful moments, you can go up to 60 seconds, but completion rates drop significantly after that."
      }
    },
    {
      "@type": "Question",
      "name": "Do we need permission from our pastor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Create a simple approval workflow—either the pastor reviews clips before posting, or you establish clear guidelines about what can and can't be shared. Some pastors prefer to select clip moments themselves during sermon prep."
      }
    },
    {
      "@type": "Question",
      "name": "Should we use trending audio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sometimes. If a trending sound genuinely fits and doesn't distract from the message, it can boost discoverability. But never force it. Your pastor's voice should be the star—background audio is supporting cast only."
      }
    },
    {
      "@type": "Question",
      "name": "What about copyrighted worship music?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If your clip includes background worship music, you may face copyright issues on some platforms. Either use royalty-free alternatives, strip the background audio and add new music, or accept that some clips may be muted by platforms."
      }
    },
    {
      "@type": "Question",
      "name": "How do we measure success?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Key metrics: views, shares (most important), saves, comments, and profile visits. Track these weekly. A clip that gets 500 views but 50 shares is more valuable than one with 2,000 views and 3 shares—shares mean multiplication."
      }
    },
    {
      "@type": "Question",
      "name": "What if our video quality isn't great?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Content beats production value. A clear message recorded on a phone can outperform a 4K production with weak content. That said, prioritize audio quality above all—invest in a good lavalier mic before upgrading cameras."
      }
    },
    {
      "@type": "Question",
      "name": "How to make sermon clips for social media?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To make sermon clips: 1) Record your sermon with quality audio, 2) Transcribe the message, 3) Identify 30-60 second highlight moments, 4) Cut and crop to vertical (9:16), 5) Add captions (essential - 85% watch without sound), 6) Export and optimize for each platform. Use tools like CapCut, Descript, or church-specific platforms like Sermon Clips for automation."
      }
    },
    {
      "@type": "Question",
      "name": "What are the best sermon clip tools?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Top sermon clip tools: CapCut (free, DIY-friendly), Descript ($12/mo, transcript-based editing), Opus Clip ($19/mo, AI virality scoring), Sermon Clips (church-specific automation), Pulpit AI ($29/mo, multi-format repurposing). Choose based on budget, team size, and how much automation you need."
      }
    },
    {
      "@type": "Question",
      "name": "What length works best for sermon clips on TikTok vs Instagram?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TikTok performs best with 21-34 second clips (can go up to 60s). Instagram Reels work well at 15-90 seconds. YouTube Shorts: 15-60 seconds optimal. Facebook: 30-90 seconds. Shorter = higher completion rate, which boosts algorithm visibility."
      }
    },
    {
      "@type": "Question",
      "name": "How many sermon clips should we post per week?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start with 3 clips per week (Wednesday, Friday, Sunday) from your most recent sermon. This maintains consistency without overwhelming your team. As you build systems, you can increase to daily posting by pulling from your sermon library."
      }
    }
  ]
};

export const HowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Make Sermon Clips for Social Media",
  "description": "Complete workflow for creating viral sermon clips from your weekly messages",
  "image": "https://sermon-clips.com/og-image.jpg",
  "totalTime": "PT3H",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "0"
  },
  "tool": [
    {
      "@type": "HowToTool",
      "name": "Video editing software (CapCut, Descript, or Sermon Clips)"
    },
    {
      "@type": "HowToTool",
      "name": "Sermon recording (1080p minimum)"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Record with Quality Audio",
      "text": "Capture your sermon in landscape (16:9) at minimum 1080p. Use a lapel mic on the pastor for clear audio. Frame chest-up with room to crop for vertical.",
      "url": "https://sermon-clips.com/blog/how-to-create-sermon-clips#recording"
    },
    {
      "@type": "HowToStep",
      "name": "Transcribe the Message",
      "text": "Upload to a transcription tool to get searchable text. This makes finding powerful quotes instant and provides ready-made captions.",
      "url": "https://sermon-clips.com/blog/how-to-create-sermon-clips#transcription"
    },
    {
      "@type": "HowToStep",
      "name": "Identify Highlight Moments",
      "text": "Scan your transcript for hook statements, quotable truths, vulnerable moments, practical applications, story peaks, counter-cultural challenges, and congregation reactions. Mark 4-6 potential clips.",
      "url": "https://sermon-clips.com/blog/how-to-create-sermon-clips#finding-moments"
    },
    {
      "@type": "HowToStep",
      "name": "Cut and Trim",
      "text": "Extract 20-45 second segments. Remove pauses and filler words. Aim for tight, punchy clips that deliver value quickly.",
      "url": "https://sermon-clips.com/blog/how-to-create-sermon-clips#editing-basics"
    },
    {
      "@type": "HowToStep",
      "name": "Crop to Vertical (9:16)",
      "text": "Convert horizontal church recording to vertical format. Keep speaker's face and upper body centered. Leave 20% bottom space for captions.",
      "url": "https://sermon-clips.com/blog/how-to-create-sermon-clips#editing-basics"
    },
    {
      "@type": "HowToStep",
      "name": "Add Captions",
      "text": "Auto-generate captions, then review for accuracy. 85% of social media video is watched without sound—captions are non-negotiable. Use bold fonts, high contrast, and emphasize key words.",
      "url": "https://sermon-clips.com/blog/how-to-create-sermon-clips#captions-text"
    },
    {
      "@type": "HowToStep",
      "name": "Add Hook Elements",
      "text": "Include text overlay topic in first 2-3 seconds, subtle zoom animation, church logo watermark in corner, and optional background music at 10-15% volume.",
      "url": "https://sermon-clips.com/blog/how-to-create-sermon-clips#editing-basics"
    },
    {
      "@type": "HowToStep",
      "name": "Export and Optimize",
      "text": "Export at 1080x1920 (9:16), 30fps, MP4 format, 8-12 Mbps bitrate. Test the first few seconds on mobile to ensure hook lands.",
      "url": "https://sermon-clips.com/blog/how-to-create-sermon-clips#editing-basics"
    },
    {
      "@type": "HowToStep",
      "name": "Publish Strategically",
      "text": "Post to TikTok, Instagram Reels, YouTube Shorts, and Facebook. Use platform-specific best posting times. Engage with comments in the first hour to boost algorithm visibility.",
      "url": "https://sermon-clips.com/blog/how-to-create-sermon-clips#platform-specs"
    }
  ]
};

export const BreadcrumbListSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://sermon-clips.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://sermon-clips.com/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "How to Create Sermon Clips",
      "item": "https://sermon-clips.com/blog/how-to-create-sermon-clips"
    }
  ]
};
