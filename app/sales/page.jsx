"use client";

import Image from "next/image";
// import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
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

    price: "$19",
    oldPrice: "$99",

    badge: "🔥 BEST SELLER",

    rating: "4.9/5",
    students: "12,000+ Customers",

    description:
      "This premium AI bundle gives you access to the most powerful productivity and automation tools available online. Perfect for creators, students, freelancers, agencies, marketers, and online business owners who want to save time and increase productivity.",

    longDescription:
      "Inside this bundle, you’ll discover carefully selected AI tools, ready-to-use prompts, automation systems, tutorials, and workflows that help you automate repetitive tasks, create content faster, improve design quality, generate marketing ideas, and scale your online work without wasting hours every day.",

    features: [
      "✅ Access To 5 Premium AI Productivity Tools",
      "✅ Ready-To-Use Prompt Templates",
      "✅ AI Automation Workflow Systems",
      "✅ Step-By-Step Video Tutorials",
      "✅ Beginner Friendly Setup",
      "✅ Works For Freelancers & Agencies",
      "✅ Content Creation AI Systems",
      "✅ Marketing & Sales AI Templates",
      "✅ Lifetime Access Included",
      "✅ Free Future Updates",
    ],

    includes: [
      "AI Writing Tool",
      "AI Image Generation Tool",
      "AI Video Tool",
      "AI Marketing Tool",
      "AI Automation System",
      "Bonus Prompt Pack",
      "Private Resource Library",
    ],

    commitment:
      "Instant digital delivery after successful payment. You’ll receive immediate access via email including all files, updates, tutorials, and bonuses. Dedicated support available within 24–48 hours.",

    checkoutUrl:
      "https://digitalnestt.lemonsqueezy.com/checkout/buy/1f552524-85cc-42cb-b960-6416859f352d", 

    guarantee:
      "30-Day Satisfaction Guarantee",

    faq: [
      {
        q: "How will I receive the bundle?",
        a: "Immediately after payment, you’ll receive an email with instant access.",
      },
      {
        q: "Is this beginner friendly?",
        a: "Yes. Everything is explained step-by-step.",
      },
      {
        q: "Will I get future updates?",
        a: "Yes, all future updates are included for free.",
      },
    ],
  },
];

export default function ProductPage() {
  // const { id } = useParams();
  const router = useRouter();

  // const product = products.find((p) => p.id === id);

  const product = products[0];

const [mainImage, setMainImage] = useState(
  product.images[0]
);
  return (
    <div className="min-h-screen bg-[#020617] text-white">

      {/* TOP BAR */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <button
            onClick={() => router.back()}
            className="text-gray-400 hover:text-white transition"
          >
            ← Back
          </button>

          <div className="flex items-center gap-3">
            <span className="bg-green-500/20 text-green-400 text-sm px-3 py-1 rounded-full">
              🔒 Secure Checkout
            </span>

            <span className="bg-cyan-500/20 text-cyan-400 text-sm px-3 py-1 rounded-full">
              ⚡ Instant Delivery
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-14">

        {/* LEFT SIDE */}
        <div>

          {/* MAIN IMAGE */}
          <div className="relative">
            <Image
              src={mainImage}
              width={1200}
              height={700}
              alt="product"
              className="rounded-3xl w-full h-[500px] object-cover border border-white/10"
            />

            <div className="absolute top-4 left-4 bg-orange-500 text-black font-semibold px-4 py-2 rounded-full text-sm">
              {product.badge}
            </div>
          </div>

          {/* THUMBNAILS */}
          <div className="grid grid-cols-3 gap-4 mt-5">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setMainImage(img)}
              >
                <Image
                  src={img}
                  width={300}
                  height={200}
                  alt="thumb"
                  className={`rounded-xl h-[110px] object-cover border transition ${
                    mainImage === img
                      ? "border-cyan-400"
                      : "border-white/10"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* WHAT'S INCLUDED */}
          <div className="mt-10 bg-white/5 border border-white/10 p-6 rounded-3xl">
            <h2 className="text-2xl font-bold mb-5">
              📦 What’s Included
            </h2>

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

        {/* RIGHT SIDE */}
        <div>

          {/* TITLE */}
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
              ⭐ {product.rating}
            </span>

            <span className="text-gray-400 text-sm">
              {product.students}
            </span>
          </div>

          <h1 className="text-5xl font-bold leading-tight">
            {product.title}
          </h1>

          <p className="text-xl text-cyan-300 mt-4">
            {product.subtitle}
          </p>

          <p className="text-gray-400 mt-6 leading-8">
            {product.description}
          </p>

          <p className="text-gray-400 mt-4 leading-8">
            {product.longDescription}
          </p>

          {/* PRICE */}
          <div className="flex items-center gap-5 mt-8">

            <span className="text-5xl font-bold text-cyan-400">
              {product.price}
            </span>

            <span className="text-2xl text-gray-500 line-through">
              {product.oldPrice}
            </span>

            <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full font-medium">
              SAVE 80%
            </span>
          </div>

          {/* FEATURES */}
          <div className="mt-8 space-y-4">
            {product.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-start gap-3"
              >
                <span className="text-cyan-400 mt-1">
                  ✔
                </span>

                <span className="text-gray-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* GUARANTEE
          <div className="mt-8 bg-green-500/10 border border-green-500/20 p-5 rounded-2xl">
            <h3 className="font-semibold text-lg text-green-400">
              🛡 {product.guarantee}
            </h3>

            <p className="text-gray-300 text-sm mt-2">
              Try the bundle risk-free. If you're not satisfied,
              contact support for assistance.
            </p>
          </div>  */}

          {/* DELIVERY */}
          <div className="mt-6 bg-blue-500/10 border border-blue-500/20 p-5 rounded-2xl">
            <h3 className="font-semibold text-lg">
              🚀 Instant Delivery & Support
            </h3>

            <p className="text-gray-300 text-sm mt-3 leading-7">
              {product.commitment}
            </p>
          </div>

          {/* BUY BUTTON */}
          <button
            onClick={() =>
              window.location.href = product.checkoutUrl
            }
            className="mt-8 w-full bg-gradient-to-r from-blue-500 to-cyan-400 hover:scale-[1.01] transition-all duration-200 px-6 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-cyan-500/20"
          >
            Buy Now • Instant Access 🚀
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            🔒 Secure Payment via LemonSqueezy
          </p>

          {/* FAQ */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-5">
              ❓ Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {product.faq.map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5"
                >
                  <h3 className="font-semibold">
                    {item.q}
                  </h3>

                  <p className="text-gray-400 mt-2 text-sm leading-7">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}