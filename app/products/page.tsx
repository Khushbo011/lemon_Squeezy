// "use client"

// import { useState } from "react"
// import { Search, Grid, List, ChevronDown, Loader2, Star } from "lucide-react"
// import { Navbar } from "@/components/navbar"
// import { Footer } from "@/components/footer"

// /* ================= PRODUCTS ================= */

// const allProducts = [
//   {
//     id: "1",
//     title: "Nebula UI Kit",
//     creator: "designpro",
//     category: "UI Kit",
//     price: 29,
//     originalPrice: 59,
//     rating: 5,
//     reviewCount: 128,
//     isHot: true,
//     image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=220&fit=crop&auto=format",
//     checkoutUrl: "https://digitalnestt.lemonsqueezy.com/checkout/buy/f83d063a-7742-4d82-b26b-a918dd0cd42d"
//   },
//   {
//     id: "2",
//     title: "Framer Portfolio",
//     creator: "webcrafter",
//     category: "Framer",
//     price: 49,
//     rating: 4,
//     reviewCount: 86,
//     isNew: true,
//     image: "https://images.unsplash.com/photo-1545235617-9465d2a55698",
//     checkoutUrl: "https://digitalnestt.lemonsqueezy.com/checkout/buy/REPLACE_THIS"
//   }
// ]

// /* ================= PAGE ================= */

// export default function ProductsPage() {
//   const [visibleCount, setVisibleCount] = useState(6)
//   const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
//   const [isLoadingMore, setIsLoadingMore] = useState(false)

//   const displayedProducts = allProducts.slice(0, visibleCount)

//   const handleLoadMore = async () => {
//     setIsLoadingMore(true)
//     await new Promise((r) => setTimeout(r, 600))
//     setVisibleCount((p) => p + 3)
//     setIsLoadingMore(false)
//   }

//   return (
//     <div className="min-h-screen">
//       <Navbar />

//       <main className="px-6 py-16 max-w-[1400px] mx-auto">

//         {/* HEADER */}
//         <h1 className="text-5xl font-bold text-white mb-10">
//           All <span className="text-blue-400">Products</span>
//         </h1>

//         {/* TOGGLE */}
//         <div className="flex gap-3 mb-8">
//           <button onClick={() => setViewMode("grid")} className="text-white px-4 py-2 bg-blue-500 rounded">
//             Grid
//           </button>
//           <button onClick={() => setViewMode("list")} className="text-white px-4 py-2 bg-gray-700 rounded">
//             List
//           </button>
//         </div>

//         {/* PRODUCTS */}
//         {viewMode === "grid" ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {displayedProducts.map((p) => (
//               <ProductCard key={p.id} {...p} />
//             ))}
//           </div>
//         ) : (
//           <div className="flex flex-col gap-4">
//             {displayedProducts.map((p) => (
//               <ProductListCard key={p.id} {...p} />
//             ))}
//           </div>
//         )}

//         {/* LOAD MORE */}
//         {visibleCount < allProducts.length && (
//           <div className="text-center mt-10">
//             <button
//               onClick={handleLoadMore}
//               className="px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl"
//             >
//               {isLoadingMore ? "Loading..." : "Load More"}
//             </button>
//           </div>
//         )}

//       </main>

//       <Footer />
//     </div>
//   )
// }

// /* ================= PRODUCT CARD ================= */

// function ProductCard({
//   title,
//   creator,
//   category,
//   price,
//   originalPrice,
//   rating,
//   reviewCount,
//   image,
//   isHot,
//   isNew,
//   checkoutUrl,
// }: any) {

//   const handleBuy = () => {
//     if (!checkoutUrl) return alert("Checkout link missing ❌")
//     window.open(checkoutUrl, "_blank")
//   }

//   return (
//     <div className="bg-white/5 p-4 rounded-xl text-white">

//       <img src={image} className="rounded-lg h-40 w-full object-cover" />

//       <div className="mt-3 font-bold">{title}</div>
//       <div className="text-sm text-gray-400">by @{creator}</div>

//       <div className="flex items-center gap-1 mt-2">
//         {[1,2,3,4,5].map(i => (
//           <Star key={i} size={14} className={i <= rating ? "text-yellow-400" : "text-gray-600"} />
//         ))}
//         <span className="text-xs text-gray-400">({reviewCount})</span>
//       </div>

