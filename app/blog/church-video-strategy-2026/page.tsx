import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, TrendingUp, Users, Video, AlertCircle, CheckCircle2, BarChart3, Globe, Heart } from 'lucide-react';

export const metadata = {
  title: 'Church Video Strategy 2026: What the Data Says (Barna + Platform Research)',
  description: 'Barna\'s State of the Church 2026 report just dropped. Here\'s what the data means for your church\'s video and social media strategy—and what to do about it.',
  keywords: 'church video strategy 2026, church digital strategy, state of the church 2026, church social media strategy, church online presence, church video ministry',
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
            <span className="flex items-center gap-1.5 bg-[#E8725A]/10 text-[#E8725A] px-2 py-0.5 rounded-full text-xs font-medium">
              Fresh Data
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
            Church Video Strategy 2026: What the Data Actually Says
          </h1>

          <p className="text-xl text-[#5c5c5c] mb-4 leading-relaxed">
            Barna Group just released its State of the Church 2026 report (February 2026). The findings reshape how we should think about church video content, digital presence, and who you're actually trying to reach.
          </p>
          <p className="text-lg text-[#5c5c5c] mb-10 leading-relaxed">
            Here's what the data says — and what it means for your video strategy this year.
          </p>

          {/* Table of Contents */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm">
            <h2 className="font-bold text-lg text-[#2D2D2D] mb-4">What You'll Find Here</h2>
            <ul className="space-y-2 text-[#5c5c5c]">
              <li><a href="#barna-findings" className="hover:text-[#E8725A] transition-colors">The 3 Key Barna 2026 Findings (and what they mean)</a></li>
              <li><a href="#platform-reality" className="hover:text-[#E8725A] transition-colors">Platform Reality: Where Your Congregation Actually Lives</a></li>
              <li><a href="#the-opportunity" className="hover:text-[#E8725A] transition-colors">The Opportunity: 60% Weekly Reach You're Leaving on the Table</a></li>
              <li><a href="#ai-authority" className="hover:text-[#E8725A] transition-colors">AI and Pastoral Authority: Why Video Is the Answer</a></li>
              <li><a href="#action-plan" className="hover:text-[#E8725A] transition-colors">Your 2026 Video Action Plan (by church size)</a></li>
              <li><a href="#faq" className="hover:text-[#E8725A] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Section 1 */}
          <section id="barna-findings" className="mb-14">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">The 3 Key Barna 2026 Findings</h2>

            <p className="text-[#5c5c5c] mb-8 leading-relaxed">
              Barna's State of the Church 2026 research — conducted with Gloo — surveyed thousands of U.S. adults and Christian leaders. Three findings stand out for church communicators.
            </p>

            {/* Finding 1 */}
            <div className="bg-white rounded-2xl p-8 mb-6 shadow-sm border-l-4 border-[#E8725A]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#E8725A]/10 rounded-full flex items-center justify-center">
                  <Globe className="w-4 h-4 text-[#E8725A]" />
                </div>
                <span className="font-bold text-[#2D2D2D]">Finding 1: Christian Media Has Massive Reach</span>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="text-center p-4 bg-[#F5F1EB] rounded-xl">
                  <div className="text-3xl font-bold text-[#E8725A] mb-1">60%</div>
                  <div className="text-sm text-[#5c5c5c]">of U.S. adults engage with Christian media</div>
                </div>
                <div className="text-center p-4 bg-[#F5F1EB] rounded-xl">
                  <div className="text-3xl font-bold text-[#E8725A] mb-1">50%</div>
                  <div className="text-sm text-[#5c5c5c]">do so every single week</div>
                </div>
                <div className="text-center p-4 bg-[#F5F1EB] rounded-xl">
                  <div className="text-3xl font-bold text-[#E8725A] mb-1">67%</div>
                  <div className="text-sm text-[#5c5c5c]">view Christian media as trustworthy</div>
                </div>
              </div>
              <p className="text-[#5c5c5c] leading-relaxed">
                <strong className="text-[#2D2D2D]">What this means:</strong> The audience is there. 60% of U.S. adults are already consuming Christian content — including many who aren't in your building on Sunday. The question isn't whether people want church content online. It's whether your church is showing up.
              </p>
            </div>

            {/* Finding 2 */}
            <div className="bg-white rounded-2xl p-8 mb-6 shadow-sm border-l-4 border-[#2D2D2D]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#2D2D2D]/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-[#2D2D2D]" />
                </div>
                <span className="font-bold text-[#2D2D2D]">Finding 2: Spiritual Openness Is Rising — Especially Among Young People</span>
              </div>
              <p className="text-[#5c5c5c] leading-relaxed mb-4">
                Barna found rising commitments to Jesus and growing spiritual openness, particularly among Gen Z and Millennials. Many Americans report "a growing hunger for meaning and purpose." More people than in recent years say they're open to spiritual conversations.
              </p>
              <div className="bg-[#F5F1EB] rounded-xl p-4">
                <p className="text-[#5c5c5c] italic">
                  "There are encouraging signs, but the broader story of Christian faith in the U.S. is still unfolding." — Daniel Copeland, VP of Research, Barna Group
                </p>
              </div>
              <p className="text-[#5c5c5c] leading-relaxed mt-4">
                <strong className="text-[#2D2D2D]">What this means:</strong> People are searching. But they're searching on social media and YouTube, not in church lobbies. Short-form video is how spiritually curious people in 2026 discover churches — not Google Maps, not a flyer.
              </p>
            </div>

            {/* Finding 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border-l-4 border-[#4CAF50]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-[#4CAF50]/10 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-4 h-4 text-[#4CAF50]" />
                </div>
                <span className="font-bold text-[#2D2D2D]">Finding 3: AI Is Reshaping Pastoral Authority</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="text-center p-4 bg-[#F5F1EB] rounded-xl">
                  <div className="text-3xl font-bold text-[#2D2D2D] mb-1">1 in 3</div>
                  <div className="text-sm text-[#5c5c5c]">U.S. adults say AI spiritual advice is as trustworthy as a pastor</div>
                </div>
                <div className="text-center p-4 bg-[#F5F1EB] rounded-xl">
                  <div className="text-3xl font-bold text-[#2D2D2D] mb-1">2 in 5</div>
                  <div className="text-sm text-[#5c5c5c]">Gen Z &amp; Millennials say the same</div>
                </div>
              </div>
              <p className="text-[#5c5c5c] leading-relaxed">
                <strong className="text-[#2D2D2D]">What this means:</strong> Your pastor's voice and presence online has never mattered more. When a significant portion of young adults trust AI as much as a pastor, the antidote isn't to argue — it's for pastors to show up where those young adults already are. Video is the medium. Social media is the platform.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="platform-reality" className="mb-14">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Platform Reality: Where Your Congregation Actually Lives</h2>

            <p className="text-[#5c5c5c] mb-8 leading-relaxed">
              The platform landscape in 2026, according to Pew Research and platform data:
            </p>

            {/* Platform table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-white rounded-2xl shadow-sm overflow-hidden">
                <thead>
                  <tr className="bg-[#2D2D2D] text-white">
                    <th className="text-left p-4 font-semibold">Platform</th>
                    <th className="text-center p-4 font-semibold">Monthly Users</th>
                    <th className="text-center p-4 font-semibold">Key Demographic</th>
                    <th className="text-center p-4 font-semibold">Best Church Content</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F5F1EB]">
                  <tr className="hover:bg-[#F5F1EB]/50">
                    <td className="p-4 font-medium text-[#2D2D2D]">YouTube</td>
                    <td className="p-4 text-center text-[#5c5c5c]">85% of all US adults</td>
                    <td className="p-4 text-center text-[#5c5c5c]">All ages</td>
                    <td className="p-4 text-center text-[#5c5c5c]">Full sermons + Shorts</td>
                  </tr>
                  <tr className="hover:bg-[#F5F1EB]/50">
                    <td className="p-4 font-medium text-[#2D2D2D]">Facebook</td>
                    <td className="p-4 text-center text-[#5c5c5c]">3.05B global</td>
                    <td className="p-4 text-center text-[#5c5c5c]">30–64 (78% daily)</td>
                    <td className="p-4 text-center text-[#5c5c5c]">Clips, events, livestream</td>
                  </tr>
                  <tr className="hover:bg-[#F5F1EB]/50">
                    <td className="p-4 font-medium text-[#2D2D2D]">Instagram</td>
                    <td className="p-4 text-center text-[#5c5c5c]">2.04B global</td>
                    <td className="p-4 text-center text-[#5c5c5c]">18–29 (76% US)</td>
                    <td className="p-4 text-center text-[#5c5c5c]">Reels, Stories, quotes</td>
                  </tr>
                  <tr className="hover:bg-[#F5F1EB]/50">
                    <td className="p-4 font-medium text-[#2D2D2D]">TikTok</td>
                    <td className="p-4 text-center text-[#5c5c5c]">1.5B global</td>
                    <td className="p-4 text-center text-[#5c5c5c]">Gen Z + Millennials</td>
                    <td className="p-4 text-center text-[#5c5c5c]">Short clips, authenticity</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-[#E8725A]/5 border border-[#E8725A]/20 rounded-2xl p-6 mb-6">
              <p className="text-[#2D2D2D] font-medium mb-2">The uncomfortable truth:</p>
              <p className="text-[#5c5c5c] leading-relaxed">
                Research from church communications teams shows that maintaining a quality presence on a single platform requires <strong>3–5 hours weekly</strong> — for content creation, scheduling, community management, and analytics. Most church media teams don't have that for even one platform, let alone four.
              </p>
              <p className="text-[#5c5c5c] leading-relaxed mt-3">
                This is exactly why AI-automated clip generation exists. Your pastor's 45-minute sermon already contains everything you need for a week of content on all four platforms.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="the-opportunity" className="mb-14">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">The Opportunity: 60% Weekly Reach You're Leaving on the Table</h2>

            <p className="text-[#5c5c5c] mb-6 leading-relaxed">
              Here's the math: 60% of U.S. adults already engage with Christian media weekly (Barna 2026). But how much of that is your church vs. national ministries with full production teams?
            </p>

            <p className="text-[#5c5c5c] mb-6 leading-relaxed">
              Most local churches show up zero times in that 60% figure. Their congregation is consuming content from ChurchHome, YouVersion, Steven Furtick, and random TikTok pastors — while the local pastor's Sunday message sits unseen in a folder.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-[#2D2D2D] mb-4 flex items-center gap-2">
                  <Video className="w-5 h-5 text-[#E8725A]" />
                  What churches without video miss
                </h3>
                <ul className="space-y-3 text-[#5c5c5c]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E8725A] mt-0.5">✗</span>
                    Spiritually curious visitors who find churches on Instagram
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E8725A] mt-0.5">✗</span>
                    Members who miss Sunday but would watch a clip
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E8725A] mt-0.5">✗</span>
                    Spanish-speaking community you could reach with translated clips
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E8725A] mt-0.5">✗</span>
                    The "second service" that happens on social media 24/7
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-[#2D2D2D] mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#4CAF50]" />
                  What active video churches gain
                </h3>
                <ul className="space-y-3 text-[#5c5c5c]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4CAF50] mt-0.5">✓</span>
                    Discoverability from people searching church content
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4CAF50] mt-0.5">✓</span>
                    Members sharing clips that reach their non-church friends
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4CAF50] mt-0.5">✓</span>
                    Ongoing pastoral presence between Sundays
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4CAF50] mt-0.5">✓</span>
                    Multilingual reach without a multilingual staff member
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="ai-authority" className="mb-14">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">AI and Pastoral Authority: Why Video Is the Answer</h2>

            <p className="text-[#5c5c5c] mb-6 leading-relaxed">
              The Barna finding that 1 in 3 adults trust AI spiritual advice as much as a pastor is alarming on the surface. But it points to a specific failure mode, not an existential crisis.
            </p>

            <p className="text-[#5c5c5c] mb-6 leading-relaxed">
              People default to AI when their actual pastor isn't accessible between Sundays. If someone wakes up at 11pm anxious about a family situation, they're not calling the pastor. They might open ChatGPT and ask for scripture.
            </p>

            <div className="bg-[#2D2D2D] text-white rounded-2xl p-8 mb-8">
              <p className="text-xl font-medium mb-4">The response isn't to fight AI. It's to be there.</p>
              <p className="text-[#9ca3af] leading-relaxed">
                A 60-second clip of your pastor speaking directly into a real problem — anxiety, grief, marriage conflict, doubt — posted to Instagram on Tuesday night is what keeps people tethered to a real community, a real voice, and real faith formation. AI can generate text. It can't provide your pastor's specific theology, your church's specific community, or the accountability of a real relationship.
              </p>
              <p className="text-[#9ca3af] leading-relaxed mt-3">
                But you have to be present to be chosen.
              </p>
            </div>

            <p className="text-[#5c5c5c] mb-6 leading-relaxed">
              Note: 41% of pastors already use AI for sermon preparation (Barna 2026). The tool is already in the workflow. The question is whether churches also use AI on the <em>output side</em> — to distribute what the pastor creates at the scale the platform moment demands.
            </p>
          </section>

          {/* Section 5 */}
          <section id="action-plan" className="mb-14">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Your 2026 Video Action Plan (by Church Size)</h2>

            <p className="text-[#5c5c5c] mb-8 leading-relaxed">
              The right strategy depends on your team size. Here's what we recommend based on the platform and Barna data above.
            </p>

            {/* Small church */}
            <div className="bg-white rounded-2xl p-8 mb-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-5 h-5 text-[#E8725A]" />
                <h3 className="font-bold text-xl text-[#2D2D2D]">Small Church (under 200)</h3>
              </div>
              <p className="text-[#5c5c5c] mb-4">One platform, done well. Facebook is your highest ROI — your congregation is there, events work, livestream works.</p>
              <div className="bg-[#F5F1EB] rounded-xl p-4">
                <p className="font-medium text-[#2D2D2D] mb-2">Minimum viable strategy:</p>
                <ul className="space-y-1 text-[#5c5c5c] text-sm">
                  <li>• 1 sermon clip per week (Monday or Tuesday post)</li>
                  <li>• <a href="/sermon-transcription" className="text-[#E8725A] hover:underline">Auto-transcription</a> for captions — 85% watch video silent</li>
                  <li>• Upload Sunday, post clip Tuesday, done</li>
                </ul>
              </div>
            </div>

            {/* Medium church */}
            <div className="bg-white rounded-2xl p-8 mb-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-5 h-5 text-[#2D2D2D]" />
                <h3 className="font-bold text-xl text-[#2D2D2D]">Mid-Sized Church (200–1,000)</h3>
              </div>
              <p className="text-[#5c5c5c] mb-4">Facebook + Instagram. The Barna openness data means Instagram is where your growth comes from — it's where spiritually curious younger adults will find you.</p>
              <div className="bg-[#F5F1EB] rounded-xl p-4">
                <p className="font-medium text-[#2D2D2D] mb-2">Weekly rhythm:</p>
                <ul className="space-y-1 text-[#5c5c5c] text-sm">
                  <li>• 3–5 clips per week (different moments from one sermon)</li>
                  <li>• Auto-captions in English + Spanish if your area has a Latino community</li>
                  <li>• One Reel + one Facebook post daily is achievable with AI clips</li>
                  <li>• Aim for Easter at <a href="/easter-2026" className="text-[#E8725A] hover:underline">full content saturation</a> — 6 weeks out is now</li>
                </ul>
              </div>
            </div>

            {/* Large church */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="w-5 h-5 text-[#2D2D2D]" />
                <h3 className="font-bold text-xl text-[#2D2D2D]">Large Church (1,000+)</h3>
              </div>
              <p className="text-[#5c5c5c] mb-4">All four platforms. At this scale, your Sunday service already produces enough raw material for a full media week on every platform. The bottleneck is production time, not content.</p>
              <div className="bg-[#F5F1EB] rounded-xl p-4">
                <p className="font-medium text-[#2D2D2D] mb-2">Full stack:</p>
                <ul className="space-y-1 text-[#5c5c5c] text-sm">
                  <li>• 5–10 clips per week across all platforms</li>
                  <li>• Platform-specific formatting: 9:16 for Reels/TikTok, 16:9 for YouTube, 1:1 for Facebook</li>
                  <li>• Translation into 2–3 languages for multilingual community reach</li>
                  <li>• Auto-publish workflow: upload once, distribute everywhere</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Timeline callout */}
          <div className="bg-[#E8725A] text-white rounded-2xl p-8 mb-14">
            <h3 className="text-2xl font-bold mb-4">⏰ Right Now: The Easter Window Is Open</h3>
            <p className="text-white/90 leading-relaxed mb-4">
              Easter is April 5, 2026 — 6 weeks from now. Barna's data on rising spiritual openness and curiosity among younger generations is especially relevant around Easter: it's the highest-traffic moment for church discovery content online, every single year.
            </p>
            <p className="text-white/90 leading-relaxed mb-6">
              Churches that start producing and posting Easter clips now will show up in search and algorithm recommendations when spiritually curious people start searching in late March. Start next week, not Holy Week.
            </p>
            <Link href="/easter-2026" className="inline-block bg-white text-[#E8725A] font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors">
              See the Easter Content Plan →
            </Link>
          </div>

          {/* FAQ */}
          <section id="faq" className="mb-14">
            <h2 className="text-3xl font-bold text-[#2D2D2D] mb-8">FAQ</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-[#2D2D2D] mb-2">Is Barna's research specifically about social media and video?</h3>
                <p className="text-[#5c5c5c] leading-relaxed">The State of the Church 2026 report focuses on Christian media broadly — podcast, video, streaming, social — not one channel specifically. The 60% weekly engagement figure covers all digital Christian content consumption, but video and social are the dominant formats for how people under 45 engage with that content.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-[#2D2D2D] mb-2">My church already posts to social. What's the gap?</h3>
                <p className="text-[#5c5c5c] leading-relaxed">Most churches post 1–2 times per week. Platforms reward 5–7 posts per week with dramatically higher organic reach. The gap is usually volume, not quality — which is why AI-automated clip generation from a single sermon upload matters.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-[#2D2D2D] mb-2">What about the finding that Christian media can be divisive?</h3>
                <p className="text-[#5c5c5c] leading-relaxed">Barna found that 45% of heavy Christian media consumers say the content can be divisive. The antidote is local, pastoral, community-grounded content — exactly what clips from your specific pastor and church produce. It's the opposite of polarizing national media.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-[#2D2D2D] mb-2">How do I start if I have no media team?</h3>
                <p className="text-[#5c5c5c] leading-relaxed">Upload your sermon recording. AI identifies the best moments, creates captioned clips in the right formats for each platform, and publishes them automatically. That's the entire workflow for a one-person comms director. See <a href="/how-to-make-sermon-clips" className="text-[#E8725A] hover:underline">how it works</a>.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-[#2D2D2D] mb-2">Should my church be on TikTok?</h3>
                <p className="text-[#5c5c5c] leading-relaxed">If you're targeting Gen Z and younger Millennials, yes — TikTok's 1.5 billion users and spiritual content community (ChurchTok) is real and growing. If you're focused on your existing congregation (primarily 30+), Facebook and YouTube are higher ROI. Start where your audience already is, not where the platform hype is.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-[#2D2D2D] text-white rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-bold mb-4">The Audience Is There. Are You?</h2>
            <p className="text-[#9ca3af] mb-8 text-lg leading-relaxed max-w-xl mx-auto">
              60% of U.S. adults engage with Christian media weekly. Upload your first sermon and see what AI-powered distribution looks like.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sign-up" className="bg-[#E8725A] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#E8725A]/90 transition-colors text-lg">
                Start Free — No Card Required
              </Link>
              <Link href="/blog" className="border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors text-lg">
                More Guides
              </Link>
            </div>
            <p className="text-[#6b7280] text-sm mt-6">Free plan includes 1 complete sermon • No credit card required</p>
          </div>
        </div>
      </article>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Church Video Strategy 2026: What the Data Actually Says",
              "description": "Barna's State of the Church 2026 report just dropped. Here's what the data means for your church's video and social media strategy.",
              "datePublished": "2026-02-21",
              "dateModified": "2026-02-21",
              "author": { "@type": "Organization", "name": "Sermon Clips" },
              "publisher": { "@type": "Organization", "name": "Sermon Clips", "url": "https://sermonclips.com" }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is Barna's research specifically about social media and video?",
                  "acceptedAnswer": { "@type": "Answer", "text": "The State of the Church 2026 report focuses on Christian media broadly. The 60% weekly engagement figure covers all digital Christian content consumption, but video and social are the dominant formats for how people under 45 engage." }
                },
                {
                  "@type": "Question",
                  "name": "What's the gap if my church already posts to social media?",
                  "acceptedAnswer": { "@type": "Answer", "text": "Most churches post 1–2 times per week. Platforms reward 5–7 posts per week with dramatically higher organic reach. The gap is usually volume, not quality — which is why AI-automated clip generation from a single sermon upload matters." }
                },
                {
                  "@type": "Question",
                  "name": "Should my church be on TikTok?",
                  "acceptedAnswer": { "@type": "Answer", "text": "If you're targeting Gen Z and younger Millennials, yes. If you're focused on your existing congregation (primarily 30+), Facebook and YouTube are higher ROI. Start where your audience already is." }
                }
              ]
            }
          ])
        }}
      />
    </div>
  );
}
