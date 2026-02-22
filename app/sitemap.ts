import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sermonclips.com';
  const now = new Date().toISOString();

  return [
    // Core pages
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sign-up`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },

    // High-value landing pages
    {
      url: `${baseUrl}/easter-2026`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/sermon-transcription`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // Alternatives / comparison pages
    {
      url: `${baseUrl}/alternatives/opus-clip`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/alternatives/sermonshots`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },

    // Blog index
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Blog posts — new (from today's PRs)
    {
      url: `${baseUrl}/blog/ai-sermon-transcription-guide`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/easter-sermon-clips-content-plan`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog/sermon-shorts-complete-guide`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/church-of-300-sermon-workflow`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
    },

    // Blog posts — existing
    {
      url: `${baseUrl}/blog/ai-sermon-clip-generator`,
      lastModified: '2026-02-01T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/best-sermon-clip-maker-software`,
      lastModified: '2026-02-01T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/church-social-media-strategy-repurpose-sermon`,
      lastModified: '2026-02-01T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/church-video-editing-guide`,
      lastModified: '2026-02-01T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/free-sermon-clip-maker`,
      lastModified: '2026-02-01T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/how-to-create-sermon-clips`,
      lastModified: '2026-02-01T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/how-to-create-sermon-clips-fast`,
      lastModified: '2026-02-01T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/how-to-make-sermon-clips`,
      lastModified: '2026-02-01T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/blog/how-to-make-sermon-clips-for-social-media`,
      lastModified: '2026-02-01T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/sermon-clips-for-instagram-reels`,
      lastModified: '2026-02-01T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/sermon-clips-for-tiktok`,
      lastModified: '2026-02-01T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/sermon-clips-with-captions`,
      lastModified: '2026-02-01T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/sermon-notes-to-social-media-ai`,
      lastModified: '2026-02-01T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/short-form-video-for-churches`,
      lastModified: '2026-02-01T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Use case pages
    {
      url: `${baseUrl}/use-cases/sermon-to-social`,
      lastModified: '2026-02-01T00:00:00.000Z',
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