//       <div className="mt-2 text-blue-400 font-bold">${price}</div>

//       <button
//         onClick={handleBuy}
//         className="mt-3 w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500"
//       >
//         Buy Now
//       </button>
//     </div>
//   )
// }

// /* ================= LIST CARD ================= */

// function ProductListCard({
//   title,
//   creator,
//   price,
//   checkoutUrl,
// }: any) {

//   const handleBuy = () => {
//     if (!checkoutUrl) return alert("Checkout link missing ❌")
//     window.open(checkoutUrl, "_blank")
//   }

//   return (
//     <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl text-white">

//       <div>
//         <div className="font-bold">{title}</div>
//         <div className="text-sm text-gray-400">@{creator}</div>
//       </div>

//       <div className="flex items-center gap-4">
//         <div className="text-blue-400 font-bold">${price}</div>

//         <button
//           onClick={handleBuy}
//           className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500"
//         >
//           Buy
//         </button>
//       </div>

//     </div>
//   )
// }
"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

/* ================= PRODUCTS ================= */

const allProducts = [
  {
    id: "1",
    title: "Nebula UI Kit",
    creator: "designpro",
    category: "UI Kit",
    price: 99,
    originalPrice: 59,
    rating: 5,
    reviewCount: 128,
    isHot: true,
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=220&fit=crop&auto=format",
    checkoutUrl:
      "https://digitalnestt.lemonsqueezy.com/checkout/buy/f83d063a-7742-4d82-b26b-a918dd0cd42d",
    features: [
      "100+ Premium UI Components",
      "Fully customizable Figma files",
      "Clean light & dark mode designs"
    ],
    delivery: "Digital download link sent instantly via email"
  },
  {
    id: "2",
    title: "Framer Portfolio",
    creator: "webcrafter",
    category: "Framer",
    price: 99,
    rating: 4,
    reviewCount: 86,
    isNew: true,
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=220&fit=crop&auto=format",
    checkoutUrl: "", // ❌ missing = safe handled
    features: [
      "5+ Responsive Framer pages",
      "Interactive animations & transitions",
      "SEO optimized structure"
    ],
    delivery: "Framer remix link sent via email after purchase"
  },
  {
    id: "7",
    title: "Top 5 AI Tools",
    creator: "edumaster",
    category: "Education",
    price: 499,
    // originalPrice: 199,
    rating: 5,
    reviewCount: 845,
    isHot: true,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=220&fit=crop&auto=format",
    // checkoutUrl:
      // "https://drive.google.com/drive/folders/1ZshFscuQOkie64_mA87s1AxMQCZcGwQ9?usp=drive_link",
        checkoutUrl: "/sales",
    features: [
      "Curated list of top 5 AI productivity tools",
      "Step-by-step video setup tutorials",
      "Anytimeupdates for new AI tools"
    ],
    delivery: "Digital access link delivered via email"
  },
  {
    id: "ai-business-blueprint",
    title: "The Beginner's AI Business Blueprint",
    creator: "AI Business Academy",
    category: "eBook",
    price: 49,
    rating: 5,
    reviewCount: 154,
    isHot: true,
    image: "/images/ai-business-blueprint-cover.png",
    checkoutUrl: "/sales/ai-business-blueprint",
    features: [
      "Foundations of Artificial Intelligence",
      "Generative AI Explained",
      "Monetizing AI Skills"
    ],
    delivery: "Digital eBook (PDF) download link sent instantly via email"
  },
  {
    id: "ai-automation-business-blueprint",
    title: "AI Automation Business Blueprint eBook",
    creator: "AI Business Academy",
    category: "eBook",
    price: 149,
    rating: 5,
    reviewCount: 120,
    isHot: true,
    image: "/images/ai-automation-business-blueprint-cover.png",
    checkoutUrl: "/sales/ai-automation-business-blueprint",
    features: [
      "Foundations of Artificial Intelligence",
      "Generative AI Explained",
      "Monetizing AI Skills"
    ],
    delivery: "Digital eBook (PDF) download link sent instantly via email"
  },
]

/* ================= PAGE ================= */

