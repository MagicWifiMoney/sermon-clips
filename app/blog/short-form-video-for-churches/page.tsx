
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, CheckCircle2, Share2, Lightbulb, TrendingUp, Video, Smartphone, Users, Eye, Heart, BarChart3, Target, Zap } from 'lucide-react';

export const metadata = {
  title: 'Short-Form Video for Churches: Why Reels, Shorts & TikTok Matter in 2026',
  description: '73% of churchgoers discover new churches through social media. Here\'s why short-form video is the #1 tool for church growth in 2026.',
  keywords: 'short form sermon video, sermon to reels, church reels, church tiktok, instagram reels church, youtube shorts church',
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
              11 min read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
            Short-Form Video for Churches: Why Reels, Shorts & TikTok Matter in 2026
          </h1>

          <p className="text-xl text-[#5c5c5c] mb-10 leading-relaxed">
            The average person now spends 3+ hours per day watching short-form video. If your church isn't creating Reels, Shorts, and TikToks, you're invisible to an entire generation. Here's why short-form video isn't optional anymore—and how to start without overwhelming your team.
          </p>

          {/* Table of Contents */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm">
            <h2 className="font-bold text-lg text-[#2D2D2D] mb-4">What You'll Learn</h2>
            <ul className="space-y-2 text-[#5c5c5c]">
              <li><a href="#statistics" className="hover:text-[#E8725A] transition-colors">The Short-Form Video Revolution (By the Numbers)</a></li>
              <li><a href="#why-now" className="hover:text-[#E8725A] transition-colors">Why Churches Can't Ignore This Shift</a></li>
              <li><a href="#platforms" className="hover:text-[#E8725A] transition-colors">Understanding Each Platform</a></li>
              <li><a href="#objections" className="hover:text-[#E8725A] transition-colors">Answering Common Church Objections</a></li>
              <li><a href="#getting-started" className="hover:text-[#E8725A] transition-colors">How to Get Started (Even If You're Behind)</a></li>
              <li><a href="#success-stories" className="hover:text-[#E8725A] transition-colors">Real Church Success Stories</a></li>
              <li><a href="#future" className="hover:text-[#E8725A] transition-colors">Where Short-Form Video Is Headed</a></li>
            </ul>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            
            <section id="statistics" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <BarChart3 className="w-8 h-8 text-[#E8725A]" />
                The Short-Form Video Revolution (By the Numbers)
              </h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                The data is overwhelming. Short-form video has fundamentally changed how people consume content—and how they discover communities, including churches.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 shadow-sm border-l-4 border-pink-500">
                  <p className="text-4xl font-bold text-pink-600 mb-2">66%</p>
                  <p className="text-[#2D2D2D] font-semibold mb-1">of users prefer short-form video</p>
                  <p className="text-[#5c5c5c] text-sm">Over any other content type on social media (Hubspot, 2026)</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-sm border-l-4 border-blue-500">
                  <p className="text-4xl font-bold text-blue-600 mb-2">3.5B</p>
                  <p className="text-[#2D2D2D] font-semibold mb-1">TikTok + Reels daily views</p>
                  <p className="text-[#5c5c5c] text-sm">Combined daily video views across TikTok, Instagram Reels, and YouTube Shorts</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 shadow-sm border-l-4 border-purple-500">
                  <p className="text-4xl font-bold text-purple-600 mb-2">73%</p>
                  <p className="text-[#2D2D2D] font-semibold mb-1">of Gen Z discover churches online</p>
                  <p className="text-[#5c5c5c] text-sm">Primarily through social media, especially short-form video (Barna, 2025)</p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 shadow-sm border-l-4 border-orange-500">
                  <p className="text-4xl font-bold text-orange-600 mb-2">5x</p>
                  <p className="text-[#2D2D2D] font-semibold mb-1">higher engagement than posts</p>
                  <p className="text-[#5c5c5c] text-sm">Short-form video gets 5x more engagement than static posts (Meta, 2025)</p>
                </div>
              </div>

              <div className="bg-[#E8725A]/10 rounded-xl p-6 border-l-4 border-[#E8725A]">
                <p className="text-[#2D2D2D] font-medium mb-2">What This Means for Churches</p>
                <p className="text-[#5c5c5c]">
                  If you're not creating short-form video, you're essentially invisible to most people under 40. They're not watching your live streams or reading your blog posts. They're scrolling Reels, Shorts, and TikTok—and if your church isn't there, someone else's is.
                </p>
              </div>
            </section>

            <section id="why-now" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-[#E8725A]" />
                Why Churches Can't Ignore This Shift
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                This isn't about "keeping up with trends." It's about meeting people where they already are. Here's why short-form video is uniquely powerful for churches:
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-3 flex items-center gap-2">
                    <Eye className="w-6 h-6 text-[#E8725A]" />
                    1. Discovery Without Friction
                  </h3>
                  <p className="text-[#5c5c5c] mb-3">
                    Visiting a church for the first time is intimidating. Watching a 30-second sermon clip? Effortless. Short-form video lowers the barrier to entry for people exploring faith.
                  </p>
                  <div className="bg-[#F5F1EB] rounded-lg p-4 text-sm">
                    <p className="text-[#2D2D2D] font-medium mb-1">Real example:</p>
                    <p className="text-[#5c5c5c] italic">
                      "I watched your pastor's clip on anxiety at 2 AM when I couldn't sleep. Came to church the next Sunday." — Comment on a church's Instagram Reel
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-3 flex items-center gap-2">
                    <Heart className="w-6 h-6 text-[#E8725A]" />
                    2. Emotional Connection at Scale
                  </h3>
                  <p className="text-[#5c5c5c] mb-3">
                    Short-form video captures emotion in a way text and images can't. Viewers see your pastor's facial expressions, hear the passion in their voice, feel the energy of your worship. It's the closest thing to being there.
                  </p>
                  <p className="text-sm text-[#5c5c5c]">
                    A 30-second clip of someone crying tears of joy during worship can communicate more about your church culture than a thousand-word "About Us" page.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-3 flex items-center gap-2">
                    <Users className="w-6 h-6 text-[#E8725A]" />
                    3. Shareability = Digital Word-of-Mouth
                  </h3>
                  <p className="text-[#5c5c5c] mb-3">
                    When someone shares your Reel with "You need to hear this," they're doing evangelism for you. Short-form video is the most-shared content type—which means your message spreads organically through networks you'd never reach otherwise.
                  </p>
                  <div className="bg-[#F5F1EB] rounded-lg p-4 text-sm">
                    <p className="text-[#5c5c5c]">
                      <strong>The multiplication effect:</strong> One well-crafted clip shared by 50 members to their networks can reach 15,000+ people in 48 hours. That's stadium-sized reach from your living room.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-3 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-[#E8725A]" />
                    4. Platform Algorithms Love It
                  </h3>
                  <p className="text-[#5c5c5c]">
                    Instagram, Facebook, YouTube, and TikTok are all pushing short-form video harder than any other content type. They'll show your videos to people who don't even follow you—free reach that didn't exist 5 years ago.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-3 flex items-center gap-2">
                    <Target className="w-6 h-6 text-[#E8725A]" />
                    5. Meet People in Crisis Moments
                  </h3>
                  <p className="text-[#5c5c5c]">
                    People scroll social media when they're anxious, grieving, questioning, or lonely. Your 45-second clip about finding peace in chaos might be the exact word someone needs at their exact moment of need—and they'll never forget it.
                  </p>
                </div>
              </div>
            </section>

            <section id="platforms" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Smartphone className="w-8 h-8 text-[#E8725A]" />
                Understanding Each Platform
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-8">
                Not all short-form video platforms are the same. Each has its own culture, audience, and best practices. Here's what churches need to know:
              </p>

              <div className="space-y-8">
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-8 border-l-4 border-pink-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                      IG
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#2D2D2D]">Instagram Reels</h3>
                      <p className="text-sm text-[#5c5c5c]">Best for reaching your existing community + their networks</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-sm text-[#5c5c5c]">
                    <div>
                      <p className="font-semibold text-[#2D2D2D] mb-1">Audience:</p>
                      <p>Millennials and Gen Z (25-40), leaning slightly female. Your members are probably already here.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#2D2D2D] mb-1">Content Style:</p>
                      <p>Polished but authentic. Aesthetic matters more than on TikTok. Think "aspirational but relatable."</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#2D2D2D] mb-1">What Works:</p>
                      <p>Sermon highlights, worship moments, testimony snippets, behind-the-scenes of church life, inspirational quotes.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#2D2D2D] mb-1">Pro Tip:</p>
                      <p className="text-[#E8725A] font-medium">Post to both Reels and Stories. Stories give an immediate engagement boost; Reels have longer shelf life.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 border-l-4 border-cyan-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
                      TT
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#2D2D2D]">TikTok</h3>
                      <p className="text-sm text-[#5c5c5c]">Best for reaching people who don't know your church yet</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-sm text-[#5c5c5c]">
                    <div>
                      <p className="font-semibold text-[#2D2D2D] mb-1">Audience:</p>
                      <p>Heavily Gen Z (16-30), but growing across all ages. The #ChristianTikTok community is massive and active.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#2D2D2D] mb-1">Content Style:</p>
                      <p>Raw, authentic, unpolished. Over-produced content actually performs worse. Embrace the casual vibe.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#2D2D2D] mb-1">What Works:</p>
                      <p>Provocative sermon soundbites, "Things I learned in church," relatable Christian humor, apologetics Q&A, vulnerable pastor moments.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#2D2D2D] mb-1">Pro Tip:</p>
                      <p className="text-[#E8725A] font-medium">TikTok rewards consistency more than quality. Post 4-5x per week minimum. Duet and stitch other Christian creators to expand reach.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 border-l-4 border-red-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-bold text-xl">
                      YT
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#2D2D2D]">YouTube Shorts</h3>
                      <p className="text-sm text-[#5c5c5c]">Best for building a subscriber base for full sermons</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-sm text-[#5c5c5c]">
                    <div>
                      <p className="font-semibold text-[#2D2D2D] mb-1">Audience:</p>
                      <p>Broad age range, slightly older than TikTok. People already in the "watch long videos" mindset.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#2D2D2D] mb-1">Content Style:</p>
                      <p>Middle ground between TikTok raw and Instagram polished. Educational and inspirational content performs well.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#2D2D2D] mb-1">What Works:</p>
                      <p>Sermon teasers that lead to full video, "Top 3" teaching breakdowns, Scripture explanations, worship highlights.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#2D2D2D] mb-1">Pro Tip:</p>
                      <p className="text-[#E8725A] font-medium">Shorts are a funnel to your main channel. Always link to full sermons in description. Use end cards to suggest long-form content.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border-l-4 border-blue-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-xl">
                      FB
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#2D2D2D]">Facebook Reels</h3>
                      <p className="text-sm text-[#5c5c5c]">Best for reaching older demographics & members' families</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-sm text-[#5c5c5c]">
                    <div>
                      <p className="font-semibold text-[#2D2D2D] mb-1">Audience:</p>
                      <p>Gen X and Boomers (40+). Parents and grandparents of your younger members.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#2D2D2D] mb-1">Content Style:</p>
                      <p>More traditional and wholesome. Longer captions work well here.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#2D2D2D] mb-1">What Works:</p>
                      <p>Encouraging messages, family-focused content, community highlights, testimony stories.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#2D2D2D] mb-1">Pro Tip:</p>
                      <p className="text-[#E8725A] font-medium">Share Reels to your church's Facebook Group immediately after posting for an engagement boost. Ask members to share with their networks.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-[#2D2D2D] rounded-xl p-6 text-white">
                <h3 className="font-bold mb-3">Multi-Platform Strategy</h3>
                <p className="text-white/90 text-sm mb-3">
                  <strong>Don't choose just one.</strong> The beauty of short-form video is that you can create once and publish everywhere. Use the same clip on all four platforms—just adjust the caption for each platform's culture.
                </p>
                <p className="text-white/90 text-sm">
                  Most churches start with Instagram (where their members are), then expand to TikTok (for reach) and YouTube (for sermon funneling). Add Facebook last if you have capacity.
                </p>
              </div>
            </section>

            <section id="objections" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Lightbulb className="w-8 h-8 text-[#E8725A]" />
                Answering Common Church Objections
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-8">
                We hear these concerns from church leaders constantly. Here are honest answers:
              </p>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">"Isn't TikTok inappropriate for churches?"</h3>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    TikTok has more than dance trends. The #ChristianTikTok community has millions of active users sharing faith content daily. Yes, there's inappropriate content on TikTok—just like there is on YouTube, Instagram, and the entire internet. Your job is to be a light in that space, not avoid it entirely.
                  </p>
                  <p className="text-xs text-[#E8725A] italic">
                    Paul preached in the marketplace where all kinds of things happened. We're called to go where people are, not wait for them to come to us.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">"We don't have the staff or budget for video production."</h3>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    You don't need a production team. A phone, a lavalier mic ($30), and free editing apps (CapCut) are enough. AI tools like <Link href="/" className="text-[#E8725A] underline">Sermon Clips</Link> can even automate most of the process—just upload your sermon and get clips back in minutes.
                  </p>
                  <p className="text-xs text-[#5c5c5c] italic">
                    Smaller churches with zero budget are reaching thousands through Reels. It's not about resources; it's about consistency.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">"Won't short clips devalue deep theology?"</h3>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    No. They're an entry point, not the destination. A 30-second clip isn't meant to be a seminary course—it's meant to create curiosity that leads someone to the full sermon, a small group, or Sunday morning. Jesus used parables (short, memorable stories) before giving deeper teaching to committed disciples.
                  </p>
                  <p className="text-xs text-[#E8725A] italic">
                    Think of clips as "preview trailers" for the full message, not replacements for it.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">"Our pastor doesn't want to be 'famous' or seek attention."</h3>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    This isn't about fame—it's about stewardship. Your pastor's gift of teaching shouldn't be limited to Sunday morning capacity. If God has given them a message worth hearing, shouldn't more people hear it? Reframe it as digital discipleship, not self-promotion.
                  </p>
                  <p className="text-xs text-[#5c5c5c] italic">
                    Also: you can create clips without showing the pastor's face—text overlays on worship moments, illustrated sermon quotes, and more.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">"What about negative comments or trolls?"</h3>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    They'll happen. It means you're reaching beyond your echo chamber. Develop a simple policy: delete spam/abuse, ignore obvious trolls, thoughtfully engage with genuine questions. Train someone on your team to monitor and respond with grace. The positive impact far outweighs occasional negativity.
                  </p>
                  <p className="text-xs text-[#E8725A] italic">
                    Often, other viewers will defend you in the comments before you even see the negativity. Community forms around your content.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">"We're already overwhelmed. How do we add this?"</h3>
                  <p className="text-[#5c5c5c] text-sm">
                    Start with one platform and one clip per week. That's it. Not overwhelming. As you see results, you'll naturally want to expand. And with AI tools automating most of the work, you're looking at 30-60 minutes per week, not hours. <Link href="/blog/church-social-media-strategy-repurpose-sermon" className="text-[#E8725A] underline">Read our repurposing guide</Link> for efficient workflows.
                  </p>
                </div>
              </div>
            </section>

            <section id="getting-started" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-[#E8725A]" />
                How to Get Started (Even If You're Behind)
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Don't let "we should have started years ago" paralyze you. Here's a simple 30-day plan to launch your short-form video presence:
              </p>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-[#E8725A]/10 to-[#E8725A]/5 rounded-xl p-6 border-l-4 border-[#E8725A]">
                  <h3 className="font-bold text-[#2D2D2D] mb-3">Week 1: Set Up & Learn</h3>
                  <ul className="text-[#5c5c5c] space-y-2 text-sm">
                    <li>• Download Instagram, TikTok, and YouTube apps on your church phone</li>
                    <li>• Create business/creator accounts (not personal)</li>
                    <li>• Spend 30 minutes per day scrolling to understand each platform's vibe</li>
                    <li>• Follow 10-15 churches already doing this well</li>
                    <li>• Watch <Link href="/blog/how-to-make-sermon-clips-for-social-media" className="text-[#E8725A] underline">our clip creation guide</Link></li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-[#E8725A]/10 to-[#E8725A]/5 rounded-xl p-6 border-l-4 border-[#E8725A]">
                  <h3 className="font-bold text-[#2D2D2D] mb-3">Week 2: Create Your First Clip</h3>
                  <ul className="text-[#5c5c5c] space-y-2 text-sm">
                    <li>• Pick one powerful 30-second moment from last Sunday's sermon</li>
                    <li>• Edit it (CapCut is free and has tutorials)</li>
                    <li>• Add captions (non-negotiable)</li>
                    <li>• Post it to Instagram Reels on Monday morning</li>
                    <li>• Share to Stories and ask members to share too</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-[#E8725A]/10 to-[#E8725A]/5 rounded-xl p-6 border-l-4 border-[#E8725A]">
                  <h3 className="font-bold text-[#2D2D2D] mb-3">Week 3: Expand & Iterate</h3>
                  <ul className="text-[#5c5c5c] space-y-2 text-sm">
                    <li>• Post the same clip to TikTok and YouTube Shorts (repurpose!)</li>
                    <li>• Create a second clip from the same sermon</li>
                    <li>• Review what worked: check views, saves, shares</li>
                    <li>• Adjust based on feedback and performance</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-[#E8725A]/10 to-[#E8725A]/5 rounded-xl p-6 border-l-4 border-[#E8725A]">
                  <h3 className="font-bold text-[#2D2D2D] mb-3">Week 4: Build a Rhythm</h3>
                  <ul className="text-[#5c5c5c] space-y-2 text-sm">
                    <li>• Commit to 2-3 clips per week minimum</li>
                    <li>• Consider AI tools to speed up the process</li>
                    <li>• Recruit a volunteer or intern to help</li>
                    <li>• Celebrate wins with your team (shares, comments, DM stories)</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-[#2D2D2D] mb-3">The Most Important Thing: Consistency &gt; Perfection</h3>
                <p className="text-[#5c5c5c] text-sm">
                  Your first clips won't be great. That's okay. You're building a skill and an audience. Post consistently for 90 days before judging results. The churches winning at short-form video aren't the ones with the best equipment—they're the ones who show up every week without fail.
                </p>
              </div>
            </section>

            <section id="success-stories" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-[#E8725A]" />
                Real Church Success Stories
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 shadow-sm border-l-4 border-green-500">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">Small Rural Church (Average Attendance: 75)</h3>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    Started posting sermon clips to Instagram Reels in January 2025. By December, their clips had collectively reached 180,000+ people—more than their entire county's population. Result: 12 new families visited and stayed because "we'd been watching you online for months."
                  </p>
                  <p className="text-xs text-green-700 italic">
                    "We thought we were too small to matter online. Turns out, our message resonated way beyond our town." — Pastor
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-sm border-l-4 border-blue-500">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">Urban Multisite Church (Average Attendance: 3,500)</h3>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    Launched TikTok in mid-2024. One clip about mental health and faith went viral (4.2M views). Led to 600+ DM conversations, dozens of salvations, and the launch of a mental health ministry.
                  </p>
                  <p className="text-xs text-blue-700 italic">
                    "That one video reached more people than our church has in 20 years of existence. It changed our entire approach to digital outreach." — Communications Director
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-sm border-l-4 border-purple-500">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">Church Plant (Less than 1 year old)</h3>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    Couldn't afford a building, so they went all-in on short-form video while meeting in a school. Built an online community of 8,000 followers before their first in-person service. Launch Sunday had 300 attendees—most said they'd been "following online for months."
                  </p>
                  <p className="text-xs text-purple-700 italic">
                    "Short-form video let us build a church before we had a building." — Lead Pastor
                  </p>
                </div>
              </div>
            </section>

            <section id="future" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-[#E8725A]" />
                Where Short-Form Video Is Headed
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                This isn't a trend that will fade. Short-form video is how the next generation consumes information, entertainment, and increasingly, faith content. Here's what's coming:
              </p>

              <ul className="space-y-4 text-[#5c5c5c]">
                <li className="flex items-start gap-3">
                  <span className="text-[#E8725A] font-bold text-xl">→</span>
                  <span><strong className="text-[#2D2D2D]">Longer "short-form":</strong> Platforms are gradually increasing time limits (TikTok now allows 10 minutes). Expect a sweet spot of 60-90 seconds to become standard.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#E8725A] font-bold text-xl">→</span>
                  <span><strong className="text-[#2D2D2D]">AI-personalized feeds:</strong> Algorithms will get even better at showing your content to people spiritually curious but not yet connected to a church.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#E8725A] font-bold text-xl">→</span>
                  <span><strong className="text-[#2D2D2D]">Interactive features:</strong> Polls, Q&A stickers, and "choose your own path" videos will make content more engaging.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#E8725A] font-bold text-xl">→</span>
                  <span><strong className="text-[#2D2D2D]">Creator monetization:</strong> Churches may eventually earn ad revenue from Reels/Shorts, helping fund ministry operations.</span>
                </li>
              </ul>

              <div className="mt-8 bg-gradient-to-br from-[#2D2D2D] to-[#3D3D3D] rounded-xl p-8 text-white">
                <h3 className="font-bold text-xl mb-3">The Bottom Line</h3>
                <p className="text-white/90 mb-4">
                  Five years from now, every growing church will have a short-form video strategy. The question is: will you be an early adopter who's been building an audience for years, or will you be scrambling to catch up?
                </p>
                <p className="text-white/90">
                  The harvest is plentiful, but the laborers are scrolling. Meet them there.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-[#E8725A] to-[#d4654f] rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Start Creating Short-Form Video in Minutes</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Sermon Clips automatically turns your sermons into Reels, Shorts, and TikToks—with captions, branding, and everything you need. No video skills required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/" 
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#E8725A] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg"
                >
                  Try Free for 7 Days
                  <Video className="w-5 h-5" />
                </Link>
                <Link 
                  href="/blog/how-to-make-sermon-clips-for-social-media" 
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 px-8 py-4 rounded-full font-semibold transition-all"
                >
                  Read: How to Make Sermon Clips
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
