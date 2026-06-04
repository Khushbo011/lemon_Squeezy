"use client"

import { useEffect, useState, Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { ShieldCheck, Mail, ArrowLeft, ExternalLink, HelpCircle } from "lucide-react"
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
  const productName = "5 AI Tools Bundle 🚀"

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

      {/* Background */}
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

        {/* Heading */}
        <h1
          className="text-4xl md:text-6xl font-extrabold mb-4"
          style={{
            background: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 50%, #10B981 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Thank You for Your Purchase!
        </h1>

        <p className="text-gray-500 mb-4">
          The debit is made by Digistore24.
        </p>

        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto">
          Your transaction was successful. You now have access to{" "}
          <span className="text-blue-400 font-semibold">{productName}</span>.
        </p>

        {/* PRODUCT CARD */}
        <div className="glass-card p-8 md:p-10 mb-10 text-left w-full"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(24px)",
            border: "1px solid rgba(59, 130, 246, 0.2)",
            borderRadius: "24px",
          }}
        >

          <div className="flex justify-between items-center border-b border-white/10 pb-6 mb-6">
            <div>
              <p className="text-xs text-gray-500 uppercase mb-1">Product</p>
              <h2 className="text-2xl font-bold">{productName}</h2>
            </div>

            <span className="px-4 py-1.5 text-xs font-bold bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-full">
              Anytime Access
            </span>
          </div>

          {/* WHAT YOU GET */}
          <div className="mb-8">
            <h3 className="text-sm text-gray-400 font-bold uppercase mb-4">
              What you receive:
            </h3>

            <ul className="grid sm:grid-cols-2 gap-3 text-gray-300">
              <li className="text-sm">✔ ChatGPT Prompt Bundle (1000+ Prompts)</li>
              <li className="text-sm">✔ AI Video Creation Tools Guide</li>
              <li className="text-sm">✔ AI Marketing Automation Kit</li>
              <li className="text-sm">✔ AI Resume Builder System</li>
              <li className="text-sm">✔ AI Content Writing Bundle</li>
              <li className="text-sm">✔ Anytime Updates & Access</li>
            </ul>
          </div>

          {/* DELIVERY */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <h3 className="text-sm font-bold flex items-center gap-2 mb-2">
              <Mail size={16} className="text-cyan-400" />
              Delivery Information
            </h3>

            <p className="text-gray-300 text-sm">
              This is a digital product. Your access details and download links
              have been sent to your email. No physical delivery required.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">

            <a
              href="/products"
              className="flex-1 py-4 rounded-xl font-bold text-black text-center text-sm uppercase tracking-wider"
              style={{
                background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
              }}
            >
              Explore More AI Tools
            </a>

            <Link
              href="/contact-page"
              className="px-6 py-4 border border-white/10 text-white rounded-xl text-sm flex items-center justify-center gap-2"
            >
              <HelpCircle size={16} />
              Need Help?
            </Link>
          </div>
        </div>

        {/* Back */}
        <Link href="/" className="text-gray-400 hover:text-white flex items-center gap-2">
          <ArrowLeft size={16} />
          Return to Store
        </Link>

      </main>

      <Footer />

      <style jsx global>{`
        @keyframes confetti-fall {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(1080deg); opacity: 0; }
        }
      `}</style>
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-black text-blue-400 font-bold">
        Loading...
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  )
}