'use client';

import { Smartphone, MessageSquare, Youtube, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import EmailCapturePopup from "@/components/EmailCapturePopup";

export const metadata = {
  title: "Use Cases | Sermon Clips",
  description: "See how churches use Sermon Clips: sermon to social media, multi-platform distribution, perfect captions, YouTube automation, and church growth.",
  keywords: "sermon social media, church social media, youtube automation, video captions, church growth"
};

export default function UseCasesIndexPage() {
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
            How churches use Sermon Clips
          </h1>
          
          <p className="text-xl text-[#5c5c5c] leading-relaxed mb-8 max-w-2xl mx-auto">
            From saving time on editing to growing your church through strategic content—see how Sermon Clips solves real problems for real churches.
          </p>
        </div>
      </section>

      {/* Use Case Cards */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Sermon to Social Media",
                problem: "Spending 4 hours every Monday editing clips",
                solution: "Upload once, get shareable clips for every platform in 24 hours",
                link: "/use-cases/sermon-to-social",
                stat: "Save 3.5hrs/week"
              },
              {
                icon: Smartphone,
                title: "Multi-Platform Distribution",
                problem: "Reformatting clips for TikTok vs YouTube vs Instagram",
                solution: "One upload, every format automatically: landscape, vertical, square",
                link: "/use-cases/multi-platform",
                stat: "90min saved per clip"
              },
              {
                icon: MessageSquare,
                title: "Perfect Captions & Subtitles",
                problem: "Auto-captions are trash, manual captioning takes forever",
                solution: "AI + human review = perfect captions on every clip",
                link: "/use-cases/captions-and-subtitles",
                stat: "100% accuracy"
              },
              {
                icon: Youtube,
                title: "YouTube Automation",
                problem: "Forgetting to upload clips every week",
                solution: "Connect YouTube once, clips auto-publish forever",
                link: "/use-cases/youtube-automation",
                stat: "52x more videos/year"
              },
              {
                icon: TrendingUp,
                title: "Church Growth Strategy",
                problem: "Posting but not growing",
                solution: "Strategic clips that reach seekers and fill seats",
                link: "/use-cases/church-growth",
                stat: "+127 families in 1 year"
              }
            ].map((useCase, i) => (
              <Link 
                key={i} 
                href={useCase.link}
                className="group p-8 rounded-3xl bg-white border-2 border-[#E8E4DC] hover:border-[#E8725A] hover:shadow-xl transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#E8725A]/10 group-hover:bg-[#E8725A]/20 flex items-center justify-center transition-colors">
                    <useCase.icon className="w-7 h-7 text-[#E8725A]" />
                  </div>
                  <div className="px-4 py-2 rounded-full bg-green-100 text-green-600 text-sm font-medium">
                    {useCase.stat}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#2D2D2D] mb-4 group-hover:text-[#E8725A] transition-colors">
                  {useCase.title}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-sm font-bold">✗</div>
                    <p className="text-[#5c5c5c]"><strong>Problem:</strong> {useCase.problem}</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm font-bold">✓</div>
                    <p className="text-[#2D2D2D]"><strong>Solution:</strong> {useCase.solution}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-[#E8725A] font-medium group-hover:gap-3 transition-all">
                  See How It Works <ArrowRight className="w-5 h-5" />
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
            Ready to see it in action?
          </h2>
          <p className="text-lg text-[#5c5c5c] mb-10 max-w-xl mx-auto">
            Start with 3 free clips. No credit card required. See exactly how we solve your biggest content challenges.
          </p>
          
          <button className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center gap-2">
            Get Your First Clips Free
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-sm text-[#5c5c5c] mt-6">Takes 2 minutes to start • Results in 24 hours</p>
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
