"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Shield,
  Mail,
  Phone,
  MapPin,
  User,
  FileText,
} from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: "1",
    title: "Top 5 AI Productivity Tools Bundle 🚀",
    subtitle:
      "Save 20+ Hours Every Week Using The Best AI Tools Used By Creators, Freelancers & Online Businesses.",
    images: [
      "https://images.unsplash.com/photo-1617042375876-a13e36732a04?w=1200",
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200",
    ],
    price: "$100",
    badge: "🔥 BEST SELLER",
    rating: "4.9/5",
    students: "12,000+ Customers",
    description:
      "This premium AI bundle gives you access to the most powerful productivity and automation tools available online.",
    longDescription:
      "Inside this bundle, you'll discover carefully selected AI tools, ready-to-use prompts, automation systems, tutorials, and workflows.",
    features: [
      "✅ Access To 5 Premium AI Productivity Tools",
      "✅ 5 Exclusive AI Video Tutorials Included",
      "✅ ChatGPT, Gemini, Claude, Meta & DeepSeek Guides",
      "✅ Ready-To-Use Prompt Templates",
      "✅ AI Automation Workflow Systems",
      "✅ Beginner Friendly Setup",
      "✅ Anytime Access Included",
      "✅ Free Future Updates",
    ],
    includes: [
      "AI Writing Tool",
      "AI Image Generation Tool",
      "AI Video Tool",
      "AI Marketing Tool",
      "AI Automation System",
      "5 AI Training Videos",
    ],
    checkoutUrl:
      "https://digitalnestt.lemonsqueezy.com/checkout/buy/1f552524-85cc-42cb-b960-6416859f352d",
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
            <h2 className="text-2xl font-bold mb-5">📦 What's Included</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {product.includes.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3"
                >
                  {item}
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
            {/* <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full"> */}

            {/* </span> */}
          </div>

          <div className="mt-8 space-y-3">
            {product.features.map((f, i) => (
              <div key={i} className="flex gap-2 text-gray-300">
                ✔ {f}
              </div>
            ))}
          </div>

          <button
            onClick={() => (window.location.href = product.checkoutUrl)}
            className="mt-8 w-full bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-5 rounded-2xl font-bold text-xl"
          >
            Buy Now • Instant Access 🚀
          </button>
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
              <p className="text-white">Die 5 besten KI-Tools</p>
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