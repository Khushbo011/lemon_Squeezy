"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, Play, Palette, Layout, Type, Sparkles, Code, FileText } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { ProductCard } from "@/components/product-card"
import { Footer } from "@/components/footer"

const rotatingWords = ["Creators", "Designers", "Developers", "Founders"]

const featuredProducts = [
  {
    id: "1",
    title: "Nebula UI Kit",
    creator: "designpro",
    category: "UI Kit",
    price: 99,
    originalPrice: 59,
    rating: 5,
    reviewCount: 128,
    isHot: true,
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=220&fit=crop&auto=format",
    checkoutUrl: "https://digitalnestt.lemonsqueezy.com/checkout/buy/f83d063a-7742-4d82-b26b-a918dd0cd42d"
  },
  {
    id: "2",
    title: "Framer Portfolio",
    creator: "webcrafter",
    category: "Framer",
    price: 99,
    rating: 4,
    reviewCount: 86,
    isNew: true,
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=220&fit=crop&auto=format",
  },
  {
    id: "3",
    title: "3D Icon Pack Pro",
    creator: "iconmaster",
    category: "Icons",
    price: 99,
    originalPrice: 39,
    rating: 5,
    reviewCount: 234,
    image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?w=400&h=220&fit=crop&auto=format",
  },
  {
    id: "4",
    title: "Notion Dashboard",
    creator: "productivity",
    category: "Notion",
    price: 99,
    rating: 4,
    reviewCount: 67,
    isNew: true,
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=220&fit=crop&auto=format",
  },
  {
    id: "5",
    title: "Display Sans Pro",
    creator: "typefoundry",
    category: "Fonts",
    price: 99,
    rating: 5,
    reviewCount: 156,
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&h=220&fit=crop&auto=format",
  },
  {
    id: "6",
    title: "SaaS Landing Kit",
    creator: "landinglab",
    category: "Landing",
    price: 299,
    originalPrice: 149,
    rating: 5,
    reviewCount: 312,
    isHot: true,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=220&fit=crop&auto=format",
  },
  {
    id: "7",
    title: "Top 5 AI Tools",
    creator: "edumaster",
    category: "Education",
    price: 499,
    originalPrice: 199,
    rating: 5,
    reviewCount: 845,
    isHot: true,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=220&fit=crop&auto=format",
    checkoutUrl: "https://drive.google.com/drive/folders/1ZshFscuQOkie64_mA87s1AxMQCZcGwQ9?usp=drive_link"
  },
]

const categories = [
  { name: "UI Kits", count: 128, icon: Palette, gradient: "linear-gradient(135deg, #3B82F6, #06B6D4)" },
  { name: "Templates", count: 96, icon: Layout, gradient: "linear-gradient(135deg, #F59E0B, #3B82F6)" },
  { name: "Icons", count: 256, icon: Sparkles, gradient: "linear-gradient(135deg, #06B6D4, #10B981)" },
  { name: "Fonts", count: 64, icon: Type, gradient: "linear-gradient(135deg, #F59E0B, #EF4444)" },
  { name: "Code", count: 48, icon: Code, gradient: "linear-gradient(135deg, #10B981, #06B6D4)" },
  { name: "Notion", count: 82, icon: FileText, gradient: "linear-gradient(135deg, #3B82F6, #06B6D4)" },
]

const testimonials = [
  {
    quote: "DigitalStore completely transformed how I find design assets.",
    name: "Sarah Chen",
    role: "Product Designer at Stripe",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    quote: "As a creator, I've made more sales here than any other platform.",
    name: "Marcus Williams",
    role: "Independent Creator",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    quote: "The curation is chef's kiss.",
    name: "Emma Rodriguez",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/100?img=3",
  },
]

const marqueeItems = [
  "UI Kits",
  "Icon Packs",
  "Framer Templates",
  "Notion Dashboards",
  "Figma Systems",
  "Landing Pages",
  "Font Bundles",
  "Lottie Animations",
]

