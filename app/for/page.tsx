

import { Users, MessageSquare, Video, Church, Building2, ArrowRight } from "lucide-react";
import Link from "next/link";
import EmailCapturePopup from "@/components/EmailCapturePopup";

export const metadata = {
  title: "Who It's For | Sermon Clips",
  description: "Sermon Clips serves church communications directors, social media managers, media directors, pastors, and small churches. Find your role.",
  keywords: "church communications, church media, church social media, pastor tools, small church resources"
};

export default function ForIndexPage() {
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
          <h1 className="text-4xl md:text-6xl font-bold text-[#2D2D2D] leading-tight mb-6">
            Who Sermon Clips is for
          </h1>
          
          <p className="text-xl text-[#5c5c5c] leading-relaxed mb-8 max-w-2xl mx-auto">
            Whether you're a one-person team or a full media department, we help you multiply your sermon reach without multiplying your workload.
          </p>
        </div>
      </section>

      {/* Persona Cards */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Communications Directors",
                desc: "Stop spending 4 hours every Monday editing clips. Get your time back for strategy, not software.",
                link: "/for/communications-directors",
                highlight: "Save 4+ hours per week"
              },
              {
                icon: MessageSquare,
                title: "Social Media Managers",
                desc: "Consistent, high-quality content every week. No more scrambling for posts or burning out from manual editing.",
                link: "/for/social-media-managers",
                highlight: "4-5 clips per week, automated"
              },
              {
                icon: Video,
                title: "Media Directors",
                desc: "Professional-quality clips without hiring more staff. Consistent output even when volunteers don't show up.",
                link: "/for/media-directors",
                highlight: "Broadcast-quality, every time"
              },
              {
                icon: Church,
                title: "Pastors",
                desc: "Extend your sermon impact beyond Sunday. Reach seekers scrolling on Tuesday night with the message you preached Sunday morning.",
                link: "/for/pastors",
                highlight: "Multiply your reach 10x+"
              },
              {
                icon: Building2,
                title: "Small Churches",
                desc: "World-class content without a media team. Professional results even if you're a one-person volunteer running everything.",
                link: "/for/small-churches",
                highlight: "Affordable for any budget"
              }
            ].map((persona, i) => (
              <Link 
                key={i} 
                href={persona.link}
                className="group p-8 rounded-3xl bg-white border-2 border-[#E8E4DC] hover:border-[#E8725A] hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#E8725A]/10 group-hover:bg-[#E8725A]/20 flex items-center justify-center mb-6 transition-colors">
                  <persona.icon className="w-7 h-7 text-[#E8725A]" />
                </div>
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-3 group-hover:text-[#E8725A] transition-colors">{persona.title}</h3>
                <p className="text-[#5c5c5c] leading-relaxed mb-4">{persona.desc}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8725A]/10 text-[#E8725A] text-sm font-medium mb-4">
                  {persona.highlight}
                </div>
                <div className="flex items-center gap-2 text-[#E8725A] font-medium group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-6">
            Not sure which fits you?
          </h2>
          <p className="text-lg text-[#5c5c5c] mb-10 max-w-xl mx-auto">
            Start with 3 free clips and we'll help you figure out the best workflow for your church.
          </p>
          
          <button className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center gap-2">
            Get Your First Clips Free
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-sm text-[#5c5c5c] mt-6">No credit card required • Talk to a real human</p>
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
            <Link href="/for" className="hover:text-white transition-colors">Who It's For</Link>
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
