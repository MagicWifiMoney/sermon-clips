import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Blog | Sermon Clips - Church Video Tips & Guides',
  description: 'Expert guides on creating engaging sermon clips, church social media strategies, and video content best practices.',
};

export default function BlogIndex() {
  const posts = [
    {
      slug: 'how-to-create-sermon-clips',
      title: 'The Complete Guide to Creating Sermon Clips for Social Media in 2026',
      excerpt: 'Transform your Sunday messages into engaging, shareable video clips. This comprehensive guide covers everything from selecting the perfect moments to optimizing for each platform.',
      date: 'February 2026',
      readTime: '15 min read',
      featured: true,
    },
    {
      slug: 'sermon-shots-vs-pulpit-ai-vs-gloo-comparison',
      title: 'Sermon Shots vs Pulpit AI vs Gloo Content Studio: The Complete 2026 Comparison',
      excerpt: 'Struggling to turn Sunday\'s sermon into scroll-stopping social content? Here\'s everything you need to know about the three leading sermon clipping platforms.',
      date: 'January 2026',
      readTime: '8 min read',
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#F5F1EB]/95 backdrop-blur-md z-50 border-b border-[#2D2D2D]/10">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <rect x="15" y="0" width="10" height="40" fill="#2D2D2D" />
                <rect x="5" y="12" width="30" height="8" fill="#2D2D2D" />
                <polygon points="18,22 26,26 18,30" fill="#E8725A" />
              </svg>
            </div>
            <div>
              <span className="font-bold text-xl text-[#2D2D2D]">Sermon</span>
              <span className="font-light text-xl text-[#2D2D2D] tracking-[0.15em] uppercase ml-0.5">Clips</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <Link href="/#how-it-works" className="text-sm text-[#5c5c5c] hover:text-[#2D2D2D] transition-colors">How It Works</Link>
            <Link href="/#pricing" className="text-sm text-[#5c5c5c] hover:text-[#2D2D2D] transition-colors">Pricing</Link>
            <Link href="/blog" className="text-sm text-[#2D2D2D] font-medium">Blog</Link>
          </div>

          <Link 
            href="/"
            className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-lg hover:shadow-[#E8725A]/25"
          >
            Try Free
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-4">
            Sermon Clips Blog
          </h1>
          <p className="text-xl text-[#5c5c5c] mb-12">
            Expert guides on creating engaging sermon clips and growing your church's social media presence.
          </p>

          <div className="space-y-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`block bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 ${
                  post.featured ? 'border-2 border-[#E8725A]' : 'border border-[#2D2D2D]/10'
                }`}
              >
                {post.featured && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8725A]/10 text-[#E8725A] rounded-full text-sm font-medium mb-4">
                    Featured Guide
                  </div>
                )}
                <div className="flex items-center gap-4 text-sm text-[#5c5c5c] mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-[#2D2D2D] mb-3 group-hover:text-[#E8725A]">
                  {post.title}
                </h2>
                <p className="text-[#5c5c5c] mb-4 leading-relaxed">{post.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-[#E8725A] font-semibold">
                  Read full guide
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Link href="/" className="inline-flex items-center gap-3 mb-6">
            <div className="relative w-8 h-8">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <rect x="15" y="0" width="10" height="40" fill="white" />
                <rect x="5" y="12" width="30" height="8" fill="white" />
                <polygon points="18,22 26,26 18,30" fill="#E8725A" />
              </svg>
            </div>
            <span className="font-bold text-lg">Sermon Clips</span>
          </Link>
          <p className="text-white/60 text-sm">
            © 2026 Sermon Clips. Helping churches multiply their message.
          </p>
        </div>
      </footer>
    </div>
  );
}
