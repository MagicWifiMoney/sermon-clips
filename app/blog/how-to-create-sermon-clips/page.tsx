'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, CheckCircle2, Play, Share2, Scissors, Video, Smartphone, TrendingUp, Users, MessageCircle, Lightbulb, AlertCircle, Zap } from 'lucide-react';

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
              15 min read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
            The Complete Guide to Creating Sermon Clips for Social Media in 2026
          </h1>

          <p className="text-xl text-[#5c5c5c] mb-10 leading-relaxed">
            Transform your Sunday messages into engaging, shareable video clips that reach people where they already spend their time. This comprehensive guide covers everything from selecting the perfect moments to optimizing for each platform.
          </p>

          {/* Table of Contents */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm">
            <h2 className="font-bold text-lg text-[#2D2D2D] mb-4">What You'll Learn</h2>
            <ul className="space-y-2 text-[#5c5c5c]">
              <li><a href="#why-sermon-clips" className="hover:text-[#E8725A] transition-colors">Why Sermon Clips Matter for Church Growth</a></li>
              <li><a href="#finding-moments" className="hover:text-[#E8725A] transition-colors">Finding the Perfect Moments to Clip</a></li>
              <li><a href="#editing-basics" className="hover:text-[#E8725A] transition-colors">Step-by-Step Editing Guide</a></li>
              <li><a href="#captions-text" className="hover:text-[#E8725A] transition-colors">Adding Captions That Convert</a></li>
              <li><a href="#platform-specs" className="hover:text-[#E8725A] transition-colors">Platform-Specific Optimization</a></li>
              <li><a href="#tools-comparison" className="hover:text-[#E8725A] transition-colors">Best Tools Compared</a></li>
              <li><a href="#workflow" className="hover:text-[#E8725A] transition-colors">Weekly Workflow Template</a></li>
              <li><a href="#faq" className="hover:text-[#E8725A] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            
            <section id="why-sermon-clips" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-[#E8725A]" />
                Why Sermon Clips Matter for Church Growth
              </h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                The average person scrolls through 300 feet of social media content daily. That's the height of the Statue of Liberty. In this endless scroll, churches have an unprecedented opportunity to reach people who would never walk through their doors—if they know how to capture attention in the first 2-3 seconds.
              </p>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Sermon clips aren't just about repurposing content. They're about <strong>multiplying your pastor's impact</strong>. A single Sunday message, when properly clipped and distributed, can:
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#E8725A] flex-shrink-0 mt-0.5" />
                  <span className="text-[#5c5c5c]"><strong>Reach 10-50x more people</strong> than attended the live service</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#E8725A] flex-shrink-0 mt-0.5" />
                  <span className="text-[#5c5c5c]"><strong>Provide touchpoints throughout the week</strong> that keep your message alive</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#E8725A] flex-shrink-0 mt-0.5" />
                  <span className="text-[#5c5c5c]"><strong>Give members shareable content</strong> they can send to friends and family</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#E8725A] flex-shrink-0 mt-0.5" />
                  <span className="text-[#5c5c5c]"><strong>Create an evergreen library</strong> of searchable, discoverable wisdom</span>
                </li>
              </ul>

              <div className="bg-[#E8725A]/10 rounded-xl p-6 border-l-4 border-[#E8725A]">
                <p className="text-[#2D2D2D] font-medium mb-2">The Math That Changes Everything</p>
                <p className="text-[#5c5c5c]">
                  If your church has 200 members on Instagram with an average of 300 followers each, and just 10% share your clip, you've potentially reached 6,000 new people—30x your Sunday attendance. This is the multiplication effect in action.
                </p>
              </div>
            </section>

            <section id="finding-moments" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Scissors className="w-8 h-8 text-[#E8725A]" />
                Finding the Perfect Moments to Clip
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Not every part of a sermon makes a great clip. The best moments share specific characteristics that make them scroll-stopping, shareable, and impactful. Here's what to look for:
              </p>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">The 7 Types of Clip-Worthy Moments</h3>

              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">1. The Hook Statement</h4>
                  <p className="text-[#5c5c5c] mb-2">A provocative or surprising opening that immediately grabs attention.</p>
                  <p className="text-sm italic text-[#E8725A]">"The biggest lie you'll hear this week isn't from a politician or the news—it's from yourself."</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">2. The Quotable Truth</h4>
                  <p className="text-[#5c5c5c] mb-2">A concise, memorable statement that stands alone.</p>
                  <p className="text-sm italic text-[#E8725A]">"Forgiveness isn't saying what they did was okay. It's saying what they did won't control your tomorrow."</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">3. The Vulnerable Moment</h4>
                  <p className="text-[#5c5c5c] mb-2">When the pastor shares a personal struggle or admission.</p>
                  <p className="text-sm italic text-[#E8725A]">"I used to think prayer was about getting what I want. Took me 15 years to realize it was about becoming who God wants."</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">4. The Practical Application</h4>
                  <p className="text-[#5c5c5c] mb-2">Clear, actionable advice viewers can implement immediately.</p>
                  <p className="text-sm italic text-[#E8725A]">"This week, before you respond in anger, take 3 breaths and ask: 'What am I really afraid of right now?'"</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">5. The Story Peak</h4>
                  <p className="text-[#5c5c5c] mb-2">The emotional climax of an illustration or testimony.</p>
                  <p className="text-sm italic text-[#E8725A]">"And when I finally called my dad after 7 years of silence..."</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">6. The Counter-Cultural Challenge</h4>
                  <p className="text-[#5c5c5c] mb-2">Something that goes against mainstream thinking.</p>
                  <p className="text-sm italic text-[#E8725A]">"Culture says 'find yourself.' Scripture says 'lose yourself'—and that's where you actually find purpose."</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">7. The Congregation Reaction</h4>
                  <p className="text-[#5c5c5c] mb-2">Moments that capture authentic audience response—laughter, applause, or visible emotion.</p>
                  <p className="text-sm italic text-[#E8725A]">These clips show the energy of your community and make viewers want to be part of it.</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">What to Avoid</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-[#5c5c5c]">Clips that require context to understand</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-[#5c5c5c]">Inside jokes or references only regular attendees would get</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-[#5c5c5c]">Purely theological teaching without practical application</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-[#5c5c5c]">Moments where audio is unclear or there's background noise</span>
                </li>
              </ul>
            </section>

            <section id="editing-basics" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Video className="w-8 h-8 text-[#E8725A]" />
                Step-by-Step Editing Guide
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Whether you're using professional software or AI tools, the editing process follows the same fundamental steps. Here's the complete workflow:
              </p>

              <div className="space-y-8">
                <div className="border-l-4 border-[#E8725A] pl-6">
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Step 1: Import and Transcribe</h3>
                  <p className="text-[#5c5c5c] mb-4">
                    Upload your full sermon video to your editing tool. Most modern tools will automatically transcribe the audio, giving you a searchable text document of the entire message.
                  </p>
                  <p className="text-sm text-[#5c5c5c] bg-[#2D2D2D]/5 rounded-lg p-4">
                    <strong>Pro tip:</strong> If your tool doesn't auto-transcribe, use a free service like Otter.ai or Descript's free tier to generate a transcript first.
                  </p>
                </div>

                <div className="border-l-4 border-[#E8725A] pl-6">
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Step 2: Identify Clip-Worthy Segments</h3>
                  <p className="text-[#5c5c5c] mb-4">
                    Scan your transcript for the 7 types of moments mentioned above. Mark timestamps or highlight sections. Aim to identify 3-5 potential clips from each sermon.
                  </p>
                  <p className="text-sm text-[#5c5c5c] bg-[#2D2D2D]/5 rounded-lg p-4">
                    <strong>Pro tip:</strong> Watch at 1.5x speed to save time while still catching emotional peaks and audience reactions.
                  </p>
                </div>

                <div className="border-l-4 border-[#E8725A] pl-6">
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Step 3: Cut and Trim</h3>
                  <p className="text-[#5c5c5c] mb-4">
                    Extract your selected segments. For most platforms, aim for:
                  </p>
                  <ul className="list-disc list-inside text-[#5c5c5c] mb-4 space-y-1">
                    <li>TikTok: 15-60 seconds (under 30 optimal)</li>
                    <li>Instagram Reels: 15-90 seconds</li>
                    <li>YouTube Shorts: 15-60 seconds</li>
                    <li>Facebook: 30-90 seconds</li>
                  </ul>
                  <p className="text-sm text-[#5c5c5c] bg-[#2D2D2D]/5 rounded-lg p-4">
                    <strong>Pro tip:</strong> Don't feel pressured to use the whole clip. Often a 45-second moment can be tightened to 25 seconds by removing pauses and ums.
                  </p>
                </div>

                <div className="border-l-4 border-[#E8725A] pl-6">
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Step 4: Crop to Vertical</h3>
                  <p className="text-[#5c5c5c] mb-4">
                    Convert your horizontal church recording to 9:16 vertical format. Focus on keeping the speaker's face and upper body centered. If your speaker moves around, you may need to keyframe the crop position.
                  </p>
                  <p className="text-sm text-[#5c5c5c] bg-[#2D2D2D]/5 rounded-lg p-4">
                    <strong>Pro tip:</strong> Leave a little headroom for captions at the bottom of the frame. About 20% of the bottom should be "safe" for text overlay.
                  </p>
                </div>

                <div className="border-l-4 border-[#E8725A] pl-6">
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Step 5: Add Captions</h3>
                  <p className="text-[#5c5c5c] mb-4">
                    This is non-negotiable. <strong>85% of social media video is watched without sound.</strong> Auto-generate captions, then review for accuracy—especially with Biblical names, theological terms, and your pastor's speaking style.
                  </p>
                  <p className="text-sm text-[#5c5c5c] bg-[#2D2D2D]/5 rounded-lg p-4">
                    <strong>Pro tip:</strong> Style your captions to match your brand. Bold key words for emphasis. Use colors that complement your church's palette.
                  </p>
                </div>

                <div className="border-l-4 border-[#E8725A] pl-6">
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Step 6: Add Hook Elements</h3>
                  <p className="text-[#5c5c5c] mb-4">
                    The first 2-3 seconds determine whether someone keeps watching. Consider adding:
                  </p>
                  <ul className="list-disc list-inside text-[#5c5c5c] mb-4 space-y-1">
                    <li>A text overlay with the topic ("This changed my prayer life...")</li>
                    <li>A subtle zoom-in animation</li>
                    <li>A brief sound effect or musical sting</li>
                    <li>Your church logo watermark (subtle, corner placement)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#E8725A] pl-6">
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Step 7: Add Background Music (Optional)</h3>
                  <p className="text-[#5c5c5c] mb-4">
                    Subtle background music can add emotion and professionalism. Keep it low (10-15% of speaking volume) and choose tracks that match the tone. Dramatic moments get cinematic scores; practical teaching gets soft ambient.
                  </p>
                  <p className="text-sm text-[#5c5c5c] bg-[#2D2D2D]/5 rounded-lg p-4">
                    <strong>Pro tip:</strong> Use royalty-free music libraries like Artlist, Epidemic Sound, or the free options in each platform's creator studio.
                  </p>
                </div>

                <div className="border-l-4 border-[#E8725A] pl-6">
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Step 8: Export and Optimize</h3>
                  <p className="text-[#5c5c5c] mb-4">
                    Export at the highest quality your tool allows. Standard settings:
                  </p>
                  <ul className="list-disc list-inside text-[#5c5c5c] mb-4 space-y-1">
                    <li>Resolution: 1080x1920 (9:16)</li>
                    <li>Frame rate: 30fps</li>
                    <li>Format: MP4 (H.264)</li>
                    <li>Bitrate: 8-12 Mbps</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="captions-text" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <MessageCircle className="w-8 h-8 text-[#E8725A]" />
                Adding Captions That Convert
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Captions aren't just accessibility—they're your secret weapon for engagement. Here's how to make them work harder:
              </p>

              <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Caption Best Practices</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-3">Font & Size</h4>
                  <ul className="text-[#5c5c5c] space-y-2 text-sm">
                    <li>• Use bold, sans-serif fonts (no thin weights)</li>
                    <li>• Large enough to read on mobile (minimum 40px)</li>
                    <li>• High contrast against video background</li>
                    <li>• Add a subtle text shadow or background box</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-3">Timing & Rhythm</h4>
                  <ul className="text-[#5c5c5c] space-y-2 text-sm">
                    <li>• 2-3 words at a time for fast-paced delivery</li>
                    <li>• Full sentences for slower, emotional moments</li>
                    <li>• Sync word appearance with speech rhythm</li>
                    <li>• Add slight anticipation (words appear 0.1s early)</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-3">Emphasis Techniques</h4>
                  <ul className="text-[#5c5c5c] space-y-2 text-sm">
                    <li>• CAPS for emphasis (sparingly)</li>
                    <li>• Color changes for key words</li>
                    <li>• Scale animation on important phrases</li>
                    <li>• Emoji strategically placed (🔥, ⚡, 🙏)</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-3">Position</h4>
                  <ul className="text-[#5c5c5c] space-y-2 text-sm">
                    <li>• Center-bottom is standard</li>
                    <li>• Don't cover the speaker's face</li>
                    <li>• Leave room for platform UI elements</li>
                    <li>• Consistent placement throughout clip</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="platform-specs" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Smartphone className="w-8 h-8 text-[#E8725A]" />
                Platform-Specific Optimization
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Each platform has its own culture, algorithm preferences, and technical requirements. Here's how to optimize for each:
              </p>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Instagram Reels</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-[#2D2D2D] mb-2">Specs</h4>
                      <ul className="text-[#5c5c5c] text-sm space-y-1">
                        <li>• 9:16 aspect ratio (1080x1920)</li>
                        <li>• Up to 90 seconds</li>
                        <li>• MP4 format</li>
                        <li>• Under 4GB file size</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2D2D2D] mb-2">Best Practices</h4>
                      <ul className="text-[#5c5c5c] text-sm space-y-1">
                        <li>• Use trending audio when appropriate</li>
                        <li>• Include 3-5 relevant hashtags</li>
                        <li>• Post during lunch (11am-1pm) or evening (7-9pm)</li>
                        <li>• Respond to comments quickly to boost algorithm</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">YouTube Shorts</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-[#2D2D2D] mb-2">Specs</h4>
                      <ul className="text-[#5c5c5c] text-sm space-y-1">
                        <li>• 9:16 aspect ratio</li>
                        <li>• Up to 60 seconds</li>
                        <li>• Must include #Shorts in title or description</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2D2D2D] mb-2">Best Practices</h4>
                      <ul className="text-[#5c5c5c] text-sm space-y-1">
                        <li>• YouTube Shorts drive subscribers to your main channel</li>
                        <li>• Link to full sermon in description</li>
                        <li>• Use cards to suggest your long-form content</li>
                        <li>• Consistent posting schedule matters most here</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">TikTok</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-[#2D2D2D] mb-2">Specs</h4>
                      <ul className="text-[#5c5c5c] text-sm space-y-1">
                        <li>• 9:16 aspect ratio</li>
                        <li>• Up to 10 minutes (but shorter performs better)</li>
                        <li>• Optimal: 21-34 seconds</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2D2D2D] mb-2">Best Practices</h4>
                      <ul className="text-[#5c5c5c] text-sm space-y-1">
                        <li>• Raw, authentic content outperforms polished</li>
                        <li>• Hooks must be immediate (no 2-second logo intros)</li>
                        <li>• Engage with #ChristianTikTok community</li>
                        <li>• Duet and stitch other creators to expand reach</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Facebook Reels</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-[#2D2D2D] mb-2">Specs</h4>
                      <ul className="text-[#5c5c5c] text-sm space-y-1">
                        <li>• 9:16 aspect ratio</li>
                        <li>• Up to 90 seconds</li>
                        <li>• Can be crossposted from Instagram</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2D2D2D] mb-2">Best Practices</h4>
                      <ul className="text-[#5c5c5c] text-sm space-y-1">
                        <li>• Facebook audience skews older—adjust content accordingly</li>
                        <li>• Share to church group for initial engagement boost</li>
                        <li>• Include a call to action for comments</li>
                        <li>• Cross-promote with your Facebook Events</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="tools-comparison" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-[#E8725A]" />
                Best Sermon Clip Tools Compared
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                From free options to AI-powered platforms built specifically for churches, here's how the top tools compare:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl shadow-sm overflow-hidden">
                  <thead>
                    <tr className="bg-[#2D2D2D] text-white">
                      <th className="text-left p-4 font-semibold">Tool</th>
                      <th className="text-left p-4 font-semibold">Best For</th>
                      <th className="text-left p-4 font-semibold">Price</th>
                      <th className="text-left p-4 font-semibold">AI Features</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#5c5c5c]">
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-semibold">CapCut</td>
                      <td className="p-4">DIY on a budget</td>
                      <td className="p-4">Free (Pro $9.99/mo)</td>
                      <td className="p-4">Auto-captions, templates</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="p-4 font-semibold">Descript</td>
                      <td className="p-4">Teams who edit by transcript</td>
                      <td className="p-4">From $12/mo</td>
                      <td className="p-4">Full AI editing suite</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-semibold">Opus Clip</td>
                      <td className="p-4">Auto-finding viral moments</td>
                      <td className="p-4">From $19/mo</td>
                      <td className="p-4">AI clip selection, virality score</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-gray-50">
                      <td className="p-4 font-semibold">Sermon Shots</td>
                      <td className="p-4">Churches wanting done-for-you</td>
                      <td className="p-4">Custom pricing</td>
                      <td className="p-4">Full church workflow</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-semibold">Pulpit AI</td>
                      <td className="p-4">Multi-format repurposing</td>
                      <td className="p-4">From $29/mo</td>
                      <td className="p-4">Clips + devotionals + quotes</td>
                    </tr>
                    <tr className="bg-[#E8725A]/10">
                      <td className="p-4 font-semibold text-[#E8725A]">Sermon Clips</td>
                      <td className="p-4">Set-and-forget automation</td>
                      <td className="p-4">Free trial available</td>
                      <td className="p-4">AI detection, auto-publish</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 bg-[#E8725A]/10 rounded-xl p-6 border-l-4 border-[#E8725A]">
                <p className="text-[#2D2D2D] font-medium mb-2">How to Choose</p>
                <ul className="text-[#5c5c5c] space-y-2">
                  <li>• <strong>Tight budget + DIY skills:</strong> Start with CapCut</li>
                  <li>• <strong>Small team + some budget:</strong> Descript or Opus Clip</li>
                  <li>• <strong>Busy staff + need automation:</strong> Church-specific tools like Sermon Clips</li>
                  <li>• <strong>Large church + professional standards:</strong> Consider dedicated video staff + enterprise tools</li>
                </ul>
              </div>
            </section>

            <section id="workflow" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Play className="w-8 h-8 text-[#E8725A]" />
                Weekly Workflow Template
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Turn sermon clip creation into a repeatable system. Here's a workflow that takes about 2-3 hours per week:
              </p>

              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    S
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2D2D2D] text-lg">Sunday: Capture</h3>
                    <p className="text-[#5c5c5c]">Record sermon with quality audio. Take notes during the message on potential clip moments (or have a volunteer do this). Upload recording to your editing tool immediately after service.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    M
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2D2D2D] text-lg">Monday: Review & Select</h3>
                    <p className="text-[#5c5c5c]">Review transcript/video at 1.5x speed. Mark 4-6 potential clips. Prioritize the 3 strongest moments. Goal: 30-45 minutes.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    T
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2D2D2D] text-lg">Tuesday: Edit</h3>
                    <p className="text-[#5c5c5c]">Cut clips, crop to vertical, add captions, apply branding. Create 3 finished clips. Export and organize by platform. Goal: 60-90 minutes.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    W-S
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2D2D2D] text-lg">Wednesday-Saturday: Publish</h3>
                    <p className="text-[#5c5c5c]">Post one clip every other day (Wed, Fri, Sun). Use scheduling tools. Engage with comments within the first hour of posting. Share to Stories for additional reach.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
                <h3 className="font-bold text-[#2D2D2D] mb-4">Sample Posting Calendar</h3>
                <div className="grid grid-cols-7 gap-2 text-center text-sm">
                  <div className="font-semibold text-[#2D2D2D] p-2">Sun</div>
                  <div className="font-semibold text-[#2D2D2D] p-2">Mon</div>
                  <div className="font-semibold text-[#2D2D2D] p-2">Tue</div>
                  <div className="font-semibold text-[#2D2D2D] p-2">Wed</div>
                  <div className="font-semibold text-[#2D2D2D] p-2">Thu</div>
                  <div className="font-semibold text-[#2D2D2D] p-2">Fri</div>
                  <div className="font-semibold text-[#2D2D2D] p-2">Sat</div>
                  
                  <div className="p-2 bg-blue-100 rounded text-blue-700">Clip 3</div>
                  <div className="p-2 bg-gray-100 rounded text-[#5c5c5c]">Review</div>
                  <div className="p-2 bg-gray-100 rounded text-[#5c5c5c]">Edit</div>
                  <div className="p-2 bg-[#E8725A]/20 rounded text-[#E8725A]">Clip 1</div>
                  <div className="p-2 bg-gray-100 rounded text-[#5c5c5c]">—</div>
                  <div className="p-2 bg-[#E8725A]/20 rounded text-[#E8725A]">Clip 2</div>
                  <div className="p-2 bg-gray-100 rounded text-[#5c5c5c]">—</div>
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
                  <h3 className="font-bold text-[#2D2D2D] mb-2">How long should sermon clips be?</h3>
                  <p className="text-[#5c5c5c]">The sweet spot is 20-45 seconds. Long enough to deliver value, short enough to maintain attention. For exceptionally powerful moments, you can go up to 60 seconds, but completion rates drop significantly after that.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">Do we need permission from our pastor?</h3>
                  <p className="text-[#5c5c5c]">Absolutely. Create a simple approval workflow—either the pastor reviews clips before posting, or you establish clear guidelines about what can and can't be shared. Some pastors prefer to select clip moments themselves during sermon prep.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">Should we use trending audio?</h3>
                  <p className="text-[#5c5c5c]">Sometimes. If a trending sound genuinely fits and doesn't distract from the message, it can boost discoverability. But never force it. Your pastor's voice should be the star—background audio is supporting cast only.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">What about copyrighted worship music?</h3>
                  <p className="text-[#5c5c5c]">If your clip includes background worship music, you may face copyright issues on some platforms. Either use royalty-free alternatives, strip the background audio and add new music, or accept that some clips may be muted by platforms.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">How do we measure success?</h3>
                  <p className="text-[#5c5c5c]">Key metrics: views, shares (most important), saves, comments, and profile visits. Track these weekly. A clip that gets 500 views but 50 shares is more valuable than one with 2,000 views and 3 shares—shares mean multiplication.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">What if our video quality isn't great?</h3>
                  <p className="text-[#5c5c5c]">Content beats production value. A clear message recorded on a phone can outperform a 4K production with weak content. That said, prioritize audio quality above all—invest in a good lavalier mic before upgrading cameras.</p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-[#2D2D2D] to-[#3D3D3D] rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Multiply Your Message?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Stop letting your sermons die on Sunday. With Sermon Clips, your words reach further, last longer, and change more lives—automatically.
              </p>
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 bg-[#E8725A] hover:bg-[#d4654f] px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg"
              >
                Try Sermon Clips Free
                <Share2 className="w-5 h-5" />
              </Link>
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
