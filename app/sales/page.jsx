"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const products = [
  {
    id: 1,
    title: "Karvo CRM SaaS",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400",
    price: "$99",
    oldPrice: "$499",

    description:
      "Advanced CRM dashboard with sales automation, contact management and analytics.",

    features: [
      "CRM Dashboard",
      "Sales Automation",
      "Reporting System",
      "Lifetime Access",
    ],

   commitment:
  "Once you purchase this product, you will receive instant digital access to all files and resources directly via email. Our team ensures smooth delivery and quick support assistance within 24–48 hours if you face any issue.",
  },

  {
    id: 2,
    title: "Nebula UI Kit",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
    price: "$99",
    oldPrice: "$59",

    description:
      "Premium UI kit with modern components, Figma files and dark/light mode support.",

    features: [
      "100+ UI Components",
      "Figma Source Files",
      "Dark & Light Mode",
      "Commercial Use",
    ],

    commitment:
  "After successful payment, all premium UI kit files and assets will be instantly available for download. You will also receive future updates and dedicated support whenever required.",

    checkoutUrl:
      "https://digitalnestt.lemonsqueezy.com/checkout/buy/f83d063a-7742-4d82-b26b-a918dd0cd42d",
  },

  {
    id: 3,
    title: "Top 5 AI Tools",
    image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?w=400",
    price: "$499",
    oldPrice: "$999",

    description:
      "Curated AI productivity tools with prompts, tutorials and automation workflows.",

    features: [
      "AI Tools List",
      "Prompt Templates",
      "Video Tutorials",
      "Lifetime Updates",
    ],

   commitment:
  "You will get immediate access to all AI tools, tutorials, prompts, and productivity resources after purchase. We continuously improve and update the content to provide maximum value.",

    checkoutUrl:
      "https://drive.google.com/drive/folders/1ZshFscuQOkie64_mA87s1AxMQCZcGwQ9?usp=drive_link",
  },
];

export default function SalesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#020617] text-white px-6 py-14">

      {/* PAGE TITLE */}
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          🚀 Premium Digital Products
        </h1>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Explore premium digital resources, AI tools, SaaS dashboards,
          UI kits and productivity assets.
        </p>
      </div>

      {/* PRODUCTS */}
      <div className="max-w-7xl mx-auto mt-16 space-y-16">

        {products.map((product) => (

          <div
            key={product.id}
           className="grid md:grid-cols-2 gap-6 items-center bg-white/5 border border-white/10 rounded-2xl p-5"
          >

            {/* IMAGE */}
            <div>
              <Image
                src={product.image}
                alt={product.title}
                width={700}
                height={500}
               className="rounded-xl object-cover w-full h-[320px]"
              />
            </div>

            {/* CONTENT */}
            <div>

              <div className="inline-block bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm">
                🔥 Bestseller
              </div>

              <h2 className="text-3xl font-bold mt-4">
                {product.title}
              </h2>

              <p className="text-gray-400 mt-4 leading-6 text-sm">
                {product.description}
              </p>

              {/* FEATURES */}
              <div className="mt-4 space-y-2">

                {product.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <div className="text-cyan-400">✔</div>

                    <span className="text-gray-300">
                      {feature}
                    </span>
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
                  75% OFF
                </span>
              </div>

              {/* COMMITMENT */}
              <div className="mt-6 bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl">
                <h3 className="text-xl font-semibold">
                  🤝 Our Commitment
                </h3>

                <p className="text-gray-300 mt-3 text-sm leading-6">
                  {product.commitment}
                </p>
              </div>

              {/* BUTTON */}
              {/* <button
                onClick={() => router.push("/checkout")}
                className="mt-8 bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 rounded-2xl font-semibold text-lg w-full"
              >
                Buy Now 🚀
              </button> */}

            </div>
          </div>

        ))}

      </div>

    </div>
  );
}