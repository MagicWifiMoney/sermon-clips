'use client';

import { Heart, Globe, TrendingUp, MessageCircle, ArrowRight, BookOpen, Users, Sparkles } from "lucide-react";
import Link from "next/link";
import EmailCapturePopup from "@/components/EmailCapturePopup";

export const metadata = {
  title: "Our Mission | Sermon Clips",
  description: "Every message deserves to be heard beyond Sunday. We exist to help churches steward their sermon content and reach more people with the Gospel.",
  keywords: "church mission, sermon reach, digital missions, church growth, stewardship"
};

export default function MissionPage() {
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
            Every message deserves to be heard beyond Sunday
          </h1>
          
          <p className="text-xl text-[#5c5c5c] leading-relaxed mb-8 max-w-2xl mx-auto">
            That's not just our tagline. It's our calling. We exist to help churches faithfully steward the Gospel messages entrusted to them—and multiply their reach through digital media.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-8">
            The problem we're solving
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-[#2D2D2D] leading-relaxed mb-6 text-lg">
              Every Sunday, pastors across the world stand before their congregations and preach. They've spent <strong>10-20 hours</strong> preparing. They've prayed, studied, wrestled with the text. They deliver a message that could change someone's life.
            </p>
            
            <p className="text-[#2D2D2D] leading-relaxed mb-6 text-lg">
              And then Monday comes.
            </p>
            
            <p className="text-[#2D2D2D] leading-relaxed mb-6 text-lg">
              That sermon—the one that took 20 hours to prepare—reaches maybe 150 people. By Tuesday, it's forgotten. By next Sunday, it's replaced.
            </p>
            
            <p className="text-[#2D2D2D] leading-relaxed mb-6 text-lg">
              <strong>Thousands of life-changing moments. Locked in 45-minute videos. Never seen by the people who need them most.</strong>
            </p>
            
            <p className="text-[#2D2D2D] leading-relaxed text-lg">
              Meanwhile, your community is scrolling Instagram at 11pm. TikTok before bed. YouTube on lunch break. They're <em>looking</em> for meaning, hope, truth—and your church has it. But they'll never find a 45-minute sermon in their feed.
            </p>
          </div>
        </div>
      </section>

      {/* Biblical Foundation */}
      <section className="py-20 px-6 lg:px-8 bg-[#2D2D2D]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <BookOpen className="w-16 h-16 text-[#E8725A] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              This is stewardship
            </h2>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              "Go into all the world and preach the gospel to all creation." — Mark 16:15
            </p>
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-white/90 leading-relaxed mb-6 text-lg">
              The Great Commission doesn't say "preach to the people who show up on Sunday." It says <em>all creation</em>. Every nation. Every tribe. Every tongue.
            </p>
            
            <p className="text-white/90 leading-relaxed mb-6 text-lg">
              Digital media is the modern-day mission field. <strong>5 billion people</strong> are online. Your neighbors, coworkers, and community are scrolling right now. The question isn't whether the Church should be there—it's whether we'll be <em>faithful stewards</em> of the messages God has given us to share.
            </p>
            
            <p className="text-white/90 leading-relaxed text-lg">
              Every sermon is an investment of time, prayer, and calling. To let it sit unused after Sunday morning isn't just a missed opportunity—it's poor stewardship of the Kingdom resource entrusted to you.
            </p>
          </div>
        </div>
      </section>

      {/* The Stats */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] text-center mb-12">
            The digital mission field
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Users,
                stat: "5.1B",
                label: "People Online Daily",
                desc: "More than 60% of the global population is online every single day."
              },
              {
                icon: TrendingUp,
                stat: "73%",
                label: "Use Social for Answers",
                desc: "Of people searching for life advice, meaning, and hope turn to social media first."
              },
              {
                icon: MessageCircle,
                stat: "2.5hr",
                label: "Daily Social Media Use",
                desc: "Average person spends 2.5 hours per day scrolling. That's your mission field."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-[#E8E4DC] text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-full bg-[#E8725A]/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-[#E8725A]" />
                </div>
                <p className="text-5xl font-bold text-[#2D2D2D] mb-2">{item.stat}</p>
                <p className="text-sm font-semibold text-[#E8725A] mb-4">{item.label}</p>
                <p className="text-[#5c5c5c] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#E8725A]/5 to-[#E8725A]/10 border-2 border-[#E8725A]/30">
            <p className="text-xl text-[#2D2D2D] leading-relaxed text-center">
              <strong>Translation:</strong> Millions of people are searching for truth, hope, and meaning on their phones. Your church has the answer. <em>Are you meeting them where they are?</em>
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-8">
            Our mission
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-[#2D2D2D] leading-relaxed mb-6 text-lg">
              <strong>We exist to help churches steward their sermon content and extend their reach beyond Sunday morning.</strong>
            </p>
            
            <p className="text-[#2D2D2D] leading-relaxed mb-6 text-lg">
              We do this by removing the technical and time barriers that keep sermons locked inside church buildings. We make it <em>effortless</em> for churches to turn their Sunday messages into shareable, algorithm-friendly content that reaches seekers where they already are: scrolling on their phones.
            </p>
            
            <p className="text-[#2D2D2D] leading-relaxed mb-6 text-lg">
              <strong>But we're not just a content service.</strong> We're a ministry partner. We care about:
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="text-[#2D2D2D] leading-relaxed text-lg flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E8725A]/10 flex items-center justify-center text-[#E8725A] text-sm font-bold mt-1">✓</span>
                <span><strong>Faithful stewardship</strong> — treating your sermons as sacred Kingdom resources</span>
              </li>
              <li className="text-[#2D2D2D] leading-relaxed text-lg flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E8725A]/10 flex items-center justify-center text-[#E8725A] text-sm font-bold mt-1">✓</span>
                <span><strong>Preventing burnout</strong> — so church teams can focus on people, not software</span>
              </li>
              <li className="text-[#2D2D2D] leading-relaxed text-lg flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E8725A]/10 flex items-center justify-center text-[#E8725A] text-sm font-bold mt-1">✓</span>
                <span><strong>Real Kingdom growth</strong> — measurable reach and discipleship, not just vanity metrics</span>
              </li>
              <li className="text-[#2D2D2D] leading-relaxed text-lg flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E8725A]/10 flex items-center justify-center text-[#E8725A] text-sm font-bold mt-1">✓</span>
                <span><strong>Serving the Church</strong> — especially small-to-mid-size churches who lack professional media teams</span>
              </li>
            </ul>
            
            <p className="text-[#2D2D2D] leading-relaxed text-lg">
              Every clip we create is a seed planted. Every share is a conversation started. Every view is a chance for someone to encounter Jesus.
            </p>
          </div>
        </div>
      </section>

      {/* Join the Mission */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-[#E8E4DC] to-[#F5F1EB]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Globe className="w-16 h-16 text-[#E8725A] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-6">
              Join the mission
            </h2>
          </div>

          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-white border border-[#E8E4DC]">
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-4">For Churches</h3>
              <p className="text-[#5c5c5c] leading-relaxed mb-4">
                Let us help you steward your sermon content faithfully. Start with 3 free clips. See how far your message can reach when you remove the barriers.
              </p>
              <Link href="/#pricing" className="inline-flex items-center gap-2 text-[#E8725A] font-medium hover:gap-3 transition-all">
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E8E4DC]">
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-4">For Partners</h3>
              <p className="text-[#5c5c5c] leading-relaxed mb-4">
                Want to support the mission? We're looking for investors, ministry partners, and advocates who believe churches deserve world-class tools at accessible prices.
              </p>
              <a href="mailto:partners@sermonclips.com" className="inline-flex items-center gap-2 text-[#E8725A] font-medium hover:gap-3 transition-all">
                Get in Touch <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E8E4DC]">
              <h3 className="text-2xl font-bold text-[#2D2D2D] mb-4">For Team Members</h3>
              <p className="text-[#5c5c5c] leading-relaxed mb-4">
                Want to work on a mission that matters? We're hiring editors, developers, and customer success folks who care about serving the Church.
              </p>
              <a href="mailto:careers@sermonclips.com" className="inline-flex items-center gap-2 text-[#E8725A] font-medium hover:gap-3 transition-all">
                View Openings <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 lg:px-8 bg-[#2D2D2D]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Every message matters
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto">
            Your next sermon could reach thousands. Let's make sure it does.
          </p>
          
          <button className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center gap-2">
            Start Reaching More People
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-sm text-white/60 mt-6">No credit card required • 3 free clips to start</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D2D2D] text-white/50 py-12 px-6 lg:px-8 border-t border-white/10">
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
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/mission" className="hover:text-white transition-colors">Mission</Link>
            <Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link>
          </div>
          <p className="text-sm">&copy; 2026 Sermon Clips. All rights reserved.</p>
        </div>
      </footer>

      <EmailCapturePopup />
    </div>
  );
}
