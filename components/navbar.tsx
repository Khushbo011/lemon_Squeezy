"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ShoppingBag, User } from "lucide-react"
import { useState, useEffect } from "react"

interface NavbarProps {
  cartCount?: number
}

export function Navbar({ cartCount = 0 }: NavbarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [open, setOpen] = useState(false)
  const [cartCountState, setCartCountState] = useState(0)

  // Load user
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) setUser(JSON.parse(storedUser))
  }, [])

  // Cart update
  useEffect(() => {
    const updateCart = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]")
      setCartCountState(cart.length)
    }

    updateCart()
    window.addEventListener("cartUpdated", updateCart)

    return () => {
      window.removeEventListener("cartUpdated", updateCart)
    }
  }, [])

  const navLinks = [
    { href: "/", label: "Explore" },
    { href: "/products", label: "Products" },
    { href: "/category/ui-kits", label: "Category" },
    { href: "/about", label: "About Us" },
    { href: "/disclaimer", label: "Disclaimer" }
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-[#020617]/80 backdrop-blur-xl border-b border-blue-500/10">
      <div className="flex h-[80px] items-center justify-between px-6 max-w-[1400px] mx-auto">

        {/* Logo
<Link href="/" className="relative group flex items-center gap-1.5">
  <span className="text-2xl font-black tracking-tight">
    <span className="text-white">Digital</span>
    <span 
      className="relative inline-block"
      style={{
        background: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #38bdf8 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      Store
    </span>
  </span>
  {/* Glow dot */}
  {/* <span 
    className="w-2 h-2 rounded-full mb-4"
    style={{
      background: "#60a5fa",
      boxShadow: "0 0 10px 3px #60a5fa",
    }}
  />
</Link> */} 
{/* Logo */}
<Link href="/" className="relative group flex items-center gap-2">
  {/* Icon */}
  <div 
    className="w-9 h-9 rounded-xl flex items-center justify-center"
    style={{
      background: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #38bdf8 100%)",
      boxShadow: "0 0 16px 4px rgba(96,165,250,0.3)",
    }}
  >
    <ShoppingBag size={18} className="text-white" />
  </div>

  {/* Text */}
  <span className="text-4xl font-black tracking-tight">
    <span className="text-white">Digital</span>
    <span 
      className="relative inline-block"
      style={{
        background: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #38bdf8 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      Store
    </span>
  </span>

  {/* Glow dot */}
  <span 
    className="w-2 h-2 rounded-full mb-4"
    style={{
      background: "#60a5fa",
      boxShadow: "0 0 10px 3px #60a5fa",
    }}
  />
</Link>
        {/* Nav
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href ? "text-blue-400" : "text-gray-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav> */}
        {/* Nav */}
<nav className="hidden md:flex gap-6">
  {navLinks.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className={`text-lg font-medium ${
        pathname === link.href ? "text-blue-400" : "text-gray-400"
      }`}
    >
      {link.label}
    </Link>
  ))}
</nav>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          {/* CART */}
          <div
            onClick={() => router.push("/cart")}
            className="flex items-center gap-2 text-white cursor-pointer"
          >
            <ShoppingBag size={20} />
            <span>({cartCountState})</span>
          </div>

          {/* USER */}
          <div className="relative">

            <div
              onClick={(e) => {
                e.stopPropagation()
                if (!user) {
                  router.push("/auth")
                } else {
                  setOpen(!open)
                }
              }}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 cursor-pointer"
            >
              <User size={18} className="text-white" />
            </div>

            {/* DROPDOWN */}
            {open && user && (
              <div className="absolute right-0 mt-2 w-56 bg-[#020617] border border-blue-500/20 rounded-xl shadow-lg">

                <div className="px-4 py-3 text-sm text-gray-300 border-b border-blue-500/10">
                  {user.email}
                </div>

                <button onClick={() => router.push("/profile")} className="w-full text-left px-4 py-2 hover:bg-blue-500/10 text-white">
                  👤 Profile
                </button>

                <button onClick={() => router.push("/orders")} className="w-full text-left px-4 py-2 hover:bg-blue-500/10 text-white">
                  📦 Orders
                </button>

                <button onClick={() => router.push("/wishlist")} className="w-full text-left px-4 py-2 hover:bg-blue-500/10 text-white">
                  ❤️ Wishlist
                </button>

                <button onClick={() => router.push("/refund-policy")} className="w-full text-left px-4 py-2 hover:bg-blue-500/10 text-white">
                  💸 Refund Policy
                </button>

                <button
                  onClick={() => {
                    localStorage.removeItem("user")
                    router.push("/auth")
                  }}
                  className="w-full text-left px-4 py-2 text-red-400 hover:bg-red-500/10"
                >
                  🚪 Logout
                </button>

              </div>
            )}

          </div>
        </div>

      </div>
    </header>
  )
}