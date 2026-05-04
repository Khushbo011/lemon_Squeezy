"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingBag, User } from "lucide-react"
import { useState } from "react"

interface NavbarProps {
  cartCount?: number
}

export function Navbar({ cartCount = 0 }: NavbarProps) {
  const pathname = usePathname()
  const [isHoveringCart, setIsHoveringCart] = useState(false)
  const [isHoveringAvatar, setIsHoveringAvatar] = useState(false)

  const navLinks = [
    { href: "/", label: "Explore" },
    { href: "/products", label: "Products" },
    { href: "#categories", label: "Category" },
    { href: "#about", label: "About Us" },
  ]

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        background: "rgba(3, 7, 18, 0.85)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(59, 130, 246, 0.1)",
      }}
    >
      <div className="flex h-[80px] items-center justify-between px-6 md:px-10 max-w-[1400px] mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 group">
          <span
            className="text-[#3B82F6] text-lg mr-1 transition-transform group-hover:scale-125"
            style={{ textShadow: "0 0 20px rgba(59, 130, 246, 0.6)" }}
          >
            &#9670;
          </span>
          <span className="font-display text-2xl font-extrabold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>Digital</span>
          <span
            className="font-display text-2xl font-extrabold"
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

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link relative font-semibold text-sm tracking-wide transition-colors ${
                  isActive ? "text-[#3B82F6]" : "text-[#94A3B8] hover:text-[#3B82F6]"
                }`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Cart Button */}
          <button
            className="glass-card flex items-center gap-2 px-5 py-3 transition-all"
            onMouseEnter={() => setIsHoveringCart(true)}
            onMouseLeave={() => setIsHoveringCart(false)}
            style={{
              background: "rgba(255, 255, 255, 0.04)",
              backdropFilter: "blur(20px)",
              border: isHoveringCart ? "1px solid #3B82F6" : "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "12px",
              boxShadow: isHoveringCart ? "0 0 30px rgba(59, 130, 246, 0.2)" : "none",
            }}
          >
            <div className="relative">
              <ShoppingBag size={20} className={isHoveringCart ? "text-[#3B82F6]" : "text-white"} />
              {cartCount > 0 && (
                <span
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-pulse"
                  style={{ background: "#F59E0B" }}
                />
              )}
            </div>
            <span className={`text-sm font-semibold ${isHoveringCart ? "text-[#3B82F6]" : "text-white"}`}>
              Cart ({cartCount})
            </span>
          </button>

          {/* Avatar Button */}
          <Link
            href="/auth"
            className="relative flex items-center justify-center w-12 h-12 rounded-full transition-all"
            onMouseEnter={() => setIsHoveringAvatar(true)}
            onMouseLeave={() => setIsHoveringAvatar(false)}
            style={{
              background: isHoveringAvatar 
                ? "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)"
                : "rgba(255, 255, 255, 0.04)",
              border: "1px solid",
              borderColor: isHoveringAvatar ? "transparent" : "rgba(59, 130, 246, 0.3)",
              boxShadow: isHoveringAvatar
                ? "0 0 30px rgba(59, 130, 246, 0.4)"
                : "none",
            }}
          >
            <User size={20} className={isHoveringAvatar ? "text-white" : "text-white"} />
          </Link>
        </div>
      </div>
    </header>
  )
}
