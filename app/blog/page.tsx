import Link from 'next/link';

export const metadata = {
  title: 'Church Video Clipping Blog | Sermon Clips & Social Media Tips',
  description: 'Expert guides on creating engaging sermon clips, church social media strategies, and video content best practices.',
};

export default function BlogIndex() {
  const posts = [
    {
      slug: 'sermon-shots-vs-pulpit-ai-vs-gloo-comparison',
      title: 'Sermon Shots vs Pulpit AI vs Gloo Content Studio: The Complete 2026 Comparison',
      excerpt: 'Struggling to turn Sunday\'s sermon into scroll-stopping social content? Here\'s everything you need to know about the three leading sermon clipping platforms.',
      date: 'January 2026',
      readTime: '8 min read',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-900">
            PulpitClips
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/#how-it-works" className="text-gray-600 hover:text-blue-900">
              How It Works
            </Link>
            <Link href="/#pricing" className="text-gray-600 hover:text-blue-900">
              Pricing
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-900">
              Blog
            </Link>
          </div>
          <Link
            href="/#pricing"
            className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Start Free Trial
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Church Video Clipping Blog
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Expert guides on creating engaging sermon clips and growing your church&apos;s social media presence.
          </p>

          <div className="space-y-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-900">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <span className="text-blue-900 font-semibold hover:underline">
                  Read full comparison →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12 mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <Link href="/" className="text-white font-bold text-xl mb-4 inline-block">
              PulpitClips
            </Link>
            <p className="text-sm">Made with ❤️ for the local church</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
