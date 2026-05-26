"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  ArrowRight,
  Play,
  Star,
  Shield,
  Zap,
  Heart,
  Globe,
  Users,
  Award,
  CheckCircle,
  Quote,
  ChevronLeft,
  ChevronRight,
  Mail,
  MessageCircle,
} from "lucide-react"

// ─── Data ───────────────────────────────────────────────────────────────────

const milestones = [
  {
    year: "2019",
    title: "The Spark",
    desc: "Aryan couldn’t find high-quality design assets in one place, so he built a curated platform to simplify discovery.",
    color: "#3B82F6",
  },
  {
    year: "2020",
    title: "The Surge",
    desc: "The pandemic pushed the world online. Our community of creators and buyers grew tenfold. We crossed 1,000 customers — all word of mouth.",
    color: "#06B6D4",
  },
  {
    year: "2021",
    title: "Creator Program",
    desc: "We launched tools to let independent creators sell their work. Overnight, 200+ new sellers joined. We were no longer just a store — we were a platform.",
    color: "#10B981",
  },
  {
    year: "2022",
    title: "$1.2 Million GMV",
    desc: "Hit a massive milestone. Expanded to 15 product categories. Hired our first full-time team members. Moved from an apartment to a real office.",
    color: "#F59E0B",
  },
  {
    year: "2023",
    title: "AI-Powered Discovery",
    desc: "Launched smart recommendations that match buyers to exactly the right products. Conversion rates jumped 40%.",
    color: "#06B6D4",
  },
  {
    year: "2024",
    title: "Global Scale",
    desc: "50,000+ happy customers across 40 countries. Featured in TechCrunch, Product Hunt #1 of the day, and Forbes India's 30 Under 30.",
    color: "#3B82F6",
  },
]

const values = [
  {
    icon: Shield,
    title: "Quality Over Quantity",
    desc: "We reject 7 out of 10 product submissions. Our editorial team reviews everything — so you don't have to second-guess a single purchase.",
    gradient: "linear-gradient(135deg, #3B82F6, #06B6D4)",
  },
  {
    icon: Heart,
    title: "Creators Come First",
    desc: "Creators keep 80% of every sale. No fine print, no gotchas. Their success is literally our business model.",
    gradient: "linear-gradient(135deg, #F59E0B, #EF4444)",
  },
  {
    icon: Zap,
    title: "Anytime Access",
    desc: "Buy once, own forever. No subscriptions, no expiring licenses. Your library is yours — permanently.",
    gradient: "linear-gradient(135deg, #06B6D4, #10B981)",
  },
  {
    icon: Globe,
    title: "Built for the World",
    desc: "40 countries, 6 currencies, 24/7 support. Whether you're in Mumbai or Munich, DigitalStore is yours.",
    gradient: "linear-gradient(135deg, #10B981, #3B82F6)",
  },
]

// ── UPDATED: image field added ──
const team = [
  {
    name: "Aryan Mehta",
    role: "Founder & CEO",
    bio: "Ex-Razorpay. Built his first SaaS at 19. Obsessed with design systems and the creator economy. Believes the best digital products change how people work.",
    gradient: "linear-gradient(135deg, #3B82F6, #06B6D4)",
    initials: "AM",
    funFact: "Has 400+ Figma templates saved",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Priya Sharma",
    role: "Head of Design",
    bio: "Former lead designer at Zomato. Turned DigitalStore from a directory into a brand. Every pixel you see passed through her hands.",
    gradient: "linear-gradient(135deg, #F59E0B, #3B82F6)",
    initials: "PS",
    funFact: "Can't start the day without Dribbble",
    image: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Rohan Das",
    role: "Lead Engineer",
    bio: "Open-source contributor. Built our entire recommendation engine solo in 6 weeks. Makes complex things feel simple — in code and in conversation.",
    gradient: "linear-gradient(135deg, #06B6D4, #10B981)",
    initials: "RD",
    funFact: "Dark mode evangelist (obviously)",
    image: "https://i.pravatar.cc/150?img=8",
  },
  {
    name: "Sneha Kapoor",
    role: "Head of Creator Success",
    bio: "Was a creator herself before joining us. Personally onboarded our first 500 sellers. Knows exactly what creators need because she's been there.",
    gradient: "linear-gradient(135deg, #10B981, #06B6D4)",
    initials: "SK",
    funFact: "Sold her own Notion templates here first",
    image: "https://i.pravatar.cc/150?img=45",
  },
]