export default function ProductsPage() {
  const [visibleCount, setVisibleCount] = useState(6)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const displayedProducts = allProducts.slice(0, visibleCount)

  const handleLoadMore = async () => {
    await new Promise((r) => setTimeout(r, 500))
    setVisibleCount((p) => p + 3)
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main className="px-6 py-16 max-w-[1400px] mx-auto">

        {/* HEADER */}
        <h1 className="text-5xl font-bold text-white mb-10">
          All <span className="text-blue-400">Products</span>
        </h1>

        {/* VIEW TOGGLE */}
        <div className="flex gap-3 mb-8">
          <button
            onClick={() => setViewMode("grid")}
            className="px-4 py-2 rounded bg-blue-500 text-white cursor-pointer"
          >
            Grid
          </button>
          <button
            onClick={() => setViewMode("list")}
            className="px-4 py-2 rounded bg-gray-700 text-white cursor-pointer"
          >
            List
          </button>
        </div>

        {/* PRODUCTS */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProducts.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {displayedProducts.map((p) => (
              <ProductListCard key={p.id} {...p} />
            ))}
          </div>
        )}

        {/* LOAD MORE */}
        {visibleCount < allProducts.length && (
          <div className="text-center mt-10">
            <button
              onClick={handleLoadMore}
              className="px-6 py-3 rounded-xl text-white bg-gradient-to-r from-blue-500 to-cyan-500"
            >
              Load More
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

/* ================= PRODUCT CARD ================= */

function ProductCard({
  title,
  creator,
  price,
  rating,
  reviewCount,
  image,
  checkoutUrl,
  features,
  delivery,
}: any) {
  const handleBuy = () => {
    if (!checkoutUrl) {
      alert("Checkout link missing ❌")
      return
    }

    window.open(checkoutUrl, "_blank")
  }

  return (
    <div className="bg-white/5 p-5 rounded-xl text-white flex flex-col justify-between h-full">
      <div>
        <img src={image} className="rounded-lg h-40 w-full object-cover mb-4" />

        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-gray-400 mb-2">by @{creator}</p>

        {/* RATING */}
        <div className="flex items-center gap-1 mb-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              size={14}
              className={i <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}
            />
          ))}
          <span className="text-xs text-gray-400">({reviewCount})</span>
        </div>

        <div className="text-blue-400 font-bold text-xl mb-4">${price}</div>

        {/* FEATURES - CRITICAL FOR DIGISTORE */}
        {features && features.length > 0 && (
          <div className="border-t border-white/5 pt-3 mb-3">
            <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-2">What you receive:</p>
            <ul className="text-xs text-gray-300 space-y-1.5 pl-4 list-disc">
              {features.map((f: string, idx: number) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        {/* DELIVERY FORMAT - CRITICAL FOR DIGISTORE */}
        {delivery && (
          <div className="text-[11px] text-cyan-400 bg-cyan-500/5 py-1.5 px-2.5 rounded border border-cyan-500/10 font-medium mb-3">
            Format: {delivery}
          </div>
        )}

        <button
          onClick={handleBuy}
          className="w-full py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 font-bold text-sm"
        >
          Buy Now
        </button>
      </div>
    </div>
  )
}

/* ================= LIST CARD ================= */

function ProductListCard({
  title,
  creator,
  price,
  checkoutUrl,
  features,
  delivery,
}: any) {
  const handleBuy = () => {
    if (!checkoutUrl) {
      alert("Checkout link missing ❌")
      return
    }

    window.open(checkoutUrl, "_blank")
  }

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-white/5 rounded-xl text-white gap-4">
      <div className="flex-1">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-gray-400 mb-3">by @{creator}</p>
        
        {features && features.length > 0 && (
          <div className="mt-3 mb-2">
            <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-2">What you receive:</p>
            <ul className="text-xs text-gray-300 space-y-1 pl-4 list-disc">
              {features.map((f: string, idx: number) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex flex-col items-end gap-3 self-stretch md:self-auto justify-between">
        <div className="text-blue-400 font-bold text-lg">${price}</div>
        {delivery && (
          <div className="text-[11px] text-cyan-400 bg-cyan-500/5 py-1 px-2.5 rounded border border-cyan-500/10">
            Format: {delivery}
          </div>
        )}
        <button
          onClick={handleBuy}
          className="w-full md:w-auto px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 font-bold text-sm"
        >
          Buy Now
        </button>
      </div>
    </div>
  )
}