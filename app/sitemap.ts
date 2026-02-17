import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sermon-clips.com'

  return [
    // Core pages
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date('2026-02-13'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/mission`, lastModified: new Date('2026-02-13'), changeFrequency: 'monthly', priority: 0.7 },

    // Blog
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/blog/how-to-create-sermon-clips`, lastModified: new Date('2026-02-12'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/how-to-create-sermon-clips-fast`, lastModified: new Date('2026-02-12'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/best-sermon-clip-maker-software`, lastModified: new Date('2026-02-12'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/free-sermon-clip-maker`, lastModified: new Date('2026-02-12'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/ai-sermon-clip-generator`, lastModified: new Date('2026-02-12'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/sermon-clips-for-tiktok`, lastModified: new Date('2026-02-12'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/sermon-clips-for-instagram-reels`, lastModified: new Date('2026-02-12'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog/sermon-clips-with-captions`, lastModified: new Date('2026-02-12'), changeFrequency: 'monthly', priority: 0.8 },

    // ICP landing pages
    { url: `${baseUrl}/for`, lastModified: new Date('2026-02-13'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/for/communications-directors`, lastModified: new Date('2026-02-13'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/for/social-media-managers`, lastModified: new Date('2026-02-13'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/for/media-directors`, lastModified: new Date('2026-02-13'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/for/pastors`, lastModified: new Date('2026-02-13'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/for/small-churches`, lastModified: new Date('2026-02-13'), changeFrequency: 'monthly', priority: 0.7 },

    // Use-case pages
    { url: `${baseUrl}/use-cases`, lastModified: new Date('2026-02-13'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/use-cases/sermon-to-social`, lastModified: new Date('2026-02-13'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/use-cases/multi-platform`, lastModified: new Date('2026-02-13'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/use-cases/captions-and-subtitles`, lastModified: new Date('2026-02-13'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/use-cases/youtube-automation`, lastModified: new Date('2026-02-13'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/use-cases/church-growth`, lastModified: new Date('2026-02-13'), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
