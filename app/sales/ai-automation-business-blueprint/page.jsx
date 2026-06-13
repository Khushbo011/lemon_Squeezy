"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Shield,
  Mail,
  MapPin,
  User,
  FileText,
  CheckCircle,
  Lock,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: "ai-automation-business-blueprint",
    title: "AI Automation Business Blueprint eBook",
    subtitle:
      "A Complete Beginner-Friendly Guide to Artificial Intelligence, Generative AI, AI Projects, AI Business Opportunities and Future Technologies.",
    images: [
      "/images/ai-automation-business-blueprint-cover.png",
      "/images/ai-automation-business-blueprint-cover.png",
      "/images/ai-automation-business-blueprint-cover.png",
    ],
    price: "$149",
    badge: "🔥 NEW RELEASE",
    rating: "5.0/5",
    students: "Available Now",
    description:
      "Learn Artificial Intelligence, Generative AI, LLMs, AI Projects, AI Business Models, Freelancing, Digital Products, AI Agencies and Future AI Opportunities.",
    longDescription:
      "This comprehensive eBook is your step-by-step guide to understanding and monetizing AI, designed specifically for beginners with no technical background required.",
    features: [
      "Beginner Friendly",
      "No Technical Background Required",
      "Real Business Opportunities",
      "Practical Examples",
      "Step-by-Step Learning",
      "Future-Proof Skills",
      "Digital Download",
      " Anytime Accesss",
    ],
    includes: [
      "Foundations of Artificial Intelligence",
      "Generative AI Explained",
      "Large Language Models (LLMs)",
      "GPT, Gemini, Claude & Llama Overview",
      "Vector Databases & Embeddings",
      "RAG, LangChain & LlamaIndex",
      "Prompt Engineering Fundamentals",
      "Modern AI Development Stack",
      "Responsible AI & AI Ethics",
      "Real World AI Projects",
      "AI Resume Builder Project",
      "AI Content Creation Platform",
      "AI Research Assistant",
      "AI Customer Support Assistant",
      "AI Personal Tutor",
      "Monetizing AI Skills",
      "Freelancing with AI",
      "Selling AI Digital Products",
      "Building an AI Agency",
      "AI-Powered Software Businesses",
      "Teaching & Coaching with AI",
      "Future of AI & AI Agents",
      "Multimodal AI",
      "Artificial General Intelligence (AGI)",
      "Career Opportunities in AI",
      "Actionable Business Strategies",
    ],
    checkoutUrl:
      "/checkout?redirect=/thank-you/ai-automation-business-blueprint",
  },
];

