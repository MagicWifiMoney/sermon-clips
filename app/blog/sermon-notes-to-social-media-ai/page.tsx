
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, CheckCircle2, Share2, Lightbulb, Sparkles, Zap, FileText, Brain, Target, TrendingUp, Video, Image as ImageIcon, MessageSquare } from 'lucide-react';

export const metadata = {
  title: 'Sermon Notes to Social Media: How AI Turns Your Message Into Shareable Content',
  description: 'Your sermon notes are a goldmine for social media content. Learn how AI tools can automatically extract highlights and create shareable clips.',
  keywords: 'sermon notes, ai sermon clips, sermon content repurposing, ai church tools, sermon to social media ai',
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-[#F5F1EB]">
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
              10 min read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
            Sermon Notes to Social Media: How AI Turns Your Message Into Shareable Content
          </h1>

          <p className="text-xl text-[#5c5c5c] mb-10 leading-relaxed">
            Your pastor's sermon notes contain everything you need for a week of social media content—key quotes, illustrations, Scripture references, and practical applications. AI can now extract and format all of it automatically. Here's how it works and why it's changing church communications.
          </p>

          {/* Table of Contents */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm">
            <h2 className="font-bold text-lg text-[#2D2D2D] mb-4">What You'll Learn</h2>
            <ul className="space-y-2 text-[#5c5c5c]">
              <li><a href="#goldmine" className="hover:text-[#E8725A] transition-colors">Why Sermon Notes Are a Social Media Goldmine</a></li>
              <li><a href="#how-ai-works" className="hover:text-[#E8725A] transition-colors">How AI Analyzes Sermon Content</a></li>
              <li><a href="#what-ai-creates" className="hover:text-[#E8725A] transition-colors">What AI Can Create from Your Notes</a></li>
              <li><a href="#tools" className="hover:text-[#E8725A] transition-colors">AI Tools for Churches in 2026</a></li>
              <li><a href="#workflow" className="hover:text-[#E8725A] transition-colors">Your AI-Powered Workflow</a></li>
              <li><a href="#best-practices" className="hover:text-[#E8725A] transition-colors">Best Practices for AI Content</a></li>
              <li><a href="#future" className="hover:text-[#E8725A] transition-colors">The Future of AI Church Tools</a></li>
            </ul>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            
            <section id="goldmine" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-[#E8725A]" />
                Why Sermon Notes Are a Social Media Goldmine
              </h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Think about what's in a typical sermon preparation document: carefully researched theology, personal stories, cultural commentary, practical applications, memorable illustrations, and Scripture exposition. Your pastor has already done the hard work of <strong>creating valuable, original content</strong>.
              </p>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                The problem? Most of that content dies in a notebook or gets delivered once on Sunday morning. But every element—from the opening hook to the closing prayer—can be extracted, reformatted, and shared across social platforms.
              </p>

              <div className="bg-gradient-to-br from-[#E8725A]/10 to-[#E8725A]/5 rounded-xl p-8 mb-8 border-l-4 border-[#E8725A]">
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">What's Hidden in Sermon Notes</h3>
                <div className="grid md:grid-cols-2 gap-4 text-[#5c5c5c]">
                  <div>
                    <p className="font-semibold text-[#2D2D2D] mb-2">📖 Content Types:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Key quotes and soundbites</li>
                      <li>• Personal testimony moments</li>
                      <li>• Scripture references</li>
                      <li>• Practical action steps</li>
                      <li>• Discussion questions</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-[#2D2D2D] mb-2">🎯 Social Formats:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Video clips (from recording)</li>
                      <li>• Quote graphics</li>
                      <li>• Carousel posts</li>
                      <li>• Daily devotionals</li>
                      <li>• Discussion prompts</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-[#5c5c5c] leading-relaxed">
                Until recently, extracting all this required hours of manual work—watching the full sermon, identifying key moments, designing graphics, editing clips. <strong>AI changes everything.</strong>
              </p>
            </section>

            <section id="how-ai-works" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Brain className="w-8 h-8 text-[#E8725A]" />
                How AI Analyzes Sermon Content
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Modern AI tools use sophisticated natural language processing (NLP) to understand sermons the way a human would—identifying themes, emotional peaks, quotable moments, and structural elements.
              </p>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">The AI Content Analysis Process</h3>

              <div className="space-y-6">
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <h4 className="text-lg font-bold text-[#2D2D2D] mb-2">Transcription & Understanding</h4>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    AI transcribes your sermon audio (or analyzes written notes), then uses language models to understand context, tone, and meaning—not just individual words.
                  </p>
                  <div className="bg-white rounded-lg p-4 text-xs">
                    <p className="text-[#2D2D2D] font-medium mb-1">What AI "sees":</p>
                    <p className="text-[#5c5c5c]">
                      "When pastor says 'Forgiveness isn't forgetting,' the AI recognizes this as a memorable definition that challenges a common misconception—perfect for a quote graphic or short clip."
                    </p>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <h4 className="text-lg font-bold text-[#2D2D2D] mb-2">Identifying Shareable Moments</h4>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    AI looks for specific patterns that indicate high-value content: rhetorical questions, emotional language, practical advice, personal stories, and moments that work standalone.
                  </p>
                  <div className="bg-white rounded-lg p-4 text-xs">
                    <p className="text-[#2D2D2D] font-medium mb-1">What makes content "shareable" to AI:</p>
                    <ul className="text-[#5c5c5c] space-y-1">
                      <li>✓ Self-contained (no prior context needed)</li>
                      <li>✓ Emotionally resonant</li>
                      <li>✓ Clear and concise</li>
                      <li>✓ Actionable or thought-provoking</li>
                    </ul>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <h4 className="text-lg font-bold text-[#2D2D2D] mb-2">Formatting for Platforms</h4>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    Once AI identifies key content, it formats it appropriately: vertical video clips with captions for Reels, text-based graphics for Instagram feed, longer-form for blog posts.
                  </p>
                  <div className="bg-white rounded-lg p-4 text-xs">
                    <p className="text-[#2D2D2D] font-medium mb-1">Example transformation:</p>
                    <p className="text-[#5c5c5c]">
                      Sermon moment → 30-second vertical video clip with auto-generated captions + Instagram Reel → Quote graphic for Stories → Expanded devotional for email → Discussion question for small groups
                    </p>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <h4 className="text-lg font-bold text-[#2D2D2D] mb-2">Optimization & Enhancement</h4>
                  <p className="text-[#5c5c5c] text-sm">
                    AI adds finishing touches: compelling titles, relevant hashtags, engaging captions, and even suggests optimal posting times based on your audience data.
                  </p>
                </div>
              </div>
            </section>

            <section id="what-ai-creates" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-[#E8725A]" />
                What AI Can Create from Your Notes
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-8">
                Here's what AI-powered church tools can automatically generate from a single sermon recording or manuscript:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-sm border-l-4 border-purple-500">
                  <div className="flex items-center gap-3 mb-3">
                    <Video className="w-6 h-6 text-purple-600" />
                    <h3 className="font-bold text-[#2D2D2D]">Video Clips</h3>
                  </div>
                  <ul className="text-[#5c5c5c] space-y-2 text-sm">
                    <li>• 20-60 second vertical clips</li>
                    <li>• Auto-generated captions</li>
                    <li>• Branded overlays and watermarks</li>
                    <li>• Optimized for Reels/Shorts/TikTok</li>
                  </ul>
                  <p className="text-xs text-purple-600 mt-3 font-medium">
                    <Link href="/blog/how-to-make-sermon-clips-for-social-media" className="underline">Learn more about sermon clips →</Link>
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-sm border-l-4 border-blue-500">
                  <div className="flex items-center gap-3 mb-3">
                    <ImageIcon className="w-6 h-6 text-blue-600" />
                    <h3 className="font-bold text-[#2D2D2D]">Quote Graphics</h3>
                  </div>
                  <ul className="text-[#5c5c5c] space-y-2 text-sm">
                    <li>• Instagram feed & Stories formats</li>
                    <li>• Branded templates</li>
                    <li>• Multiple design variations</li>
                    <li>• Pinterest-optimized versions</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 shadow-sm border-l-4 border-green-500">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="w-6 h-6 text-green-600" />
                    <h3 className="font-bold text-[#2D2D2D]">Written Content</h3>
                  </div>
                  <ul className="text-[#5c5c5c] space-y-2 text-sm">
                    <li>• Daily devotionals</li>
                    <li>• Blog post summaries</li>
                    <li>• Email newsletter content</li>
                    <li>• Social media captions</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 shadow-sm border-l-4 border-orange-500">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageSquare className="w-6 h-6 text-orange-600" />
                    <h3 className="font-bold text-[#2D2D2D]">Discussion Content</h3>
                  </div>
                  <ul className="text-[#5c5c5c] space-y-2 text-sm">
                    <li>• Small group questions</li>
                    <li>• Reflection prompts</li>
                    <li>• Study guide outlines</li>
                    <li>• Prayer points</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#E8725A]/10 rounded-xl p-6 border-l-4 border-[#E8725A]">
                <p className="text-[#2D2D2D] font-medium mb-2">The Multiplication Factor</p>
                <p className="text-[#5c5c5c] text-sm">
                  One 30-minute sermon → <strong>15-20 pieces of content</strong> created in under 30 minutes. That's what AI makes possible. Compare that to the 5-10 hours it would take manually.
                </p>
              </div>
            </section>

            <section id="tools" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-[#E8725A]" />
                AI Tools for Churches in 2026
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                The AI church tech landscape has exploded. Here are the main categories and standout tools:
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-3 flex items-center gap-2">
                    <span className="text-2xl">🎬</span>
                    AI Video Clipping Tools
                  </h3>
                  <p className="text-[#5c5c5c] text-sm mb-4">
                    These tools analyze your full sermon video and automatically identify the best moments for short-form social clips.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-start gap-4 pb-3 border-b border-gray-100">
                      <div>
                        <p className="font-semibold text-[#2D2D2D]">Sermon Clips</p>
                        <p className="text-[#5c5c5c]">Church-specific AI, auto-caption, brand templates, direct publishing</p>
                      </div>
                      <Link href="/" className="text-[#E8725A] font-medium whitespace-nowrap hover:underline">Try Free →</Link>
                    </div>
                    <div className="flex justify-between items-start gap-4 pb-3 border-b border-gray-100">
                      <div>
                        <p className="font-semibold text-[#2D2D2D]">Opus Clip</p>
                        <p className="text-[#5c5c5c]">Virality scoring, multi-platform optimization, generic use cases</p>
                      </div>
                      <span className="text-[#5c5c5c] text-xs whitespace-nowrap">From $19/mo</span>
                    </div>
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <p className="font-semibold text-[#2D2D2D]">Pulpit AI</p>
                        <p className="text-[#5c5c5c]">Sermon-specific, also generates devotionals and graphics</p>
                      </div>
                      <span className="text-[#5c5c5c] text-xs whitespace-nowrap">From $29/mo</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-3 flex items-center gap-2">
                    <span className="text-2xl">✍️</span>
                    AI Content Generation Tools
                  </h3>
                  <p className="text-[#5c5c5c] text-sm mb-4">
                    Turn sermon transcripts into written content: devotionals, blog posts, social captions, and more.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="pb-3 border-b border-gray-100">
                      <p className="font-semibold text-[#2D2D2D]">ChatGPT / Claude</p>
                      <p className="text-[#5c5c5c]">General-purpose AI. Upload transcript and prompt for specific outputs. Requires manual oversight.</p>
                    </div>
                    <div className="pb-3 border-b border-gray-100">
                      <p className="font-semibold text-[#2D2D2D]">Descript</p>
                      <p className="text-[#5c5c5c]">Video editing + transcription + AI text editing. Excellent for repurposing long-form to short.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#2D2D2D]">Custom GPTs (for churches)</p>
                      <p className="text-[#5c5c5c]">Some churches are building custom AI assistants trained on their sermon style and theology.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-3 flex items-center gap-2">
                    <span className="text-2xl">🎨</span>
                    AI Design Tools
                  </h3>
                  <p className="text-[#5c5c5c] text-sm mb-4">
                    Automatically generate branded graphics from sermon quotes and themes.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="pb-3 border-b border-gray-100">
                      <p className="font-semibold text-[#2D2D2D]">Canva Magic Design</p>
                      <p className="text-[#5c5c5c]">AI-powered design suggestions. Input a quote, get 10 design variations instantly.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#2D2D2D]">Adobe Firefly</p>
                      <p className="text-[#5c5c5c]">For churches with Adobe Creative Cloud, generates images and graphics from text prompts.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#2D2D2D] to-[#3D3D3D] rounded-xl p-6 text-white">
                <h3 className="font-bold mb-3">Which Tool Should Your Church Use?</h3>
                <div className="space-y-3 text-sm text-white/90">
                  <p><strong>Small church, tight budget:</strong> Start with free ChatGPT for written content + CapCut for manual video editing.</p>
                  <p><strong>Mid-size church, some budget:</strong> Invest in a church-specific tool like <Link href="/" className="text-[#E8725A] underline">Sermon Clips</Link> that handles video + captions + branding automatically.</p>
                  <p><strong>Large church, professional standards:</strong> Combine specialized tools (Descript for editing + Canva Pro for graphics + custom workflows).</p>
                </div>
              </div>
            </section>

            <section id="workflow" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-[#E8725A]" />
                Your AI-Powered Workflow
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Here's how to integrate AI into your content creation process without losing the human touch:
              </p>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#E8725A]/20 flex items-center justify-center font-bold text-[#E8725A]">
                      1
                    </div>
                    <h3 className="font-bold text-[#2D2D2D] text-lg">Sunday Morning: Record & Upload</h3>
                  </div>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    Record your sermon with good audio. Immediately after service, upload the video to your AI tool. Most platforms process in 10-20 minutes.
                  </p>
                  <p className="text-xs text-[#E8725A] italic">
                    Pro tip: Some tools accept sermon manuscripts too—upload your notes on Saturday night for early content prep.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#E8725A]/20 flex items-center justify-center font-bold text-[#E8725A]">
                      2
                    </div>
                    <h3 className="font-bold text-[#2D2D2D] text-lg">Monday: Review AI Suggestions</h3>
                  </div>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    AI will have generated 10-15 pieces of content. Review each one:
                  </p>
                  <ul className="text-[#5c5c5c] space-y-1 text-sm">
                    <li>✓ Does this accurately represent the message?</li>
                    <li>✓ Is the theology sound?</li>
                    <li>✓ Would I share this?</li>
                  </ul>
                  <p className="text-xs text-[#5c5c5c] mt-3 italic">
                    Expect to approve 70-80% as-is, tweak 10-20%, and discard 5-10%. That's still a massive time saver.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#E8725A]/20 flex items-center justify-center font-bold text-[#E8725A]">
                      3
                    </div>
                    <h3 className="font-bold text-[#2D2D2D] text-lg">Monday Afternoon: Customize & Brand</h3>
                  </div>
                  <p className="text-[#5c5c5c] text-sm">
                    Make content distinctly yours: add your brand colors, adjust captions to match your pastor's voice, include church-specific CTAs ("Join us this Sunday!" "Download our app").
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#E8725A]/20 flex items-center justify-center font-bold text-[#E8725A]">
                      4
                    </div>
                    <h3 className="font-bold text-[#2D2D2D] text-lg">Tuesday: Schedule Everything</h3>
                  </div>
                  <p className="text-[#5c5c5c] text-sm">
                    Load approved content into your scheduling tool. Set posts for optimal times throughout the week. Done. The rest happens automatically.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-[#E8725A]/10 rounded-xl p-6 border-l-4 border-[#E8725A]">
                <h3 className="font-bold text-[#2D2D2D] mb-3">Time Comparison</h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="font-semibold text-[#2D2D2D] mb-2">Manual Process:</p>
                    <ul className="text-[#5c5c5c] space-y-1">
                      <li>• Watch full sermon: 30-40 min</li>
                      <li>• Identify moments: 20 min</li>
                      <li>• Edit clips: 60-90 min</li>
                      <li>• Design graphics: 45 min</li>
                      <li>• Write captions: 30 min</li>
                      <li className="font-bold text-[#2D2D2D] pt-2">Total: 3-4 hours</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-[#2D2D2D] mb-2">With AI:</p>
                    <ul className="text-[#5c5c5c] space-y-1">
                      <li>• Upload: 2 min</li>
                      <li>• AI processing: 15 min (automatic)</li>
                      <li>• Review content: 20 min</li>
                      <li>• Customize: 15 min</li>
                      <li>• Schedule: 10 min</li>
                      <li className="font-bold text-[#E8725A] pt-2">Total: 45-60 min</li>
                    </ul>
                  </div>
                </div>
                <p className="text-[#5c5c5c] text-sm mt-4">
                  <strong>That's 75% less time</strong> for the same (or better) output. Those saved hours can go toward actual ministry.
                </p>
              </div>
            </section>

            <section id="best-practices" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-[#E8725A]" />
                Best Practices for AI Content
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                AI is a powerful assistant, but it's not infallible. Here's how to use it responsibly:
              </p>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-3">Always Review for Theological Accuracy</h3>
                  <p className="text-[#5c5c5c] text-sm">
                    AI doesn't understand doctrine. It can misinterpret nuance or create technically correct but theologically misleading content. Have a pastor or trained leader review anything doctrinal before publishing.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-3">Preserve Your Pastor's Voice</h3>
                  <p className="text-[#5c5c5c] text-sm">
                    AI might smooth out your pastor's unique quirks or colloquialisms. Put them back in. Authenticity &gt; polish. If your pastor says "y'all" or has a signature phrase, keep it.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-3">Don't Sacrifice Context for Virality</h3>
                  <p className="text-[#5c5c5c] text-sm">
                    AI might suggest a clip because it's provocative or emotional—but if it misrepresents the sermon's message, skip it. Viral moments aren't worth doctrinal confusion.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-3">Add Human Touchpoints</h3>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    Use AI-generated content as the foundation, then add personal elements:
                  </p>
                  <ul className="text-[#5c5c5c] space-y-1 text-sm">
                    <li>• Write a custom caption intro</li>
                    <li>• Add a timely current event tie-in</li>
                    <li>• Include a specific church announcement</li>
                    <li>• Respond personally to comments</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-3">Be Transparent (When Appropriate)</h3>
                  <p className="text-[#5c5c5c] text-sm">
                    You don't need to label every AI-assisted post, but if someone asks about your workflow, be honest. "We use AI to help us reach more people with our pastor's message" is nothing to hide.
                  </p>
                </div>
              </div>
            </section>

            <section id="future" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-[#E8725A]" />
                The Future of AI Church Tools
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                We're still in the early days of AI for church communications. Here's what's coming next:
              </p>

              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-[#E8725A] pl-6 py-2">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">🎭 AI Avatars & Voiceovers</h4>
                  <p className="text-[#5c5c5c] text-sm">
                    Some platforms are experimenting with AI-generated voiceovers for sermon summaries or multilingual content. Controversial, but could help churches reach non-English speakers.
                  </p>
                </div>

                <div className="border-l-4 border-[#E8725A] pl-6 py-2">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">📊 Predictive Analytics</h4>
                  <p className="text-[#5c5c5c] text-sm">
                    AI that learns what content performs best for your specific audience and automatically prioritizes similar moments in future sermons.
                  </p>
                </div>

                <div className="border-l-4 border-[#E8725A] pl-6 py-2">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">🌍 Real-Time Translation</h4>
                  <p className="text-[#5c5c5c] text-sm">
                    Live translation of sermons and clips into multiple languages, making global ministry accessible to every church.
                  </p>
                </div>

                <div className="border-l-4 border-[#E8725A] pl-6 py-2">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">🤖 Sermon Prep Assistants</h4>
                  <p className="text-[#5c5c5c] text-sm">
                    AI that helps pastors during sermon creation—suggesting illustrations, finding relevant Scripture, checking for theological soundness.
                  </p>
                </div>

                <div className="border-l-4 border-[#E8725A] pl-6 py-2">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">💬 Personalized Follow-Up</h4>
                  <p className="text-[#5c5c5c] text-sm">
                    AI that generates personalized devotionals or follow-up messages for members based on which sermon topics they engage with most.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#2D2D2D] to-[#3D3D3D] rounded-xl p-8 text-white">
                <h3 className="font-bold text-xl mb-3">The Bottom Line</h3>
                <p className="text-white/90 mb-4">
                  AI doesn't replace pastors, worship leaders, or church communicators. It <strong>multiplies their impact</strong>. Your pastor still creates the message. AI just makes sure more people hear it.
                </p>
                <p className="text-white/90">
                  And in a world where attention is the most scarce resource, that multiplication might be the difference between reaching someone in their moment of need or being scrolled past entirely.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-[#E8725A] to-[#d4654f] rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Let AI Multiply Your Message</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Your sermon notes are full of shareable content. Sermon Clips uses AI to extract, format, and prepare everything automatically—so you can focus on people, not pixels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/" 
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#E8725A] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg"
                >
                  Try Sermon Clips Free
                  <Sparkles className="w-5 h-5" />
                </Link>
                <Link 
                  href="/blog/church-social-media-strategy-repurpose-sermon" 
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 px-8 py-4 rounded-full font-semibold transition-all"
                >
                  Read: 10 Ways to Repurpose Sermons
                  <ArrowLeft className="w-5 h-5 rotate-180" />
                </Link>
              </div>
            </section>

          </div>
        </div>
      </article>

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