export default function HomePage() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length)
        setIsAnimating(false)
      }, 300)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="orb orb-blue w-[700px] h-[700px] -top-[250px] -left-[250px]" />
        <div className="orb orb-cyan w-[500px] h-[500px] top-[150px] -right-[150px]" />
        <div className="orb orb-amber w-[500px] h-[500px] bottom-[50px] left-[15%]" />
        <div className="orb orb-emerald w-[400px] h-[400px] top-[50%] right-[10%]" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
            style={{
              background: "rgba(59, 130, 246, 0.1)",
              border: "1px solid rgba(59, 130, 246, 0.3)",
              backdropFilter: "blur(10px)",
            }}
          >
            <span className="text-[#3B82F6] text-sm">&#9670;</span>
            <span className="text-sm text-[#3B82F6] font-semibold tracking-wide">500+ Digital Products</span>
          </div>

          <h1
            className="font-display text-5xl md:text-7xl lg:text-[90px] font-extrabold leading-[0.9] tracking-[-0.04em] mb-8"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            <span className="text-white block">The Marketplace</span>
            <span className="text-white block mt-2">
              Built for{" "}
              <span
                className="inline-block relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 50%, #10B981 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  minWidth: "220px",
                  transition: "all 0.3s ease",
                  opacity: isAnimating ? 0 : 1,
                  transform: isAnimating ? "translateY(-15px)" : "translateY(0)",
                }}
              >
                {rotatingWords[currentWordIndex]}
              </span>
            </span>
            <span
              className="block mt-2"
              style={{
                background: "linear-gradient(135deg, #F59E0B 0%, #3B82F6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              & Builders.
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-[#94A3B8] max-w-[580px] mx-auto mb-12 leading-relaxed"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Download premium templates, UI kits, icons, and design assets — built by top creators for modern products.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link
              href="/products"
              className="px-10 py-4 text-base font-bold rounded-xl inline-flex items-center gap-2"
              style={{
                background: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)",
                boxShadow: "0 4px 30px rgba(59, 130, 246, 0.3), 0 0 60px rgba(6, 182, 212, 0.2)",
                color: "#FFFFFF",
              }}
            >
              Browse Products
              <span>&#8594;</span>
            </Link>
            <button
              className="px-10 py-4 text-base font-semibold rounded-xl inline-flex items-center gap-2"
              style={{
                border: "2px solid #3B82F6",
                color: "#3B82F6",
                background: "transparent",
              }}
            >
              <Play size={18} className="fill-[#3B82F6]" />
              Watch Demo
            </button>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="flex -space-x-3">
              {[
                "https://i.pravatar.cc/40?img=1",
                "https://i.pravatar.cc/40?img=5",
                "https://i.pravatar.cc/40?img=9",
                "https://i.pravatar.cc/40?img=12",
                "https://i.pravatar.cc/40?img=25",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="creator"
                  className="w-10 h-10 rounded-full object-cover"
                  style={{ border: "3px solid #030712" }}
                />
              ))}
            </div>
            <span className="text-sm text-[#94A3B8] font-medium">
              Trusted by <span className="text-[#3B82F6] font-bold">12,000+</span> creators
            </span>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown size={28} className="text-[#3B82F6]" />
          </div>
        </div>
      </section>

      {/* Marquee Strip */}
      <section className="py-6 overflow-hidden" style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4)" }}>
        <div className="relative flex">
          <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-3 text-base font-bold text-white uppercase tracking-wide">
                <span className="text-white/80">&#9670;</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-28 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between mb-14">
            <h2
              className="font-display text-4xl md:text-6xl font-extrabold text-white"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Trending <span className="text-gradient">This Week</span>
            </h2>
            <Link href="/products" className="text-[#3B82F6] hover:text-white transition-colors font-semibold flex items-center gap-1">
              View all &#8594;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-28 px-6">
        <div className="max-w-[1400px] mx-auto">
          <h2
            className="font-display text-4xl md:text-6xl font-extrabold text-white text-center mb-20"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Browse by <span className="text-gradient">Category</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                // href="/products"
                href={`/category/${cat.name.toLowerCase().replace(" ", "-")}`}
                className="category-tile glass-card p-10 text-center cursor-pointer group"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  borderRadius: "20px",
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform group-hover:scale-110"
                  style={{ background: cat.gradient }}
                >
                  <cat.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {cat.name}
                </h3>
                <p className="text-sm text-[#94A3B8] font-medium">{cat.count} items</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 px-6">
        <div className="max-w-[1400px] mx-auto">
          <h2
            className="font-display text-4xl md:text-6xl font-extrabold text-white text-center mb-20"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Loved by creators <span className="text-gradient">worldwide</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="glass-card p-10 transition-all hover:scale-[1.02]"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  borderRadius: "20px",
                  transform: i === 1 ? "translateY(-20px)" : "none",
                }}
              >
                <p className="text-white text-lg leading-relaxed mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-full"
                    style={{
                      background: `linear-gradient(135deg, ${["#3B82F6", "#06B6D4", "#F59E0B"][i]}, ${["#06B6D4", "#10B981", "#3B82F6"][i]})`,
                    }}
                  />
                  <div>
                    <p className="text-white font-bold text-lg" style={{ fontFamily: "'Syne', sans-serif" }}>{testimonial.name}</p>
                    <p className="text-sm text-[#94A3B8]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-28 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div
            className="relative glass-card p-14 md:p-20 text-center overflow-hidden"
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(59, 130, 246, 0.2)",
              borderRadius: "32px",
            }}
          >
            <div className="absolute -top-24 -left-24 w-[400px] h-[400px] rounded-full opacity-20" style={{ background: "#3B82F6", filter: "blur(100px)" }} />
            <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full opacity-20" style={{ background: "#06B6D4", filter: "blur(100px)" }} />

            <div className="relative z-10">
              <h2
                className="font-display text-4xl md:text-6xl font-extrabold text-white mb-6"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Start selling your <span className="text-gradient">digital products</span> today.
              </h2>
              <p className="text-xl text-[#94A3B8] mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Join <span className="text-[#3B82F6] font-bold">2,000+</span> creators already earning on DigitalStore.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <Link
                  href="/auth"
                  className="px-10 py-5 text-lg font-bold rounded-xl"
                  style={{
                    background: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)",
                    boxShadow: "0 4px 30px rgba(59, 130, 246, 0.3), 0 0 60px rgba(6, 182, 212, 0.2)",
                    color: "#FFFFFF",
                  }}
                >
                  Get Started Free
                </Link>
                <button
                  className="px-10 py-5 text-lg font-semibold rounded-xl"
                  style={{ border: "2px solid #3B82F6", color: "#3B82F6", background: "transparent" }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