const testimonials = [
  {
    quote:
      "I've tried every design store out there. DigitalStore is the only one where I actually trust every single purchase. The curation is genuinely unmatched.",
    name: "Sarah Chen",
    role: "Product Designer, Stripe",
    stars: 5,
    gradient: "linear-gradient(135deg, #3B82F6, #06B6D4)",
    image: "https://i.pravatar.cc/150?img=45",
  },
  {
    quote:
      "As a creator, I've made more in 3 months here than I did in a year on other platforms. The 80% revenue share is real, and the team actually responds to you.",
    name: "Marcus Williams",
    role: "Independent Creator — 2,400 sales",
    stars: 5,
    gradient: "linear-gradient(135deg, #F59E0B, #3B82F6)",
  },
  {
    quote:
      "We use DigitalStore to source UI kits for every client project. It's saved our team hundreds of hours. The quality bar is consistently exceptional.",
    name: "Emma Rodriguez",
    role: "Creative Director, Studio Fern",
    stars: 5,
    gradient: "linear-gradient(135deg, #10B981, #06B6D4)",
  },
  {
    quote:
      "Found my go-to Notion template here. Bought three more within the same week. The discovery experience is so good it's almost dangerous for my wallet.",
    name: "Rahul Verma",
    role: "Founder, Indie Hacker",
    stars: 5,
    gradient: "linear-gradient(135deg, #06B6D4, #10B981)",
  },
]

const pressLogos = [
  { name: "TechCrunch", mention: "Featured" },
  { name: "Product Hunt", mention: "#1 of the Day" },
  { name: "Forbes India", mention: "30 Under 30" },
  { name: "YourStory", mention: "Startup of the Month" },
  { name: "Inc42", mention: "Top Creator Economy Startup" },
]

const faqs = [
  {
    q: "Do I get Anytimeaccess to what I buy?",
    a: "Yes — every purchase is yours forever. No subscriptions, no expiry dates. If a creator updates their product, you get those updates free.",
  },
  {
    q: "How do I become a creator on DigitalStore?",
    a: "Apply through our Creator Program page. Our team reviews your portfolio within 48 hours. We accept creators with at least one high-quality product ready to publish.",
  },
  {
    q: "What's your refund policy?",
    a: "We offer a 7-day no-questions-asked refund on all digital products. If something doesn't work as described, we'll make it right.",
  },
  {
    q: "How do creators get paid?",
    a: "Creators receive 80% of every sale, paid out weekly via Stripe or PayPal. No thresholds — even $1 gets paid out.",
  },
]

// ─── Component ───────────────────────────────────────────────────────────────

