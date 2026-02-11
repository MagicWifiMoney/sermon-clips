import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, CheckCircle2, AlertCircle, ArrowRight, Instagram, Heart, MessageCircle, Share2, Bookmark, TrendingUp, Eye, Hash, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sermon Clips for Instagram Reels: 2026 Strategy | Sermon Clips',
  description: 'Master Instagram Reels for your church. Learn optimal specs, content strategies, hashtags, and posting schedules to maximize your sermon clip reach on Instagram.',
  keywords: 'sermon clips for instagram, instagram reels church, church instagram strategy, instagram for churches, sermon clips instagram reels',
  openGraph: {
    title: 'Sermon Clips for Instagram Reels: 2026 Strategy',
    description: 'Master Instagram Reels for your church with our complete strategy guide.',
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
      "name": "What is the best length for sermon clips on Instagram Reels?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The optimal length for sermon clips on Instagram Reels is 15-30 seconds for maximum engagement, though you can go up to 90 seconds for compelling content. Shorter clips (under 30 seconds) have higher completion rates, which boosts algorithmic distribution."
      }
    },
    {
      "@type": "Question",
      "name": "Should I post the same sermon clip to Instagram and TikTok?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, with minor adjustments. Remove any TikTok watermarks (Instagram deprioritizes these). Adjust captions slightly if needed, and customize hashtags for each platform. The core content can be identical—just optimize the packaging."
      }
    },
    {
      "@type": "Question",
      "name": "How often should churches post Instagram Reels?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aim for 3-5 Reels per week for optimal growth. Consistency matters more than volume—it's better to post 3 quality Reels weekly than 7 rushed ones. Use a content calendar to maintain regular posting."
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
            Sermon Clips for Instagram Reels: 2026 Strategy
          </h1>

          <p className="text-xl text-[#5c5c5c] mb-10 leading-relaxed">
            Instagram remains the visual hub of social media—and with Reels now dominating the platform, churches have a massive opportunity to reach both existing members and new audiences. This guide covers everything you need to know to make your sermon clips perform on Instagram Reels in 2026.
          </p>

          {/* Table of Contents */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm">
            <h2 className="font-bold text-lg text-[#2D2D2D] mb-4">What You'll Learn</h2>
            <ul className="space-y-2 text-[#5c5c5c]">
              <li><a href="#why-reels" className="hover:text-[#E8725A] transition-colors">Why Instagram Reels Matter for Churches</a></li>
              <li><a href="#specs" className="hover:text-[#E8725A] transition-colors">Technical Specifications</a></li>
              <li><a href="#vs-tiktok" className="hover:text-[#E8725A] transition-colors">Instagram vs. TikTok: Key Differences</a></li>
              <li><a href="#content-strategy" className="hover:text-[#E8725A] transition-colors">Content Strategy for Reels</a></li>
              <li><a href="#hashtags" className="hover:text-[#E8725A] transition-colors">2026 Hashtag Strategy</a></li>
              <li><a href="#posting-schedule" className="hover:text-[#E8725A] transition-colors">Optimal Posting Schedule</a></li>
              <li><a href="#engagement" className="hover:text-[#E8725A] transition-colors">Maximizing Engagement</a></li>
              <li><a href="#faq" className="hover:text-[#E8725A] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            
            <section id="why-reels" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Instagram className="w-8 h-8 text-[#E8725A]" />
                Why Instagram Reels Matter for Churches
              </h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Instagram has evolved from a photo-sharing app to a video-first platform. In 2026, Reels account for over 50% of time spent on Instagram—and the algorithm heavily favors video content. For churches, this shift creates both opportunity and urgency.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <p className="text-4xl font-bold text-[#E8725A] mb-2">2B+</p>
                  <p className="text-sm text-[#5c5c5c]">Monthly active users</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <p className="text-4xl font-bold text-[#E8725A] mb-2">25-44</p>
                  <p className="text-sm text-[#5c5c5c]">Primary age demographic</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                  <p className="text-4xl font-bold text-[#E8725A] mb-2">50%</p>
                  <p className="text-sm text-[#5c5c5c]">Time spent on Reels</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">The Instagram Advantage</h3>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                While <Link href="/blog/sermon-clips-for-tiktok" className="text-[#E8725A] hover:underline">TikTok excels at reaching younger audiences</Link>, Instagram has unique strengths for churches:
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-[#5c5c5c]"><strong>Your congregation is already there.</strong> Most church members 25-55 have Instagram accounts—unlike TikTok which skews younger.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-[#5c5c5c]"><strong>Integrated ecosystem.</strong> Reels connect to your Stories, Feed, and profile—creating multiple touchpoints.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-[#5c5c5c]"><strong>Save and share features.</strong> Instagram's save feature lets people bookmark content for later—ideal for spiritual content people want to revisit.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-[#5c5c5c]"><strong>Direct message culture.</strong> People share Reels via DM more than any other content type—word of mouth in digital form.</span>
                </div>
              </div>
            </section>

            <section id="specs" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Eye className="w-8 h-8 text-[#E8725A]" />
                Technical Specifications
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Getting the technical details right ensures your sermon clips look professional and perform well in the algorithm.
              </p>

              <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                <h3 className="font-bold text-[#2D2D2D] mb-4">Instagram Reels Specs (2026)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <ul className="space-y-3 text-[#5c5c5c]">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Aspect Ratio:</strong> 9:16 (vertical)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Resolution:</strong> 1080 x 1920 pixels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Format:</strong> MP4 or MOV</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Frame Rate:</strong> 30fps (recommended)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-3 text-[#5c5c5c]">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Max Length:</strong> 90 seconds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Optimal Length:</strong> 15-30 seconds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Max File Size:</strong> 4GB</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Cover Image:</strong> 420 x 654 pixels</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-[#F5F1EB] rounded-xl p-6 mb-6">
                <h4 className="font-bold text-[#2D2D2D] mb-3">Safe Zones for Instagram</h4>
                <p className="text-[#5c5c5c] mb-3">Instagram's UI overlays parts of your Reel. Keep important content away from:</p>
                <ul className="text-sm text-[#5c5c5c] space-y-1">
                  <li>• <strong>Top:</strong> Leave ~150px for username and follow button</li>
                  <li>• <strong>Bottom:</strong> Leave ~300px for caption, audio, and buttons</li>
                  <li>• <strong>Right side:</strong> Leave ~80px for like/comment/share/save icons</li>
                </ul>
              </div>

              <div className="bg-[#E8725A]/10 rounded-xl p-6 border-l-4 border-[#E8725A]">
                <p className="text-[#2D2D2D] font-medium mb-2">Caption Requirements</p>
                <p className="text-[#5c5c5c]">
                  Just like TikTok, <Link href="/blog/sermon-clips-with-captions" className="text-[#E8725A] hover:underline">captions are essential</Link>. 85% of Instagram users watch videos with sound off. Use bold, high-contrast captions positioned in the center-bottom safe zone. Instagram's built-in caption generator is decent but often needs correction for Biblical terms.
                </p>
              </div>
            </section>

            <section id="vs-tiktok" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-[#E8725A]" />
                Instagram vs. TikTok: Key Differences
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                While both platforms favor short-form vertical video, they have distinct cultures and algorithm behaviors. Understanding these differences helps you optimize content for each.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-xl shadow-sm overflow-hidden text-sm">
                  <thead>
                    <tr className="bg-[#2D2D2D] text-white">
                      <th className="text-left p-4 font-semibold">Factor</th>
                      <th className="text-left p-4 font-semibold">Instagram Reels</th>
                      <th className="text-left p-4 font-semibold">TikTok</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#5c5c5c]">
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-medium">Audience Age</td>
                      <td className="p-4">25-44 (core)</td>
                      <td className="p-4">16-34 (core)</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="p-4 font-medium">Content Style</td>
                      <td className="p-4">More polished, aesthetic</td>
                      <td className="p-4">Raw, authentic</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-medium">Max Length</td>
                      <td className="p-4">90 seconds</td>
                      <td className="p-4">10 minutes</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="p-4 font-medium">Discovery</td>
                      <td className="p-4">Explore + followers</td>
                      <td className="p-4">For You page (anyone)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-medium">Trending Audio</td>
                      <td className="p-4">Important for discovery</td>
                      <td className="p-4">Less critical for sermon clips</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Cross-posting</td>
                      <td className="p-4">Penalizes TikTok watermarks</td>
                      <td className="p-4">No penalty for IG content</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
                <h4 className="font-bold text-[#2D2D2D] mb-3">Cross-Posting Best Practices</h4>
                <p className="text-[#5c5c5c] mb-3">Yes, you can post the same sermon clip to both platforms—with adjustments:</p>
                <ul className="text-sm text-[#5c5c5c] space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Download TikToks without watermark (use SnapTik or similar)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Customize hashtags for each platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Adjust caption text slightly if referencing platform-specific features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Post at optimal times for each platform separately</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="content-strategy" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-[#E8725A]" />
                Content Strategy for Reels
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Instagram's audience tends to appreciate slightly more polished content than TikTok. Here's how to adapt your sermon clips:
              </p>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Content Pillars for Church Reels</h3>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <p className="font-bold text-[#2D2D2D] mb-2">🎯 Sermon Clips (Primary)</p>
                  <p className="text-sm text-[#5c5c5c]">Your core content. Quotable moments, practical wisdom, emotional peaks from Sunday messages.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <p className="font-bold text-[#2D2D2D] mb-2">📖 Scripture Breakdowns</p>
                  <p className="text-sm text-[#5c5c5c]">30-second explainers of Bible verses. High save rate—people bookmark for later reference.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <p className="font-bold text-[#2D2D2D] mb-2">🙏 Prayer Prompts</p>
                  <p className="text-sm text-[#5c5c5c]">Short prayers viewers can participate in. Intimate, personal—drives high engagement.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <p className="font-bold text-[#2D2D2D] mb-2">✨ Worship Moments</p>
                  <p className="text-sm text-[#5c5c5c]">Brief clips of powerful worship. Emotional, shareable, shows your church culture.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <p className="font-bold text-[#2D2D2D] mb-2">👋 Behind-the-Scenes</p>
                  <p className="text-sm text-[#5c5c5c]">Staff introductions, service prep, church life. Humanizes your ministry.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <p className="font-bold text-[#2D2D2D] mb-2">📅 Event Promos</p>
                  <p className="text-sm text-[#5c5c5c]">Upcoming services, events, sermon series. Drive action with clear CTAs.</p>
                </div>
              </div>

              <div className="bg-[#E8725A]/10 rounded-xl p-6 border-l-4 border-[#E8725A] mb-6">
                <p className="text-[#2D2D2D] font-medium mb-2">The 70/20/10 Rule</p>
                <p className="text-[#5c5c5c]">
                  <strong>70%</strong> sermon clips and teaching content<br/>
                  <strong>20%</strong> community and culture content (BTS, worship, testimonies)<br/>
                  <strong>10%</strong> promotional content (events, series launches, CTAs)
                </p>
              </div>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Hook Strategies for Instagram</h3>
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Instagram users scroll fast. Your first frame and opening words determine whether they stop or keep scrolling.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <p className="font-bold text-[#2D2D2D] mb-2">Cover Image Hook</p>
                  <p className="text-sm text-[#5c5c5c]">Use a custom cover with text overlay: "The truth about forgiveness →" or "This changed my prayer life 🙏"</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <p className="font-bold text-[#2D2D2D] mb-2">Text-on-Screen Hook</p>
                  <p className="text-sm text-[#5c5c5c]">Add text in the first 0.5 seconds: "POV: You finally hear this" or "Wait for it..."</p>
                </div>
              </div>
            </section>

            <section id="hashtags" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Hash className="w-8 h-8 text-[#E8725A]" />
                2026 Hashtag Strategy
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Instagram's relationship with hashtags has evolved. In 2026, fewer, more targeted hashtags work better than hashtag stuffing.
              </p>

              <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                <h3 className="font-bold text-[#2D2D2D] mb-4">Recommended Hashtag Mix (5-8 per post)</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="font-medium text-[#2D2D2D] mb-2">Broad (1-2)</p>
                    <ul className="text-sm text-[#5c5c5c] space-y-1">
                      <li>#Christian</li>
                      <li>#Faith</li>
                      <li>#Church</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-[#2D2D2D] mb-2">Niche (3-4)</p>
                    <ul className="text-sm text-[#5c5c5c] space-y-1">
                      <li>#SermonClip</li>
                      <li>#ChurchReels</li>
                      <li>#BibleTeaching</li>
                      <li>#SundaySermon</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-[#2D2D2D] mb-2">Topic (1-2)</p>
                    <ul className="text-sm text-[#5c5c5c] space-y-1">
                      <li>#Prayer</li>
                      <li>#Grace</li>
                      <li>#Forgiveness</li>
                      <li>#Hope</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg mb-6">
                <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-[#5c5c5c]">
                  <p className="font-medium text-[#2D2D2D] mb-1">2026 Hashtag Update</p>
                  <p>Instagram now recommends putting hashtags in comments rather than captions for cleaner aesthetics. Test both for your audience. Also: #Reels and #ReelsViral no longer boost reach—the algorithm identifies Reels automatically.</p>
                </div>
              </div>
            </section>

            <section id="posting-schedule" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Clock className="w-8 h-8 text-[#E8725A]" />
                Optimal Posting Schedule
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Consistency beats perfection. Establish a regular posting rhythm your team can maintain.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-3">Best Posting Times</h4>
                  <ul className="text-sm text-[#5c5c5c] space-y-2">
                    <li><strong>Monday:</strong> 11 AM, 5 PM</li>
                    <li><strong>Tuesday:</strong> 9 AM, 1 PM, 7 PM</li>
                    <li><strong>Wednesday:</strong> 11 AM, 5 PM</li>
                    <li><strong>Thursday:</strong> 11 AM, 7 PM</li>
                    <li><strong>Friday:</strong> 10 AM, 2 PM</li>
                    <li><strong>Saturday:</strong> 9 AM, 7 PM</li>
                    <li><strong>Sunday:</strong> 10 AM, 6 PM</li>
                  </ul>
                  <p className="text-xs text-[#5c5c5c] mt-3 italic">Times in your local timezone. Check Instagram Insights for your specific audience.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-3">Recommended Frequency</h4>
                  <ul className="text-sm text-[#5c5c5c] space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Minimum:</strong> 3 Reels/week</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Optimal:</strong> 5 Reels/week</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span><strong>Growth mode:</strong> 7 Reels/week</span>
                    </li>
                  </ul>
                  <p className="text-xs text-[#5c5c5c] mt-3 italic">Quality over quantity. Better 3 great Reels than 7 mediocre ones.</p>
                </div>
              </div>

              <div className="bg-[#F5F1EB] rounded-xl p-6">
                <p className="text-[#2D2D2D] font-medium mb-2">Sample Weekly Schedule</p>
                <p className="text-sm text-[#5c5c5c]">
                  <strong>Sunday PM:</strong> Main sermon clip (post after service)<br/>
                  <strong>Tuesday:</strong> Second sermon clip<br/>
                  <strong>Thursday:</strong> Scripture breakdown or prayer prompt<br/>
                  <strong>Saturday:</strong> Behind-the-scenes or worship moment (preview for tomorrow)
                </p>
              </div>
            </section>

            <section id="engagement" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Heart className="w-8 h-8 text-[#E8725A]" />
                Maximizing Engagement
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Instagram's algorithm prioritizes engagement signals. Here's how to maximize each one:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Heart className="w-5 h-5 text-red-500" />
                    <h4 className="font-bold text-[#2D2D2D]">Likes</h4>
                  </div>
                  <p className="text-sm text-[#5c5c5c]">Emotional content drives likes. Vulnerability, inspiration, and practical wisdom all perform well. End with a statement worth affirming.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageCircle className="w-5 h-5 text-blue-500" />
                    <h4 className="font-bold text-[#2D2D2D]">Comments</h4>
                  </div>
                  <p className="text-sm text-[#5c5c5c]">Ask questions in your caption. "Has this ever happened to you?" "Type 'AMEN' if you needed this." Respond to comments quickly—first hour is critical.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Share2 className="w-5 h-5 text-green-500" />
                    <h4 className="font-bold text-[#2D2D2D]">Shares</h4>
                  </div>
                  <p className="text-sm text-[#5c5c5c]">The most valuable signal. Create content people want to send to friends: "My mom needs to hear this" content. Practical advice and relatable struggles drive shares.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Bookmark className="w-5 h-5 text-purple-500" />
                    <h4 className="font-bold text-[#2D2D2D]">Saves</h4>
                  </div>
                  <p className="text-sm text-[#5c5c5c]">Reference content gets saved: Scripture explanations, step-by-step guides, quotes worth revisiting. High saves signal "this is valuable."</p>
                </div>
              </div>

              <div className="bg-[#E8725A]/10 rounded-xl p-6 border-l-4 border-[#E8725A]">
                <p className="text-[#2D2D2D] font-medium mb-2">The Share-to-Stories Hack</p>
                <p className="text-[#5c5c5c]">
                  When someone shares your Reel to their Story, you get massive reach. Encourage this by creating content with a clear "this is so true" or "everyone needs to hear this" reaction. Add a gentle CTA: "Share to your story if this helped 🙏"
                </p>
              </div>
            </section>

            <section id="faq" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">What is the best length for sermon clips on Instagram Reels?</h3>
                  <p className="text-[#5c5c5c]">The optimal length is 15-30 seconds for maximum engagement, though you can go up to 90 seconds for compelling content. Shorter clips have higher completion rates, which boosts algorithmic distribution.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">Should I post the same sermon clip to Instagram and TikTok?</h3>
                  <p className="text-[#5c5c5c]">Yes, with minor adjustments. Remove any TikTok watermarks (Instagram deprioritizes these). Adjust captions slightly if needed, and customize hashtags for each platform. The core content can be identical—just optimize the packaging.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">How often should churches post Instagram Reels?</h3>
                  <p className="text-[#5c5c5c]">Aim for 3-5 Reels per week for optimal growth. Consistency matters more than volume—it's better to post 3 quality Reels weekly than 7 rushed ones. Use a content calendar to maintain regular posting.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">Should I use trending audio on sermon clips?</h3>
                  <p className="text-[#5c5c5c]">Generally no for sermon clips—your pastor's voice is the content. However, for other church content (BTS, worship teases, event promos), trending audio can boost discovery. Always check that trending audio fits your church's values before using.</p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-[#2D2D2D] to-[#3D3D3D] rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Dominate Instagram?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Creating Instagram-optimized sermon clips takes time and skill. Let Sermon Clips handle the clipping, formatting, and captions while you focus on ministry. Try it free.
              </p>
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 bg-[#E8725A] hover:bg-[#d4654f] px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg"
              >
                Try Sermon Clips Free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-white/60 text-sm mt-4">Instagram-ready clips in 24 hours</p>
            </section>

          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2D2D2D] mb-8">Continue Reading</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/sermon-clips-for-tiktok" className="group p-6 rounded-xl border border-[#E8E4DC] hover:border-[#E8725A]/30 transition-all">
              <p className="text-sm text-[#E8725A] mb-2">Related Platform</p>
              <h3 className="font-bold text-[#2D2D2D] group-hover:text-[#E8725A] transition-colors">Sermon Clips for TikTok: Complete Setup Guide</h3>
            </Link>
            <Link href="/blog/church-social-media-strategy" className="group p-6 rounded-xl border border-[#E8E4DC] hover:border-[#E8725A]/30 transition-all">
              <p className="text-sm text-[#E8725A] mb-2">Complete Guide</p>
              <h3 className="font-bold text-[#2D2D2D] group-hover:text-[#E8725A] transition-colors">Church Social Media Strategy: 2026 Complete Guide</h3>
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
