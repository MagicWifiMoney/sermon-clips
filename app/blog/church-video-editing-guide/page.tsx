
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, CheckCircle2, Share2, Lightbulb, Video, Scissors, Wand2, Sliders, Upload, Download, Settings, Zap, DollarSign, Users } from 'lucide-react';

export const metadata = {
  title: 'The Complete Guide to Church Video Editing (Even If You\'re Not Technical)',
  description: 'No video editing experience? No problem. This guide covers everything church staff need to know about creating professional sermon clips and church videos.',
  keywords: 'church video editing, sermon clip editing, video editing for churches, church media editing, non-technical video editing',
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
              13 min read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
            The Complete Guide to Church Video Editing (Even If You're Not Technical)
          </h1>

          <p className="text-xl text-[#5c5c5c] mb-10 leading-relaxed">
            You don't need a film degree or expensive software to create professional-looking sermon clips and church videos. This guide walks you through everything—from choosing the right tools to mastering essential editing techniques—in plain language anyone can understand.
          </p>

          {/* Table of Contents */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm">
            <h2 className="font-bold text-lg text-[#2D2D2D] mb-4">What You'll Learn</h2>
            <ul className="space-y-2 text-[#5c5c5c]">
              <li><a href="#mindset" className="hover:text-[#E8725A] transition-colors">The Right Mindset for Church Video Editing</a></li>
              <li><a href="#tools" className="hover:text-[#E8725A] transition-colors">Choosing Your Editing Software</a></li>
              <li><a href="#basics" className="hover:text-[#E8725A] transition-colors">Essential Editing Skills (The Only 7 You Need)</a></li>
              <li><a href="#workflow" className="hover:text-[#E8725A] transition-colors">Step-by-Step Editing Workflow</a></li>
              <li><a href="#common-mistakes" className="hover:text-[#E8725A] transition-colors">Common Mistakes (And How to Avoid Them)</a></li>
              <li><a href="#advanced" className="hover:text-[#E8725A] transition-colors">Level Up: Intermediate Techniques</a></li>
              <li><a href="#automation" className="hover:text-[#E8725A] transition-colors">When to Automate vs. DIY</a></li>
              <li><a href="#resources" className="hover:text-[#E8725A] transition-colors">Free Resources & Tutorials</a></li>
            </ul>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            
            <section id="mindset" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Lightbulb className="w-8 h-8 text-[#E8725A]" />
                The Right Mindset for Church Video Editing
              </h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Before we dive into software and techniques, let's establish something crucial: <strong>you don't need to be a professional video editor to create impactful church content.</strong>
              </p>

              <div className="bg-[#E8725A]/10 rounded-xl p-6 border-l-4 border-[#E8725A] mb-8">
                <p className="text-[#2D2D2D] font-medium mb-2">Content &gt; Production Value</p>
                <p className="text-[#5c5c5c]">
                  A powerful 30-second message recorded on a phone with basic editing will always outperform a beautifully shot but empty video. Your goal isn't Hollywood—it's clarity and shareability.
                </p>
              </div>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Adopt These Principles</h3>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E8725A]" />
                    "Done" is Better Than "Perfect"
                  </h4>
                  <p className="text-[#5c5c5c] text-sm">
                    Your first 20 clips will be rough. That's how everyone starts. Post them anyway. You'll improve with each one, but only if you're actually creating.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E8725A]" />
                    Constraints Breed Creativity
                  </h4>
                  <p className="text-[#5c5c5c] text-sm">
                    Limited budget and tools force you to focus on what matters: the message. Some of the most viral church clips were edited entirely on free phone apps.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E8725A]" />
                    Learn by Doing, Not Watching Tutorials Endlessly
                  </h4>
                  <p className="text-[#5c5c5c] text-sm">
                    Watch one 10-minute tutorial, then immediately try to edit something. Repeat. You'll learn faster from mistakes than from theory.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#E8725A]" />
                    Templates Are Your Friend
                  </h4>
                  <p className="text-[#5c5c5c] text-sm">
                    Professional editors use templates constantly. There's zero shame in using pre-made caption styles, transitions, or intro templates. Save your creativity for content decisions.
                  </p>
                </div>
              </div>
            </section>

            <section id="tools" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Settings className="w-8 h-8 text-[#E8725A]" />
                Choosing Your Editing Software
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                The "best" editing software is the one you'll actually use. Here's an honest breakdown by skill level and budget:
              </p>

              <div className="space-y-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border-l-4 border-green-500">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#2D2D2D]">Beginner-Friendly (Mobile)</h3>
                    <span className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">FREE</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-bold text-[#2D2D2D] mb-2">CapCut</h4>
                      <p className="text-[#5c5c5c] text-sm mb-3">
                        The easiest entry point. Full-featured, completely free, works on phones and tablets. Auto-captions, templates, and effects built-in.
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded">✓ No watermark</span>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded">✓ Auto-captions</span>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded">✓ Templates</span>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-bold text-[#2D2D2D] mb-2">Canva Video</h4>
                      <p className="text-[#5c5c5c] text-sm mb-3">
                        If you're already using Canva for graphics, their video editor is intuitive and brand-consistent. Limited features but perfect for simple edits.
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded">✓ Easy learning curve</span>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded">✓ Brand kit integration</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border-l-4 border-blue-500">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#2D2D2D]">Intermediate (Desktop)</h3>
                    <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">$10-30/mo</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-bold text-[#2D2D2D] mb-2">Descript</h4>
                      <p className="text-[#5c5c5c] text-sm mb-3">
                        Edit video by editing text—perfect for churches. Upload sermon, get transcript, delete sections by deleting text. Revolutionary for non-editors.
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">✓ Text-based editing</span>
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">✓ AI features</span>
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">✓ Team collaboration</span>
                      </div>
                      <p className="text-xs text-[#5c5c5c] mt-2 italic">Best for: Teams who want professional results without a steep learning curve</p>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-bold text-[#2D2D2D] mb-2">Adobe Premiere Rush</h4>
                      <p className="text-[#5c5c5c] text-sm mb-3">
                        Simplified version of Premiere Pro. Works on desktop and mobile with cloud sync. Good if you need cross-device editing.
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">✓ Cross-platform</span>
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">✓ Cloud sync</span>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-bold text-[#2D2D2D] mb-2">Filmora</h4>
                      <p className="text-[#5c5c5c] text-sm mb-3">
                        User-friendly desktop editor with lots of templates and effects. Good middle ground between phone apps and pro software.
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">✓ Beginner-friendly</span>
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">✓ Lots of effects</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border-l-4 border-purple-500">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#2D2D2D]">Advanced (Professional)</h3>
                    <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">$20-55/mo</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-bold text-[#2D2D2D] mb-2">Adobe Premiere Pro</h4>
                      <p className="text-[#5c5c5c] text-sm mb-3">
                        Industry standard. Steep learning curve but unlimited capabilities. Overkill for most churches unless you have dedicated media staff.
                      </p>
                      <p className="text-xs text-[#5c5c5c] italic">When to use: Large church with professional video team</p>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-bold text-[#2D2D2D] mb-2">Final Cut Pro (Mac only)</h4>
                      <p className="text-[#5c5c5c] text-sm mb-3">
                        One-time purchase ($299), optimized for Mac. Easier than Premiere Pro but still powerful.
                      </p>
                      <p className="text-xs text-[#5c5c5c] italic">When to use: Mac-based church with volunteer editors who want pro features</p>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-bold text-[#2D2D2D] mb-2">DaVinci Resolve (Free tier available)</h4>
                      <p className="text-[#5c5c5c] text-sm mb-3">
                        Professional-grade, free version is incredibly capable. Great for color grading. Steeper learning curve.
                      </p>
                      <p className="text-xs text-[#5c5c5c] italic">When to use: You want professional results and have time to learn</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-8 border-l-4 border-orange-500">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#2D2D2D]">Church-Specific AI Tools</h3>
                    <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">$20-100/mo</span>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-bold text-[#2D2D2D] mb-2">Sermon Clips + Others</h4>
                    <p className="text-[#5c5c5c] text-sm mb-3">
                      These aren't traditional "editors"—they're AI platforms that do the editing for you. Upload sermon, get back captioned clips ready to post.
                    </p>
                    <p className="text-xs text-[#E8725A] font-medium">
                      <Link href="/blog/sermon-notes-to-social-media-ai" className="underline">Learn more about AI church tools →</Link>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-[#2D2D2D] rounded-xl p-6 text-white">
                <h3 className="font-bold mb-3">Our Recommendation</h3>
                <p className="text-white/90 text-sm mb-4">
                  <strong>Start with CapCut (free).</strong> Spend 2-3 weeks learning it. If you outgrow it, upgrade to Descript for text-based editing or consider AI tools to save time. Don't jump to Premiere Pro unless you have a dedicated editor.
                </p>
                <p className="text-white/90 text-sm">
                  Most churches never need more than CapCut + an AI clipping tool. That combo handles 95% of needs for under $30/month.
                </p>
              </div>
            </section>

            <section id="basics" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Scissors className="w-8 h-8 text-[#E8725A]" />
                Essential Editing Skills (The Only 7 You Need)
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-8">
                You don't need to master 50 features. Learn these 7 core skills and you can create professional sermon clips:
              </p>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#E8725A]/20 flex items-center justify-center font-bold text-[#E8725A]">
                      1
                    </div>
                    <h3 className="font-bold text-[#2D2D2D] text-lg">Cutting & Trimming</h3>
                  </div>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    <strong>What it is:</strong> Removing unwanted sections and shortening clips.
                  </p>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    <strong>Why it matters:</strong> This is 80% of editing. Knowing where to cut makes the difference between a boring clip and an engaging one.
                  </p>
                  <div className="bg-[#F5F1EB] rounded-lg p-4 text-sm">
                    <p className="text-[#2D2D2D] font-medium mb-1">Practice exercise:</p>
                    <p className="text-[#5c5c5c]">Take a 5-minute sermon excerpt. Cut it down to 30 seconds by removing pauses, "ums," and tangents. Keep only the core message.</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#E8725A]/20 flex items-center justify-center font-bold text-[#E8725A]">
                      2
                    </div>
                    <h3 className="font-bold text-[#2D2D2D] text-lg">Cropping & Resizing</h3>
                  </div>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    <strong>What it is:</strong> Changing the frame from horizontal (16:9) to vertical (9:16) for social media.
                  </p>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    <strong>Why it matters:</strong> Reels, Shorts, and TikTok require vertical video. You need to reframe every clip.
                  </p>
                  <div className="bg-[#F5F1EB] rounded-lg p-4 text-sm">
                    <p className="text-[#2D2D2D] font-medium mb-1">Key tip:</p>
                    <p className="text-[#5c5c5c]">Keep pastor's face in the top 60% of the frame. Leave bottom 20% clear for captions. If the pastor moves around, you may need to add keyframes to keep them centered.</p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#E8725A]/20 flex items-center justify-center font-bold text-[#E8725A]">
                      3
                    </div>
                    <h3 className="font-bold text-[#2D2D2D] text-lg">Adding Captions</h3>
                  </div>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    <strong>What it is:</strong> Text overlays that display what's being said.
                  </p>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    <strong>Why it matters:</strong> 85% of social video is watched without sound. No captions = no engagement.
                  </p>
                  <div className="bg-[#F5F1EB] rounded-lg p-4 text-sm">
                    <p className="text-[#2D2D2D] font-medium mb-1">Best practices:</p>
                    <ul className="text-[#5c5c5c] space-y-1">
                      <li>• Use auto-caption tools, then review for errors</li>
                      <li>• Large, bold fonts (40px minimum)</li>
                      <li>• High contrast (white text on video, add black outline or bg box)</li>
                      <li>• 2-3 words at a time for fast speech, full sentences for slow</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#E8725A]/20 flex items-center justify-center font-bold text-[#E8725A]">
                      4
                    </div>
                    <h3 className="font-bold text-[#2D2D2D] text-lg">Audio Adjustment</h3>
                  </div>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    <strong>What it is:</strong> Making sure audio is loud enough, clear, and balanced.
                  </p>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    <strong>Why it matters:</strong> Bad audio is the #1 reason people skip videos.
                  </p>
                  <div className="bg-[#F5F1EB] rounded-lg p-4 text-sm">
                    <p className="text-[#2D2D2D] font-medium mb-1">Quick fixes:</p>
                    <ul className="text-[#5c5c5c] space-y-1">
                      <li>• Use "normalize" or "auto volume" features</li>
                      <li>• Cut out background noise or hum (most apps have noise reduction)</li>
                      <li>• If adding background music, keep it at 10-15% volume</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#E8725A]/20 flex items-center justify-center font-bold text-[#E8725A]">
                      5
                    </div>
                    <h3 className="font-bold text-[#2D2D2D] text-lg">Adding Text & Graphics</h3>
                  </div>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    <strong>What it is:</strong> Overlays like sermon titles, Scripture references, or church logo.
                  </p>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    <strong>Why it matters:</strong> Branding and context. Helps viewers know what they're watching and where it's from.
                  </p>
                  <div className="bg-[#F5F1EB] rounded-lg p-4 text-sm">
                    <p className="text-[#2D2D2D] font-medium mb-1">What to include:</p>
                    <ul className="text-[#5c5c5c] space-y-1">
                      <li>• Small church logo in corner (watermark)</li>
                      <li>• Optional: sermon series title at start</li>
                      <li>• Optional: Scripture reference if applicable</li>
                      <li>• Keep it minimal—don't clutter the frame</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#E8725A]/20 flex items-center justify-center font-bold text-[#E8725A]">
                      6
                    </div>
                    <h3 className="font-bold text-[#2D2D2D] text-lg">Transitions & Effects</h3>
                  </div>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    <strong>What it is:</strong> Smooth changes between clips or sections (fades, cuts, zooms).
                  </p>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    <strong>Why it matters:</strong> Keeps visual interest. But less is more—over-edited clips look amateurish.
                  </p>
                  <div className="bg-[#F5F1EB] rounded-lg p-4 text-sm">
                    <p className="text-[#2D2D2D] font-medium mb-1">Rules of thumb:</p>
                    <ul className="text-[#5c5c5c] space-y-1">
                      <li>• Use simple cuts 90% of the time</li>
                      <li>• Subtle zoom (1.05x to 1.1x) adds motion without distraction</li>
                      <li>• Avoid flashy transitions (wipes, spins, etc.) unless it fits your style</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#E8725A]/20 flex items-center justify-center font-bold text-[#E8725A]">
                      7
                    </div>
                    <h3 className="font-bold text-[#2D2D2D] text-lg">Exporting</h3>
                  </div>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    <strong>What it is:</strong> Saving your finished video in the right format for uploading.
                  </p>
                  <p className="text-[#5c5c5c] text-sm mb-3">
                    <strong>Why it matters:</strong> Wrong export settings = blurry video, huge file size, or compatibility issues.
                  </p>
                  <div className="bg-[#F5F1EB] rounded-lg p-4 text-sm">
                    <p className="text-[#2D2D2D] font-medium mb-1">Standard export settings:</p>
                    <ul className="text-[#5c5c5c] space-y-1">
                      <li>• <strong>Format:</strong> MP4 (H.264 codec)</li>
                      <li>• <strong>Resolution:</strong> 1080x1920 (for vertical video)</li>
                      <li>• <strong>Frame rate:</strong> 30fps</li>
                      <li>• <strong>Bitrate:</strong> 8-12 Mbps</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-[#E8725A]/10 rounded-xl p-6 border-l-4 border-[#E8725A]">
                <p className="text-[#2D2D2D] font-medium mb-2">Master These First</p>
                <p className="text-[#5c5c5c] text-sm">
                  Ignore everything else until you're comfortable with these 7 skills. Color grading, advanced effects, motion graphics—those are nice-to-haves. These 7 are must-haves.
                </p>
              </div>
            </section>

            <section id="workflow" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Upload className="w-8 h-8 text-[#E8725A]" />
                Step-by-Step Editing Workflow
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Here's the exact process for editing a sermon clip from start to finish. Bookmark this and follow it every time until it becomes second nature.
              </p>

              <div className="space-y-4">
                {[
                  { step: '1', title: 'Import & Organize', time: '2 min', content: 'Import your sermon video. If your tool supports it, let it auto-transcribe. Create a new project with a descriptive name (e.g., "2026-02-16-Forgiveness-Sermon").' },
                  { step: '2', title: 'Identify Clip Moments', time: '10 min', content: 'Skim through (at 1.5x speed) or review the transcript. Mark 3-5 potential clip moments with timestamps. Look for quotable statements, personal stories, and practical applications.' },
                  { step: '3', title: 'Create Rough Cuts', time: '5 min', content: 'For each marked moment, create a rough cut with a few seconds of buffer on each end. Don\'t worry about perfection yet—just get the general segments.' },
                  { step: '4', title: 'Trim to Length', time: '10 min', content: 'Tighten each clip to 20-60 seconds. Remove pauses, filler words, and anything that doesn\'t add value. The clip should feel fast-paced but not rushed.' },
                  { step: '5', title: 'Crop to Vertical', time: '5 min', content: 'Change aspect ratio to 9:16. Position the crop so the pastor is centered in the frame with space at the bottom for captions.' },
                  { step: '6', title: 'Add Captions', time: '10 min', content: 'Generate auto-captions. Review for accuracy, especially proper nouns. Style the captions: large font, bold, high contrast. Time them to match speech rhythm.' },
                  { step: '7', title: 'Add Branding', time: '3 min', content: 'Add your church logo as a small watermark in a corner. If desired, add a hook text overlay at the beginning ("This will change how you pray...").' },
                  { step: '8', title: 'Adjust Audio', time: '3 min', content: 'Normalize or boost volume. If adding background music, keep it subtle (10-15% volume). Make sure speech is clear and loud enough.' },
                  { step: '9', title: 'Review', time: '2 min', content: 'Watch the full clip at normal speed. Does it make sense without context? Is the message clear? Are captions accurate? Audio clear?' },
                  { step: '10', title: 'Export', time: '2 min', content: 'Export at 1080x1920, 30fps, MP4. Name the file descriptively (e.g., "Forgiveness-Clip-1-Feb2026"). Save to your content library.' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-sm flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold text-lg">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-[#2D2D2D]">{item.title}</h3>
                        <span className="text-xs text-[#5c5c5c] bg-gray-100 px-2 py-1 rounded">{item.time}</span>
                      </div>
                      <p className="text-[#5c5c5c] text-sm">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-[#2D2D2D] rounded-xl p-6 text-white">
                <h3 className="font-bold mb-2">Total Time: ~52 minutes per clip</h3>
                <p className="text-white/90 text-sm">
                  After you've done this 5-10 times, you'll cut that time in half. Experienced editors can produce a polished clip in 15-20 minutes.
                </p>
              </div>
            </section>

            <section id="common-mistakes" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Lightbulb className="w-8 h-8 text-[#E8725A]" />
                Common Mistakes (And How to Avoid Them)
              </h2>

              <div className="space-y-6">
                <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
                  <h3 className="font-bold text-red-900 mb-2">❌ Making Clips Too Long</h3>
                  <p className="text-red-800 text-sm mb-3">
                    <strong>The mistake:</strong> Including 90 seconds of setup before the payoff, thinking context is needed.
                  </p>
                  <p className="text-green-700 text-sm font-medium">
                    ✓ The fix: Start with the hook. If context is essential, add it as a text overlay in the first 2 seconds.
                  </p>
                </div>

                <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
                  <h3 className="font-bold text-red-900 mb-2">❌ Captions Too Small or No Contrast</h3>
                  <p className="text-red-800 text-sm mb-3">
                    <strong>The mistake:</strong> Captions that are unreadable on mobile or blend into the background.
                  </p>
                  <p className="text-green-700 text-sm font-medium">
                    ✓ The fix: Use 40px minimum font size. Add a black stroke or semi-transparent background box. Test on your phone before posting.
                  </p>
                </div>

                <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
                  <h3 className="font-bold text-red-900 mb-2">❌ Over-Editing</h3>
                  <p className="text-red-800 text-sm mb-3">
                    <strong>The mistake:</strong> Every clip has 5 transitions, 3 effects, animated text flying in from all directions.
                  </p>
                  <p className="text-green-700 text-sm font-medium">
                    ✓ The fix: Keep it simple. The message is the star, not the effects. One subtle transition per clip is plenty.
                  </p>
                </div>

                <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
                  <h3 className="font-bold text-red-900 mb-2">❌ Exporting at Wrong Resolution</h3>
                  <p className="text-red-800 text-sm mb-3">
                    <strong>The mistake:</strong> Exporting horizontal video (16:9) for vertical platforms, or exporting at low quality.
                  </p>
                  <p className="text-green-700 text-sm font-medium">
                    ✓ The fix: Always export at 1080x1920 for Reels/Shorts/TikTok. Use H.264 codec, MP4 format, 30fps, 8-12 Mbps bitrate.
                  </p>
                </div>

                <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
                  <h3 className="font-bold text-red-900 mb-2">❌ Not Testing on Mobile</h3>
                  <p className="text-red-800 text-sm mb-3">
                    <strong>The mistake:</strong> Editing on a computer monitor and assuming it looks good on phones.
                  </p>
                  <p className="text-green-700 text-sm font-medium">
                    ✓ The fix: Before publishing, airdrop or send the clip to your phone. Watch it the way your audience will—on a small screen, in various lighting. Adjust if needed.
                  </p>
                </div>

                <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
                  <h3 className="font-bold text-red-900 mb-2">❌ Inconsistent Branding</h3>
                  <p className="text-red-800 text-sm mb-3">
                    <strong>The mistake:</strong> Every clip looks different—different fonts, different logo placement, different caption styles.
                  </p>
                  <p className="text-green-700 text-sm font-medium">
                    ✓ The fix: Create (or save) a template with your church's brand colors, fonts, logo placement. Use it for every clip. Consistency builds recognition.
                  </p>
                </div>
              </div>
            </section>

            <section id="advanced" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Wand2 className="w-8 h-8 text-[#E8725A]" />
                Level Up: Intermediate Techniques
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Once you've mastered the basics, these techniques will take your clips to the next level:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">B-Roll Overlays</h3>
                  <p className="text-[#5c5c5c] text-sm">
                    Cut away from the talking head briefly to show related visuals—worship moments, Bible pages, nature shots. Keeps visual interest high.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">Dynamic Captions</h3>
                  <p className="text-[#5c5c5c] text-sm">
                    Instead of static text, animate captions to pop in word-by-word or scale up on emphasis. Most editing apps have templates for this.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">Color Grading</h3>
                  <p className="text-[#5c5c5c] text-sm">
                    Adjust colors to match your brand or create a mood. Warm tones for welcoming, cooler tones for serious topics. Keep it subtle.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">Keyframe Animation</h3>
                  <p className="text-[#5c5c5c] text-sm">
                    Slowly zoom in or pan across the frame over time. Creates motion and keeps viewers engaged without cutting away.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">Lower Thirds</h3>
                  <p className="text-[#5c5c5c] text-sm">
                    Graphic overlays at the bottom of the screen with pastor's name, sermon title, or Scripture reference. Looks professional and adds context.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">Audio Ducking</h3>
                  <p className="text-[#5c5c5c] text-sm">
                    When adding background music, use audio ducking so the music automatically lowers when someone is speaking and raises during pauses.
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#5c5c5c] mt-6 italic">
                Don't try to learn all of these at once. Add one new technique every few weeks as you get comfortable.
              </p>
            </section>

            <section id="automation" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-[#E8725A]" />
                When to Automate vs. DIY
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                The honest truth: you don't always need to edit manually. AI tools can now handle most of the work. Here's when to use which approach:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-blue-500">
                  <h3 className="font-bold text-[#2D2D2D] mb-4">✋ Stick with Manual Editing When:</h3>
                  <ul className="text-[#5c5c5c] space-y-2 text-sm">
                    <li>• You're just starting and want to learn the skills</li>
                    <li>• You have very specific brand requirements</li>
                    <li>• Your clips need custom animations or effects</li>
                    <li>• Budget is $0 and time is available</li>
                    <li>• You enjoy the creative process</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-500">
                  <h3 className="font-bold text-[#2D2D2D] mb-4">⚡ Use AI Automation When:</h3>
                  <ul className="text-[#5c5c5c] space-y-2 text-sm">
                    <li>• You're overwhelmed with weekly content needs</li>
                    <li>• Staff time is more valuable than $20-50/month</li>
                    <li>• You need consistent output without learning curve</li>
                    <li>• You'd rather focus on strategy than execution</li>
                    <li>• You want to scale (5+ clips per week)</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 bg-[#E8725A]/10 rounded-xl p-6 border-l-4 border-[#E8725A]">
                <h3 className="font-bold text-[#2D2D2D] mb-3">The Hybrid Approach (Best for Most Churches)</h3>
                <p className="text-[#5c5c5c] text-sm mb-3">
                  Use AI tools like <Link href="/" className="text-[#E8725A] underline">Sermon Clips</Link> to do the heavy lifting—finding moments, cutting clips, adding captions. Then spend 5-10 minutes customizing: adjust branding, tweak captions, add a personal touch.
                </p>
                <p className="text-[#5c5c5c] text-sm">
                  Result: 80% time savings with 100% control over the final product. <Link href="/blog/sermon-notes-to-social-media-ai" className="text-[#E8725A] underline">Learn more about AI church tools →</Link>
                </p>
              </div>
            </section>

            <section id="resources" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-[#E8725A]" />
                Free Resources & Tutorials
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-3">📺 Video Tutorials</h3>
                  <ul className="text-[#5c5c5c] space-y-2 text-sm">
                    <li>• CapCut official channel (YouTube) — Beginner-friendly tutorials</li>
                    <li>• "Church Video Editing 101" by Pro Church Tools — Church-specific tips</li>
                    <li>• Descript Academy — Text-based editing walkthroughs</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-3">🎨 Free Assets</h3>
                  <ul className="text-[#5c5c5c] space-y-2 text-sm">
                    <li>• Canva — Free templates and stock media</li>
                    <li>• Unsplash / Pexels — Free stock video for B-roll</li>
                    <li>• Artlist (free tier) / Epidemic Sound — Royalty-free music</li>
                    <li>• Google Fonts — Free fonts for captions</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-3">📚 Reading</h3>
                  <ul className="text-[#5c5c5c] space-y-2 text-sm">
                    <li>• <Link href="/blog/how-to-make-sermon-clips-for-social-media" className="text-[#E8725A] underline">How to Make Sermon Clips</Link></li>
                    <li>• <Link href="/blog/church-social-media-strategy-repurpose-sermon" className="text-[#E8725A] underline">Church Social Media Strategy</Link></li>
                    <li>• <Link href="/sermon-transcription" className="text-[#E8725A] underline">AI Sermon Transcription: How It Works</Link></li>
                    <li>• <Link href="/alternatives/opus-clip" className="text-[#E8725A] underline">Sermon Clips vs Opus Clip for Churches</Link></li>
                    <li>• <Link href="/easter-2026" className="text-[#E8725A] underline">🐣 Easter 2026 AI Content Plan</Link></li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-3">👥 Communities</h3>
                  <ul className="text-[#5c5c5c] space-y-2 text-sm">
                    <li>• Church Media Community (Facebook) — Active group of church communicators</li>
                    <li>• r/ChurchTech (Reddit) — Technical discussions and tool recommendations</li>
                    <li>• #ChurchMedia (Twitter/X) — Quick tips and inspiration</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-[#2D2D2D] to-[#3D3D3D] rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Skip the Learning Curve</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Or let AI do the editing for you. Sermon Clips turns your sermons into professional, captioned clips in minutes—no editing skills required. Focus on ministry, not mastering software.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/" 
                  className="inline-flex items-center justify-center gap-2 bg-[#E8725A] hover:bg-[#d4654f] px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg"
                >
                  Try Sermon Clips Free
                  <Zap className="w-5 h-5" />
                </Link>
                <Link 
                  href="/blog" 
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 px-8 py-4 rounded-full font-semibold transition-all"
                >
                  Read More Guides
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