export default function AboutPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [counters, setCounters] = useState({ customers: 0, products: 0, creators: 0, countries: 0 })
  const statsRef = useRef<HTMLDivElement>(null)
  const counted = useRef(false)

  // Animated counters
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true
          const targets = { customers: 5000, products: 1200, creators: 200, countries: 40 }
          const duration = 2000
          const steps = 60
          const interval = duration / steps
          let step = 0
          const timer = setInterval(() => {
            step++
            const progress = step / steps
            const ease = 1 - Math.pow(1 - progress, 3)
            setCounters({
              customers: Math.round(targets.customers * ease),
              products: Math.round(targets.products * ease),
              creators: Math.round(targets.creators * ease),
              countries: Math.round(targets.countries * ease),
            })
            if (step >= steps) clearInterval(timer)
          }, interval)
        }
      },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  const nextTestimonial = () => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  const prevTestimonial = () => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Ambient orbs */}
      <div className="orb orb-blue w-[700px] h-[700px] -top-[200px] -left-[250px]" />
      <div className="orb orb-cyan w-[500px] h-[500px] top-[500px] -right-[150px]" />
      <div className="orb orb-amber w-[400px] h-[400px] top-[120vh] left-[10%]" />
      <div className="orb orb-emerald w-[350px] h-[350px] top-[200vh] right-[5%]" />

      <Navbar />

      {/* ══════════════════════════════════════════
          1. HERO — Brand Story Opening
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Origin badge */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-10"
            style={{
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.3)",
              backdropFilter: "blur(10px)",
            }}
          >
            <span className="text-[#3B82F6]">&#9670;</span>
            <span className="text-sm text-[#3B82F6] font-semibold tracking-wide">
              Founded 2019 · Bangalore, India
            </span>
          </div>

          <h1
            className="text-5xl md:text-[80px] lg:text-[96px] font-extrabold leading-[0.92] tracking-[-0.04em] text-white mb-8"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            We built the store
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 60%, #10B981 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              we always wanted.
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl text-[#94A3B8] max-w-[680px] mx-auto leading-relaxed mb-12"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300 }}
          >
            DigitalStore was born from frustration. Too many stores, too little quality.
            We set out to build something different — a curated home for the world's best digital products.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
            <Link
              href="/products"
              className="px-10 py-4 rounded-xl font-bold text-white inline-flex items-center gap-2 text-base"
              style={{
                background: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)",
                boxShadow: "0 4px 30px rgba(59,130,246,0.35), 0 0 60px rgba(6,182,212,0.15)",
              }}
            >
              Explore Products <ArrowRight size={18} />
            </Link>
            <button
              className="px-10 py-4 rounded-xl font-semibold text-base inline-flex items-center gap-2"
              style={{ border: "2px solid rgba(255,255,255,0.12)", color: "#94A3B8" }}
            >
              <Play size={16} className="fill-current" /> Watch Our Story
            </button>
          </div>

          {/* Social proof strip */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex -space-x-3">
              {["1","5","9","12","25","32","44"].map((n) => (
                <img
                  key={n}
                  src={`https://i.pravatar.cc/40?img=${n}`}
                  alt="customer"
                  className="w-10 h-10 rounded-full object-cover"
                  style={{ border: "2px solid #030712" }}
                />
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1 mb-1">
                {[1,2,3,4,5].map(s => <Star key={s} size={14} className="fill-[#F59E0B] text-[#F59E0B]" />)}
                <span className="text-white font-bold text-sm ml-1">4.9/5</span>
              </div>
              <p className="text-[#94A3B8] text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                From <span className="text-white font-semibold">3,200+</span> verified reviews
              </p>
            </div>
            <div
              className="h-10 w-px"
              style={{ background: "rgba(255,255,255,0.1)" }}
            />
            <div className="text-left">
              <p className="text-white font-bold text-sm">Product Hunt</p>
              <p className="text-[#F59E0B] text-sm font-semibold">#1 Product of the Day 🏆</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. ANIMATED STATS
      ══════════════════════════════════════════ */}
      <section ref={statsRef} className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: counters.customers, suffix: "+", label: "Happy Customers", sub: "across 40 countries" },
              { value: counters.products, suffix: "+", label: "Digital Products", sub: "hand-curated" },
              { value: counters.creators, suffix: "+", label: "Active Creators", sub: "earning every week" },
              { value: counters.countries, suffix: "", label: "Countries", sub: "and growing" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass-card p-8 text-center"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "20px",
                }}
              >
                <p
                  className="text-5xl font-extrabold mb-2"
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value.toLocaleString()}{stat.suffix}
                </p>
                <p className="text-white font-bold mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {stat.label}
                </p>
                <p className="text-xs text-[#64748B]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. ORIGIN STORY — Brand Storytelling
      ══════════════════════════════════════════ */}
      <section className="py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Story text */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.3)" }}
              >
                <span className="text-xs text-[#3B82F6] font-bold tracking-widest uppercase">The Origin Story</span>
              </div>

              <h2
                className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-[-0.03em] mb-8"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                It started with one
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #F59E0B, #3B82F6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  very bad purchase.
                </span>
              </h2>

              <div
                className="space-y-5 text-[#94A3B8] text-lg leading-relaxed"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300 }}
              >
                <p>
                  In 2019, Aryan spent three hours browsing a popular design store looking for a
                  UI kit for a client project. He found something that looked promising, paid $49, and
                  downloaded a ZIP file full of broken components and outdated specs.
                </p>
                <p>
                  He was furious. Not just at the product — but at the fact that nothing in the
                  store experience had prepared him for the disappointment. No editorial review.
                  No real ratings. No accountability.
                </p>
                <p>
                  That weekend, he started building DigitalStore — a store with one rule:
                  <span className="text-white font-semibold"> if it wouldn't make the cut for his own projects, it wouldn't be listed.</span>
                </p>
              </div>

              <div
                className="mt-10 p-6 rounded-2xl"
                style={{
                  background: "rgba(59,130,246,0.06)",
                  border: "1px solid rgba(59,130,246,0.2)",
                }}
              >
                <Quote size={24} className="text-[#3B82F6] mb-3" />
                <p
                  className="text-white text-lg leading-relaxed font-medium mb-4"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  "I didn't want to build another store. I wanted to build the one I
                  wished had existed when I needed it most."
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4)", fontFamily: "'Space Mono', monospace" }}
                  >
                    AM
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>Aryan Mehta</p>
                    <p className="text-[#64748B] text-xs">Founder & CEO, DigitalStore</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div
                className="absolute left-[20px] top-4 bottom-4 w-px"
                style={{ background: "linear-gradient(to bottom, #3B82F6, rgba(59,130,246,0.05))" }}
              />
              <div className="flex flex-col gap-0">
                {milestones.map((m) => (
                  <div key={m.year} className="flex gap-6 pb-10 relative">
                    {/* Dot */}
                    <div className="flex flex-col items-center">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 relative z-10"
                        style={{
                          background: m.color,
                          boxShadow: `0 0 20px ${m.color}66`,
                          fontFamily: "'Space Mono', monospace",
                        }}
                      >
                        {m.year.slice(2)}
                      </div>
                    </div>
                    <div className="flex-1 pt-1">
                      <p
                        className="text-white font-bold text-base mb-1"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                      >
                        {m.title}
                        <span className="ml-2 text-xs font-mono" style={{ color: m.color }}>{m.year}</span>
                      </p>
                      <p
                        className="text-[#94A3B8] text-sm leading-relaxed"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {m.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. MISSION & VALUES
      ══════════════════════════════════════════ */}
      <section className="py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.3)" }}
            >
              <span className="text-xs text-[#3B82F6] font-bold tracking-widest uppercase">What Drives Us</span>
            </div>
            <h2
              className="text-4xl md:text-6xl font-extrabold text-white tracking-[-0.03em] mb-5"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Our Mission &{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Values
              </span>
            </h2>
            <p
              className="text-xl text-[#94A3B8] max-w-[580px] mx-auto leading-relaxed"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Everything we build flows from four non-negotiable principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="group relative overflow-hidden p-10 rounded-[20px] transition-all duration-500 hover:-translate-y-2"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px]"
                  style={{ background: `radial-gradient(circle at 30% 30%, ${i === 0 ? "rgba(59,130,246,0.06)" : i === 1 ? "rgba(245,158,11,0.06)" : i === 2 ? "rgba(6,182,212,0.06)" : "rgba(16,185,129,0.06)"}, transparent 70%)` }}
                />
                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: v.gradient }}
                  >
                    <v.icon size={26} className="text-white" />
                  </div>
                  <h3
                    className="text-2xl font-bold text-white mb-4"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {v.title}
                  </h3>
                  <p
                    className="text-[#94A3B8] leading-relaxed text-base"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. TEAM — Humanizing the Brand
      ══════════════════════════════════════════ */}
      <section className="py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.3)" }}
            >
              <span className="text-xs text-[#3B82F6] font-bold tracking-widest uppercase">The Humans Behind It</span>
            </div>
            <h2
              className="text-4xl md:text-6xl font-extrabold text-white tracking-[-0.03em] mb-5"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Meet the{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #F59E0B, #3B82F6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Team
              </span>
            </h2>
            <p
              className="text-lg text-[#94A3B8] max-w-[540px] mx-auto"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Small team, big ambitions. Every one of us was a creator or buyer first.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="group glass-card p-8 text-center transition-all duration-500 hover:-translate-y-3 relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "20px",
                }}
              >
                {/* ── UPDATED: Real photo avatar ── */}
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-5 relative overflow-hidden"
                  style={{ boxShadow: "0 8px 32px rgba(59,130,246,0.25)" }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                  {/* Online indicator */}
                  <span
                    className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full"
                    style={{ background: "#10B981", border: "2px solid #030712" }}
                  />
                </div>

                <h3
                  className="text-xl font-bold text-white mb-1"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-4"
                  style={{ color: "#3B82F6", fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {member.role}
                </p>
                <p
                  className="text-sm text-[#94A3B8] leading-relaxed mb-5"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {member.bio}
                </p>
                {/* Fun fact */}
                <div
                  className="px-4 py-2.5 rounded-xl text-xs font-medium"
                  style={{
                    background: "rgba(59,130,246,0.08)",
                    border: "1px solid rgba(59,130,246,0.15)",
                    color: "#64748B",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  ✦ {member.funFact}
                </div>
              </div>
            ))}
          </div>

          {/* Hiring CTA */}
          <div className="text-center mt-12">
            <p className="text-[#94A3B8] mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              We're growing — and we'd love to meet you.
            </p>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 font-semibold text-[#3B82F6] hover:text-white transition-colors"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              View open roles <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          6. SOCIAL PROOF — Testimonials carousel
      ══════════════════════════════════════════ */}
      <section className="py-28 px-6">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.3)" }}
            >
              <span className="text-xs text-[#3B82F6] font-bold tracking-widest uppercase">Social Proof</span>
            </div>
            <h2
              className="text-4xl md:text-6xl font-extrabold text-white tracking-[-0.03em]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              What our community{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                says
              </span>
            </h2>
          </div>

          {/* Testimonial card */}
          <div
            className="relative p-12 md:p-16 rounded-[28px] mb-8"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(59,130,246,0.15)",
            }}
          >
            <div
              className="absolute -top-10 -left-6 w-48 h-48 rounded-full opacity-15"
              style={{ background: "#3B82F6", filter: "blur(80px)" }}
            />
            <div
              className="absolute -bottom-10 -right-6 w-48 h-48 rounded-full opacity-15"
              style={{ background: "#06B6D4", filter: "blur(80px)" }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-1 mb-8">
                {[1,2,3,4,5].map(s => <Star key={s} size={20} className="fill-[#F59E0B] text-[#F59E0B]" />)}
              </div>

              <Quote size={32} className="text-[#3B82F6] mb-6 opacity-60" />

              <p
                className="text-white text-2xl md:text-3xl leading-relaxed font-medium mb-10"
                style={{ fontFamily: "'Syne', sans-serif", fontWeight: 500 }}
              >
                {testimonials[activeTestimonial].quote}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-white"
                    style={{
                      background: testimonials[activeTestimonial].gradient,
                      fontFamily: "'Space Mono', monospace",
                    }}
                  >
                    {testimonials[activeTestimonial].name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-white font-bold" style={{ fontFamily: "'Syne', sans-serif" }}>
                      {testimonials[activeTestimonial].name}
                    </p>
                    <p className="text-sm text-[#64748B]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {testimonials[activeTestimonial].role}
                    </p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <ChevronLeft size={20} className="text-white" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    <ChevronRight size={20} className="text-white" />
                  </button>
                </div>
              </div>

              {/* Dots */}
              <div className="flex items-center gap-2 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === activeTestimonial ? "24px" : "8px",
                      height: "8px",
                      background: i === activeTestimonial ? "#3B82F6" : "rgba(255,255,255,0.15)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          7. PRESS / MEDIA MENTIONS
      ══════════════════════════════════════════ */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <p
            className="text-center text-sm text-[#64748B] font-semibold tracking-widest uppercase mb-10"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            As featured in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {pressLogos.map((press) => (
              <div
                key={press.name}
                className="flex flex-col items-center gap-2 px-8 py-5 rounded-2xl transition-all hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p
                  className="text-white font-bold text-base"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {press.name}
                </p>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(59,130,246,0.1)",
                    color: "#3B82F6",
                    border: "1px solid rgba(59,130,246,0.25)",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {press.mention}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          8. ACHIEVEMENTS / CREDIBILITY
      ══════════════════════════════════════════ */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Award, title: "Forbes India 30 Under 30", desc: "Aryan Mehta recognized in the 2023 class of India's top young entrepreneurs.", color: "#F59E0B" },
              { icon: CheckCircle, title: "SOC 2 Type II Certified", desc: "Enterprise-grade security. Your data and purchases are protected by industry-leading standards.", color: "#10B981" },
              { icon: Users, title: "2,000+ Creator Partners", desc: "From solo indie creators to design studios — our seller community is thriving and growing.", color: "#3B82F6" },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-5 p-8 rounded-[20px]"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}20`, border: `1px solid ${item.color}40` }}
                >
                  <item.icon size={22} style={{ color: item.color }} />
                </div>
                <div>
                  <h4
                    className="text-white font-bold mb-2"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-sm text-[#94A3B8] leading-relaxed"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          9. FAQ
      ══════════════════════════════════════════ */}
      <section className="py-28 px-6">
        <div className="max-w-[760px] mx-auto">
          <div className="text-center mb-14">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.3)" }}
            >
              <span className="text-xs text-[#3B82F6] font-bold tracking-widest uppercase">Quick Answers</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-extrabold text-white tracking-[-0.03em]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Common{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Questions
              </span>
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: openFaq === i ? "1px solid rgba(59,130,246,0.3)" : "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-7 text-left"
                >
                  <span
                    className="text-white font-bold text-base pr-4"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="text-[#3B82F6] text-xl font-bold flex-shrink-0 transition-transform duration-300"
                    style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-7 pb-7">
                    <p
                      className="text-[#94A3B8] leading-relaxed"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          10. DUAL CTA — Products + Contact
      ══════════════════════════════════════════ */}
      <section className="py-28 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div
            className="relative p-14 md:p-20 text-center overflow-hidden rounded-[32px]"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(59,130,246,0.2)",
            }}
          >
            <div
              className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-15"
              style={{ background: "#3B82F6", filter: "blur(120px)" }}
            />
            <div
              className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-15"
              style={{ background: "#06B6D4", filter: "blur(120px)" }}
            />

            <div className="relative z-10">
              <h2
                className="text-4xl md:text-6xl font-extrabold text-white tracking-[-0.03em] mb-5"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Ready to be part of
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 50%, #10B981 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  the story?
                </span>
              </h2>
              <p
                className="text-xl text-[#94A3B8] mb-14 max-w-[520px] mx-auto leading-relaxed"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Whether you're here to discover incredible products or share your own — there's
                a place for you at DigitalStore.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
                <Link
                  href="/products"
                  className="px-10 py-5 rounded-xl font-bold text-white inline-flex items-center gap-2 text-base"
                  style={{
                    background: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)",
                    boxShadow: "0 4px 30px rgba(59,130,246,0.3)",
                  }}
                >
                  Browse Products <ArrowRight size={18} />
                </Link>
                <Link
                  href="/auth"
                  className="px-10 py-5 rounded-xl font-semibold text-base"
                  style={{ border: "2px solid #3B82F6", color: "#3B82F6" }}
                >
                  Start Selling Free
                </Link>
              </div>

              {/* Contact strip */}
              <div
                className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span className="text-sm text-[#64748B]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Questions? Talk to us directly:
                </span>
                <div className="flex items-center gap-5">
                  <a
                    href="mailto:hello@digitalstore.in"
                    className="flex items-center gap-2 text-sm font-semibold text-[#94A3B8] hover:text-white transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    <Mail size={16} className="text-[#3B82F6]" />
                    hello@digitalstore.in
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-semibold text-[#94A3B8] hover:text-white transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    <MessageCircle size={16} className="text-[#06B6D4]" />
                    Live Chat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}