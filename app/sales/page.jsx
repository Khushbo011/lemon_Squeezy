"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const product = {
  id: 1,
  title: "Top 5 AI Productivity Tools Bundle 🚀",
  image:
    "https://images.unsplash.com/photo-1617042375876-a13e36732a04?w=800",

  price: "$19",
  oldPrice: "$99",

  description:
    "A powerful AI tools bundle designed to boost your productivity, automate daily tasks, and save hours of work every week. Perfect for students, freelancers, and professionals who want to work smarter, not harder.",

  features: [
    "5 Handpicked Premium AI Tools",
    "Ready-to-use Prompt Templates",
    "Step-by-step Video Tutorials",
    "Automation Workflows Included",
    "Lifetime Updates & Access",
  ],

  commitment:
    "After successful purchase, you will get instant access to all AI tools, prompts, tutorials, and resources. Everything is delivered digitally via email or download link. You also get future updates at no extra cost.",

  checkoutUrl:
    "https://your-payment-link.com/checkout",
};

export default function SalesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#020617] text-white px-6 py-14">

      {/* HEADER */}
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          🚀 AI Productivity Tools Bundle
        </h1>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          One powerful AI toolkit to automate your work, increase productivity
          and save time every single day.
        </p>
      </div>

      {/* PRODUCT SECTION */}
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <div>
          <Image
            src={product.image}
            alt={product.title}
            width={800}
            height={500}
            className="rounded-2xl object-cover w-full h-[340px]"
          />
        </div>

        {/* CONTENT */}
        <div>

          <div className="inline-block bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm">
            🔥 Bestseller AI Product
          </div>

          <h2 className="text-3xl font-bold mt-4">
            {product.title}
          </h2>

          <p className="text-gray-400 mt-4 text-sm leading-6">
            {product.description}
          </p>

          {/* FEATURES */}
          <div className="mt-5 space-y-2">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-cyan-400">✔</span>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>

          {/* PRICE */}
          <div className="flex items-center gap-4 mt-8">
            <span className="text-4xl font-bold text-cyan-400">
              {product.price}
            </span>

            <span className="line-through text-gray-500">
              {product.oldPrice}
            </span>

            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
              80% OFF
            </span>
          </div>

          {/* COMMITMENT */}
          <div className="mt-6 bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl">
            <h3 className="text-lg font-semibold">🤝 Delivery & Access</h3>
            <p className="text-gray-300 mt-2 text-sm leading-6">
              {product.commitment}
            </p>
          </div>

          {/* BUY BUTTON */}
         <button
  onClick={() => router.push(`/product/${product.id}`)}
  className="mt-8 bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 rounded-2xl font-semibold text-lg w-full"
>
  Buy Now 🚀
</button>

        </div>
      </div>
    </div>
  );
}