'use client';

import { Heart, Users, Shield, Sparkles, ArrowRight, Award, Target } from "lucide-react";
import Link from "next/link";
import EmailCapturePopup from "@/components/EmailCapturePopup";

export const metadata = {
  title: "About Us | Sermon Clips",
  description: "We're church people who happen to build technology. Our mission: help every church extend their sermon reach beyond Sunday.",
  keywords: "about sermon clips, church technology, faith-driven company, church media services"
};

export default function AboutPage() {
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
            We're church people who happen to build technology
          </h1>
          
          <p className="text-xl text-[#5c5c5c] leading-relaxed mb-8 max-w-2xl mx-auto">
            Not a tech company trying to serve churches. A ministry-minded team using technology to multiply Kingdom impact.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-8">
            Our story
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-[#2D2D2D] leading-relaxed mb-6 text-lg">
              It started with a conversation after church one Sunday. A communications director shared how she spent <em>every Monday</em> editing sermon clips. Four hours. Every single week. She was exhausted, overwhelmed, and ready to quit.
            </p>
            
            <p className="text-[#2D2D2D] leading-relaxed mb-6 text-lg">
              "There has to be a better way," she said.
            </p>
            
            <p className="text-[#2D2D2D] leading-relaxed mb-6 text-lg">
              We agreed. So we built one.
            </p>
            
            <p className="text-[#2D2D2D] leading-relaxed mb-6 text-lg">
              Sermon Clips was born out of that frustration—and the conviction that <strong>great sermons deserve to reach beyond Sunday morning.</strong> Pastors spend hours crafting life-changing messages. Church teams work tirelessly to serve their congregations. And yet, the manual work of turning sermons into shareable content was keeping those messages locked inside the walls of the church building.
            </p>
            
            <p className="text-[#2D2D2D] leading-relaxed mb-6 text-lg">
              We saw the problem clearly: Churches needed a partner who understood both the <em>calling</em> and the <em>constraints</em>. Someone who spoke church language. Someone who cared about stewardship, quality, and Kingdom growth—not just clicks and metrics.
            </p>
            
            <p className="text-[#2D2D2D] leading-relaxed text-lg">
              That's who we are. We serve the Church because we <em>are</em> the Church. This isn't a side hustle or a SaaS experiment. It's our calling.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] text-center mb-12">
            What we believe
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Heart,
                title: "Faith-Driven, Always",
                desc: "We pray over this work. We see it as ministry, not just business. Every church we serve is a partnership in the Great Commission."
              },
              {
                icon: Shield,
                title: "Human-Reviewed Quality",
                desc: "AI speeds up the work, but humans ensure the quality. Every clip is reviewed by real people who care about getting it right. No auto-generated garbage."
              },
              {
                icon: Users,
                title: "Serving the Church",
                desc: "We know what 'stewardship' means. We understand tight budgets, volunteer teams, and the pressure to justify every expense. We're not here to upsell—we're here to serve."
              },
              {
                icon: Sparkles,
                title: "Excellence Without Burnout",
                desc: "You shouldn't have to choose between quality and sanity. We believe churches can have broadcast-level content without burning out their teams."
              },
              {
                icon: Target,
                title: "Strategy, Not Just Content",
                desc: "Clips are great. But clips with a <em>growth strategy</em> change churches. We care about reach, engagement, and real Kingdom impact."
              },
              {
                icon: Award,
                title: "Transparent & Trustworthy",
                desc: "No hidden fees. No bait-and-switch pricing. No shady contracts. We do what we say we'll do, when we say we'll do it. Simple as that."
              }
            ].map((value, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-[#E8E4DC] hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-[#E8725A]/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-[#E8725A]" />
                </div>
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">{value.title}</h3>
                <p className="text-[#5c5c5c] leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] text-center mb-12">
            Who we are
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Jake Giebel",
                role: "Founder & CEO",
                bio: "Former church media director turned entrepreneur. Spent 7 years serving local churches before building tools to help them scale."
              },
              {
                name: "Sarah Reynolds",
                role: "Head of Operations",
                bio: "15+ years in church communications. Knows the pain points firsthand because she lived them. Now helps churches avoid the burnout she experienced."
              },
              {
                name: "Marcus Chen",
                role: "Lead Editor",
                bio: "Professional video editor with a heart for the Church. Trained our entire editing team on the difference between 'altar' and 'alter.'"
              }
            ].map((member, i) => (
              <div key={i} className="p-8 rounded-3xl border border-[#E8E4DC] bg-[#F5F1EB] text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#E8725A]/20 to-[#2D2D2D]/10 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-1">{member.name}</h3>
                <p className="text-sm text-[#E8725A] font-medium mb-4">{member.role}</p>
                <p className="text-[#5c5c5c] leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-20 px-6 lg:px-8 bg-[#2D2D2D]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            By the numbers
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "500+", label: "Churches Served" },
              { stat: "10,000+", label: "Clips Delivered" },
              { stat: "24hr", label: "Avg Turnaround" },
              { stat: "4.9★", label: "Customer Rating" }
            ].map((item, i) => (
              <div key={i} className="p-6">
                <p className="text-5xl font-bold text-white mb-2">{item.stat}</p>
                <p className="text-white/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-[#F5F1EB] to-[#E8E4DC]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
            Join the family
          </h2>
          <p className="text-lg text-[#5c5c5c] mb-10 max-w-xl mx-auto">
            We'd love to partner with your church. Start with 3 free clips and see if we're the right fit.
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
