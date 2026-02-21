
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, CheckCircle2, Share2, Lightbulb, Quote, FileText, MessageSquare, Image, Video, TrendingUp, Users, Heart, Mail } from 'lucide-react';

export const metadata = {
  title: 'Church Social Media Strategy: 10 Ways to Repurpose Your Sunday Sermon',
  description: 'Stop creating content from scratch. Here are 10 proven ways to turn one Sunday sermon into a week\'s worth of social media posts, reels, and stories.',
  keywords: 'church social media, repurpose sermon content, church content creation, sermon to social media, church marketing strategy',
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
              14 min read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
            Church Social Media Strategy: 10 Ways to Repurpose Your Sunday Sermon
          </h1>

          <p className="text-xl text-[#5c5c5c] mb-10 leading-relaxed">
            Your pastor spends 10-15 hours preparing each sermon. Then it's delivered once and forgotten. This guide shows you how to extract 10+ pieces of content from every sermon—video clips, quote graphics, devotionals, and more—without starting from scratch.
          </p>

          {/* Table of Contents */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm">
            <h2 className="font-bold text-lg text-[#2D2D2D] mb-4">What You'll Learn</h2>
            <ul className="space-y-2 text-[#5c5c5c]">
              <li><a href="#why-repurpose" className="hover:text-[#E8725A] transition-colors">Why Content Repurposing Is Essential for Churches</a></li>
              <li><a href="#method-1-clips" className="hover:text-[#E8725A] transition-colors">1. Vertical Video Clips (Reels, Shorts, TikTok)</a></li>
              <li><a href="#method-2-quotes" className="hover:text-[#E8725A] transition-colors">2. Quote Graphics for Feed & Stories</a></li>
              <li><a href="#method-3-carousel" className="hover:text-[#E8725A] transition-colors">3. Teaching Carousels</a></li>
              <li><a href="#method-4-audiograms" className="hover:text-[#E8725A] transition-colors">4. Audiograms for Audio-Only Platforms</a></li>
              <li><a href="#method-5-devotional" className="hover:text-[#E8725A] transition-colors">5. Daily Devotionals</a></li>
              <li><a href="#method-6-email" className="hover:text-[#E8725A] transition-colors">6. Email Newsletter Content</a></li>
              <li><a href="#method-7-blog" className="hover:text-[#E8725A] transition-colors">7. Blog Post Adaptation</a></li>
              <li><a href="#method-8-discussion" className="hover:text-[#E8725A] transition-colors">8. Small Group Discussion Guides</a></li>
              <li><a href="#method-9-testimony" className="hover:text-[#E8725A] transition-colors">9. Testimony Prompts</a></li>
              <li><a href="#method-10-podcast" className="hover:text-[#E8725A] transition-colors">10. Podcast Clips & Snippets</a></li>
              <li><a href="#workflow" className="hover:text-[#E8725A] transition-colors">Your Complete Repurposing Workflow</a></li>
              <li><a href="#faq" className="hover:text-[#E8725A] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            
            <section id="why-repurpose" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-[#E8725A]" />
                Why Content Repurposing Is Essential for Churches
              </h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Most churches approach social media backwards. They think: <em>"What should we post today?"</em> Then they scramble to create something from scratch, post inconsistently, and wonder why engagement is low.
              </p>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                <strong>The better approach:</strong> Treat your Sunday sermon as a content goldmine. One 30-minute message contains enough material for 10-15 pieces of social content—video clips, graphics, devotionals, discussion questions, and more.
              </p>

              <div className="bg-[#E8725A]/10 rounded-xl p-6 border-l-4 border-[#E8725A] mb-8">
                <p className="text-[#2D2D2D] font-medium mb-2">The 1-to-10 Rule</p>
                <p className="text-[#5c5c5c]">
                  For every piece of "pillar content" (like a sermon), create at least 10 derivative pieces. This isn't lazy—it's strategic. Your message deserves to be heard more than once, in more than one format, by more than just Sunday morning attendees.
                </p>
              </div>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">The Benefits of Repurposing</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E8725A]" />
                    Consistency Without Burnout
                  </h4>
                  <p className="text-[#5c5c5c] text-sm">
                    Instead of creating 5-7 posts per week from scratch, you extract them from one sermon. Your social media stays active even when staff is stretched thin.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E8725A]" />
                    Reinforcement Through Repetition
                  </h4>
                  <p className="text-[#5c5c5c] text-sm">
                    People need to hear a truth 7 times before it sticks. Repurposing ensures your message gets reinforced throughout the week in different formats.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E8725A]" />
                    Reaches Different Learning Styles
                  </h4>
                  <p className="text-[#5c5c5c] text-sm">
                    Some people prefer video, others graphics, still others written content. Repurposing ensures you meet people where they are.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E8725A]" />
                    Multiplies Your Pastor's Impact
                  </h4>
                  <p className="text-[#5c5c5c] text-sm">
                    Your pastor's 10-15 hours of sermon prep now reaches not just Sunday attendees but thousands online throughout the week.
                  </p>
                </div>
              </div>
            </section>

            <section id="method-1-clips" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Video className="w-8 h-8 text-[#E8725A]" />
                1. Vertical Video Clips (Reels, Shorts, TikTok)
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                This is your highest-impact repurposing method. Short-form vertical video dominates every major social platform in 2026.
              </p>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">What to Extract</h3>
              <p className="text-[#5c5c5c] mb-6">
                From each sermon, pull 3-5 video clips of 20-60 seconds each. Look for:
              </p>

              <ul className="space-y-3 mb-6 text-[#5c5c5c]">
                <li className="flex items-start gap-3">
                  <span className="text-[#E8725A] font-bold mt-1">→</span>
                  <span><strong>Quotable moments</strong> that challenge conventional thinking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#E8725A] font-bold mt-1">→</span>
                  <span><strong>Personal stories</strong> from your pastor's life</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#E8725A] font-bold mt-1">→</span>
                  <span><strong>Practical applications</strong> people can implement immediately</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#E8725A] font-bold mt-1">→</span>
                  <span><strong>Moments that got audience reactions</strong> (laughter, applause, amens)</span>
                </li>
              </ul>

              <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
                <h4 className="font-bold text-[#2D2D2D] mb-3">Publishing Schedule</h4>
                <p className="text-[#5c5c5c] mb-4">
                  With 3-5 clips from one sermon, you can post:
                </p>
                <ul className="text-[#5c5c5c] space-y-2 text-sm">
                  <li>• <strong>Monday:</strong> Clip #1 to Instagram Reels</li>
                  <li>• <strong>Tuesday:</strong> Same clip to TikTok and YouTube Shorts</li>
                  <li>• <strong>Wednesday:</strong> Clip #2 to Instagram Reels</li>
                  <li>• <strong>Thursday:</strong> Same clip to other platforms</li>
                  <li>• <strong>Friday:</strong> Clip #3 to all platforms</li>
                  <li>• <strong>Saturday:</strong> Reshare best clip to Stories as sermon teaser</li>
                </ul>
              </div>

              <div className="bg-[#E8725A]/10 rounded-xl p-6 border-l-4 border-[#E8725A]">
                <p className="text-[#2D2D2D] font-medium mb-2">Fast-Track This</p>
                <p className="text-[#5c5c5c]">
                  Tools like <Link href="/" className="text-[#E8725A] underline">Sermon Clips</Link> automatically identify the best moments and create captioned, branded video clips in minutes. <Link href="/blog/how-to-make-sermon-clips-for-social-media" className="text-[#E8725A] underline">Learn how to make sermon clips here</Link>.
                </p>
              </div>
            </section>

            <section id="method-2-quotes" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Quote className="w-8 h-8 text-[#E8725A]" />
                2. Quote Graphics for Feed & Stories
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Every sermon contains 5-10 highly quotable statements. Turn these into beautiful graphics for Instagram, Facebook, and Pinterest.
              </p>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">How to Create Quote Graphics</h3>

              <div className="space-y-4 mb-6">
                <div className="border-l-4 border-[#E8725A] pl-6">
                  <h4 className="font-semibold text-[#2D2D2D] mb-2">Step 1: Extract Quotes</h4>
                  <p className="text-[#5c5c5c] text-sm">
                    As your pastor preaches, have someone mark quotable moments with timestamps. Or review the transcript afterward and highlight standout sentences.
                  </p>
                </div>

                <div className="border-l-4 border-[#E8725A] pl-6">
                  <h4 className="font-semibold text-[#2D2D2D] mb-2">Step 2: Design in Canva</h4>
                  <p className="text-[#5c5c5c] text-sm mb-2">
                    Use a simple template with your church's brand colors. Keep it minimal: quote text, pastor's name, and small church logo.
                  </p>
                  <p className="text-xs text-[#E8725A] italic">
                    Design tip: Use large, bold fonts. Most people will see this on mobile, so readability &gt; fancy design.
                  </p>
                </div>

                <div className="border-l-4 border-[#E8725A] pl-6">
                  <h4 className="font-semibold text-[#2D2D2D] mb-2">Step 3: Create Multiple Variations</h4>
                  <p className="text-[#5c5c5c] text-sm">
                    From one quote, create 3 variations: a square for feed, a vertical for Stories, and a Pinterest-optimized tall graphic (2:3 ratio).
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-bold text-[#2D2D2D] mb-3">Best Quotes for Graphics</h4>
                <div className="space-y-3 text-[#5c5c5c] text-sm">
                  <p>✅ <strong>Good:</strong> "Prayer isn't about getting what you want. It's about becoming who God wants."</p>
                  <p className="pl-6 text-xs italic">Why: Short, punchy, profound. Easy to read at a glance.</p>
                  
                  <p className="pt-3">❌ <strong>Avoid:</strong> "As we discussed earlier in verse 12 when we were talking about the Pharisees' perspective on..."</p>
                  <p className="pl-6 text-xs italic">Why: Requires context, too long, not self-contained.</p>
                </div>
              </div>
            </section>

            <section id="method-3-carousel" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Image className="w-8 h-8 text-[#E8725A]" />
                3. Teaching Carousels (Instagram & LinkedIn)
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Carousel posts (swipeable multi-image posts) get 3x more engagement than single images on Instagram. They're perfect for breaking down sermon points into digestible slides.
              </p>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Carousel Formats to Extract from Sermons</h3>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">📖 "3 Things You Need to Know About [Topic]"</h4>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    If your sermon had 3 main points, turn each into a slide. Add a cover slide and a conclusion slide for 5 total.
                  </p>
                  <p className="text-xs text-[#5c5c5c]">
                    <strong>Example:</strong> Sermon on prayer → Carousel: "3 Things That Will Transform Your Prayer Life"
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">💡 "Here's What Most People Get Wrong About [Topic]"</h4>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    Extract common misconceptions your pastor addressed and the correct understanding. Perfect for myth-busting content.
                  </p>
                  <p className="text-xs text-[#5c5c5c]">
                    <strong>Example:</strong> Slide 1: "Myth: Forgiveness means forgetting." Slide 2: "Truth: Forgiveness is choosing not to be controlled by the past."
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">✅ "5 Signs You're [Condition Pastor Described]"</h4>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    Did your pastor describe characteristics of spiritual maturity, burnout, or another condition? Turn it into a diagnostic carousel.
                  </p>
                  <p className="text-xs text-[#5c5c5c]">
                    <strong>Example:</strong> "5 Signs You're Running on Empty (Not Resting in God)"
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">📝 "Your [Time Period] Action Plan"</h4>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    If your pastor gave action steps, turn them into a practical guide carousel with one action per slide.
                  </p>
                  <p className="text-xs text-[#5c5c5c]">
                    <strong>Example:</strong> "Your 7-Day Plan to Grow in Gratitude" (each day gets a slide)
                  </p>
                </div>
              </div>
            </section>

            <section id="method-4-audiograms" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <MessageSquare className="w-8 h-8 text-[#E8725A]" />
                4. Audiograms for Audio-Only Platforms
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                If your church podcasts sermons or wants to tap into audio-first audiences, create audiograms—short audio clips with animated waveforms or captioned text.
              </p>

              <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
                <h4 className="font-bold text-[#2D2D2D] mb-3">Where to Use Audiograms</h4>
                <ul className="text-[#5c5c5c] space-y-2 text-sm">
                  <li>• Twitter/X (audio-visual clips perform well)</li>
                  <li>• LinkedIn (professional audience prefers audio/text hybrid)</li>
                  <li>• Podcast teasers (share on Instagram to drive podcast listens)</li>
                  <li>• Email newsletters (embed as playable audio)</li>
                </ul>
              </div>

              <p className="text-[#5c5c5c] text-sm">
                <strong>Tools:</strong> Headliner, Wavve, or Descript can generate audiograms automatically from your sermon audio.
              </p>
            </section>

            <section id="method-5-devotional" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <FileText className="w-8 h-8 text-[#E8725A]" />
                5. Daily Devotionals (Blog, Email, App)
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                A 30-minute sermon can easily become 5-7 daily devotionals. This keeps your message alive throughout the week and gives members spiritual content for their morning routine.
              </p>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Devotional Repurposing Formula</h3>

              <div className="space-y-4 mb-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="font-bold text-[#2D2D2D] mb-2">Monday: The Big Idea</p>
                  <p className="text-[#5c5c5c] text-sm">
                    Summarize the sermon's main point in 200-300 words. Include the key Scripture and one reflection question.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="font-bold text-[#2D2D2D] mb-2">Tuesday-Thursday: Deep Dives on Each Point</p>
                  <p className="text-[#5c5c5c] text-sm">
                    If your sermon had 3 points, dedicate one day to each. Expand with additional context, related Scriptures, or practical examples.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="font-bold text-[#2D2D2D] mb-2">Friday: Application & Prayer</p>
                  <p className="text-[#5c5c5c] text-sm">
                    Provide specific, actionable steps to live out the sermon's message. Close with a written prayer.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="font-bold text-[#2D2D2D] mb-2">Saturday: Reflection & Invitation</p>
                  <p className="text-[#5c5c5c] text-sm">
                    Recap the week's journey and invite people to join you Sunday to go deeper.
                  </p>
                </div>
              </div>

              <div className="bg-[#E8725A]/10 rounded-xl p-6 border-l-4 border-[#E8725A]">
                <p className="text-[#2D2D2D] font-medium mb-2">Distribution Channels</p>
                <ul className="text-[#5c5c5c] space-y-1 text-sm">
                  <li>• Post to your blog (one per day or all at once)</li>
                  <li>• Send via daily email to subscribers</li>
                  <li>• Share to Instagram Stories with "swipe up" to blog</li>
                  <li>• Add to your church app's devotional feed</li>
                </ul>
              </div>
            </section>

            <section id="method-6-email" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Mail className="w-8 h-8 text-[#E8725A]" />
                6. Email Newsletter Content
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Your weekly church email doesn't need to be created from scratch. Mine your sermon for newsletter gold.
              </p>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Email Sections to Extract</h3>

              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#E8725A] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#2D2D2D]">Opening Hook:</strong>
                    <span className="text-[#5c5c5c] block text-sm">Use the sermon's opening illustration or question to grab attention.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#E8725A] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#2D2D2D]">Main Teaching:</strong>
                    <span className="text-[#5c5c5c] block text-sm">Summarize the sermon's key insight in 2-3 paragraphs.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#E8725A] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#2D2D2D]">This Week's Challenge:</strong>
                    <span className="text-[#5c5c5c] block text-sm">Pull the practical application from the sermon.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#E8725A] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#2D2D2D]">Quote Callout Box:</strong>
                    <span className="text-[#5c5c5c] block text-sm">Feature a quotable moment in a highlighted box.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#E8725A] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#2D2D2D]">Watch the Full Message:</strong>
                    <span className="text-[#5c5c5c] block text-sm">Link to sermon video with a compelling CTA.</span>
                  </div>
                </li>
              </ul>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-bold text-[#2D2D2D] mb-3">Pro Tip: Segment Your List</h4>
                <p className="text-[#5c5c5c] text-sm">
                  Send different versions to attendees vs. non-attendees. For attendees: "Here's what we learned Sunday + this week's challenge." For non-attendees: "You missed a powerful message—here's what you need to hear."
                </p>
              </div>
            </section>

            <section id="method-7-blog" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <FileText className="w-8 h-8 text-[#E8725A]" />
                7. Blog Post Adaptation
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Transform your sermon into a 1,000-1,500 word blog post. This serves multiple purposes: SEO for your website, shareable content, and a resource members can forward to friends.
              </p>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Blog Post Structure</h3>

              <div className="space-y-3 text-[#5c5c5c]">
                <p><strong className="text-[#2D2D2D]">Title:</strong> Rework the sermon title for SEO. Example: "Finding Peace in Chaos" → "5 Ways to Find Peace When Life Feels Chaotic"</p>
                <p><strong className="text-[#2D2D2D]">Introduction:</strong> Use the sermon's opening story or question.</p>
                <p><strong className="text-[#2D2D2D]">Body:</strong> Turn each sermon point into an H2 section with 2-3 paragraphs.</p>
                <p><strong className="text-[#2D2D2D]">Conclusion:</strong> Summarize and include a call-to-action (visit us, watch the full sermon, etc.)</p>
                <p><strong className="text-[#2D2D2D]">Bonus:</strong> Embed the sermon video at the top or bottom.</p>
              </div>
            </section>

            <section id="method-8-discussion" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-[#E8725A]" />
                8. Small Group Discussion Guides
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Help your small groups engage more deeply with the sermon by providing ready-made discussion questions.
              </p>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-bold text-[#2D2D2D] mb-3">Discussion Guide Template</h4>
                <ul className="text-[#5c5c5c] space-y-3 text-sm">
                  <li><strong className="text-[#2D2D2D]">Icebreaker:</strong> A light question related to the topic ("What's your earliest memory of prayer?")</li>
                  <li><strong className="text-[#2D2D2D]">Key Scripture:</strong> Read together and discuss first impressions</li>
                  <li><strong className="text-[#2D2D2D]">3-5 Discussion Questions:</strong> Pull from sermon's main points ("Pastor said 'X.' How have you experienced this in your life?")</li>
                  <li><strong className="text-[#2D2D2D]">Application:</strong> "What's one thing you'll do differently this week based on this message?"</li>
                  <li><strong className="text-[#2D2D2D]">Prayer:</strong> Specific prayer focus related to the sermon topic</li>
                </ul>
              </div>
            </section>

            <section id="method-9-testimony" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Heart className="w-8 h-8 text-[#E8725A]" />
                9. Testimony Prompts
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Use sermon themes to invite your community to share their stories. User-generated content is incredibly powerful.
              </p>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-bold text-[#2D2D2D] mb-3">How to Use Testimony Prompts</h4>
                <p className="text-[#5c5c5c] mb-4 text-sm">
                  Post to Stories or as a regular post with a specific ask based on the sermon topic. Examples:
                </p>
                <ul className="text-[#5c5c5c] space-y-2 text-sm italic">
                  <li>• "This week's message was about second chances. Share a time God gave you a second chance. ⬇️"</li>
                  <li>• "We talked about answered prayers. What's one prayer God answered in an unexpected way? Tell us in the comments."</li>
                  <li>• "Pastor challenged us to practice gratitude. Drop one thing you're grateful for today. 🙏"</li>
                </ul>
              </div>

              <p className="text-sm text-[#5c5c5c] mt-4">
                <strong>Bonus:</strong> Repost the best responses to your Stories or feed (with permission), which creates more content and encourages participation.
              </p>
            </section>

            <section id="method-10-podcast" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <MessageSquare className="w-8 h-8 text-[#E8725A]" />
                10. Podcast Clips & Snippets
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                If your sermons are available as a podcast, create short teaser clips to promote each episode.
              </p>

              <div className="space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">30-Second Podcast Teaser</h4>
                  <p className="text-[#5c5c5c] text-sm">
                    Pull the most intriguing 30 seconds from the sermon. End with "Listen to the full message on [Your Podcast Name]." Share to Instagram, Twitter, LinkedIn.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">"Highlight Reel" Episode Promos</h4>
                  <p className="text-[#5c5c5c] text-sm">
                    Combine 3-4 brief clips from the sermon into a 60-90 second highlight reel. Use this as your podcast episode's social promo.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">Podcast Transcript Blog Post</h4>
                  <p className="text-[#5c5c5c] text-sm">
                    Publish the full sermon transcript as a blog post with an embedded audio player. This is massive for SEO and accessibility.
                  </p>
                </div>
              </div>
            </section>

            <section id="workflow" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Lightbulb className="w-8 h-8 text-[#E8725A]" />
                Your Complete Repurposing Workflow
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Turning one sermon into 10+ pieces of content sounds overwhelming, but with a system, it's 2-3 hours of work per week. Here's the complete workflow:
              </p>

              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    S
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2D2D2D] text-lg">Sunday: Capture Everything</h3>
                    <p className="text-[#5c5c5c]">Record sermon video and audio. Have a volunteer take notes during the message, marking timestamps of quotable moments, stories, and audience reactions. Upload recording to your chosen tools immediately.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    M
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2D2D2D] text-lg">Monday: Extract & Plan (45 minutes)</h3>
                    <ul className="text-[#5c5c5c] space-y-2 text-sm">
                      <li>• Identify 3-5 video clip moments</li>
                      <li>• Pull 5-7 quotes for graphics</li>
                      <li>• Outline carousel topics</li>
                      <li>• Draft email newsletter outline</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    T
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2D2D2D] text-lg">Tuesday: Create Visual Content (60-90 minutes)</h3>
                    <ul className="text-[#5c5c5c] space-y-2 text-sm">
                      <li>• Edit video clips (or let AI do it)</li>
                      <li>• Design quote graphics in Canva</li>
                      <li>• Build carousel posts</li>
                      <li>• Export everything</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    W
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2D2D2D] text-lg">Wednesday: Create Written Content (45 minutes)</h3>
                    <ul className="text-[#5c5c5c] space-y-2 text-sm">
                      <li>• Write email newsletter</li>
                      <li>• Draft blog post or devotionals</li>
                      <li>• Create small group discussion guide</li>
                      <li>• Write social captions for each post</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    T-S
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2D2D2D] text-lg">Thursday-Saturday: Schedule & Publish</h3>
                    <p className="text-[#5c5c5c]">Load everything into your scheduling tool (Later, Planoly, Buffer, etc.). Set posts to go out at optimal times throughout the week. Engage with comments as they come in.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-[#E8725A]/10 rounded-xl p-8 border-l-4 border-[#E8725A]">
                <h3 className="font-bold text-[#2D2D2D] mb-3">Time Investment Summary</h3>
                <p className="text-[#5c5c5c] mb-4">
                  Total time: <strong>2.5-3.5 hours per week</strong> to create 10-15 pieces of content from one sermon.
                </p>
                <p className="text-[#5c5c5c] text-sm">
                  Compare this to creating content from scratch daily, which would take 5-10 hours per week for the same output. Repurposing is 3x more efficient.
                </p>
              </div>
            </section>

            <section id="faq" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Lightbulb className="w-8 h-8 text-[#E8725A]" />
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">Isn't repurposing the same content repetitive?</h3>
                  <p className="text-[#5c5c5c]">Not if you do it right. You're presenting the same core message in different formats for different consumption preferences. A video clip, a quote graphic, and a devotional all deliver unique value even when derived from the same sermon. Plus, most people won't see every post—algorithms ensure variety.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">What if our pastor's sermons aren't "clip-worthy"?</h3>
                  <p className="text-[#5c5c5c]">Every sermon has shareable moments—sometimes they just need to be reframed. Work with your pastor to identify key insights during sermon prep. Ask: "What's the one thing you want people to remember?" That becomes your clip. Over time, pastors often naturally start crafting more quotable moments when they know the content will be repurposed.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">Should we get pastor approval for every piece of repurposed content?</h3>
                  <p className="text-[#5c5c5c]">Establish clear guidelines upfront. Some pastors prefer to approve everything; others trust their team with quote graphics and clips but want to review blog posts and devotionals. Find your church's balance. Many churches have a "pre-approved" list of sermon moments marked during message prep, which streamlines the process.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">How long should we keep repurposing the same sermon?</h3>
                  <p className="text-[#5c5c5c]">Most churches repurpose for one week (until the next Sunday). But great content can be recycled months later. Create a "greatest hits" library of your top-performing clips and quotes. Reshare them during slow weeks, holidays, or when they're seasonally relevant again.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">What tools do we need to make this realistic?</h3>
                  <p className="text-[#5c5c5c]">
                    <strong>Minimum:</strong> Canva (free) for graphics, CapCut (free) for video editing, a scheduling tool like Later (free tier).<br/>
                    <strong>Recommended:</strong> <Link href="/" className="text-[#E8725A] underline">Sermon Clips</Link> for automated video clipping, Canva Pro for brand kit, a paid scheduling tool for analytics.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">Can we repurpose sermons from guest speakers or series from years ago?</h3>
                  <p className="text-[#5c5c5c]">Absolutely! If you have an archive of sermon videos, you have a content goldmine. Go through past sermons and pull evergreen content (timeless messages about faith, relationships, purpose). Avoid anything overly dated or tied to specific events. This is especially useful during pastor vacations or holiday weeks.</p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-[#2D2D2D] to-[#3D3D3D] rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Stop Reinventing the Wheel Every Week</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Your sermon is a goldmine of shareable content. Let AI extract video clips, quotes, and more automatically—so you can focus on community, not content creation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/" 
                  className="inline-flex items-center justify-center gap-2 bg-[#E8725A] hover:bg-[#d4654f] px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg"
                >
                  Try Sermon Clips Free
                  <Share2 className="w-5 h-5" />
                </Link>
                <Link 
                  href="/blog/sermon-notes-to-social-media-ai" 
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 px-8 py-4 rounded-full font-semibold transition-all"
                >
                  Read Next: AI for Sermon Content
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
