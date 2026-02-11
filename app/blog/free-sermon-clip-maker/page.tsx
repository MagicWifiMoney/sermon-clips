import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, CheckCircle2, Star, DollarSign, Smartphone, Download, AlertCircle, ArrowRight, Zap, Gift } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Sermon Clip Maker: 5 Tools That Actually Work | Sermon Clips',
  description: 'Discover the best free sermon clip maker tools for churches. We test CapCut, Canva, DaVinci Resolve, and more to find what actually works without spending a dime.',
  keywords: 'free sermon clip maker, free church video editor, free sermon clipping tool, CapCut for churches, free video editor',
  openGraph: {
    title: 'Free Sermon Clip Maker: 5 Tools That Actually Work',
    description: 'Discover the best free sermon clip maker tools for churches. Real tests, real results, zero cost.',
    type: 'article',
    publishedTime: '2026-02-01T00:00:00.000Z',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best completely free sermon clip maker?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CapCut is the best completely free sermon clip maker. It offers auto-captions, vertical formatting, and hundreds of templates without requiring payment. The free version has no watermarks and exports in full HD."
      }
    },
    {
      "@type": "Question",
      "name": "Can I make professional sermon clips without spending money?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, tools like CapCut and DaVinci Resolve offer professional-grade features for free. The main cost is your time—expect to spend 2-4 hours per sermon creating clips manually versus 30 minutes with paid AI tools."
      }
    },
    {
      "@type": "Question",
      "name": "What are the limitations of free sermon clip makers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Free tools require manual clip selection (no AI moment detection), more editing time, and often lack church-specific features. Some have watermarks or limit export quality, though CapCut and DaVinci Resolve are exceptions."
      }
    }
  ]
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#F5F1EB]/95 backdrop-blur-md z-50 border-b border-[#2D2D2D]/10">
        <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
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
          <Link href="/blog" className="text-sm text-[#5c5c5c] hover:text-[#2D2D2D] flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </nav>
      </header>

      {/* Article */}
      <article className="pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-[#5c5c5c] mb-6">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              February 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              9 min read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
            Free Sermon Clip Maker: 5 Tools That Actually Work
          </h1>

          <p className="text-xl text-[#5c5c5c] mb-10 leading-relaxed">
            Church budgets are tight. We get it. But that doesn't mean your message can't reach beyond Sunday morning. We've tested dozens of free tools to find the ones that actually deliver professional-quality sermon clips without costing your ministry a dime. Here are the 5 that passed the test.
          </p>

          {/* Quick Summary Box */}
          <div className="bg-[#E8725A]/10 rounded-2xl p-8 mb-12 border-l-4 border-[#E8725A]">
            <h2 className="font-bold text-lg text-[#2D2D2D] mb-4 flex items-center gap-2">
              <Gift className="w-5 h-5 text-[#E8725A]" />
              Quick Summary: The 5 Best Free Sermon Clip Makers
            </h2>
            <ol className="space-y-3 text-[#5c5c5c]">
              <li><strong>1. CapCut</strong> — Best overall (auto-captions, no watermark)</li>
              <li><strong>2. DaVinci Resolve</strong> — Most powerful (professional features)</li>
              <li><strong>3. Canva Free</strong> — Easiest for beginners</li>
              <li><strong>4. Clipchamp</strong> — Best Microsoft integration</li>
              <li><strong>5. InShot</strong> — Best mobile option</li>
            </ol>
          </div>

          {/* Table of Contents */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm">
            <h2 className="font-bold text-lg text-[#2D2D2D] mb-4">What We'll Cover</h2>
            <ul className="space-y-2 text-[#5c5c5c]">
              <li><a href="#reality-check" className="hover:text-[#E8725A] transition-colors">The Reality of "Free" Tools</a></li>
              <li><a href="#capcut" className="hover:text-[#E8725A] transition-colors">#1: CapCut — The Clear Winner</a></li>
              <li><a href="#davinci" className="hover:text-[#E8725A] transition-colors">#2: DaVinci Resolve — The Pro Option</a></li>
              <li><a href="#canva" className="hover:text-[#E8725A] transition-colors">#3: Canva Free — The Easy Choice</a></li>
              <li><a href="#clipchamp" className="hover:text-[#E8725A] transition-colors">#4: Clipchamp — Windows Built-In</a></li>
              <li><a href="#inshot" className="hover:text-[#E8725A] transition-colors">#5: InShot — Best for Mobile</a></li>
              <li><a href="#comparison" className="hover:text-[#E8725A] transition-colors">Side-by-Side Comparison</a></li>
              <li><a href="#workflow" className="hover:text-[#E8725A] transition-colors">Free Tool Workflow Guide</a></li>
              <li><a href="#when-upgrade" className="hover:text-[#E8725A] transition-colors">When to Upgrade to Paid</a></li>
            </ul>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            
            <section id="reality-check" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <DollarSign className="w-8 h-8 text-[#E8725A]" />
                The Reality of "Free" Tools
              </h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Before we dive in, let's be honest: free tools come with trade-offs. The biggest one? <strong>Your time.</strong> While paid tools like <Link href="/blog/ai-sermon-clip-generator" className="text-[#E8725A] hover:underline">AI sermon clip generators</Link> can automate most of the work, free tools require you to:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-[#5c5c5c]"><strong>Manually find clip-worthy moments</strong> — watching through the full sermon yourself</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-[#5c5c5c]"><strong>Do the cropping and formatting</strong> — converting horizontal to vertical</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-[#5c5c5c]"><strong>Add captions manually</strong> — or review auto-generated ones for accuracy</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-[#5c5c5c]"><strong>Learn the software</strong> — each tool has a learning curve</span>
                </li>
              </ul>

              <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                <p className="text-[#2D2D2D] font-medium mb-2">Time Investment Reality</p>
                <p className="text-[#5c5c5c]">
                  <strong>Free tools:</strong> 2-4 hours per sermon to create 3-5 clips<br/>
                  <strong>Paid AI tools:</strong> 30-60 minutes per sermon for the same output<br/>
                  <strong>Full-service (like Sermon Clips):</strong> 5-10 minutes to upload, receive clips in 24hrs
                </p>
              </div>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                That said, if you have a volunteer with video skills or more time than budget, these free tools can absolutely produce professional results. Let's look at each one.
              </p>
            </section>

            <section id="capcut" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E8725A] text-white font-bold text-lg">1</span>
                CapCut — The Clear Winner
              </h2>

              <div className="bg-[#E8725A]/5 rounded-2xl p-8 mb-6 border-2 border-[#E8725A]">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-[#E8725A] text-white text-xs font-bold rounded-full mb-2">BEST FREE OPTION</span>
                    <h3 className="text-xl font-bold text-[#2D2D2D]">CapCut</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-green-600">$0</p>
                    <p className="text-sm text-[#5c5c5c]">No watermark!</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className={`w-5 h-5 ${i <= 5 ? 'text-[#E8725A]' : 'text-gray-300'}`} fill={i <= 5 ? "#E8725A" : "none"} />
                  ))}
                  <span className="ml-2 text-sm text-[#5c5c5c]">Best for most churches</span>
                </div>
              </div>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                CapCut, made by the same company behind TikTok, has become the go-to free video editor for good reason. It's genuinely powerful, genuinely free, and designed for the exact type of vertical content churches need for social media.
              </p>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Why CapCut Wins</h3>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mb-2" />
                  <p className="font-medium text-[#2D2D2D]">Auto-Captions</p>
                  <p className="text-sm text-[#5c5c5c]">Surprisingly accurate. Multiple styles. Word-by-word highlighting available.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mb-2" />
                  <p className="font-medium text-[#2D2D2D]">No Watermark</p>
                  <p className="text-sm text-[#5c5c5c]">Export clean, professional clips without branding.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mb-2" />
                  <p className="font-medium text-[#2D2D2D]">1080p Export</p>
                  <p className="text-sm text-[#5c5c5c]">Full HD quality in the free tier.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mb-2" />
                  <p className="font-medium text-[#2D2D2D]">Desktop + Mobile</p>
                  <p className="text-sm text-[#5c5c5c]">Works on all devices with cloud sync.</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">The Workflow</h3>
              <ol className="list-decimal list-inside space-y-2 text-[#5c5c5c] mb-6">
                <li>Import your sermon video</li>
                <li>Use the timeline to find key moments (no AI help here)</li>
                <li>Cut clips to 30-60 seconds</li>
                <li>Use "Auto Reframe" to convert horizontal to vertical</li>
                <li>Add auto-captions → review for accuracy</li>
                <li>Style captions and add any text overlays</li>
                <li>Export at 1080p</li>
              </ol>

              <div className="bg-[#F5F1EB] rounded-xl p-6 mb-6">
                <p className="font-medium text-[#2D2D2D] mb-2">Pro Tips for CapCut</p>
                <ul className="text-sm text-[#5c5c5c] space-y-1">
                  <li>• Save caption styles as presets for consistent branding</li>
                  <li>• Use the "Templates" tab for quick, trendy effects</li>
                  <li>• The web version (capcut.com) has more features than mobile</li>
                  <li>• Biblical names often need manual caption correction</li>
                </ul>
              </div>

              <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-lg">
                <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <p className="text-sm text-[#5c5c5c]"><strong>Limitations:</strong> No AI clip detection (you find the moments manually). Some advanced features require the $9.99/mo Pro plan.</p>
              </div>
            </section>

            <section id="davinci" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2D2D2D] text-white font-bold text-lg">2</span>
                DaVinci Resolve — The Pro Option
              </h2>

              <div className="bg-white rounded-2xl p-8 mb-6 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded-full mb-2">MOST POWERFUL</span>
                    <h3 className="text-xl font-bold text-[#2D2D2D]">DaVinci Resolve</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-green-600">$0</p>
                    <p className="text-sm text-[#5c5c5c]">Studio version $295 (one-time)</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4].map((i) => (
                    <Star key={i} className="w-5 h-5 text-[#E8725A]" fill="#E8725A" />
                  ))}
                  <Star className="w-5 h-5 text-gray-300" fill="none" />
                  <span className="ml-2 text-sm text-[#5c5c5c]">Steep learning curve, but incredibly capable</span>
                </div>
              </div>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                DaVinci Resolve is the tool Hollywood editors use. The free version is genuinely professional-grade—not a stripped-down trial. If you have someone with video editing experience (or someone willing to invest time learning), this is as good as it gets.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-medium text-[#2D2D2D] mb-3">Strengths:</h4>
                  <ul className="space-y-2 text-sm text-[#5c5c5c]">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Professional color correction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Advanced audio processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>4K export in free version</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>No watermarks, no restrictions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Active community for tutorials</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-[#2D2D2D] mb-3">Limitations:</h4>
                  <ul className="space-y-2 text-sm text-[#5c5c5c]">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>Significant learning curve (weeks to master)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>Requires powerful computer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>No auto-captions (need external tool)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>Overkill for simple sermon clips</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-[#5c5c5c]"><strong>Best For:</strong> Churches with dedicated media volunteers who want to level up their skills, or those already familiar with professional editing software.</p>
            </section>

            <section id="canva" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2D2D2D] text-white font-bold text-lg">3</span>
                Canva Free — The Easy Choice
              </h2>

              <div className="bg-white rounded-2xl p-8 mb-6 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full mb-2">EASIEST TO USE</span>
                    <h3 className="text-xl font-bold text-[#2D2D2D]">Canva</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-green-600">$0</p>
                    <p className="text-sm text-[#5c5c5c]">Pro $15/mo (nonprofits get free Pro!)</p>
                  </div>
                </div>
              </div>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Your church probably already uses Canva for bulletins and social graphics. Good news: their video editing has improved dramatically. While it's not specialized for sermon clips, the familiarity and ease of use makes it a solid option for teams that don't want to learn a new tool.
              </p>

              <div className="bg-[#E8725A]/10 rounded-xl p-6 mb-6 border-l-4 border-[#E8725A]">
                <p className="text-[#2D2D2D] font-medium mb-2">🎁 Canva for Nonprofits</p>
                <p className="text-[#5c5c5c]">
                  Churches can apply for Canva Pro for free through their nonprofit program. This unlocks auto-captions, more templates, and brand kit features. Apply at canva.com/canva-for-nonprofits.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-medium text-[#2D2D2D] mb-3">Free Tier Includes:</h4>
                  <ul className="space-y-2 text-sm text-[#5c5c5c]">
                    <li>• Basic video editing and trimming</li>
                    <li>• Hundreds of free templates</li>
                    <li>• Manual text overlays</li>
                    <li>• 5GB cloud storage</li>
                    <li>• Download as MP4</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-[#2D2D2D] mb-3">What You Need Pro For:</h4>
                  <ul className="space-y-2 text-sm text-[#5c5c5c]">
                    <li>• Auto-captions (beat sync)</li>
                    <li>• Background remover</li>
                    <li>• Brand kit</li>
                    <li>• 1TB storage</li>
                    <li>• Premium templates</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-[#5c5c5c]"><strong>Best For:</strong> Churches already using Canva who want to add basic video without learning a new platform.</p>
            </section>

            <section id="clipchamp" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2D2D2D] text-white font-bold text-lg">4</span>
                Clipchamp — Windows Built-In
              </h2>

              <div className="bg-white rounded-2xl p-8 mb-6 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-cyan-500 text-white text-xs font-bold rounded-full mb-2">BEST FOR WINDOWS</span>
                    <h3 className="text-xl font-bold text-[#2D2D2D]">Clipchamp (by Microsoft)</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-green-600">$0</p>
                    <p className="text-sm text-[#5c5c5c]">Included with Windows 11</p>
                  </div>
                </div>
              </div>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Microsoft acquired Clipchamp and built it into Windows 11. If your church runs Windows, you already have this installed. It's simpler than CapCut but capable enough for basic sermon clips.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-medium text-[#2D2D2D] mb-3">Strengths:</h4>
                  <ul className="space-y-2 text-sm text-[#5c5c5c]">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>No download required (already on Windows 11)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Auto-captions included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Clean, simple interface</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Microsoft 365 integration</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-[#2D2D2D] mb-3">Limitations:</h4>
                  <ul className="space-y-2 text-sm text-[#5c5c5c]">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>1080p export only (requires paid for 4K)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>Fewer templates than CapCut</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>Windows only (no Mac support)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>Basic caption styling</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-[#5c5c5c]"><strong>Best For:</strong> Windows users who want zero setup and are fine with basic features.</p>
            </section>

            <section id="inshot" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2D2D2D] text-white font-bold text-lg">5</span>
                InShot — Best for Mobile
              </h2>

              <div className="bg-white rounded-2xl p-8 mb-6 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full mb-2">BEST MOBILE APP</span>
                    <h3 className="text-xl font-bold text-[#2D2D2D]">InShot</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-green-600">$0</p>
                    <p className="text-sm text-[#5c5c5c]">Pro $35/year (removes ads/watermark)</p>
                  </div>
                </div>
              </div>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Sometimes you need to edit on the go. InShot is the best mobile-first editor for sermon clips—quick to learn, capable enough for quality output, and available everywhere.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-medium text-[#2D2D2D] mb-3">Strengths:</h4>
                  <ul className="space-y-2 text-sm text-[#5c5c5c]">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>iPhone + Android</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Easy to use</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Good text/caption options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Quick export to social apps</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-[#2D2D2D] mb-3">Limitations:</h4>
                  <ul className="space-y-2 text-sm text-[#5c5c5c]">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>Watermark without Pro</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>Ads in free version</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>Hard to edit long videos on phone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>No auto-captions in free tier</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-[#5c5c5c]"><strong>Best For:</strong> Youth pastors, volunteers, or anyone who wants to edit clips directly on their phone.</p>
            </section>

            <section id="comparison" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Side-by-Side Comparison</h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl shadow-sm overflow-hidden text-sm">
                  <thead>
                    <tr className="bg-[#2D2D2D] text-white">
                      <th className="text-left p-4 font-semibold">Tool</th>
                      <th className="text-center p-4 font-semibold">Auto-Captions</th>
                      <th className="text-center p-4 font-semibold">Watermark-Free</th>
                      <th className="text-center p-4 font-semibold">1080p Export</th>
                      <th className="text-center p-4 font-semibold">Learning Curve</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#5c5c5c]">
                    <tr className="border-b border-gray-100 bg-[#E8725A]/5">
                      <td className="p-4 font-semibold text-[#E8725A]">CapCut</td>
                      <td className="p-4 text-center">✅ Yes</td>
                      <td className="p-4 text-center">✅ Yes</td>
                      <td className="p-4 text-center">✅ Yes</td>
                      <td className="p-4 text-center">Easy</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-semibold">DaVinci Resolve</td>
                      <td className="p-4 text-center">❌ No</td>
                      <td className="p-4 text-center">✅ Yes</td>
                      <td className="p-4 text-center">✅ Yes (4K too)</td>
                      <td className="p-4 text-center">Hard</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-semibold">Canva Free</td>
                      <td className="p-4 text-center">❌ Pro only</td>
                      <td className="p-4 text-center">✅ Yes</td>
                      <td className="p-4 text-center">✅ Yes</td>
                      <td className="p-4 text-center">Easy</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-semibold">Clipchamp</td>
                      <td className="p-4 text-center">✅ Yes</td>
                      <td className="p-4 text-center">✅ Yes</td>
                      <td className="p-4 text-center">✅ Yes</td>
                      <td className="p-4 text-center">Easy</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-semibold">InShot</td>
                      <td className="p-4 text-center">❌ Pro only</td>
                      <td className="p-4 text-center">❌ Pro only</td>
                      <td className="p-4 text-center">✅ Yes</td>
                      <td className="p-4 text-center">Easy</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="workflow" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-[#E8725A]" />
                Free Tool Workflow Guide
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Here's a step-by-step workflow for creating sermon clips with CapCut (our top free recommendation):
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-[#2D2D2D]">Watch and Timestamp (30-60 min)</h4>
                    <p className="text-sm text-[#5c5c5c]">Watch your sermon at 1.5x speed. Note timestamps for 4-6 potential clip moments. Look for: quotable statements, emotional peaks, practical applications, and story climaxes.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-[#2D2D2D]">Import to CapCut (5 min)</h4>
                    <p className="text-sm text-[#5c5c5c]">Open CapCut, create a new project, and import your sermon video. Set aspect ratio to 9:16 (vertical).</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-[#2D2D2D]">Cut Your Clips (20-30 min)</h4>
                    <p className="text-sm text-[#5c5c5c]">Navigate to each timestamp. Split the video before and after your desired segment. Delete everything except your clip. Aim for 30-60 seconds.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-[#2D2D2D]">Reframe and Position (10 min)</h4>
                    <p className="text-sm text-[#5c5c5c]">Use Auto Reframe or manually adjust to keep your speaker centered. Leave room at the bottom for captions.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-bold text-[#2D2D2D]">Add Captions (15-20 min)</h4>
                    <p className="text-sm text-[#5c5c5c]">Generate auto-captions. Review for accuracy (especially Biblical names). Style to match your brand—choose font, size, color, and animation.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold flex-shrink-0">6</div>
                  <div>
                    <h4 className="font-bold text-[#2D2D2D]">Final Polish (10 min)</h4>
                    <p className="text-sm text-[#5c5c5c]">Add a hook text at the start (optional). Add your church logo as a subtle watermark. Include a closing CTA ("Follow for more" or church name).</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold flex-shrink-0">7</div>
                  <div>
                    <h4 className="font-bold text-[#2D2D2D]">Export and Post (5 min)</h4>
                    <p className="text-sm text-[#5c5c5c]">Export at 1080p. Download or share directly to TikTok/Instagram. Repeat for each clip.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F5F1EB] rounded-xl p-6 mt-8">
                <p className="text-[#2D2D2D] font-medium mb-2">Total Time: 2-3 Hours Per Sermon</p>
                <p className="text-sm text-[#5c5c5c]">This assumes creating 3-4 clips. Your speed will improve with practice—expect to cut this in half after a few weeks.</p>
              </div>
            </section>

            <section id="when-upgrade" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">When to Upgrade to Paid Tools</h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Free tools are great, but there comes a point when the time investment outweighs the cost savings. Consider upgrading when:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#E8725A] flex-shrink-0 mt-0.5" />
                  <span className="text-[#5c5c5c]"><strong>Time cost exceeds tool cost.</strong> If you're spending 3 hours/week at $20/hour effective staff cost, that's $240/month—far more than any paid tool.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#E8725A] flex-shrink-0 mt-0.5" />
                  <span className="text-[#5c5c5c]"><strong>Consistency is suffering.</strong> Missing weeks because "no one had time" defeats the purpose.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#E8725A] flex-shrink-0 mt-0.5" />
                  <span className="text-[#5c5c5c]"><strong>You want to scale.</strong> Growing from 3 clips to 5+ per sermon is painful with manual tools.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#E8725A] flex-shrink-0 mt-0.5" />
                  <span className="text-[#5c5c5c]"><strong>Volunteers burn out.</strong> Clip creation becoming a chore means quality will decline.</span>
                </div>
              </div>

              <p className="text-[#5c5c5c] leading-relaxed">
                When you're ready to upgrade, check out our <Link href="/blog/best-sermon-clip-maker-software" className="text-[#E8725A] hover:underline">complete guide to sermon clip software</Link> for recommendations at every price point.
              </p>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-[#2D2D2D] to-[#3D3D3D] rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Save Hours Every Week?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Free tools work—but your time is valuable too. Try Sermon Clips free and experience what AI-powered clip creation feels like. Upload once, receive clips in 24 hours.
              </p>
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 bg-[#E8725A] hover:bg-[#d4654f] px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg"
              >
                Try Sermon Clips Free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-white/60 text-sm mt-4">No credit card required • First sermon free</p>
            </section>

          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2D2D2D] mb-8">Continue Reading</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/best-sermon-clip-maker-software" className="group p-6 rounded-xl border border-[#E8E4DC] hover:border-[#E8725A]/30 transition-all">
              <p className="text-sm text-[#E8725A] mb-2">Related Guide</p>
              <h3 className="font-bold text-[#2D2D2D] group-hover:text-[#E8725A] transition-colors">Best Sermon Clip Maker Software for Churches in 2026</h3>
            </Link>
            <Link href="/blog/how-to-create-sermon-clips-fast" className="group p-6 rounded-xl border border-[#E8E4DC] hover:border-[#E8725A]/30 transition-all">
              <p className="text-sm text-[#E8725A] mb-2">Next Up</p>
              <h3 className="font-bold text-[#2D2D2D] group-hover:text-[#E8725A] transition-colors">How to Create Sermon Clips in Under 10 Minutes</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
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
