"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Mail, Lock, User, Eye, EyeOff, Check, Zap, TrendingUp, Shield } from "lucide-react"

// export default function AuthPage() {
//   const router = useRouter()
//   const [isLogin, setIsLogin] = useState(true)
//   const [showPassword, setShowPassword] = useState(false)
//   const [isAnimating, setIsAnimating] = useState(false)
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   })
export default function AuthPage() {
  const router = useRouter()

  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  // ✅ 👉 YEH ADD KARO (IMPORTANT)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const user = {
      name: formData.name || "User",
      email: formData.email,
    }

    localStorage.setItem("user", JSON.stringify(user))
    router.push("/")
  }
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const handleTabSwitch = (login: boolean) => {
    if (login === isLogin) return
    setIsAnimating(true)
    setTimeout(() => {
      setIsLogin(login)
      setIsAnimating(false)
    }, 175)
  }

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   window.location.href = "/"
  // }

  const getPasswordStrength = (password: string): number => {
    let strength = 0
    if (password.length >= 8) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/[0-9]/.test(password)) strength++
    if (/[^A-Za-z0-9]/.test(password)) strength++
    return strength
  }

  const passwordStrength = getPasswordStrength(formData.password)
  const strengthLabels = ["Weak", "Fair", "Good", "Strong"]
  const strengthColors = ["#EF4444", "#F59E0B", "#06B6D4", "#10B981"]

  // Product cards with Unsplash images
  const products = [
    {
      name: "UI Kit Pro",
      price: "$49",
      sales: "1.2k sales",
      color: "#3B82F6",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=200&h=80&fit=crop&auto=format",
    },
    {
      name: "Logo Templates",
      price: "$29",
      sales: "890 sales",
      color: "#06B6D4",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=200&h=80&fit=crop&auto=format",
    },
    {
      name: "Notion Dashboard",
      price: "$19",
      sales: "2.4k sales",
      color: "#10B981",
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=200&h=80&fit=crop&auto=format",
    },
  ]

  return (
    <div className="min-h-screen flex relative overflow-hidden">
      {/* Animated Orbs */}
      <div className="orb orb-blue w-[600px] h-[600px] -top-[150px] -left-[150px]" />
      <div className="orb orb-cyan w-[500px] h-[500px] bottom-[50px] right-[5%]" />
      <div className="orb orb-amber w-[400px] h-[400px] top-[35%] left-[25%]" />
      <div className="orb orb-emerald w-[300px] h-[300px] top-[60%] right-[30%]" />

      {/* Left Panel - Branding */}
      <div className="hidden lg:flex flex-1 flex-col justify-center items-center p-14 relative z-10">
        <div className="max-w-lg">

          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-1 mb-10">
            <span
              className="text-[#3B82F6] text-2xl mr-1"
              style={{ textShadow: "0 0 25px rgba(59, 130, 246, 0.7)" }}
            >
              &#9670;
            </span>
            <span className="font-display text-4xl font-extrabold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
              Digital
            </span>
            <span
              className="font-display text-4xl font-extrabold"
              style={{
                fontFamily: "'Syne', sans-serif",
                background: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Store
            </span>
          </Link>

          {/* Tagline */}
          <h1
            className="text-5xl font-extrabold text-white mb-5 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Your digital <span className="text-gradient">storefront.</span>
          </h1>
          <p className="text-[#94A3B8] text-xl mb-14" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Start selling your digital products today.<br />
            Join 2,000+ creators already earning on DigitalStore.
          </p>

          {/* Product Cards with real images */}
          <div className="relative h-[240px] mb-14">
            {products.map((product, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  backdropFilter: "blur(10px)",
                  border: `1px solid ${product.color}30`,
                  borderRadius: "16px",
                  width: "210px",
                  left: `${i * 65}px`,
                  top: `${i * 32}px`,
                  transform: `rotate(${-6 + i * 6}deg)`,
                  zIndex: 3 - i,
                  padding: "14px",
                }}
              >
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full rounded-xl mb-3 object-cover"
                  style={{ height: "80px" }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = "none"
                    const next = target.nextElementSibling as HTMLElement
                    if (next) next.style.display = "block"
                  }}
                />
                {/* Fallback gradient */}
                <div
                  className="w-full rounded-xl mb-3"
                  style={{
                    height: "80px",
                    display: "none",
                    background: `linear-gradient(135deg, ${product.color}30, ${product.color}10)`,
                  }}
                />
                {/* Info row */}
                <div className="flex items-center justify-between">
                  <div>
                    <div
                      className="text-white text-xs font-bold mb-0.5"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {product.name}
                    </div>
                    <div className="text-[#94A3B8] text-xs">{product.sales}</div>
                  </div>
                  <div
                    className="text-xs font-bold px-2 py-1 rounded-lg"
                    style={{ background: `${product.color}20`, color: product.color }}
                  >
                    {product.price}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Bullets */}
          <div className="space-y-5">
            {[
              { icon: Zap, text: "Instant payouts, zero hassle", color: "#3B82F6" },
              { icon: TrendingUp, text: "Your store live in minutes", color: "#06B6D4" },
              { icon: Shield, text: "Keep 90% of every sale", color: "#F59E0B" },
            ].map(({ icon: Icon, text, color }, i) => (
              <div key={i} className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: `${color}20`, border: `1px solid ${color}40` }}
                >
                  <Icon size={22} style={{ color }} />
                </div>
                <span className="text-white font-semibold text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel - Auth Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-14 relative z-10">
        <div
          className="w-full max-w-[480px] p-10 md:p-14"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(59, 130, 246, 0.1)",
            borderRadius: "24px",
          }}
        >
          {/* Tab Toggle */}
          <div className="flex mb-10 p-1.5 rounded-xl" style={{ background: "rgba(255, 255, 255, 0.04)" }}>
            {["Login", "Sign Up"].map((tab) => {
              const isActive = (tab === "Login") === isLogin
              return (
                <button
                  key={tab}
                  onClick={() => handleTabSwitch(tab === "Login")}
                  className={`flex-1 py-4 rounded-xl text-sm font-semibold transition-all ${
                    isActive ? "text-white" : "text-[#94A3B8]"
                  }`}
                  style={{
                    background: isActive
                      ? "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)"
                      : "transparent",
                  }}
                >
                  {tab}
                </button>
              )
            })}
          </div>

          {/* Animated Form */}
          <div
            className={`transition-all duration-[350ms] ease-out ${
              isAnimating ? "opacity-0 translate-x-[-20px]" : "opacity-100 translate-x-0"
            }`}
          >
            {isLogin ? (
              // ── LOGIN ──
              <form onSubmit={handleSubmit}>
                <h2
                  className="text-3xl md:text-4xl font-extrabold text-white mb-3"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Welcome back
                </h2>
                <p className="text-[#94A3B8] mb-10 text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Sign in to access your store
                </p>

                {/* Email */}
                <div className="mb-6">
                  <div className="relative">
                    <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none" />
                    <input
                      type="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-glass w-full pl-11 py-5 text-lg"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="mb-6">
                  <div className="relative">
                    <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="input-glass w-full pl-11 pr-11 py-5 text-lg"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#3B82F6] transition-colors"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="text-right mb-8">
                  <Link href="#" className="text-sm text-[#3B82F6] hover:text-[#06B6D4] transition-colors font-semibold">
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full py-5 rounded-xl font-bold text-white text-lg transition-all hover:scale-[1.02]"
                  style={{
                    background: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)",
                    boxShadow: "0 4px 30px rgba(59, 130, 246, 0.3)",
                  }}
                >
                  Sign In &#8594;
                </button>

                <div className="flex items-center gap-4 my-8">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/30 to-transparent" />
                  <span className="text-sm text-[#94A3B8] font-medium">or continue with</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#06B6D4]/30 to-transparent" />
                </div>

                <button
                  type="button"
                  className="w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-3 transition-all hover:bg-white/10"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Continue with Google
                </button>

                <p className="text-center text-[#94A3B8] mt-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  No account?{" "}
                  <button
                    type="button"
                    onClick={() => handleTabSwitch(false)}
                    className="text-[#3B82F6] font-semibold hover:text-[#06B6D4] transition-colors"
                  >
                    Sign up free
                  </button>
                </p>
              </form>
            ) : (
              // ── SIGNUP ──
              <form onSubmit={handleSubmit}>
                <h2
                  className="text-3xl md:text-4xl font-extrabold text-white mb-3"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Start selling <span className="text-gradient">today</span>
                </h2>
                <p className="text-[#94A3B8] mb-10 text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Create your free seller account in seconds
                </p>

                {/* Name */}
                <div className="mb-6">
                  <div className="relative">
                    <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-glass w-full pl-11 py-5 text-lg"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-6">
                  <div className="relative">
                    <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none" />
                    <input
                      type="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-glass w-full pl-11 py-5 text-lg"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="mb-4">
                  <div className="relative">
                    <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Create password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="input-glass w-full pl-11 pr-11 py-5 text-lg"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#3B82F6] transition-colors"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {/* Password Strength */}
                {formData.password && (
                  <div className="mb-8">
                    <div className="flex gap-1.5 mb-2">
                      {[0, 1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="flex-1 h-1.5 rounded-full transition-all"
                          style={{
                            background:
                              i < passwordStrength
                                ? strengthColors[passwordStrength - 1]
                                : "rgba(255,255,255,0.1)",
                          }}
                        />
                      ))}
                    </div>
                    <p className="text-xs font-semibold" style={{ color: strengthColors[passwordStrength - 1] || "#94A3B8" }}>
                      {passwordStrength > 0 ? strengthLabels[passwordStrength - 1] : "Enter password"}
                    </p>
                  </div>
                )}

                {/* Terms */}
                <label className="flex items-start gap-4 mb-8 cursor-pointer">
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-all"
                    style={{
                      background: agreedToTerms
                        ? "linear-gradient(135deg, #3B82F6, #06B6D4)"
                        : "rgba(255,255,255,0.04)",
                      border: agreedToTerms ? "none" : "1px solid rgba(255,255,255,0.15)",
                    }}
                    onClick={() => setAgreedToTerms(!agreedToTerms)}
                  >
                    {agreedToTerms && <Check size={16} className="text-white" />}
                  </div>
                  <span className="text-sm text-[#94A3B8]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    I agree to the{" "}
                    <Link href="#" className="text-[#3B82F6] hover:underline font-semibold">Terms of Service</Link>{" "}
                    and{" "}
                    <Link href="#" className="text-[#06B6D4] hover:underline font-semibold">Privacy Policy</Link>
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!agreedToTerms}
                  className="w-full py-5 rounded-xl font-bold text-white text-lg transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{
                    background: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)",
                    boxShadow: agreedToTerms ? "0 4px 30px rgba(59, 130, 246, 0.3)" : "none",
                  }}
                >
                  Create Seller Account &#8594;
                </button>

                <p className="text-center text-[#94A3B8] mt-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => handleTabSwitch(true)}
                    className="text-[#3B82F6] font-semibold hover:text-[#06B6D4] transition-colors"
                  >
                    Sign in
                  </button>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
