import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, CheckCircle2, AlertCircle, ArrowRight, Zap, Timer, Play, Scissors, Type, Upload, Download, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Create Sermon Clips in Under 10 Minutes | Sermon Clips',
  description: 'Learn the fastest methods to create professional sermon clips in under 10 minutes. Step-by-step workflow, tools, and templates for busy church teams.',
  keywords: 'how to create sermon clips, sermon clip workflow, fast sermon clips, create church videos, sermon clip tutorial',
  openGraph: {
    title: 'How to Create Sermon Clips in Under 10 Minutes',
    description: 'Learn the fastest methods to create professional sermon clips in under 10 minutes.',
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
      "name": "How long does it take to create a sermon clip?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With the right tools and workflow, you can create a professional sermon clip in under 10 minutes. Manual methods take 20-30 minutes per clip, while AI-powered tools can reduce this to 2-5 minutes. Full-service options like Sermon Clips require only 5 minutes to upload and receive finished clips in 24 hours."
      }
    },
    {
      "@type": "Question",
      "name": "What is the fastest way to find clip-worthy moments in a sermon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The fastest method is to use AI transcription tools that highlight potential clip moments automatically. Alternatively, take notes during the live sermon or watch at 1.5-2x speed focusing on emotional peaks, quotable statements, and practical applications."
      }
    },
    {
      "@type": "Question",
      "name": "Can I create sermon clips on my phone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Apps like CapCut, InShot, and Instagram's built-in editor let you create clips directly on your phone. Mobile editing is ideal for quick clips but can be limiting for longer or more complex edits."
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
              10 min read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight mb-6">
            How to Create Sermon Clips in Under 10 Minutes
          </h1>

          <p className="text-xl text-[#5c5c5c] mb-10 leading-relaxed">
            You know sermon clips matter. But who has time to spend hours editing videos every week? The truth is, with the right approach, you can create professional, share-worthy sermon clips in under 10 minutes. Here's exactly how to do it.
          </p>

          {/* Quick Method Comparison */}
          <div className="bg-[#E8725A]/10 rounded-2xl p-8 mb-12 border-l-4 border-[#E8725A]">
            <h2 className="font-bold text-lg text-[#2D2D2D] mb-4 flex items-center gap-2">
              <Timer className="w-5 h-5 text-[#E8725A]" />
              Speed Comparison: Three Approaches
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4">
                <p className="font-bold text-[#2D2D2D]">Manual Editing</p>
                <p className="text-2xl font-bold text-[#E8725A]">20-30 min</p>
                <p className="text-sm text-[#5c5c5c]">per clip</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="font-bold text-[#2D2D2D]">AI-Assisted</p>
                <p className="text-2xl font-bold text-[#E8725A]">5-10 min</p>
                <p className="text-sm text-[#5c5c5c]">per clip</p>
              </div>
              <div className="bg-white rounded-lg p-4 border-2 border-[#E8725A]">
                <p className="font-bold text-[#2D2D2D]">Full Service</p>
                <p className="text-2xl font-bold text-[#E8725A]">5 min</p>
                <p className="text-sm text-[#5c5c5c]">total (upload only)</p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm">
            <h2 className="font-bold text-lg text-[#2D2D2D] mb-4">What You'll Learn</h2>
            <ul className="space-y-2 text-[#5c5c5c]">
              <li><a href="#mindset" className="hover:text-[#E8725A] transition-colors">The Speed Mindset</a></li>
              <li><a href="#method-1" className="hover:text-[#E8725A] transition-colors">Method 1: The 10-Minute Manual Workflow</a></li>
              <li><a href="#method-2" className="hover:text-[#E8725A] transition-colors">Method 2: AI-Powered Speed (5 Minutes)</a></li>
              <li><a href="#method-3" className="hover:text-[#E8725A] transition-colors">Method 3: Full Automation (5 Minutes Total)</a></li>
              <li><a href="#time-savers" className="hover:text-[#E8725A] transition-colors">Time-Saving Hacks</a></li>
              <li><a href="#templates" className="hover:text-[#E8725A] transition-colors">Templates and Presets</a></li>
              <li><a href="#mistakes" className="hover:text-[#E8725A] transition-colors">Common Mistakes That Slow You Down</a></li>
              <li><a href="#faq" className="hover:text-[#E8725A] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            
            <section id="mindset" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-[#E8725A]" />
                The Speed Mindset
              </h2>
              
              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Before we dive into specific methods, let's address the biggest time waster: perfectionism. Most church teams spend 80% of their editing time on improvements that add 20% more quality. For social media content that will be scrolled past in 3 seconds if it doesn't hook immediately, this is backwards.
              </p>

              <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                <h3 className="font-bold text-[#2D2D2D] mb-4">The 80/20 Rule for Sermon Clips</h3>
                <ul className="space-y-3 text-[#5c5c5c]">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Matters a lot:</strong> Clear audio, readable captions, vertical format, compelling moment selection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Matters less:</strong> Fancy transitions, color grading, perfect caption timing, elaborate branding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Barely matters:</strong> 4K vs 1080p, minor audio adjustments, background music</span>
                  </li>
                </ul>
              </div>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Done consistently beats perfect occasionally. A church posting 3 "good enough" clips every week will outperform one posting 1 "perfect" clip monthly. The algorithms reward consistency, and your audience cares about the message—not the production value.
              </p>
            </section>

            <section id="method-1" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E8725A] text-white font-bold text-lg">1</span>
                Method 1: The 10-Minute Manual Workflow
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                This method uses <Link href="/blog/free-sermon-clip-maker" className="text-[#E8725A] hover:underline">free tools like CapCut</Link> and a streamlined process. It assumes you've already identified your clip moment (more on that in the time-savers section).
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold flex-shrink-0">
                    <Timer className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2D2D2D]">Minutes 0-2: Import & Cut</h4>
                    <p className="text-sm text-[#5c5c5c]">Open CapCut (or your editor). Import the sermon video. Navigate directly to your timestamp. Cut the clip—aim for 30-45 seconds.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold flex-shrink-0">
                    <Scissors className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2D2D2D]">Minutes 2-4: Format to Vertical</h4>
                    <p className="text-sm text-[#5c5c5c]">Change aspect ratio to 9:16. Use auto-reframe or manually position your speaker. Make sure they're centered with room at the bottom for captions.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold flex-shrink-0">
                    <Type className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2D2D2D]">Minutes 4-7: Add Captions</h4>
                    <p className="text-sm text-[#5c5c5c]">Generate auto-captions. Quick scan for errors (especially Biblical names). Apply your saved caption style preset. Done.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold flex-shrink-0">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2D2D2D]">Minutes 7-8: Quick Polish</h4>
                    <p className="text-sm text-[#5c5c5c]">Add your logo watermark (use a saved preset). Add a quick hook text at the start if needed. Skip everything else.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-[#E8725A] flex items-center justify-center text-white font-bold flex-shrink-0">
                    <Download className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2D2D2D]">Minutes 8-10: Export</h4>
                    <p className="text-sm text-[#5c5c5c]">Export at 1080p. Save to your posting folder. Move on to the next clip.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F5F1EB] rounded-xl p-6">
                <p className="text-[#2D2D2D] font-medium mb-2">Key to 10-Minute Clips:</p>
                <p className="text-sm text-[#5c5c5c]">
                  Have your presets ready (caption style, logo placement, export settings). Every decision you make in the moment costs time. Front-load decisions by creating templates.
                </p>
              </div>
            </section>

            <section id="method-2" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2D2D2D] text-white font-bold text-lg">2</span>
                Method 2: AI-Powered Speed (5 Minutes)
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                <Link href="/blog/ai-sermon-clip-generator" className="text-[#E8725A] hover:underline">AI tools like Opus Clip</Link> can dramatically speed up the process by identifying clip-worthy moments automatically.
              </p>

              <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                <h3 className="font-bold text-[#2D2D2D] mb-4">The AI Workflow</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#E8725A] text-white text-sm flex items-center justify-center flex-shrink-0">1</span>
                    <span className="text-[#5c5c5c]"><strong>Upload:</strong> Paste your YouTube link or upload the video file (1 min)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#E8725A] text-white text-sm flex items-center justify-center flex-shrink-0">2</span>
                    <span className="text-[#5c5c5c]"><strong>AI Processing:</strong> Tool identifies clip moments and generates options (2-3 min)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#E8725A] text-white text-sm flex items-center justify-center flex-shrink-0">3</span>
                    <span className="text-[#5c5c5c]"><strong>Select & Adjust:</strong> Pick the best clips, tweak captions if needed (1-2 min)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#E8725A] text-white text-sm flex items-center justify-center flex-shrink-0">4</span>
                    <span className="text-[#5c5c5c]"><strong>Export:</strong> Download your finished clips (30 sec)</span>
                  </div>
                </div>
              </div>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                The beauty of AI tools is they handle the tedious parts—finding moments, cutting, cropping, captioning—while you provide the judgment: "Is this a good clip for our church?"
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <p className="font-bold text-green-600 mb-2">✓ What AI Does Well</p>
                  <ul className="text-sm text-[#5c5c5c] space-y-1">
                    <li>• Finding emotional peaks</li>
                    <li>• Identifying quotable statements</li>
                    <li>• Auto-cropping to vertical</li>
                    <li>• Generating accurate captions</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <p className="font-bold text-amber-600 mb-2">⚠ What AI Struggles With</p>
                  <ul className="text-sm text-[#5c5c5c] space-y-1">
                    <li>• Understanding spiritual context</li>
                    <li>• Inside jokes or references</li>
                    <li>• Biblical name pronunciation</li>
                    <li>• Your church's specific voice</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="method-3" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E8725A] text-white font-bold text-lg">3</span>
                Method 3: Full Automation (5 Minutes Total)
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                If your goal is maximum efficiency, the fastest approach is to outsource the entire process to a service designed specifically for churches.
              </p>

              <div className="bg-[#E8725A]/5 rounded-2xl p-8 mb-8 border-2 border-[#E8725A]">
                <h3 className="font-bold text-[#2D2D2D] mb-4">How Full-Service Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Upload className="w-6 h-6 text-[#E8725A] flex-shrink-0" />
                    <div>
                      <span className="font-medium text-[#2D2D2D]">You do this once:</span>
                      <p className="text-sm text-[#5c5c5c]">Upload your sermon (YouTube link, Dropbox, or direct upload). Takes 2-5 minutes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Play className="w-6 h-6 text-[#E8725A] flex-shrink-0" />
                    <div>
                      <span className="font-medium text-[#2D2D2D]">Service does the rest:</span>
                      <p className="text-sm text-[#5c5c5c]">Professional editors (AI-assisted + human review) find moments, cut clips, add captions, format for platforms, apply branding.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Download className="w-6 h-6 text-[#E8725A] flex-shrink-0" />
                    <div>
                      <span className="font-medium text-[#2D2D2D]">You receive:</span>
                      <p className="text-sm text-[#5c5c5c]">3-5 polished clips in 24-48 hours, ready to download and post.</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                This method shifts the work from "creating clips" to "posting clips"—a fundamentally different time investment. Your 5 minutes is spent reviewing and scheduling, not editing.
              </p>

              <div className="bg-[#F5F1EB] rounded-xl p-6">
                <p className="text-[#2D2D2D] font-medium mb-2">The Math</p>
                <p className="text-sm text-[#5c5c5c]">
                  <strong>DIY (10 min/clip × 4 clips):</strong> 40 minutes/week × 52 weeks = 34+ hours/year<br/>
                  <strong>Full-service (5 min upload):</strong> 5 minutes/week × 52 weeks = 4 hours/year<br/><br/>
                  That's <strong>30 hours back</strong> annually—worth far more than the subscription cost for most churches.
                </p>
              </div>
            </section>

            <section id="time-savers" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-[#E8725A]" />
                Time-Saving Hacks
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                Regardless of which method you use, these tactics will speed up your workflow:
              </p>

              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">🎯 Note Timestamps During Service</h4>
                  <p className="text-sm text-[#5c5c5c]">Have someone take notes during the live sermon. When the pastor hits a quotable moment, write down the approximate time. This eliminates the "watch the whole sermon" step entirely.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">⚡ Batch Your Clips</h4>
                  <p className="text-sm text-[#5c5c5c]">Don't create one clip and export. Find all your clip moments first, cut them all, then process them in a batch. Context switching kills efficiency.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">📱 Set Up One-Tap Presets</h4>
                  <p className="text-sm text-[#5c5c5c]">In CapCut and most editors, you can save caption styles, logo placements, and export settings. Set these once, use forever. Should take 0 seconds in your workflow.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">🗂️ Organize Your File System</h4>
                  <p className="text-sm text-[#5c5c5c]">Create a consistent folder structure: /2026/February/Week1/. Know exactly where raw videos and finished clips go. Searching = wasted time.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">🎵 Skip the Music</h4>
                  <p className="text-sm text-[#5c5c5c]">Background music on sermon clips is nice-to-have, not need-to-have. Your pastor's voice is the content. Adding music adds time with minimal ROI.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-2">📺 Watch at 1.5x Speed</h4>
                  <p className="text-sm text-[#5c5c5c]">If you do need to watch the sermon to find moments, watch at 1.5x or 2x. You can still identify emotional peaks and quotable statements—just faster.</p>
                </div>
              </div>
            </section>

            <section id="templates" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-[#E8725A]" />
                Templates and Presets
              </h2>

              <p className="text-[#5c5c5c] leading-relaxed mb-6">
                The fastest editors aren't faster at editing—they've eliminated editing decisions. Here's what to pre-build:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-3">Caption Preset</h4>
                  <ul className="text-sm text-[#5c5c5c] space-y-2">
                    <li>• Font: Bold sans-serif (e.g., Montserrat Bold)</li>
                    <li>• Size: Large (visible on mobile)</li>
                    <li>• Color: White with black outline/shadow</li>
                    <li>• Position: Center-bottom (safe zone)</li>
                    <li>• Animation: Word-by-word or none</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2D2D2D] mb-3">Branding Preset</h4>
                  <ul className="text-sm text-[#5c5c5c] space-y-2">
                    <li>• Logo: Small, corner position (top-left or bottom-right)</li>
                    <li>• Opacity: 60-80% (visible but not distracting)</li>
                    <li>• End card: Simple "Follow for more" or church name</li>
                    <li>• Colors: Your church brand palette</li>
                  </ul>
                </div>
              </div>

              <div className="bg-[#E8725A]/10 rounded-xl p-6 border-l-4 border-[#E8725A]">
                <p className="text-[#2D2D2D] font-medium mb-2">Pro Tip: Create a "Master Template" Project</p>
                <p className="text-[#5c5c5c]">
                  In CapCut or your editor, create a project with all your presets already applied—blank video, captions styled, logo placed. When you start a new clip, duplicate this template project. Everything is already set up.
                </p>
              </div>
            </section>

            <section id="mistakes" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6 flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-[#E8725A]" />
                Common Mistakes That Slow You Down
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#2D2D2D]">Perfectionism</p>
                    <p className="text-sm text-[#5c5c5c]">"Let me just adjust this caption timing by 0.1 seconds..." Stop. No one will notice. Ship it.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#2D2D2D]">Watching the Full Sermon</p>
                    <p className="text-sm text-[#5c5c5c]">If you don't have timestamps, use AI tools or watch at 2x. Sitting through 45 minutes to find 3 clips is inefficient.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#2D2D2D]">No Presets</p>
                    <p className="text-sm text-[#5c5c5c]">Rebuilding caption styles every time wastes minutes that add up. Invest 30 minutes once to save hours annually.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#2D2D2D]">Over-Editing</p>
                    <p className="text-sm text-[#5c5c5c]">Transitions, effects, multiple camera angles, custom animations... these rarely increase engagement. Keep it simple.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#2D2D2D]">Wrong Tool for the Job</p>
                    <p className="text-sm text-[#5c5c5c]">Using Premiere Pro for simple clips is overkill. Using mobile apps for complex edits is painful. Match the tool to the task.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="faq" className="mb-16">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-6">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">How long does it take to create a sermon clip?</h3>
                  <p className="text-[#5c5c5c]">With the right tools and workflow, you can create a professional sermon clip in under 10 minutes. Manual methods take 20-30 minutes per clip, while AI-powered tools can reduce this to 2-5 minutes. Full-service options require only 5 minutes to upload and receive finished clips in 24 hours.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">What is the fastest way to find clip-worthy moments in a sermon?</h3>
                  <p className="text-[#5c5c5c]">The fastest method is to use AI transcription tools that highlight potential clip moments automatically. Alternatively, take notes during the live sermon or watch at 1.5-2x speed focusing on emotional peaks, quotable statements, and practical applications.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">Can I create sermon clips on my phone?</h3>
                  <p className="text-[#5c5c5c]">Yes! Apps like CapCut, InShot, and Instagram's built-in editor let you create clips directly on your phone. Mobile editing is ideal for quick clips but can be limiting for longer or more complex edits. For full details on free tools, see our <Link href="/blog/free-sermon-clip-maker" className="text-[#E8725A] hover:underline">free sermon clip maker guide</Link>.</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-[#2D2D2D] mb-2">How many clips should I create per sermon?</h3>
                  <p className="text-[#5c5c5c]">Aim for 3-5 clips per sermon. This gives you enough content to post throughout the week without overwhelming your audience or your team. One "hero" clip for the main message, plus 2-4 supporting clips.</p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-[#2D2D2D] to-[#3D3D3D] rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Want Clips Without the Work?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Even 10 minutes adds up. With Sermon Clips, you upload once and receive professional clips in 24 hours. Your time is worth more than editing videos. Try it free.
              </p>
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 bg-[#E8725A] hover:bg-[#d4654f] px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg"
              >
                Try Sermon Clips Free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-white/60 text-sm mt-4">5 minutes of your time → 3-5 finished clips</p>
            </section>

          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#2D2D2D] mb-8">Continue Reading</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/blog/free-sermon-clip-maker" className="group p-6 rounded-xl border border-[#E8E4DC] hover:border-[#E8725A]/30 transition-all">
              <p className="text-sm text-[#E8725A] mb-2">Related</p>
              <h3 className="font-bold text-[#2D2D2D] group-hover:text-[#E8725A] transition-colors">Free Sermon Clip Maker: 5 Tools That Actually Work</h3>
            </Link>
            <Link href="/blog/sermon-clips-with-captions" className="group p-6 rounded-xl border border-[#E8E4DC] hover:border-[#E8725A]/30 transition-all">
              <p className="text-sm text-[#E8725A] mb-2">Next Up</p>
              <h3 className="font-bold text-[#2D2D2D] group-hover:text-[#E8725A] transition-colors">Sermon Clip Maker with Captions: Why It Matters</h3>
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
