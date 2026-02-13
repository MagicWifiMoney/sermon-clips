import { CheckCircle2, Video, Zap, Users, ArrowRight, Quote, Award, Clock, Shield } from "lucide-react";
import Link from "next/link";
import EmailCapturePopup from "@/components/EmailCapturePopup";

export const metadata = {
  title: "For Media & Creative Directors | Sermon Clips",
  description: "Free up your team for live production. We handle post-production clips so you can focus on Sunday excellence and creative vision.",
  keywords: "church media director, creative director, church production, video production, media team"
};

export default function MediaDirectorsPage() {
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
            <Video className="w-4 h-4" />
            For Media & Creative Directors
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-[#2D2D2D] leading-tight mb-6">
            Free up your team for live production
          </h1>
          
          <p className="text-xl text-[#5c5c5c] leading-relaxed mb-8 max-w-2xl mx-auto">
            Your team is built for Sunday excellence—lighting, sound, multi-cam switching, live streaming. Don't waste their talent on post-production social clips. We handle that. You focus on what you do best.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center justify-center gap-2">
              Get 3 Free Clips
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link href="/#how-it-works" className="border-2 border-[#2D2D2D]/20 hover:border-[#2D2D2D]/40 text-[#2D2D2D] px-8 py-4 rounded-full font-medium transition-all inline-flex items-center justify-center gap-2">
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Sound Familiar? */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] text-center mb-12">
            Sound familiar?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote: "I'm responsible for creating ALL digital and physical media for our church—under tight deadlines. Every week. I need my team focused on Sunday production, not Monday clip editing.",
                pain: "Team spread too thin across live + post-production"
              },
              {
                quote: "We nail the live stream every week. Multi-cam, professional lighting, broadcast-quality audio. Then Monday hits and I'm stuck editing social clips in Premiere. Feels like a waste of my skillset.",
                pain: "High-level talent doing low-level tasks"
              },
              {
                quote: "I train volunteers on live production—cameras, switchers, audio boards. I don't have time to also teach them video editing, caption formatting, and platform-specific exports.",
                pain: "Too many skills to train volunteers on"
              },
              {
                quote: "Our Sunday production value is incredible. But our social media looks...amateur. Because the clips are an afterthought. I need consistent quality across both.",
                pain: "Live production excellence, social media mediocrity"
              }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border-2 border-[#E8E4DC] hover:border-[#E8725A]/30 transition-colors bg-[#F5F1EB]">
                <Quote className="w-8 h-8 text-[#E8725A]/20 mb-4" />
                <p className="text-[#2D2D2D] leading-relaxed mb-4 italic">"{item.quote}"</p>
                <p className="text-sm text-[#E8725A] font-medium">→ {item.pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Here's How We Fix It */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] text-center mb-12">
            Here's how we fix it
          </h2>

          <div className="space-y-8">
            {[
              {
                icon: Users,
                problem: "Team torn between live production and post-production",
                solution: "Your team focuses on Sunday. We handle Monday.",
                details: "Stop pulling your camera operators and editors into post-production work. They focus 100% on nailing the live service. We take the sermon recording and turn it into social content. Clean separation of responsibilities."
              },
              {
                icon: Award,
                problem: "Social clips look amateur compared to Sunday production",
                solution: "Broadcast-quality clips that match your standards",
                details: "We maintain the same production value you bring to Sunday. Professional color grading. Clean audio mixing. Thoughtful framing. Dynamic captions. Your social media finally looks as good as your live stream."
              },
              {
                icon: Zap,
                problem: "High-skill team doing low-skill tasks",
                solution: "Free up creative talent for creative work",
                details: "Your team are artists—lighting designers, camera operators, audio engineers. Don't waste them on caption formatting and aspect ratio conversions. We automate the tedious. You elevate the creative."
              },
              {
                icon: Clock,
                problem: "Training volunteers on too many skills",
                solution: "Simplify volunteer training to live production only",
                details: "Volunteers learn cameras and switchers—that's it. No need to teach Premiere, After Effects, export settings, or platform specs. Simpler training = better retention = more consistent quality."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-8 rounded-3xl bg-white border border-[#E8E4DC] hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-[#E8725A]/10 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-[#E8725A]" />
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <p className="text-sm text-[#5c5c5c] line-through mb-1">{item.problem}</p>
                    <h3 className="text-xl font-bold text-[#2D2D2D]">{item.solution}</h3>
                  </div>
                  <p className="text-[#5c5c5c] leading-relaxed">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6 lg:px-8 bg-[#2D2D2D]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            From directors who refocused their teams
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "We went from 'everyone does everything' chaos to clear roles. My team owns Sunday. Sermon Clips owns social. Our live production quality went UP because my team isn't exhausted from Monday editing sessions.",
                name: "Ryan Martinez",
                role: "Media Director",
                church: "Elevation Church, Charlotte NC",
                size: "2,800 members"
              },
              {
                quote: "I used to dread Monday. Great Sunday, then I'd spend 6 hours in Premiere cutting clips. Now Monday is for planning NEXT Sunday. My team is creative again, not just production workers.",
                name: "Jenna Park",
                role: "Creative Director",
                church: "Mosaic Church, Los Angeles CA",
                size: "1,500 members"
              },
              {
                quote: "The consistency is what my pastor noticed first. Every single week, broadcast-quality clips—same framing, same polish, same professionalism. Before, it depended on who had time to edit. Now it's automatic excellence.",
                name: "Michael Thompson",
                role: "Director of Media & Production",
                church: "Journey Church, Phoenix AZ",
                size: "950 members"
              }
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10">
                <Quote className="w-10 h-10 text-[#E8725A]/20 mb-4" />
                <p className="text-white/90 leading-relaxed mb-6 text-lg">"{t.quote}"</p>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#E8725A]/20 to-[#2D2D2D]/10 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-white/70">{t.role}</p>
                    <p className="text-sm text-white/50">{t.church} • {t.size}</p>
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
            Questions from media directors
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Can you handle multi-cam footage, or just single-camera recordings?",
                a: "We work with whatever you send us—single cam, multi-cam, livestream recordings, direct uploads. If you have multi-cam source files, we can even create clips with dynamic camera switching (Pro plan)."
              },
              {
                q: "What if our church has specific branding standards?",
                a: "We apply your exact branding: logo placement, color palette, font choices, lower thirds style. You send us your brand guidelines once during onboarding, and we follow them religiously. Every. Single. Clip."
              },
              {
                q: "Do you maintain the color grade from our live production?",
                a: "Yes (on Growth and Pro plans). If you send us color-graded footage, we preserve it. If you send us raw footage, we apply professional color correction to match your Sunday aesthetic."
              },
              {
                q: "Can I give feedback on specific edits or framing choices?",
                a: "Absolutely. Every plan includes one round of revisions per clip. If you want a tighter frame, different timestamp, or caption adjustment, just tell us. We fix it same-day."
              },
              {
                q: "How do I justify this to my pastor when we have an in-house team?",
                a: "Frame it as specialization. Your team is LIVE production specialists. Social clips are POST-production. Different skillsets. You're not replacing your team—you're freeing them to excel at what they were hired for. Plus, your first sermon is free to prove ROI."
              },
              {
                q: "What formats do you deliver? We have specific export specs.",
                a: "All plans include MP4 (H.264) in all three aspect ratios. Pro plan lets you specify custom export settings: frame rate, bitrate, codec, resolution. We can match your exact specs."
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

      {/* Trust Signals */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Video, stat: "4K", label: "Max Resolution" },
              { icon: Award, stat: "100%", label: "Broadcast Quality" },
              { icon: Shield, stat: "Brand", label: "Guidelines Followed" },
              { icon: CheckCircle2, stat: "24hr", label: "Turnaround Time" }
            ].map((item, i) => (
              <div key={i} className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#E8725A]/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-[#E8725A]" />
                </div>
                <p className="text-4xl font-bold text-[#2D2D2D] mb-2">{item.stat}</p>
                <p className="text-sm text-[#5c5c5c]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-[#F5F1EB] to-[#E8E4DC]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
            Refocus your team on excellence
          </h2>
          <p className="text-lg text-[#5c5c5c] mb-10 max-w-xl mx-auto">
            Your team owns Sunday. We own social. Send us your next sermon and see broadcast-quality clips in 24 hours.
          </p>
          
          <button className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center gap-2">
            Get Your First Clips Free
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-sm text-[#5c5c5c] mt-6">Trusted by media teams at churches from 500 to 5,000 members</p>
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
            <Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link>
            <Link href="/for" className="hover:text-white transition-colors">Who It's For</Link>
          </div>
          <p className="text-sm">&copy; 2026 Sermon Clips. All rights reserved.</p>
        </div>
      </footer>

      <EmailCapturePopup />
    </div>
  );
}
