"use client"

import { useEffect, useState, Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ShieldCheck, Mail, ArrowLeft, Star, ExternalLink, HelpCircle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

function ConfettiPiece({ index }: { index: number }) {
  const colors = ["#3B82F6", "#06B6D4", "#10B981", "#F59E0B", "#EF4444"]
  const color = colors[index % colors.length]
  const left = Math.random() * 100
  const delay = Math.random() * 2
  const duration = 2 + Math.random() * 2
  const size = 8 + Math.random() * 8

  return (
    <div
      className="fixed pointer-events-none"
      style={{
        left: `${left}%`,
        top: "-20px",
        width: `${size}px`,
        height: `${size}px`,
        background: color,
        borderRadius: Math.random() > 0.5 ? "50%" : "4px",
        animation: `confetti-fall ${duration}s ease-in ${delay}s forwards`,
        transform: `rotate(${Math.random() * 360}deg)`,
        zIndex: 100,
        boxShadow: `0 0 10px ${color}80`,
      }}
    />
  )
}

function ThankYouContent() {
  const searchParams = useSearchParams()
  const productName = searchParams.get("product") || "Karvo CRM SaaS"
  const [showConfetti, setShowConfetti] = useState(true)
  const [animateCheck, setAnimateCheck] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimateCheck(true), 150)
    const confettiTimer = setTimeout(() => setShowConfetti(false), 5000)
    return () => {
      clearTimeout(timer)
      clearTimeout(confettiTimer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col justify-between">
      {/* Animated background blobs */}
      <div className="orb orb-blue w-[500px] h-[500px] -top-[100px] -left-[100px]" />
      <div className="orb orb-cyan w-[450px] h-[450px] bottom-[15%] -right-[150px]" />

      <Navbar />

      {/* Confetti */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <ConfettiPiece key={i} index={i} />
          ))}
        </div>
      )}

      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 py-16 text-center max-w-3xl mx-auto">

        {/* Success Icon */}
        <div
          className="w-28 h-28 mx-auto mb-8 rounded-full flex items-center justify-center transition-transform duration-1000"
          style={{
            background: "rgba(59, 130, 246, 0.1)",
            border: "2px solid rgba(59, 130, 246, 0.2)",
            boxShadow: "0 0 40px rgba(59, 130, 246, 0.2)",
            transform: animateCheck ? "scale(1)" : "scale(0.8)",
          }}
        >
          <ShieldCheck size={56} className="text-blue-400" />
        </div>

        {/* Headline */}
        <h1
          className="text-4xl md:text-6xl font-extrabold mb-4"
          style={{
            fontFamily: "'Syne', sans-serif",
            background: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 50%, #10B981 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Thank You for Your Purchase!
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Your transaction was successful. Get ready to elevate your business operations with <span className="text-blue-400 font-semibold">{productName}</span>.
        </p>

        {/* Product Contents & Delivery details card */}
        <div
          className="glass-card p-8 md:p-10 mb-10 text-left w-full"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(59, 130, 246, 0.2)",
            borderRadius: "24px",
          }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-white/5 pb-6 mb-6 gap-4">
            <div>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Product Details</p>
              <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                {productName}
              </h2>
            </div>
            <span
              className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 border border-blue-500/30 text-blue-400"
            >
              Lifetime Access License
            </span>
          </div>

          {/* Features / Content Description */}
          <div className="mb-8">
            <h3 className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-4">What you receive:</h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-300" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-blue-400">&#10004;</span> Full Access to Karvo CRM dashboard
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-blue-400">&#10004;</span> Contact & Lead management system
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-blue-400">&#10004;</span> Sales pipeline & automation tools
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-blue-400">&#10004;</span> Custom reporting & performance analytics
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-blue-400">&#10004;</span> 24/7 Premium developer support
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-blue-400">&#10004;</span> Free updates & future modules
              </li>
            </ul>
          </div>

          {/* How Customer Receives the Service (Digital Delivery) */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-2 uppercase tracking-wide">
              <Mail size={16} className="text-cyan-400" />
              How you will receive this service:
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              This is a <strong className="text-cyan-400 font-semibold">digital service</strong>. We have sent an email containing your login details and account setup instructions directly to your payment email address. No physical shipment is required.
            </p>
          </div>

          {/* CTA Action button */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="https://dashboard.karvocrm.store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-4 rounded-xl font-bold text-black text-center text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-transform hover:scale-[1.01]"
              style={{
                background: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)",
                boxShadow: "0 4px 20px rgba(59, 130, 246, 0.3)",
              }}
            >
              Set Up CRM Account
              <ExternalLink size={16} />
            </a>
            <Link
              href="/contact-page"
              className="px-6 py-4 rounded-xl font-semibold border border-white/10 text-white hover:bg-white/5 transition text-center text-sm flex items-center justify-center gap-2"
            >
              <HelpCircle size={16} />
              Need Help?
            </Link>
          </div>
        </div>

        {/* Back to Store */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <ArrowLeft size={16} />
          Return to Store Home
        </Link>
      </main>

      <Footer />

      {/* Confetti Animation Keyframes */}
      <style jsx global>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(1080deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-black">
          <div className="animate-pulse text-blue-400 font-bold uppercase tracking-wider">Loading confirmation...</div>
        </div>
      }
    >
      <ThankYouContent />
    </Suspense>
  )
}
