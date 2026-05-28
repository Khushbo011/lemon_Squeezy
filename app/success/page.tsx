"use client"

import { useEffect, useState, Suspense } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Download, FileText, Mail, ArrowLeft, Share2 } from "lucide-react"

function ConfettiPiece({ index }: { index: number }) {
  const colors = ["#BFFF00", "#FF2D92", "#A855F7", "#00F5FF", "#FF6B35"]
  const color = colors[index % colors.length]
  const left = Math.random() * 100
  const delay = Math.random() * 2
  const duration = 2 + Math.random() * 2
  const size = 10 + Math.random() * 10

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

function SuccessContent() {
  const searchParams = useSearchParams()
  const productName = searchParams.get("product") || "Premium UI Kit"
  const [showConfetti, setShowConfetti] = useState(true)
  const [checkAnimated, setCheckAnimated] = useState(false)

  useEffect(() => {
    // Trigger check animation after mount
    const timer = setTimeout(() => setCheckAnimated(true), 100)
    // Hide confetti after animation
    const confettiTimer = setTimeout(() => setShowConfetti(false), 5000)
    return () => {
      clearTimeout(timer)
      clearTimeout(confettiTimer)
    }
  }, [])

  const steps = [
    { icon: Mail, text: "Check your email for receipt", color: "#BFFF00" },
    { icon: Download, text: "Download your files", color: "#FF2D92" },
    { icon: Share2, text: "Tag us @DigitalStore", color: "#00F5FF" },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-14 relative overflow-hidden">
      {/* Animated Orbs - Gen Z colors */}
      <div className="orb orb-lime w-[500px] h-[500px] -top-[150px] -left-[150px]" />
      <div className="orb orb-pink w-[400px] h-[400px] bottom-[30px] -right-[120px]" />
      <div className="orb orb-purple w-[350px] h-[350px] top-[25%] right-[15%]" />
      <div className="orb orb-cyan w-[300px] h-[300px] bottom-[25%] left-[10%]" />

      {/* Confetti */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 60 }).map((_, i) => (
            <ConfettiPiece key={i} index={i} />
          ))}
        </div>
      )}

      <div className="relative z-10 text-center max-w-xl">
        {/* Animated Checkmark */}
        <div
          className="w-36 h-36 mx-auto mb-10 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, rgba(191, 255, 0, 0.15), rgba(255, 45, 146, 0.1))",
            border: "3px solid transparent",
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03), rgba(255,255,255,0.03)), linear-gradient(135deg, #BFFF00 0%, #FF2D92 50%, #A855F7 100%)`,
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            boxShadow: "0 0 60px rgba(191, 255, 0, 0.2), 0 0 100px rgba(255, 45, 146, 0.1)",
          }}
        >
          <svg
            width="72"
            height="72"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 32L28 44L48 20"
              stroke="url(#checkGradientGenZ)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={checkAnimated ? "draw-check" : ""}
              style={{
                strokeDasharray: 100,
                strokeDashoffset: checkAnimated ? 0 : 100,
                transition: "stroke-dashoffset 1.2s ease",
              }}
            />
            <defs>
              <linearGradient id="checkGradientGenZ" x1="16" y1="32" x2="48" y2="32">
                <stop stopColor="#BFFF00" />
                <stop offset="0.5" stopColor="#FF2D92" />
                <stop offset="1" stopColor="#A855F7" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Headline */}
        <h1
          className="text-4xl md:text-6xl font-extrabold mb-5"
          style={{
            fontFamily: "'Syne', sans-serif",
            background: "linear-gradient(135deg, #BFFF00 0%, #FF2D92 50%, #A855F7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Payment Successful!
        </h1>
        <p className="text-xl text-[#71717A] mb-12" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Your purchase is confirmed. Get ready to create something <span className="text-[#BFFF00] font-bold">incredible</span>.
        </p>

        {/* Purchase Summary Card */}
        <div
          className="glass-card p-10 mb-12 text-left"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(24px)",
            border: "2px solid rgba(191, 255, 0, 0.15)",
            borderRadius: "28px",
          }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-sm text-[#71717A] mb-2 font-bold uppercase tracking-wider">Product</p>
              <p className="text-2xl font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>{productName}</p>
            </div>
            <div
              className="px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider"
              style={{
                background: "linear-gradient(135deg, rgba(191, 255, 0, 0.2), rgba(0, 245, 255, 0.15))",
                border: "1px solid rgba(0, 245, 255, 0.3)",
                color: "#00F5FF",
              }}
            >
              AnytimeAccess
            </div>
          </div>

          {/* Download Button */}
          <button
            className="w-full py-5 rounded-xl font-extrabold text-[#050505] text-lg uppercase tracking-wide flex items-center justify-center gap-3 transition-all hover:scale-[1.02] hover:rotate-1"
            style={{
              background: "linear-gradient(135deg, #BFFF00 0%, #FF2D92 50%, #A855F7 100%)",
              boxShadow: "0 4px 30px rgba(191, 255, 0, 0.3)",
            }}
          >
            <Download size={24} />
            Download Now
          </button>

          {/* View License Link */}
          <button className="w-full mt-5 py-4 text-[#71717A] hover:text-[#BFFF00] transition-colors flex items-center justify-center gap-2 font-bold uppercase tracking-wide">
            <FileText size={18} />
            View License
          </button>
        </div>

        {/* What&apos;s Next Section */}
        <div className="mb-12">
          <h2
            className="text-2xl font-bold text-white mb-8"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            What&apos;s <span className="text-gradient">next?</span>
          </h2>
          <div className="flex flex-col gap-5">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex items-center gap-5 p-5 rounded-2xl transition-all hover:scale-[1.02]"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: `2px solid ${step.color}20`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${step.color}20`,
                    border: `2px solid ${step.color}40`,
                  }}
                >
                  <step.icon size={22} style={{ color: step.color }} />
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-extrabold"
                    style={{
                      background: "linear-gradient(135deg, #BFFF00, #00F5FF)",
                      color: "#050505",
                    }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-white font-bold text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{step.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Store */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-bold text-[#BFFF00] uppercase tracking-wide transition-all hover:bg-[#BFFF00]/10 hover:scale-105"
          style={{
            background: "rgba(255, 255, 255, 0.04)",
            border: "2px solid rgba(191, 255, 0, 0.3)",
          }}
        >
          <ArrowLeft size={20} />
          Back to Store
        </Link>
      </div>

      {/* Add confetti keyframes */}
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

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#050505]">
          <div className="animate-pulse text-[#BFFF00] font-bold uppercase tracking-wider">Loading...</div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  )
}
