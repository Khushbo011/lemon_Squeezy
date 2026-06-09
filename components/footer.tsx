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
              The Store for premium digital products. Built for creators, by creators.
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
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Refund Policy", href: "/refund-policy" },
    { name: "Contact page", href: "/contact-page" },
    { name: "Legal Notice / Impressum", href: "/impressum" },
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

        {/* Trust & Compliance */}
        <div className="mb-14 pb-14" style={{ borderBottom: "1px solid rgba(59, 130, 246, 0.1)" }}>
          <h4 className="text-white font-bold mb-8 text-center text-lg" style={{ fontFamily: "'Syne', sans-serif" }}>
            Trust & Compliance
          </h4>
          <div className="flex flex-wrap justify-center gap-10 items-center">
            <div className="flex flex-col items-center text-center gap-2 max-w-[200px]">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <p className="text-white font-bold text-sm">60-Day Money-Back Guarantee</p>
              <p className="text-[#94A3B8] text-xs">Risk-free purchase</p>
            </div>
            
            <div className="flex flex-col items-center text-center gap-2 max-w-[200px]">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <p className="text-white font-bold text-sm">Secure Payment</p>
              <p className="text-[#94A3B8] text-xs">Encrypted transactions</p>
            </div>

            <div className="flex flex-col items-center text-center gap-2 max-w-[200px]">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
              </div>
              <p className="text-white font-bold text-sm">Customer Support</p>
              <p className="text-[#94A3B8] text-xs">We are here to help</p>
            </div>
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
