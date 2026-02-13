'use client';

import { CheckCircle2, Clock, ArrowRight, Quote, Zap, TrendingUp, Calendar } from "lucide-react";
import Link from "next/link";
import EmailCapturePopup from "@/components/EmailCapturePopup";

export const metadata = {
  title: "Sermon to Social Media | Sermon Clips",
  description: "Stop spending 4 hours editing clips every Monday. Upload once, get shareable clips for every platform in 24 hours.",
  keywords: "sermon clips, social media, sermon editing, church social media, monday editing"
};

export default function SermonToSocialPage() {
  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#F5F1EB]/95 backdrop-blur-md z-50 border-b border-[#2D2D2D]/10">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <rect x="15" y="0" width="10" height="40" fill="#2D2D2D" />
                <rect x="5" y="12" width="30" height="8" fill="#2D2D2D" />
                <polygon points="18,22 26,26 18,30" fill="#E8725A" />
              </svg>
            </div>
            <div>
              <span className="font-bold text-xl text-[#2D2D2D] tracking-tight">Sermon</span>
              <span className="font-light text-xl text-[#2D2D2D] tracking-[0.15em] uppercase ml-0.5">Clips</span>
            </div>
          </Link>
          <Link href="/#pricing" className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all">
            See Pricing
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Use Case
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-[#2D2D2D] leading-tight mb-6">
            Stop spending 4 hours editing clips every Monday
          </h1>
          
          <p className="text-xl text-[#5c5c5c] leading-relaxed mb-8 max-w-2xl mx-auto">
            You spend all Sunday producing a great service. Then Monday hits and you're stuck in Premiere for 4 hours cutting clips. What if Monday looked different?
          </p>

          <button className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center justify-center gap-2">
            Get 3 Free Clips
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] text-center mb-12">
            Before vs. After
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="p-8 rounded-3xl border-2 border-[#E8E4DC] bg-[#F5F1EB]">
              <div className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-6">
                Before Sermon Clips
              </div>
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-6">The Monday Nightmare</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]"><strong>9:00 AM:</strong> Download 45-minute sermon from Sunday</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]"><strong>9:30 AM:</strong> Watch entire sermon to find good moments</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]"><strong>11:00 AM:</strong> Import into Premiere, start editing clip 1</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]"><strong>12:00 PM:</strong> Add captions manually (so tedious)</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]"><strong>1:00 PM:</strong> Export vertical for TikTok... wait 20 min</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]"><strong>1:30 PM:</strong> Re-export square for Instagram... wait again</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                  <p className="text-[#5c5c5c]"><strong>2:00 PM:</strong> Repeat for clips 2 and 3...</p>
                </div>
                <div className="pt-4 border-t border-[#E8E4DC]">
                  <p className="text-red-600 font-bold text-lg">Total time: 4-5 hours</p>
                  <p className="text-[#5c5c5c] text-sm mt-2">Your entire Monday. Gone. Every single week.</p>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="p-8 rounded-3xl border-2 border-[#E8725A] bg-gradient-to-br from-[#E8725A]/5 to-[#E8725A]/10">
              <div className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-600 text-sm font-medium mb-6">
                With Sermon Clips
              </div>
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-6">The Monday You Deserve</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]"><strong>Sunday 10:00 PM:</strong> Upload sermon link (or we pull from YouTube)</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]"><strong>Monday 9:00 AM:</strong> Coffee. Email. Plan your week.</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]"><strong>Monday 6:00 PM:</strong> Receive email: "Your clips are ready!"</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]"><strong>6:05 PM:</strong> Click review link, see 3-5 clips</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]"><strong>6:10 PM:</strong> Click "Approve All"</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]"><strong>6:15 PM:</strong> Download or schedule to socials</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                  <p className="text-[#2D2D2D]"><strong>6:20 PM:</strong> Done. Go home.</p>
                </div>
                <div className="pt-4 border-t border-[#E8725A]/30">
                  <p className="text-green-600 font-bold text-lg">Total time: 10 minutes</p>
                  <p className="text-[#2D2D2D] text-sm mt-2">And it's the same every week. No variance. No stress.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] text-center mb-12">
            How it works (stupidly simple)
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "1",
                title: "Upload Your Sermon",
                desc: "Sunday night or Monday morning. YouTube link, Vimeo, direct upload—whatever's easiest. Takes 30 seconds."
              },
              {
                num: "2",
                title: "We Do Everything",
                desc: "AI + human team watches your sermon. Finds the best moments. Edits clips. Adds captions. Formats for every platform. You do nothing."
              },
              {
                num: "3",
                title: "You Approve & Post",
                desc: "24 hours later, you get an email. Review clips in your dashboard. Approve with one click. Download or schedule. Done in 10 minutes."
              }
            ].map((step, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-[#E8E4DC] hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 rounded-full bg-[#E8725A] text-white text-2xl font-bold flex items-center justify-center mb-6">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">{step.title}</h3>
                <p className="text-[#5c5c5c] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-6 lg:px-8 bg-[#2D2D2D]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Real results from real churches
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Clock, stat: "3.5hrs", label: "Saved Per Week" },
              { icon: TrendingUp, stat: "4x", label: "More Consistent Posting" },
              { icon: Calendar, stat: "52", label: "Weeks of Clips Per Year" }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
                <div className="w-16 h-16 rounded-full bg-[#E8725A]/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-[#E8725A]" />
                </div>
                <p className="text-5xl font-bold text-white mb-2">{item.stat}</p>
                <p className="text-white/70">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "I used to dread Mondays. Now I actually look forward to seeing what moments the team found in my sermon. It's like getting a highlight reel of your own work—professionally edited.",
                name: "Pastor David Lee",
                church: "Hope Church, Phoenix AZ"
              },
              {
                quote: "We went from posting 1-2 times per month (when we remembered) to posting 4-5 clips every single week. Consistency changed everything. Our reach is up 280%.",
                name: "Sarah Kim",
                church: "Renewal Church, Seattle WA"
              }
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <Quote className="w-10 h-10 text-[#E8725A]/20 mb-4" />
                <p className="text-white/90 leading-relaxed mb-6">{t.quote}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E8725A]/20 to-white/10" />
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-white/70">{t.church}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] text-center mb-12">
            Common questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Do I have to upload a video file or can you pull from YouTube?",
                a: "Both! We accept YouTube links (easiest), Vimeo links, Dropbox, Google Drive, or direct file uploads. Whatever works for your workflow."
              },
              {
                q: "What if I don't like the moments you chose?",
                a: "You can request different timestamps, and we'll re-clip same-day. Or you can flag specific moments you want clipped when you upload. You're in control."
              },
              {
                q: "How long does the 24-hour turnaround actually take?",
                a: "Most sermons are ready in 18-20 hours. Upload Sunday night at 10 PM, receive clips Monday around 6 PM. Upload Monday morning at 9 AM, receive clips Tuesday morning."
              },
              {
                q: "Do you handle the captions too?",
                a: "Yes. Every clip includes professional captions—auto-generated, then human-reviewed for accuracy. No caption typos. No awkward line breaks. Just perfect."
              },
              {
                q: "Can I schedule the clips to post automatically?",
                a: "On our Pro plan, yes. We integrate with your scheduling tool (Buffer, Hootsuite, Later, etc.) or handle scheduling directly. On other plans, you download and schedule yourself."
              },
              {
                q: "What if something changes and I can't upload a sermon one week?",
                a: "No problem. Your plan carries over. If you pay for 4 sermons/month but only upload 2, the remaining 2 roll to next month. Flexibility built in."
              }
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-[#E8E4DC]">
                <h3 className="font-semibold text-[#2D2D2D] mb-2">{faq.q}</h3>
                <p className="text-[#5c5c5c] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-[#F5F1EB] to-[#E8E4DC]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
            Get your Mondays back
          </h2>
          <p className="text-lg text-[#5c5c5c] mb-10 max-w-xl mx-auto">
            Stop editing. Start multiplying. Upload your next sermon and see clips in 24 hours.
          </p>
          
          <button className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center gap-2">
            Get Your First Clips Free
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-sm text-[#5c5c5c] mt-6">No credit card required • Results in 24 hours</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-white/50 py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="relative w-8 h-8">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <rect x="15" y="0" width="10" height="40" fill="white" />
                <rect x="5" y="12" width="30" height="8" fill="white" />
                <polygon points="18,22 26,26 18,30" fill="#E8725A" />
              </svg>
            </div>
            <span className="font-bold text-white">Sermon<span className="font-light tracking-wider uppercase ml-0.5">Clips</span></span>
          </div>
          <div className="flex justify-center gap-8 mb-8 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/use-cases" className="hover:text-white transition-colors">Use Cases</Link>
            <Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link>
          </div>
          <p className="text-sm">&copy; 2026 Sermon Clips. All rights reserved.</p>
        </div>
      </footer>

      <EmailCapturePopup />
    </div>
  );
}
