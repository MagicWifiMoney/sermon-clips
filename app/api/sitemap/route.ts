export async function GET() {
  const baseUrl = 'https://sermon-clips.com'
  
  const pages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/mission', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog', priority: '0.9', changefreq: 'weekly' },
    { url: '/blog/how-to-create-sermon-clips', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog/how-to-create-sermon-clips-fast', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog/best-sermon-clip-maker-software', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog/free-sermon-clip-maker', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog/ai-sermon-clip-generator', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog/sermon-clips-for-tiktok', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog/sermon-clips-for-instagram-reels', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog/sermon-clips-with-captions', priority: '0.8', changefreq: 'monthly' },
    { url: '/for', priority: '0.8', changefreq: 'monthly' },
    { url: '/for/communications-directors', priority: '0.7', changefreq: 'monthly' },
    { url: '/for/social-media-managers', priority: '0.7', changefreq: 'monthly' },
    { url: '/for/media-directors', priority: '0.7', changefreq: 'monthly' },
    { url: '/for/pastors', priority: '0.7', changefreq: 'monthly' },
    { url: '/for/small-churches', priority: '0.7', changefreq: 'monthly' },
    { url: '/use-cases', priority: '0.8', changefreq: 'monthly' },
    { url: '/use-cases/sermon-to-social', priority: '0.7', changefreq: 'monthly' },
    { url: '/use-cases/multi-platform', priority: '0.7', changefreq: 'monthly' },
    { url: '/use-cases/captions-and-subtitles', priority: '0.7', changefreq: 'monthly' },
    { url: '/use-cases/youtube-automation', priority: '0.7', changefreq: 'monthly' },
    { url: '/use-cases/church-growth', priority: '0.7', changefreq: 'monthly' },
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${baseUrl}${p.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
