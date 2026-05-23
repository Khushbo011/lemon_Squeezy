"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Shield, Mail, Phone, MapPin, User, FileText } from "lucide-react"

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Ambient glassmorphic backgrounds */}
      <div className="orb orb-blue w-[600px] h-[600px] -top-[200px] -left-[200px]" />
      <div className="orb orb-cyan w-[400px] h-[400px] bottom-[10%] -right-[100px]" />

      <Navbar />

      <main className="relative z-10 px-6 py-20 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6"
            style={{
              background: "rgba(59, 130, 246, 0.1)",
              border: "1px solid rgba(59, 130, 246, 0.3)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Shield size={16} className="text-[#3B82F6]" />
            <span className="text-sm text-[#3B82F6] font-semibold tracking-wide uppercase">
              Legal Notice
            </span>
          </div>

          <h1
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Legal Notice
          </h1>

          <p
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {/* Information required according to Section 5 of the German Digital */}
            {/* Services Act (DDG / formerly TMG). */}
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Company Details */}
          <div
            className="glass-card p-8 flex flex-col gap-6"
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.06)",
              borderRadius: "24px",
              backdropFilter: "blur(16px)",
            }}
          >
            <h2
              className="text-2xl font-bold text-white flex items-center gap-3"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <User size={22} className="text-blue-400" />
              Who We Are
            </h2>

            <div
              className="space-y-4 text-gray-300"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <div>
                <p className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">
                  Company / Owner Name
                </p>

                <p className="text-lg font-semibold text-white">
                  Christian Weber
                </p>

                <p className="text-sm text-gray-400">
                  Die 5 besten KI-Tools
                </p>
              </div>

              <div className="flex gap-3">
                <MapPin
                  size={20}
                  className="text-blue-400 mt-1 flex-shrink-0"
                />

                <div>
                  <p className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">
                    Physical Address
                  </p>

                  <p className="leading-relaxed">
                    STR 36 Sterkrader Berlin 13507
                  </p>

                  <p className="text-xs text-amber-400 mt-1">
                    (No PO Box - valid physical business location)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div
            className="glass-card p-8 flex flex-col gap-6"
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.06)",
              borderRadius: "24px",
              backdropFilter: "blur(16px)",
            }}
          >
            <h2
              className="text-2xl font-bold text-white flex items-center gap-3"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <Mail size={22} className="text-cyan-400" />
              Contact Information
            </h2>

            <div
              className="space-y-5 text-gray-300"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-cyan-500/10 border border-cyan-500/20">
                  <Mail size={18} className="text-cyan-400" />
                </div>

                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">
                    Email Address
                  </p>

                  <a
                    href="mailto:dsthegermanman@outlook.com"
                    className="text-white hover:text-cyan-400 font-semibold transition-colors"
                  >
                    dsthegermanman@outlook.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-500/10 border border-blue-500/20">
                  <Phone size={18} className="text-blue-400" />
                </div>

                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">
                    Phone Number
                  </p>

                  <a
                    href="tel:+4915211094215"
                    className="text-white hover:text-blue-400 font-semibold transition-colors"
                  >
                    +4915211094215
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="border-t border-white/5 pt-4">
                <p className="text-sm text-gray-400">
                  Alternatively, you can reach out to us using our{" "}
                  <a
                    href="/contact-page"
                    className="text-cyan-400 hover:underline font-bold"
                  >
                    Contact Form
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Representatives & Registration */}
        <div
          className="glass-card p-8 mb-12"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            borderRadius: "24px",
            backdropFilter: "blur(16px)",
          }}
        >
          <h2
            className="text-2xl font-bold text-white mb-6 flex items-center gap-3"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            <FileText size={22} className="text-indigo-400" />
            Legal Details & Representation
          </h2>

          <div
            className="grid md:grid-cols-2 gap-8 text-gray-300"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {/* Representative */}
            <div>
              <p className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">
                Company Representative
              </p>

              <p className="text-white font-semibold">
                Christian Weber
              </p>

              <p className="text-sm text-gray-400">
                Owner / Managing Proprietor
              </p>
            </div>

            {/* Responsible */}
            <div>
              <p className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">
                Responsible for Content
              </p>

              <p className="text-white font-semibold">
                Christian Weber
              </p>

              <p className="text-sm text-gray-400">
                Responsible for website content
              </p>
            </div>

            {/* Commercial Register */}
            <div>
              <p className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">
                Commercial Register Information
              </p>

              <p className="text-white">
                Not applicable (Sole Proprietorship / Small Business Exemption)
              </p>
            </div>

            {/* VAT */}
            <div>
              <p className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">
                VAT Identification Number
              </p>

              <p className="text-white">Not applicable</p>
            </div>

            {/* Product Name */}
            <div>
              <p className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">
                Product Name
              </p>

              <p className="text-white">
                Die 5 besten KI-Tools
              </p>
            </div>
          </div>
        </div>

        {/* Dispute Resolution */}
        <div
          className="glass-card p-8"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            borderRadius: "24px",
            backdropFilter: "blur(16px)",
          }}
        >
          <h2
            className="text-xl font-bold text-white mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Online Dispute Resolution (ODR)
          </h2>

          <p
            className="text-gray-300 leading-relaxed text-sm mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            The European Commission provides a platform for online dispute
            resolution (ODR), which you can access at{" "}

            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline break-all"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            .
          </p>

          <p
            className="text-gray-400 leading-relaxed text-sm"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            We are neither obligated nor willing to participate in dispute
            resolution proceedings before a consumer arbitration board.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}