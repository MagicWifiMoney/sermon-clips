
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, CheckCircle2, Play, Share2, Scissors, Video, Smartphone, TrendingUp, Users, MessageCircle, Lightbulb, AlertCircle, Zap, Target, FileVideo } from 'lucide-react';

export const metadata = {
  title: 'How to Make Sermon Clips for Social Media (Step-by-Step Guide for 2026)',
  description: 'Learn how to create engaging sermon clips for Instagram, TikTok, and YouTube Shorts. Step-by-step guide with AI tools that save pastors hours every week.',
  keywords: 'how to make sermon clips, sermon video clips, sermon clips for social media, create sermon reels, church video editing',
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
              12 min read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
            How to Make Sermon Clips for Social Media (Step-by-Step Guide for 2026)
          </h1>

          <p className="text-xl text-[#5c5c5c] mb-10 leading-relaxed">
            Your Sunday sermon reaches 200 people. But what if it could reach 2,000? Or 20,000? This guide shows you exactly how to turn your sermons into engaging social media clips that multiply your message—even if you've never edited a video before.
          </p>

          {/* Table of Contents */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm">
            <h2 className="font-bold text-lg text-[#2D2D2D] mb-4">What You'll Learn</h2>
            <ul className="space-y-2 text-[#5c5c5c]">
              <li><a href="#why-clips" className="hover:text-[#E8725A] transition-colors">Why Sermon Clips Are Essential in 2026</a></li>
              <li><a href="#equipment" className="hover:text-[#E8725A] transition-colors">What You Need to Get Started</a></li>
              <li><a href="#step-by-step" className="hover:text-[#E8725A] transition-colors">7-Step Process to Create Your First Clip</a></li>
              <li><a href="#choosing-moments" className="hover:text-[#E8725A] transition-colors">How to Choose Clip-Worthy Moments</a></li>
              <li><a href="#editing-tips" className="hover:text-[#E8725A] transition-colors">Pro Editing Tips for Beginners</a></li>
              <li><a href="#platform-guide" className="hover:text-[#E8725A] transition-colors">Platform-Specific Publishing Guide</a></li>
              <li><a href="#automation" className="hover:text-[#E8725A] transition-colors">How to Automate the Entire Process</a></li>
              <li><a href="#faq" className="hover:text-[#E8725A] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            
            <section id="why-clips" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-[#E8725A]" />
                Why Sermon Clips Are Essential in 2026
              </h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                The statistics are staggering: <strong>73% of churchgoers discover new churches through social media</strong>, and short-form video now dominates every major platform. Instagram Reels, TikTok, YouTube Shorts, and Facebook Reels have fundamentally changed how people consume content—including spiritual content.
              </p>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                But here's what most churches miss: sermon clips aren't just marketing. They're <strong>digital discipleship</strong>. When someone scrolls past your 30-second clip about forgiveness at 11 PM on a Tuesday, you're pastoring them in the moment they need it most.
              </p>

              <div className="bg-[#E8725A]/10 rounded-xl p-6 border-l-4 border-[#E8725A] mb-8">
                <p className="text-[#2D2D2D] font-medium mb-2">The Multiplication Effect</p>
                <p className="text-[#5c5c5c]">
                  A single 45-second sermon clip can reach more people in 48 hours than your church building seats in a year. And unlike Sunday morning, these viewers can watch at midnight, during lunch breaks, or whenever they're wrestling with the exact question your pastor just answered.
                </p>
              </div>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">What Makes Sermon Clips So Effective?</h3>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#E8725A] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#2D2D2D]">Platform algorithms favor them.</strong>
                    <span className="text-[#5c5c5c] block">Instagram, TikTok, and YouTube actively push short-form vertical video to more viewers than any other content type.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#E8725A] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#2D2D2D]">They're shareable by design.</strong>
                    <span className="text-[#5c5c5c] block">Members can easily share clips to their Stories or send directly to friends struggling with specific issues.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#E8725A] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#2D2D2D]">They work 24/7.</strong>
                    <span className="text-[#5c5c5c] block">Your pastor can only preach once or twice a week, but clips keep working long after Sunday ends.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#E8725A] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#2D2D2D]">They lower the barrier to entry.</strong>
                    <span className="text-[#5c5c5c] block">Visiting a church for the first time is intimidating. Watching a 30-second clip? Easy. It's pre-evangelism in the digital age.</span>
                  </div>
                </li>
              </ul>
            </section>

            <section id="equipment" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Video className="w-8 h-8 text-[#E8725A]" />
                What You Need to Get Started
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Good news: you probably already have everything you need. Making sermon clips doesn't require expensive equipment or technical expertise. Here's the minimum viable setup:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E8725A]" />
                    Absolute Minimum
                  </h3>
                  <ul className="text-[#5c5c5c] space-y-2">
                    <li>• A recording of your sermon (even phone video works)</li>
                    <li>• Free editing software (CapCut or Canva)</li>
                    <li>• 2-3 hours per week</li>
                    <li>• Social media accounts</li>
                  </ul>
                  <p className="text-sm text-[#E8725A] mt-4 font-medium">Total cost: $0</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#E8725A]" />
                    Recommended Setup
                  </h3>
                  <ul className="text-[#5c5c5c] space-y-2">
                    <li>• Quality audio (lavalier mic for pastor)</li>
                    <li>• Good lighting during sermon recording</li>
                    <li>• AI clipping tool (<Link href="/" className="text-[#E8725A] underline">like Sermon Clips</Link>)</li>
                    <li>• Scheduling tool for posts</li>
                  </ul>
                  <p className="text-sm text-[#E8725A] mt-4 font-medium">Total cost: $50-200/month</p>
                </div>
              </div>

              <div className="bg-[#2D2D2D]/5 rounded-xl p-6">
                <h3 className="font-bold text-[#2D2D2D] mb-3">Audio Quality Matters Most</h3>
                <p className="text-[#5c5c5c] mb-3">
                  People will forgive mediocre video quality, but bad audio is a dealbreaker. If you can only upgrade one thing, invest in a wireless lavalier microphone for your pastor. The <strong>Rode Wireless Go II</strong> ($199) is the sweet spot for most churches.
                </p>
                <p className="text-sm italic text-[#5c5c5c]">
                  Pro tip: Even a $30 wired lavalier from Amazon is infinitely better than relying on your camera's built-in mic.
                </p>
              </div>
            </section>

            <section id="step-by-step" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-[#E8725A]" />
                7-Step Process to Create Your First Clip
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-8">
                Let's walk through creating your first sermon clip from start to finish. This process takes 15-20 minutes once you've done it a few times.
              </p>

              <div className="space-y-8">
                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Record Your Sermon</h3>
                  <p className="text-[#5c5c5c] mb-4">
                    Set up your camera or phone to capture the full sermon. Position it to show your pastor from waist-up with a clean background. If using a phone, mount it on a tripod and set to 1080p resolution.
                  </p>
                  <div className="bg-white rounded-lg p-4 text-sm">
                    <p className="text-[#2D2D2D] font-medium mb-1">Quick checklist:</p>
                    <ul className="text-[#5c5c5c] space-y-1">
                      <li>✓ Camera positioned at eye level (not looking up at pastor)</li>
                      <li>✓ Pastor centered in frame with minimal background distractions</li>
                      <li>✓ Audio recording separately or with a good mic</li>
                      <li>✓ Adequate lighting on pastor's face (avoid backlighting)</li>
                    </ul>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Upload to Your Editing Tool</h3>
                  <p className="text-[#5c5c5c] mb-4">
                    Immediately after the service (or Monday morning), upload your video to your chosen tool. Most modern platforms will automatically transcribe the audio, which makes finding moments much faster.
                  </p>
                  <p className="text-sm text-[#5c5c5c] bg-[#E8725A]/10 rounded-lg p-4">
                    <strong>Time-saver:</strong> If your tool doesn't auto-transcribe, use Otter.ai (free) to generate a transcript separately, then use it as a reference document.
                  </p>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Identify 3-5 Clip-Worthy Moments</h3>
                  <p className="text-[#5c5c5c] mb-4">
                    Watch (or skim the transcript) looking for these types of moments:
                  </p>
                  <ul className="text-[#5c5c5c] space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#E8725A] font-bold">→</span>
                      <span><strong>Quotable truths:</strong> "Forgiveness isn't forgetting—it's refusing to let the past control your future."</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#E8725A] font-bold">→</span>
                      <span><strong>Practical applications:</strong> "This week, before responding in anger, take 3 breaths..."</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#E8725A] font-bold">→</span>
                      <span><strong>Vulnerable moments:</strong> Personal stories or admissions from the pastor</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#E8725A] font-bold">→</span>
                      <span><strong>Counter-cultural challenges:</strong> Statements that go against mainstream thinking</span>
                    </li>
                  </ul>
                  <p className="text-sm text-[#5c5c5c]">
                    Look for moments that make sense without context. If someone needs to have watched the previous 5 minutes to understand, skip it.
                  </p>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Cut and Trim Your Clips</h3>
                  <p className="text-[#5c5c5c] mb-4">
                    Extract your selected segments. Aim for 20-45 seconds—long enough to deliver value, short enough to keep attention. Trim out:
                  </p>
                  <ul className="text-[#5c5c5c] space-y-1 mb-4">
                    <li>• Long pauses</li>
                    <li>• Filler words (excessive "um" or "uh")</li>
                    <li>• Clearing throat or adjusting mic</li>
                    <li>• Any technical interruptions</li>
                  </ul>
                  <p className="text-sm text-[#5c5c5c] bg-white rounded-lg p-4">
                    <strong>Pro tip:</strong> The best clips start mid-thought with energy. Don't feel obligated to include "Hello, today we're going to talk about..."—jump straight to the good stuff.
                  </p>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold">
                    5
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Crop to Vertical Format (9:16)</h3>
                  <p className="text-[#5c5c5c] mb-4">
                    Convert your horizontal sermon recording to vertical. In most tools, there's a crop or aspect ratio tool. Choose 9:16 (vertical) and position the crop to keep your pastor centered with their face and upper body visible.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-[#2D2D2D] font-medium mb-2">Framing guidelines:</p>
                    <ul className="text-[#5c5c5c] text-sm space-y-1">
                      <li>• Pastor's face should be in top 60% of frame</li>
                      <li>• Leave 20% at bottom for captions</li>
                      <li>• Hands visible when they're gesturing</li>
                      <li>• Consistent framing throughout clip</li>
                    </ul>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold">
                    6
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Add Captions (Non-Negotiable)</h3>
                  <p className="text-[#5c5c5c] mb-4">
                    <strong>85% of social video is watched without sound.</strong> Auto-generate captions using your tool, then review for accuracy. Pay special attention to:
                  </p>
                  <ul className="text-[#5c5c5c] space-y-1 mb-4">
                    <li>• Biblical names and terms</li>
                    <li>• Your pastor's unique phrases or speaking style</li>
                    <li>• Numbers and dates</li>
                    <li>• Emphasis and pauses</li>
                  </ul>
                  <p className="text-sm text-[#E8725A] font-medium">
                    Caption styling tip: Bold or color-highlight key words for emphasis. Use large, bold fonts that are easy to read on mobile.
                  </p>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold">
                    7
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Add Hook Elements & Export</h3>
                  <p className="text-[#5c5c5c] mb-4">
                    The first 2-3 seconds determine whether someone keeps watching. Add a text overlay that teases the topic or key insight:
                  </p>
                  <ul className="text-[#5c5c5c] space-y-2 mb-4">
                    <li className="italic">"What most people get wrong about prayer..."</li>
                    <li className="italic">"This changed how I read the Bible..."</li>
                    <li className="italic">"The secret to lasting change is..."</li>
                  </ul>
                  <p className="text-[#5c5c5c] mb-4">
                    Then export at the highest quality: 1080x1920, 30fps, MP4 format.
                  </p>
                </div>
              </div>
            </section>

            <section id="choosing-moments" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Scissors className="w-8 h-8 text-[#E8725A]" />
                How to Choose Clip-Worthy Moments
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                This is the most important skill in sermon clipping. A well-chosen moment will stop the scroll. A poorly chosen one gets skipped immediately. Here's what to look for:
              </p>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">The "Scroll-Stopping" Test</h3>
              <p className="text-[#5c5c5c] mb-6">
                Before you clip anything, ask: <strong>"Would this make ME stop scrolling if I didn't know my church?"</strong> If the answer isn't an immediate yes, keep looking.
              </p>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-green-500 bg-green-50 rounded-r-xl p-6">
                  <p className="text-green-900 font-bold mb-2">✅ GOOD: "Forgiveness isn't saying what they did was okay. It's saying what they did won't control your tomorrow."</p>
                  <p className="text-green-700 text-sm">Why it works: Immediately provocative, challenges assumptions, quotable, no context needed.</p>
                </div>

                <div className="border-l-4 border-red-500 bg-red-50 rounded-r-xl p-6">
                  <p className="text-red-900 font-bold mb-2">❌ BAD: "So going back to verse 3, we see that the Pharisees were questioning Jesus about..."</p>
                  <p className="text-red-700 text-sm">Why it fails: Needs context, sounds like middle of a lecture, not scroll-stopping.</p>
                </div>

                <div className="border-l-4 border-green-500 bg-green-50 rounded-r-xl p-6">
                  <p className="text-green-900 font-bold mb-2">✅ GOOD: "You know what changed my prayer life? I stopped asking God to bless my plans and started asking Him what His plans were."</p>
                  <p className="text-green-700 text-sm">Why it works: Vulnerable, practical, personal transformation story, relatable.</p>
                </div>

                <div className="border-l-4 border-red-500 bg-red-50 rounded-r-xl p-6">
                  <p className="text-red-900 font-bold mb-2">❌ BAD: "As we continue in this series, remember what we talked about last week..."</p>
                  <p className="text-red-700 text-sm">Why it fails: Requires having watched previous content, insider language.</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">The 5 Elements of Viral Sermon Clips</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">1. Immediate Hook</h4>
                  <p className="text-[#5c5c5c] text-sm">First 2 seconds must be attention-grabbing. No slow builds.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">2. Standalone Value</h4>
                  <p className="text-[#5c5c5c] text-sm">Complete thought that doesn't require context or prior knowledge.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">3. Relatable Problem</h4>
                  <p className="text-[#5c5c5c] text-sm">Addresses something most people struggle with or wonder about.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">4. Memorable Language</h4>
                  <p className="text-[#5c5c5c] text-sm">Quotable, uses metaphors or turns of phrase that stick.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">5. Emotional Resonance</h4>
                  <p className="text-[#5c5c5c] text-sm">Makes people feel something—inspired, convicted, hopeful, understood.</p>
                </div>
              </div>
            </section>

            <section id="editing-tips" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <FileVideo className="w-8 h-8 text-[#E8725A]" />
                Pro Editing Tips for Beginners
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-3">Jump Cuts Are Your Friend</h3>
                  <p className="text-[#5c5c5c]">
                    Don't be afraid to cut out pauses, breaths, and filler words. Modern audiences are used to fast-paced content. A 60-second sermon excerpt can often be trimmed to 35 seconds of pure value without losing meaning.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-3">Keep Captions Large and Bold</h3>
                  <p className="text-[#5c5c5c]">
                    Most people watch on phones. Your captions should be readable even on a small screen in bright sunlight. Use sans-serif fonts (Helvetica, Arial, Montserrat) at 40px minimum. Add a subtle drop shadow or background box for contrast.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-3">Match Caption Timing to Speech Rhythm</h3>
                  <p className="text-[#5c5c5c] mb-3">
                    Words should appear slightly before they're spoken (0.1-0.2 seconds early). This creates anticipation and helps comprehension. For emphasis, display 2-3 words at a time. For slower, emotional moments, full sentences work better.
                  </p>
                  <p className="text-sm text-[#E8725A] font-medium">
                    Pro tip: Use color changes or bold to emphasize key words as they're spoken.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-3">Add Subtle Movement</h3>
                  <p className="text-[#5c5c5c]">
                    A static frame can feel boring. Add a very slow zoom-in (105% over the duration of the clip) or subtle keyframe movement to keep visual interest. Don't overdo it—movement should be barely noticeable.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-3">Background Music: Less is More</h3>
                  <p className="text-[#5c5c5c]">
                    If you add music, keep it at 10-15% volume—just enough to add emotion without competing with the voice. Choose instrumental tracks that match the mood: cinematic for dramatic moments, soft ambient for teaching, uplifting for encouragement.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-3">Add Your Branding (But Don't Overdo It)</h3>
                  <p className="text-[#5c5c5c]">
                    Include your church logo as a small watermark in a corner. Add your Instagram handle at the bottom. But don't cover the pastor or make branding the focus—the message is the star.
                  </p>
                </div>
              </div>
            </section>

            <section id="platform-guide" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Smartphone className="w-8 h-8 text-[#E8725A]" />
                Platform-Specific Publishing Guide
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Each platform has its own best practices. Here's how to optimize for maximum reach:
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 border-l-4 border-pink-500">
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Instagram Reels</h3>
                  <p className="text-[#5c5c5c] mb-4">
                    <strong>Best for:</strong> Reaching your existing church community and their networks.
                  </p>
                  <div className="space-y-2 text-[#5c5c5c] text-sm">
                    <p>📱 <strong>Specs:</strong> 9:16, up to 90 seconds, 1080x1920</p>
                    <p>⏰ <strong>Best posting times:</strong> 11am-1pm or 7-9pm</p>
                    <p>📝 <strong>Caption strategy:</strong> Start with a hook, then expand the idea. Use 3-5 hashtags like #ChristianReels #FaithContent #SundaySermon</p>
                    <p>🎯 <strong>Pro tip:</strong> Post to both Reels and Stories. Stories give an immediate boost, Reels have longer shelf life.</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">TikTok</h3>
                  <p className="text-[#5c5c5c] mb-4">
                    <strong>Best for:</strong> Reaching people who don't know your church yet.
                  </p>
                  <div className="space-y-2 text-[#5c5c5c] text-sm">
                    <p>📱 <strong>Specs:</strong> 9:16, sweet spot is 21-34 seconds</p>
                    <p>⏰ <strong>Best posting times:</strong> 6-10am or 7-11pm</p>
                    <p>📝 <strong>Caption strategy:</strong> Short and punchy. Ask a question or make a bold statement. Engage with #ChristianTikTok community.</p>
                    <p>🎯 <strong>Pro tip:</strong> TikTok rewards consistency. Post 3-4 times per week minimum. Raw and authentic beats polished here.</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-l-4 border-red-500">
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">YouTube Shorts</h3>
                  <p className="text-[#5c5c5c] mb-4">
                    <strong>Best for:</strong> Building a subscriber base and driving traffic to full sermons.
                  </p>
                  <div className="space-y-2 text-[#5c5c5c] text-sm">
                    <p>📱 <strong>Specs:</strong> 9:16, up to 60 seconds</p>
                    <p>⏰ <strong>Best posting times:</strong> 12-3pm or 9-11pm</p>
                    <p>📝 <strong>Caption strategy:</strong> Must include #Shorts in title or description. Link to full sermon. Use cards to suggest long-form content.</p>
                    <p>🎯 <strong>Pro tip:</strong> Shorts can introduce people to your channel, then they binge your full sermons. It's a funnel.</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Facebook Reels</h3>
                  <p className="text-[#5c5c5c] mb-4">
                    <strong>Best for:</strong> Reaching older demographics and church members' parents/grandparents.
                  </p>
                  <div className="space-y-2 text-[#5c5c5c] text-sm">
                    <p>📱 <strong>Specs:</strong> 9:16, up to 90 seconds</p>
                    <p>⏰ <strong>Best posting times:</strong> 1-3pm</p>
                    <p>📝 <strong>Caption strategy:</strong> Longer captions work here. Tell the story behind the clip. Ask for comments.</p>
                    <p>🎯 <strong>Pro tip:</strong> Share to your church's Facebook Group immediately after posting for an engagement boost.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="automation" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-[#E8725A]" />
                How to Automate the Entire Process
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Once you understand the manual process, it's time to reclaim your hours. Modern AI tools can handle 90% of the work. Here's how:
              </p>

              <div className="bg-[#E8725A]/10 rounded-xl p-8 mb-8">
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">The Automated Workflow</h3>
                <ol className="space-y-4 text-[#5c5c5c]">
                  <li className="flex gap-3">
                    <span className="font-bold text-[#E8725A]">1.</span>
                    <span>Upload your sermon video to an AI clipping tool like <Link href="/" className="text-[#E8725A] underline">Sermon Clips</Link></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-[#E8725A]">2.</span>
                    <span>AI identifies the most shareable moments and generates clips automatically</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-[#E8725A]">3.</span>
                    <span>Clips are automatically cropped to vertical, captioned, and branded</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-[#E8725A]">4.</span>
                    <span>Review and approve clips (5 minutes instead of 2 hours)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-[#E8725A]">5.</span>
                    <span>Schedule publishing across all platforms at optimal times</span>
                  </li>
                </ol>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-[#2D2D2D] mb-3">Why Churches Choose Automation</h3>
                <div className="grid md:grid-cols-2 gap-6 text-[#5c5c5c]">
                  <div>
                    <h4 className="font-semibold text-[#2D2D2D] mb-2">Manual Process:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• 2-3 hours per week</li>
                      <li>• Requires video editing skills</li>
                      <li>• Inconsistent quality</li>
                      <li>• Easy to skip when busy</li>
                      <li>• One person knows how</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2D2D2D] mb-2">With Automation:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>✓ 15-20 minutes per week</li>
                      <li>✓ No technical skills needed</li>
                      <li>✓ Professional quality every time</li>
                      <li>✓ Happens automatically</li>
                      <li>✓ Anyone on staff can manage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="faq" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Lightbulb className="w-8 h-8 text-[#E8725A]" />
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">How many clips should we create per sermon?</h3>
                  <p className="text-[#5c5c5c]">Start with 3 clips per sermon. This gives you content for a week (post every other day). As you get comfortable, you can increase to 5-7 clips for more frequent posting or to test different moments.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">What if our pastor doesn't want to be on social media?</h3>
                  <p className="text-[#5c5c5c]">Many pastors are initially hesitant. Frame it as digital evangelism rather than self-promotion. Share examples of lives changed through sermon clips. Start small with a test run, then show the pastor the reach data and positive comments.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">Should we post the same clip to all platforms?</h3>
                  <p className="text-[#5c5c5c]">Yes and no. The video can be identical, but customize the caption for each platform's culture. TikTok likes short, punchy captions. Instagram allows more context. Facebook encourages longer storytelling. YouTube needs #Shorts in the title/description.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">How do we handle negative comments?</h3>
                  <p className="text-[#5c5c5c]">Expect them—it means you're reaching beyond your bubble. Develop a simple policy: delete spam/abuse, ignore trolls, thoughtfully engage with genuine questions or disagreements. Train a social media team member to respond with grace and truth.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">What's a realistic timeline to see results?</h3>
                  <p className="text-[#5c5c5c]">Most churches see meaningful reach (1,000+ views per week across platforms) within 4-6 weeks of consistent posting. Viral moments can happen anytime, but don't chase them—focus on consistency and quality. Growth compounds over months, not days.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">Do we need separate social accounts or use our main church accounts?</h3>
                  <p className="text-[#5c5c5c]">Use your main church accounts. Sermon clips should be integrated with your overall church presence, not siloed. However, if your main accounts rarely post, start with a reboot: commit to 3-4 posts per week (including clips) for at least 90 days to train the algorithm.</p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-[#2D2D2D] to-[#3D3D3D] rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Multiply Your Message?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Stop spending hours editing clips manually. Let AI handle the heavy lifting so you can focus on what matters: reaching more people with the gospel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/" 
                  className="inline-flex items-center justify-center gap-2 bg-[#E8725A] hover:bg-[#d4654f] px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg"
                >
                  Start Free Trial
                  <Play className="w-5 h-5" />
                </Link>
                <Link 
                  href="/blog/church-social-media-strategy-repurpose-sermon" 
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 px-8 py-4 rounded-full font-semibold transition-all"
                >
                  Read Next: Church Social Media Strategy
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
