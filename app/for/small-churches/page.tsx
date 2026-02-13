'use client';

import { CheckCircle2, DollarSign, Heart, Zap, ArrowRight, Quote, Users, Shield, Sparkles, Clock } from "lucide-react";
import Link from "next/link";
import EmailCapturePopup from "@/components/EmailCapturePopup";

export const metadata = {
  title: "For Small Churches | Sermon Clips",
  description: "All-volunteer team? Tiny budget? No problem. Get professional sermon clips for less than a pizza budget—no video skills required.",
  keywords: "small church, church budget, volunteer team, affordable church tools, church growth, small congregation"
};

export default function SmallChurchesPage() {
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
            <Heart className="w-4 h-4" />
            For Small Churches
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-[#2D2D2D] leading-tight mb-6">
            Big church impact, small church budget
          </h1>
          
          <p className="text-xl text-[#5c5c5c] leading-relaxed mb-8 max-w-2xl mx-auto">
            All-volunteer team? Tight budget? No video experience? No problem. Get professional sermon clips that make your church look like you have a full media department—for less than your monthly coffee budget.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center justify-center gap-2">
              Start for $29/Month
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
            Small church, big challenges
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote: "We're a church of 85 people. Our pastor is part-time. Our 'media team' is Jim with an iPhone. We want a social media presence, but we have no idea where to start—and no budget for fancy tools.",
                pain: "Zero budget, zero expertise, zero time"
              },
              {
                quote: "Our volunteer media person just moved away. Now nobody knows how to edit videos or post to social media. We're stuck choosing between 'find another volunteer' or 'give up on social entirely.'",
                pain: "Volunteer turnover kills momentum"
              },
              {
                quote: "We can't compete with the megachurch down the street. They have professional videos, daily posts, thousands of followers. We're lucky if we post once a month. How do we keep up?",
                pain: "Can't compete with big church production"
              },
              {
                quote: "I'm the pastor, the janitor, the treasurer, and now apparently the social media manager. I don't have time to learn video editing on top of sermon prep, hospital visits, and everything else.",
                pain: "Pastors wearing too many hats"
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
            Built for small churches like yours
          </h2>

          <div className="space-y-8">
            {[
              {
                icon: DollarSign,
                problem: "Can't afford expensive tools or hiring staff",
                solution: "$29/month = less than a pizza budget",
                details: "Our Starter plan is $29/month—less than two Starbucks runs. No contracts. Cancel anytime. Your first sermon is FREE to prove it works. Compare that to hiring a video editor ($50/hour) or buying software licenses ($100+/month)."
              },
              {
                icon: Zap,
                problem: "No video skills on your volunteer team",
                solution: "Zero learning curve. Zero training needed.",
                details: "Your volunteer doesn't need to know Premiere Pro, Final Cut, or even Canva. They upload the sermon (or send us a YouTube link). That's it. We do everything else. If they can send an email, they can use this tool."
              },
              {
                icon: Users,
                problem: "Volunteer turnover kills your social media",
                solution: "Consistent quality, even when volunteers leave",
                details: "When Jim moves away, your social media doesn't die. We're your permanent media team. Volunteers come and go—we stay. Consistent clips every week, no matter who's (or isn't) on your team."
              },
              {
                icon: Sparkles,
                problem: "Can't compete with megachurch production",
                solution: "Professional quality, no matter your size",
                details: "Your clips look as good as the megachurch's—because we use the same tools and techniques for everyone. Size doesn't matter. Budget doesn't matter. Your message gets the same broadcast-quality treatment."
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
            From small churches punching above their weight
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "We're a church of 60 people. We look like we have a media department. People visit and say 'I saw your sermon clips on Instagram—they looked so professional!' Nobody believes it's just me and a $29/month tool.",
                name: "Pastor Tom Harrison",
                role: "Pastor",
                church: "First Baptist Church, Cedar Rapids IA",
                size: "60 members"
              },
              {
                quote: "Our media volunteer quit. I panicked. Then I realized...nothing changed. The clips kept coming every week. Sermon Clips IS our media team now. Best $29 we spend every month.",
                name: "Linda Foster",
                role: "Church Administrator",
                church: "Community Chapel, Bend OR",
                size: "110 members"
              },
              {
                quote: "I'm a bi-vocational pastor. I work 40 hours, then pastor on nights and weekends. I don't have time for video editing. This tool gave me back my Mondays AND made us look like a much bigger church. It's a miracle.",
                name: "Pastor Carlos Mendoza",
                role: "Lead Pastor",
                church: "Nueva Vida Church, San Antonio TX",
                size: "85 members"
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
            Questions from small churches
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Is $29/month REALLY all it costs? What's the catch?",
                a: "No catch. $29/month gets you 2 sermons per month, 3 clips per sermon, captions included, 2 formats (vertical + square). That's it. No hidden fees. No upsells unless you WANT more. Cancel anytime."
              },
              {
                q: "We don't have a media team. Can our pastor or secretary do this?",
                a: "Absolutely. If they can send an email or share a YouTube link, they can use this. No video skills required. No training needed. Upload sermon → receive clips 24 hours later → approve and post. That's the whole process."
              },
              {
                q: "What if we can only afford to do 1 sermon per month, not 2?",
                a: "No problem. Use your 2-sermon allowance whenever you want—consecutive weeks, every other week, special sermon series only. You're not forced to use both every month. Flexibility is built in."
              },
              {
                q: "Our church is only 40 people. Is this overkill for us?",
                a: "Size doesn't matter—reach does. Small churches have seen the biggest PERCENTAGE growth because clips help you reach beyond your 40 members. One clip shared by one person can reach hundreds. That's how small churches grow."
              },
              {
                q: "What if we need to cancel because budget gets tight?",
                a: "Cancel anytime. No contracts. No cancellation fees. No guilt trips. Church budgets are tight—we get it. You can always come back when budget frees up. Your account and settings stay saved."
              },
              {
                q: "Can we try it free before committing?",
                a: "Yes! Your first sermon is completely free. Send us your best recent sermon. We'll deliver 3 professional clips in 24 hours. If you love it, subscribe. If not, no hard feelings. Zero risk."
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
              { icon: DollarSign, stat: "$29", label: "Per Month" },
              { icon: Zap, stat: "0hrs", label: "Training Needed" },
              { icon: Shield, stat: "Cancel", label: "Anytime" },
              { icon: CheckCircle2, stat: "Free", label: "First Sermon" }
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
            Punch above your weight class
          </h2>
          <p className="text-lg text-[#5c5c5c] mb-10 max-w-xl mx-auto">
            Small budget. Big impact. Professional clips. Starting at $29/month. Your first sermon is free.
          </p>
          
          <button className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center gap-2">
            Get Your First Clips Free
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-sm text-[#5c5c5c] mt-6">No credit card required • No contracts • Cancel anytime</p>
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
