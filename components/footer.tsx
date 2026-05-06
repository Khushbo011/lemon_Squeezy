import Link from "next/link"
import { Twitter, Github, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer
      className="relative w-full pt-24 pb-10"
      style={{
        background: "linear-gradient(to top, rgba(59, 130, 246, 0.03), transparent)",
        borderTop: "1px solid rgba(59, 130, 246, 0.1)",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-20">
          {/* Logo & Tagline */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-1">
              <span
                className="text-[#3B82F6] text-lg mr-1"
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
            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-[280px]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              The marketplace for premium digital products. Built for creators, by creators.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              {[
                { icon: Twitter, href: "#", color: "#06B6D4" },
                { icon: Github, href: "#", color: "#F8FAFC" },
                { icon: Instagram, href: "#", color: "#F59E0B" },
                { icon: Linkedin, href: "#", color: "#3B82F6" },
              ].map(({ icon: Icon, href, color }, i) => (
                <a
                  key={i}
                  href={href}
                  className="flex items-center justify-center w-10 h-10 rounded-full transition-all hover:scale-110"
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: `1px solid ${color}40`,
                  }}
                >
                  <Icon size={18} style={{ color }} />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold mb-5 tracking-wide text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>
              Products
            </h4>
            <ul className="flex flex-col gap-3">
  {[
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Refund Policy", href: "/refund-policy" }, // ✅ IMPORTANT
    { name: "Contact", href: "#" },
  ].map((item) => (
    <li key={item.name}>
      <Link 
        href={item.href}
        className="text-[#94A3B8] text-sm hover:text-[#06B6D4] transition-colors"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {item.name}
      </Link>
    </li>
  ))}
</ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-5 tracking-wide text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {["About Us", "Careers", "Blog", "Refund policy", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-[#94A3B8] text-sm hover:text-[#06B6D4] transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-5 tracking-wide text-sm" style={{ fontFamily: "'Syne', sans-serif" }}>
              Resources
            </h4>
            <ul className="flex flex-col gap-3">
              {["Documentation", "Help Center", "Licensing", "Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-[#94A3B8] text-sm hover:text-[#10B981] transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4"
          style={{ borderTop: "1px solid rgba(59, 130, 246, 0.1)" }}
        >
          <p className="text-[#94A3B8] text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            2024 DigitalStore. All rights reserved.
          </p>
          <p className="text-[#94A3B8] text-sm flex items-center gap-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Built with <span className="text-[#EF4444] text-lg">&#9829;</span> for creators
          </p>
        </div>
      </div>
    </footer>
  )
}