export default function ProductPage() {
  const router = useRouter();
  const product = products[0];
  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="min-h-screen bg-[#020617] text-white">

      {/* TOP BAR */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => router.back()}
            className="text-gray-400 hover:text-white"
          >
            ← Back
          </button>

          <div className="flex gap-3">
            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
              🔒 Secure Checkout
            </span>
            <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
              ⚡ Instant Delivery
            </span>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-14">

        {/* LEFT */}
        <div>
          <div className="relative">
            <Image
              src={mainImage}
              width={1200}
              height={700}
              alt="product"
              className="rounded-3xl w-full h-[500px] object-cover border border-white/10"
            />

            <div className="absolute top-4 left-4 bg-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              {product.badge}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-5">
            {product.images.map((img, i) => (
              <button key={i} onClick={() => setMainImage(img)}>
                <Image
                  src={img}
                  width={300}
                  height={200}
                  alt="thumb"
                  className={`rounded-xl h-[110px] object-cover border transition ${mainImage === img
                    ? "border-cyan-400"
                    : "border-white/10"
                    }`}
                />
              </button>
            ))}
          </div>

          <div className="mt-10 bg-white/5 border border-white/10 p-6 rounded-3xl">
            <h2 className="text-2xl font-bold mb-5">📦 What You Will Receive</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {product.includes.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 flex items-start gap-2"
                >
                  <span className="text-green-400">✓</span> <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <div className="flex gap-3 mb-4">
            <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
              ⭐ {product.rating}
            </span>
            <span className="text-gray-400 text-sm">
              {product.students}
            </span>
          </div>

          <h1 className="text-5xl font-bold">{product.title}</h1>

          <p className="text-xl text-cyan-300 mt-4">{product.subtitle}</p>

          <p className="text-gray-400 mt-6">{product.description}</p>

          <p className="text-gray-400 mt-4">{product.longDescription}</p>

          <div className="flex gap-5 mt-8">
            <span className="text-5xl font-bold text-cyan-400">
              {product.price}
            </span>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">✨ Why This eBook</h2>
            <div className="space-y-3">
              {product.features.map((f, i) => (
                <div key={i} className="flex gap-2 text-gray-300">
                  <CheckCircle size={20} className="text-blue-400 shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">🎯 Who Is This For</h2>
            <div className="grid grid-cols-2 gap-3 text-gray-300">
              <div className="flex gap-2 items-center"><span className="text-cyan-400">•</span> Students</div>
              <div className="flex gap-2 items-center"><span className="text-cyan-400">•</span> Freelancers</div>
              <div className="flex gap-2 items-center"><span className="text-cyan-400">•</span> Entrepreneurs</div>
              <div className="flex gap-2 items-center"><span className="text-cyan-400">•</span> Content Creators</div>
              <div className="flex gap-2 items-center"><span className="text-cyan-400">•</span> Business Owners</div>
              <div className="flex gap-2 items-center"><span className="text-cyan-400">•</span> Working Professionals</div>
              <div className="flex gap-2 items-center col-span-2"><span className="text-cyan-400">•</span> Anyone Interested in AI</div>
            </div>
          </div>

          <div className="mt-10 bg-white/5 p-6 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-bold mb-4">❓ FAQ</h2>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-white">Q. Is this beginner friendly?</p>
                <p className="text-gray-400 text-sm">A. Yes, designed for complete beginners.</p>
              </div>
              <div>
                <p className="font-bold text-white">Q. Do I need coding knowledge?</p>
                <p className="text-gray-400 text-sm">A. No.</p>
              </div>
              <div>
                <p className="font-bold text-white">Q. Is this a physical book?</p>
                <p className="text-gray-400 text-sm">A. No, digital PDF.</p>
              </div>
              <div>
                <p className="font-bold text-white">Q. Will I get Anytimne access?</p>
                <p className="text-gray-400 text-sm">A. Yes.</p>
              </div>
              <div>
                <p className="font-bold text-white">Q. How will I receive it?</p>
                <p className="text-gray-400 text-sm">A. Instant digital delivery.</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => router.push(product.checkoutUrl)}
            className="mt-10 w-full bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-5 rounded-2xl font-bold text-xl hover:scale-[1.02] transition-transform shadow-lg shadow-blue-500/20"
          >
            Buy Now • Instant Access 🚀
          </button>

          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-cyan-300 bg-cyan-900/20 px-4 py-2 rounded-full border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <span className="drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]">🛡</span>
            <span className="font-medium tracking-wide">Protected by our <strong>60-Day Money-Back Guarantee.</strong></span>
          </div>
        </div>
      </div>

      {/* TRUST & COMPLIANCE SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-4 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
            <Shield size={16} className="text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">
              Trust & Compliance
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group bg-[#0f172a]/80 border border-white/10 hover:border-blue-500/50 rounded-3xl p-8 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-1">
            <div className="bg-blue-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
              <Shield size={28} className="text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">60-Day Money-Back Guarantee</h3>
            <p className="text-gray-400 leading-relaxed">
              Risk-free purchase. If you're not satisfied, request a refund within 60 days according to our refund policy.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-[#0f172a]/80 border border-white/10 hover:border-cyan-500/50 rounded-3xl p-8 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:-translate-y-1">
            <div className="bg-cyan-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
              <Lock size={28} className="text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">Secure Payment</h3>
            <p className="text-gray-400 leading-relaxed">
              Encrypted transactions and secure checkout for complete payment protection.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-[#0f172a]/80 border border-white/10 hover:border-indigo-500/50 rounded-3xl p-8 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:-translate-y-1">
            <div className="bg-indigo-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
              <MessageCircle size={28} className="text-indigo-400 drop-shadow-[0_0_10px_rgba(99,102,241,0.6)]" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-300 transition-colors">Customer Support</h3>
            <p className="text-gray-400 leading-relaxed">
              Fast email support and assistance whenever you need help.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-300 transition-colors">Refund Policy</a>
          <span className="text-white/20">•</span>
          <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
          <span className="text-white/20">•</span>
          <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
        </div>
      </div>

      {/* LEGAL SECTION */}
      <div className="max-w-5xl mx-auto px-6 pb-24 mt-20">

        <div className="text-center mb-10">
          <div className="inline-flex gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30">
            <Shield size={16} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-semibold">
              Legal Notice
            </span>
          </div>
          <h2 className="text-4xl font-bold mt-4">Legal Notice</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* WHO WE ARE */}
          <div
            className="p-8 flex flex-col gap-6"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "24px",
              backdropFilter: "blur(16px)",
            }}
          >
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <User size={22} className="text-blue-400" />
              Who We Are
            </h2>

            <div className="space-y-4 text-gray-300">
              <p className="text-lg font-semibold text-white">
                Christian Weber
              </p>

              <div className="flex gap-3">
                <MapPin size={20} className="text-blue-400 mt-1" />
                <div>
                  <p className="text-white font-medium">
                    STR 36 Sterkrader Berlin 13507
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT */}
          <div
            className="p-8 flex flex-col gap-6"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "24px",
              backdropFilter: "blur(16px)",
            }}
          >
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Mail size={22} className="text-cyan-400" />
              Contact Information
            </h2>

            <div className="space-y-5 text-gray-300">
              <p>Email: dsthegermanman@outlook.com</p>
              <p>Phone: +4915211094215</p>
            </div>
          </div>
        </div>
      </div>

      {/* LEGAL DETAILS */}
      <div className="max-w-5xl mx-auto px-6 pb-24">

        <div className="p-8 mb-12 bg-white/5 border border-white/10 rounded-3xl">

          <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
            <FileText size={22} className="text-indigo-400" />
            Legal Details & Representation
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-gray-300">

            <div>
              <p className="text-sm text-gray-500 uppercase font-bold mb-1">
                Company Representative
              </p>
              <p className="text-white font-semibold">Christian Weber</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 uppercase font-bold mb-1">
                Responsible Content
              </p>
              <p className="text-white">Christian Weber</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 uppercase font-bold mb-1">
                VAT
              </p>
              <p className="text-white">Not applicable</p>
            </div>

            <div>
              <p className="text-sm text-gray-500 uppercase font-bold mb-1">
                Product Name
              </p>
              <p className="text-white">AI Automation Business Blueprint eBook</p>
            </div>

          </div>
        </div>

        {/* DISPUTE */}
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
      </div>

    </div>
  );
}
