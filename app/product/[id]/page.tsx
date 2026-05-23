
"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const products = [
  {
    id: "1",
    title: "Top 5 AI Productivity Tools Bundle 🚀",
    images: [
      "https://images.unsplash.com/photo-1617042375876-a13e36732a04?w=800",
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",
    ],
    price: "$19",
    oldPrice: "$99",

    description:
      "A powerful AI tools bundle designed to boost your productivity, automate daily tasks, and save hours of work every week.",

    features: [
      "5 Premium AI Tools Access",
      "Prompt Templates Included",
      "Video Tutorials Step-by-Step",
      "Automation Workflows",
      "Lifetime Updates",
    ],

    commitment:
      "Instant digital delivery after payment. You will receive email access to all files, tools, and updates. 24–48 hours support included.",

    checkoutUrl: "https://your-payment-link.com",
  },
];

export default function ProductPage() {
  const { id } = useParams();
  const router = useRouter();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="text-white p-10">
        Product not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white px-6 py-10">

      {/* BACK BUTTON */}
      <button
        onClick={() => router.back()}
        className="text-gray-400 mb-6"
      >
        ← Back
      </button>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT IMAGES */}
        <div>
          <Image
            src={product.images[0]}
            width={800}
            height={500}
            className="rounded-2xl w-full h-[400px] object-cover"
            alt="main"
          />

          <div className="flex gap-3 mt-3">
            {product.images.map((img, i) => (
              <Image
                key={i}
                src={img}
                width={200}
                height={120}
                className="rounded-lg w-1/3 h-[100px] object-cover"
                alt="thumb"
              />
            ))}
          </div>
        </div>

        {/* RIGHT DETAILS */}
        <div>

          <h1 className="text-3xl font-bold">
            {product.title}
          </h1>

          <p className="text-gray-400 mt-3">
            {product.description}
          </p>

          {/* PRICE */}
          <div className="flex items-center gap-4 mt-6">
            <span className="text-4xl text-cyan-400 font-bold">
              {product.price}
            </span>

            <span className="line-through text-gray-500">
              {product.oldPrice}
            </span>

            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
              80% OFF
            </span>
          </div>

          {/* FEATURES */}
          <div className="mt-6 space-y-2">
            {product.features.map((f, i) => (
              <div key={i} className="flex gap-2">
                <span className="text-cyan-400">✔</span>
                <span className="text-gray-300">{f}</span>
              </div>
            ))}
          </div>

          {/* COMMITMENT */}
          <div className="mt-6 bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl">
            <h3 className="font-semibold text-lg">
              🤝 Delivery & Support
            </h3>
            <p className="text-gray-300 text-sm mt-2">
              {product.commitment}
            </p>
          </div>

          {/* BUY BUTTON */}
          <button
            onClick={() => window.open(product.checkoutUrl, "_blank")}
            className="mt-8 w-full bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-4 rounded-2xl font-semibold text-lg"
          >
            Proceed to Buy 🚀
          </button>

        </div>
      </div>
    </div>
  );
}