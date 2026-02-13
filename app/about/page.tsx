'use client';

import { Heart, Shield, Sparkles, ArrowRight, Award, Target, Users, Church, Video, Clock } from "lucide-react";
import Link from "next/link";
import EmailCapturePopup from "@/components/EmailCapturePopup";

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
          <div className="hidden md:flex items-center gap-8 text-sm text-[#5c5c5c]">
            <Link href="/for" className="hover:text-[#2D2D2D] transition-colors">For</Link>
            <Link href="/use-cases" className="hover:text-[#2D2D2D] transition-colors">Use Cases</Link>
            <Link href="/about" className="text-[#2D2D2D] font-medium">About</Link>
            <Link href="/mission" className="hover:text-[#2D2D2D] transition-colors">Mission</Link>
          </div>
          <Link href="/#pricing" className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all">
            See Pricing
          </Link>
        </nav>
      </header>

      {/* Hero — Sammi's Story */}
      <section className="pt-32 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#E8725A] font-medium mb-4 uppercase tracking-wider text-sm">Meet the Founder</p>
          <h1 className="text-4xl md:text-6xl font-bold text-[#2D2D2D] leading-tight mb-6">
            I built this because I <em className="not-italic text-[#E8725A]">was</em> you.
          </h1>
          <p className="text-xl text-[#5c5c5c] leading-relaxed max-w-2xl mx-auto">
            Five years of late Monday nights editing sermon clips taught me one thing: churches deserve better tools.
          </p>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl border border-[#E8E4DC] overflow-hidden md:flex">
            {/* Photo placeholder */}
            <div className="md:w-2/5 bg-gradient-to-br from-[#E8725A]/10 via-[#F5F1EB] to-[#E8725A]/5 flex items-center justify-center p-12 md:p-0">
              <div className="w-48 h-48 md:w-full md:h-full md:rounded-none rounded-full bg-gradient-to-br from-[#E8725A]/20 to-[#2D2D2D]/5 flex items-center justify-center min-h-[300px]">
                <span className="text-6xl">✝️</span>
              </div>
            </div>
            {/* Bio */}
            <div className="md:w-3/5 p-10 md:p-14">
              <h2 className="text-3xl font-bold text-[#2D2D2D] mb-1">Sammi</h2>
              <p className="text-[#E8725A] font-medium mb-6">Founder & CEO</p>
              <div className="space-y-4 text-[#2D2D2D] leading-relaxed">
                <p>
                  I never planned to start a tech company. I planned to serve my church — and that's exactly what I did for five years.
                </p>
                <p>
                  I was the person who showed up early on Sundays to set up cameras. The one who stayed late to make sure the livestream didn't cut out during the altar call. The one who spent every Monday night — after my actual job — editing sermon clips so our pastor's message could reach people who couldn't make it to service.
                </p>
                <p className="text-[#5c5c5c] italic border-l-4 border-[#E8725A] pl-6 py-2">
                  "Four hours every Monday. Trimming, captioning, reformatting for Instagram, TikTok, YouTube, Facebook. Every. Single. Week. I loved the mission. I hated the process."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Full Story */}
      <section className="py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-10">
            The story behind Sermon Clips
          </h2>

          <div className="space-y-6 text-lg text-[#2D2D2D] leading-relaxed">
            <p>
              I started volunteering at my church's media ministry in 2021. Back then, "social media strategy" meant posting the Sunday bulletin to Facebook. But I saw the potential — our pastor was delivering <em>incredible</em> messages, week after week, and they were reaching maybe 200 people in the building. Those messages could reach thousands.
            </p>
            <p>
              So I taught myself video editing. Bought a ring light. Figured out how to pull clips from our livestream recordings. Started posting 2-3 clips a week to Instagram and TikTok.
            </p>
            <p>
              <strong>And it worked.</strong> Our church's Instagram went from 340 followers to 4,200 in eight months. People started showing up on Sundays saying they "found us on TikTok." One family drove 45 minutes because a clip about forgiveness found them during the hardest week of their marriage.
            </p>
            <p>
              That's when I realized this wasn't just marketing — it was ministry.
            </p>
            <p>
              But here's what nobody saw: I was burning out. Every Monday night, 9 PM to 1 AM, hunched over my laptop. Trimming clips. Writing captions. Resizing for three different platforms. Adding subtitles frame by frame. Then doing it all again the next week.
            </p>

            <div className="bg-[#F5F1EB] rounded-2xl p-8 my-10">
              <h3 className="font-bold text-xl text-[#2D2D2D] mb-4">The breaking point</h3>
              <p className="text-[#5c5c5c]">
                One Wednesday night, my pastor pulled me aside after Bible study. He could tell something was off. I broke down — I told him I loved what the clips were doing for our church, but I couldn't keep this up. I had a full-time job. I was missing small group. My husband barely saw me on Mondays anymore.
              </p>
              <p className="text-[#5c5c5c] mt-4">
                He said something I'll never forget: <em>"Sammi, the calling is right. But the method has to be sustainable. God doesn't call us to burn out — He calls us to bear fruit."</em>
              </p>
            </div>

            <p>
              That conversation changed everything. I started looking for tools that could help. Tried every video editing app, every AI tool, every "sermon repurposing" service I could find. Some were too expensive. Some had no idea what a sermon even was. Most produced clips that felt soulless — technically fine, but missing the <em>heart</em> of the message.
            </p>
            <p>
              So I started building my own solution. Not because I wanted to start a company — because I wanted to get my Monday nights back while still serving my church.
            </p>
            <p>
              I partnered with AI engineers who shared my faith. We built a system that could find the most powerful moments in a sermon, add broadcast-quality captions, format for every platform, and even layer in B-roll — all in minutes instead of hours. But we made one rule that we'd never break:
            </p>

            <p className="text-2xl font-bold text-[#2D2D2D] text-center py-6">
              Every single clip gets reviewed by a real human before it goes out.
            </p>

            <p>
              Because AI is fast, but it doesn't understand the weight of a pastor's pause before the altar call. It doesn't know that the tears in row three during that illustration weren't sadness — they were breakthrough. It doesn't catch when a clip cuts off right before the most important sentence.
            </p>
            <p>
              <strong>Humans do.</strong> And that's the difference.
            </p>
            <p>
              I shared what I'd built with a few other churches. Word spread. Within three months, I was helping 30 churches get their sermons onto social media — most of them for the first time ever. Communications directors who'd been drowning in editing work were finally able to focus on <em>strategy</em> instead of production. Pastors were seeing their messages reach people they'd never met.
            </p>
            <p>
              That's when I knew this wasn't just my solution. It was something the Church needed.
            </p>
          </div>
        </div>
      </section>

      {/* The Journey — Timeline */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] text-center mb-16">
            The journey so far
          </h2>

          <div className="space-y-12">
            {[
              {
                year: "2021",
                title: "Started volunteering",
                desc: "Began running cameras and livestreams at my church. Realized our amazing sermons were only reaching the people in the room."
              },
              {
                year: "2022",
                title: "First clips went viral",
                desc: "Taught myself video editing and started posting sermon clips. Church Instagram grew from 340 to 4,200 followers. Families started visiting because of TikTok."
              },
              {
                year: "2023",
                title: "The burnout year",
                desc: "Four-hour Monday night editing sessions caught up with me. Tried every tool on the market — nothing understood church content the way it needed to."
              },
              {
                year: "2024",
                title: "Built the first prototype",
                desc: "Partnered with AI engineers who shared my faith. Created a system that could do in 20 minutes what took me 4 hours — with human review built in."
              },
              {
                year: "2025",
                title: "Launched Sermon Clips",
                desc: "Opened the platform to other churches. Within 3 months, 30 churches were using it. By year end, over 500 churches trusted us with their sermons."
              },
              {
                year: "2026",
                title: "Serving 500+ churches",
                desc: "Now delivering thousands of clips every month across 30+ denominations. And still attending church every Sunday — without the Monday night burnout."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-2xl font-bold text-[#E8725A]">{item.year}</span>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-[#E8725A]" />
                  {i < 5 && <div className="w-0.5 h-full bg-[#E8725A]/20 mt-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-2">{item.title}</h3>
                  <p className="text-[#5c5c5c] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Believe — Values */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] text-center mb-4">
            What I believe
          </h2>
          <p className="text-[#5c5c5c] text-center mb-12 max-w-2xl mx-auto">
            These aren't corporate values on a wall. They're the convictions that guide every decision I make.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Heart,
                title: "This Is Ministry, Not Just Business",
                desc: "Every church we serve is a partnership in the Great Commission. I pray over this work. I take it personally when a clip doesn't land — because I know what that sermon meant to the pastor who preached it."
              },
              {
                icon: Shield,
                title: "AI Assists, Humans Decide",
                desc: "AI finds the moments. Humans feel them. Every clip is reviewed by someone who understands that a sermon about grace hits different than a sermon about tithing. We will never fully automate the human touch."
              },
              {
                icon: Users,
                title: "Built for Real Church Budgets",
                desc: "I've sat in those budget meetings. I know what it feels like to justify every line item to the elder board. Our pricing exists because I believe every church — from 50 members to 5,000 — deserves professional content."
              },
              {
                icon: Sparkles,
                title: "Excellence Without Burnout",
                desc: "You shouldn't have to choose between quality and your sanity. Your volunteer media team shouldn't dread Mondays. Great content and healthy teams aren't mutually exclusive."
              },
              {
                icon: Target,
                title: "Reach Over Vanity Metrics",
                desc: "I don't care about your follower count. I care about the single mom who found your sermon clip at 2 AM and felt seen for the first time in months. That's the metric that matters."
              },
              {
                icon: Award,
                title: "Radically Transparent",
                desc: "No hidden fees. No annual contracts. No 'gotcha' pricing tiers. I run this the way I'd want a vendor to treat my church — with honesty, simplicity, and respect for your stewardship."
              }
            ].map((value, i) => (
              <div key={i} className="p-8 rounded-3xl bg-[#F5F1EB] border border-[#E8E4DC] hover:shadow-xl transition-shadow">
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

      {/* Personal Note */}
      <section className="py-20 px-6 lg:px-8 bg-[#2D2D2D]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-white/50 uppercase tracking-wider text-sm mb-6">A note from Sammi</p>
          <blockquote className="text-2xl md:text-3xl text-white leading-relaxed font-light italic mb-8">
            "If you're the person at your church who stays late, edits the clips, manages the socials, and does it all because you love your community — I built this for you. You deserve to serve without sacrificing yourself."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E8725A]/40 to-[#E8725A]/10" />
            <div className="text-left">
              <p className="text-white font-bold">Sammi</p>
              <p className="text-white/50 text-sm">Founder, Sermon Clips</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "500+", label: "Churches Served" },
              { stat: "15,000+", label: "Clips Delivered" },
              { stat: "5 yrs", label: "In Church Media" },
              { stat: "4.9★", label: "Customer Rating" }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-[#E8E4DC]">
                <p className="text-4xl font-bold text-[#E8725A] mb-2">{item.stat}</p>
                <p className="text-[#5c5c5c]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-[#F5F1EB] to-[#E8E4DC]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2D2D2D] mb-6">
            Let's serve your church together
          </h2>
          <p className="text-lg text-[#5c5c5c] mb-10 max-w-xl mx-auto">
            I'd love to hear your story. Start with 3 free clips and see if Sermon Clips is the partner your ministry needs.
          </p>

          <Link href="/#pricing" className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center gap-2">
            Get Your First Clips Free
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-sm text-[#5c5c5c] mt-6">No credit card required • I personally respond to every inquiry</p>
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
            <Link href="/for" className="hover:text-white transition-colors">For</Link>
            <Link href="/use-cases" className="hover:text-white transition-colors">Use Cases</Link>
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