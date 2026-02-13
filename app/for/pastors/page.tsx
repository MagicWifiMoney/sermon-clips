

import { CheckCircle2, Heart, BookOpen, Share2, ArrowRight, Quote, Users, TrendingUp, Clock, Shield } from "lucide-react";
import Link from "next/link";
import EmailCapturePopup from "@/components/EmailCapturePopup";

export const metadata = {
  title: "For Pastors | Sermon Clips",
  description: "Your message deserves more than one Sunday. Multiply your sermon's impact all week long—without adding to your workload.",
  keywords: "pastor, sermon reach, church growth, sermon impact, pastoral ministry, discipleship"
};

export default function PastorsPage() {
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
            <BookOpen className="w-4 h-4" />
            For Pastors
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-[#2D2D2D] leading-tight mb-6">
            Your message deserves more than one Sunday
          </h1>
          
          <p className="text-xl text-[#5c5c5c] leading-relaxed mb-8 max-w-2xl mx-auto">
            You pour 15-20 hours into preparing each sermon. Life-changing truth. Gospel clarity. Practical wisdom. Then it's forgotten by Tuesday. Let's change that—without adding to your workload.
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
            The sermon preparation paradox
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote: "I spend 20 hours preparing each sermon—exegesis, research, writing, prayer. Sunday comes, I preach, people are moved...and by Tuesday it's like it never happened. The impact is so short-lived.",
                pain: "Hours of prep = 45 minutes of impact"
              },
              {
                quote: "Our physical attendance has plateaued. I know there are people in our city who need to hear the Gospel, but they're not walking through our doors. How do I reach them?",
                pain: "Message ready, but reach is limited"
              },
              {
                quote: "I trust my communications team to extend my sermon's reach, but they're overwhelmed. I don't want to add more to their plate. I just want my message to go further.",
                pain: "Want to help the team, not burden them"
              },
              {
                quote: "People tell me 'That sermon really spoke to me' on Sunday. I wish they had a way to revisit it throughout the week when they're struggling. But who has time to rewatch a 45-minute sermon?",
                pain: "Sermons aren't portable or rewatchable"
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
            Here's how we multiply your impact
          </h2>

          <div className="space-y-8">
            {[
              {
                icon: Share2,
                problem: "Sermon forgotten by Tuesday",
                solution: "Your message all week long",
                details: "We turn your Sunday sermon into 3-5 shareable clips—each highlighting a key truth, story, or application. Your congregation rewatches them. Shares them. Discusses them in small groups. Monday, Wednesday, Friday—your message keeps speaking."
              },
              {
                icon: Users,
                problem: "Reach limited to who shows up Sunday",
                solution: "Reach people who will never walk through your doors",
                details: "Social media algorithms prioritize short clips, not 45-minute sermons. Your clips show up in feeds of people who don't know your church exists. They watch 60 seconds. Some will visit Sunday. Some will watch online. Your message travels beyond your walls."
              },
              {
                icon: Heart,
                problem: "Want to help your team, not burden them",
                solution: "Zero extra work for you or your team",
                details: "Your team uploads your sermon (or we pull it from YouTube automatically). That's it. We find the moments, edit the clips, format them for every platform. You keep preaching. We keep multiplying."
              },
              {
                icon: TrendingUp,
                problem: "No way to measure digital impact",
                solution: "See how your message is spreading",
                details: "Which moments resonated most? How many people watched? How many shared? We track it all. You finally see the digital reach of your preaching—not just Sunday attendance, but weekly engagement."
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
            From pastors who multiplied their reach
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "We went from 200 views per social post to 3,000+. People are sharing clips with friends, coworkers, family members who don't attend our church. I'm reaching people I never would have reached from the pulpit alone.",
                name: "Pastor Mike Stevens",
                role: "Lead Pastor",
                church: "Grace Community Church, Columbus OH",
                size: "380 members"
              },
              {
                quote: "A woman visited our church because she saw a sermon clip on Instagram. She said, 'I've been looking for a church that teaches the Bible clearly. This clip showed me you do.' That's the power of getting your message out there.",
                name: "Pastor John Lee",
                role: "Senior Pastor",
                church: "New Life Church, Denver CO",
                size: "620 members"
              },
              {
                quote: "Our small groups started using the clips as discussion starters. It's extending the Sunday sermon into mid-week discipleship. People are engaging with God's Word more than just Sunday morning. That's what I've always wanted.",
                name: "Pastor Sarah Mitchell",
                role: "Teaching Pastor",
                church: "Cityview Church, Portland OR",
                size: "850 members"
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
            Questions from pastors
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Do I have to do anything besides preach?",
                a: "Nope. Your team uploads the sermon (or we auto-pull from YouTube). You approve the clips before they go live. That's it. You keep doing what you do best: preparing and delivering God's Word."
              },
              {
                q: "How do you choose which moments to clip?",
                a: "We look for the most impactful moments—key truths, memorable stories, practical applications, Gospel clarity. You can also flag specific timestamps you want clipped. We combine AI analysis with human review to find the gold."
              },
              {
                q: "What if I'm worried about my sermons being taken out of context?",
                a: "You approve every clip before it goes live. If something doesn't represent your full message, you can request a different timestamp or reject the clip entirely. You have full control."
              },
              {
                q: "Will this actually help us reach new people, or just entertain current members?",
                a: "Both. Current members engage more (shares, comments, discussions). But the algorithm shows clips to people outside your network. We've seen churches reach hundreds of people who've never attended—some visit, some watch online, all hear the Gospel."
              },
              {
                q: "How do I know this is a good use of church budget?",
                a: "Your first sermon is free—prove the ROI before spending a dollar. Most churches see 200-400% engagement increases in the first month. Compare that to any other outreach method. Digital discipleship is the most cost-effective reach multiplier available."
              },
              {
                q: "I'm not tech-savvy. Will this be complicated?",
                a: "If you can send an email, you can use this. Your team uploads the sermon. We email you when clips are ready. You click 'approve' or 'request changes.' That's the whole workflow. Simple enough for the least tech-savvy pastor."
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
              { icon: Users, stat: "500+", label: "Pastors Trust Us" },
              { icon: TrendingUp, stat: "3x", label: "Avg. Reach Increase" },
              { icon: Clock, stat: "0min", label: "Pastor Time Required" },
              { icon: Shield, stat: "100%", label: "Approval Control" }
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
            Multiply your message. Zero extra work.
          </h2>
          <p className="text-lg text-[#5c5c5c] mb-10 max-w-xl mx-auto">
            Your words are too powerful to stay on the shelf. Let's spread them further—together.
          </p>
          
          <button className="bg-[#E8725A] hover:bg-[#d4654f] text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:shadow-[#E8725A]/30 inline-flex items-center gap-2">
            Get Your First Clips Free
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-sm text-[#5c5c5c] mt-6">No credit card required • Approve before publishing • Cancel anytime</p>
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
