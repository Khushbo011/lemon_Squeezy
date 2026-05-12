"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Search, ChevronDown } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { ProductCard } from "@/components/product-card"
import { Footer } from "@/components/footer"

// ✅ CATEGORY META
const categoryMeta: Record<string, { title: string; description: string }> = {
  "ui-kits": {
    title: "UI Kits",
    description: "Beautiful, ready-to-use UI kits for modern apps and SaaS products.",
  },
  "templates": {
    title: "Templates",
    description: "High-quality templates to launch your projects faster.",
  },
  "icons": {
    title: "Icon Packs",
    description: "Premium icons to enhance your design systems.",
  },
  "fonts": {
    title: "Premium Fonts",
    description: "Stylish and professional fonts for your brand.",
  },
  "notion": {
    title: "Notion Templates",
    description: "Boost productivity with powerful Notion dashboards.",
  },
  "framer": {
    title: "Framer Templates",
    description: "Launch stunning websites quickly with Framer templates.",
  },
}

// ✅ UPDATED PRODUCTS (MORE UI KITS ADDED 🔥)
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
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400",
  },
  {
    id: "7",
    title: "Modern Dashboard UI",
    creator: "uistudio",
    category: "UI Kit",
    price: 99,
    rating: 5,
    reviewCount: 90,
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400",
  },
  {
    id: "8",
    title: "Mobile App UI Kit",
    creator: "appdesign",
    category: "UI Kit",
    price: 99,
    rating: 4,
    reviewCount: 60,
    image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=400",
  },

  // OTHER PRODUCTS
  {
    id: "2",
    title: "Framer Portfolio",
    creator: "webcrafter",
    category: "Framer",
    price: 99,
    rating: 4,
    reviewCount: 86,
    isNew: true,
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400",
  },
  {
    id: "3",
    title: "3D Icon Pack Pro",
    creator: "iconmaster",
    category: "Icons",
    price: 99,
    originalPrice: 39,
    rating: 5,
    reviewCount: 234,
    image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?w=400",
  },
  {
    id: "4",
    title: "Notion Dashboard",
    creator: "productivity",
    category: "Notion",
    price: 99,
    rating: 4,
    reviewCount: 67,
    isNew: true,
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400",
  },
  {
    id: "5",
    title: "Display Sans Pro",
    creator: "typefoundry",
    category: "Fonts",
    price: 99,
    rating: 5,
    reviewCount: 156,
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400",
  },
  {
    id: "6",
    title: "SaaS Landing Kit",
    creator: "landinglab",
    category: "Framer",
    price: 299,
    originalPrice: 149,
    rating: 5,
    reviewCount: 312,
    isHot: true,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
  },
]

// ✅ CATEGORY MAP
const categoryMap: Record<string, string[]> = {
  "ui-kits": ["UI Kit"],
  "templates": ["Framer"],
  "icons": ["Icons"],
  "fonts": ["Fonts"],
  "notion": ["Notion"],
  "framer": ["Framer"],
}

const sortOptions = ["Popular", "Newest", "Price: Low-High", "Price: High-Low"]

export default function CategoryPage() {
  const params = useParams()
  const slug = params.slug as string

  const meta = categoryMeta[slug] || {
    title: "Products",
    description: "Explore our collection of premium digital products.",
  }

  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("Popular")
  const [showSortDropdown, setShowSortDropdown] = useState(false)
  const [visibleCount, setVisibleCount] = useState(6)
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  // ✅ FILTER
  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.creator.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory =
      categoryMap[slug]?.includes(product.category)

    return matchesSearch && matchesCategory
  })

  // ✅ SORT
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "Newest": return b.isNew ? 1 : -1
      case "Price: Low-High": return a.price - b.price
      case "Price: High-Low": return b.price - a.price
      default: return b.reviewCount - a.reviewCount
    }
  })

  const displayedProducts = sortedProducts.slice(0, visibleCount)

  const handleLoadMore = async () => {
    setIsLoadingMore(true)
    await new Promise((res) => setTimeout(res, 800))
    setVisibleCount((prev) => prev + 3)
    setIsLoadingMore(false)
  }

  return (
    <div className="relative min-h-screen">
      <div className="orb orb-blue w-[500px] h-[500px] top-[50px] -left-[200px]" />
      <div className="orb orb-cyan w-[400px] h-[400px] top-[300px] -right-[150px]" />

      <Navbar />

      <main className="py-16 px-6">
        <div className="max-w-[1400px] mx-auto">

          {/* HEADER */}
          <div className="mb-14">
            <h1 className="font-display text-5xl md:text-7xl font-extrabold text-white mb-4">
              {meta.title} <span className="text-gradient">Collection</span>
            </h1>

            <p className="text-[#94A3B8] text-lg max-w-2xl">
              {meta.description}
            </p>
          </div>

          {/* SEARCH */}
          <div className="relative mb-10">
            <Search size={22} className="absolute left-6 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-glass"
            />
          </div>

          {/* SORT */}
          <div className="flex justify-between mb-12">
            <div />

            <div className="relative">
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white"
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                Sort: {sortBy}
                <ChevronDown size={16} />
              </button>

              {showSortDropdown && (
                <div className="absolute right-0 mt-2 bg-black p-3 rounded-xl">
                  {sortOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSortBy(option)
                        setShowSortDropdown(false)
                      }}
                      className="block w-full text-left py-2 text-sm"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* PRODUCTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* EMPTY */}
          {displayedProducts.length === 0 && (
            <p className="text-center text-gray-400">No products found</p>
          )}

          {/* LOAD MORE */}
          {visibleCount < sortedProducts.length && (
            <div className="text-center">
              <button onClick={handleLoadMore} className="btn-ghost">
                {isLoadingMore ? "Loading..." : "Load More"}
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}