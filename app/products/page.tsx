"use client"

import { useState } from "react"
import { Search, Grid, List, ChevronDown, Loader2 } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { ProductCard } from "@/components/product-card"
import { Footer } from "@/components/footer"

const allProducts = [
  {
    id: "1",
    title: "Nebula UI Kit",
    creator: "designpro",
    category: "UI Kit",
    price: 29,
    originalPrice: 59,
    rating: 5,
    reviewCount: 128,
    isHot: true,
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=220&fit=crop&auto=format",
  },
  {
    id: "2",
    title: "Framer Portfolio",
    creator: "webcrafter",
    category: "Framer",
    price: 49,
    rating: 4,
    reviewCount: 86,
    isNew: true,
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=220&fit=crop&auto=format",
  },
  {
    id: "3",
    title: "3D Icon Pack Pro",
    creator: "iconmaster",
    category: "Icons",
    price: 19,
    originalPrice: 39,
    rating: 5,
    reviewCount: 234,
    image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?w=400&h=220&fit=crop&auto=format",
  },
  {
    id: "4",
    title: "Notion Dashboard",
    creator: "productivity",
    category: "Notion",
    price: 15,
    rating: 4,
    reviewCount: 67,
    isNew: true,
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=220&fit=crop&auto=format",
  },
  {
    id: "5",
    title: "Display Sans Pro",
    creator: "typefoundry",
    category: "Fonts",
    price: 39,
    rating: 5,
    reviewCount: 156,
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=400&h=220&fit=crop&auto=format",
  },
  {
    id: "6",
    title: "SaaS Landing Kit",
    creator: "landinglab",
    category: "Framer",
    price: 79,
    originalPrice: 149,
    rating: 5,
    reviewCount: 312,
    isHot: true,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=220&fit=crop&auto=format",
  },
  {
    id: "7",
    title: "Minimal Icon Set",
    creator: "iconify",
    category: "Icons",
    price: 24,
    rating: 4,
    reviewCount: 89,
    image: "https://images.unsplash.com/photo-1633354931133-27ac1ee5d853?w=400&h=220&fit=crop&auto=format",
  },
  {
    id: "8",
    title: "Dashboard Pro Kit",
    creator: "uicraft",
    category: "UI Kit",
    price: 59,
    originalPrice: 99,
    rating: 5,
    reviewCount: 201,
    isHot: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=220&fit=crop&auto=format",
  },
  {
    id: "9",
    title: "Startup Template",
    creator: "framerdev",
    category: "Framer",
    price: 69,
    rating: 4,
    reviewCount: 145,
    isNew: true,
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=220&fit=crop&auto=format",
  },
  {
    id: "10",
    title: "Life Planner Kit",
    creator: "notionhq",
    category: "Notion",
    price: 29,
    rating: 5,
    reviewCount: 178,
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=220&fit=crop&auto=format",
  },
  {
    id: "11",
    title: "Geometric Sans",
    creator: "fontstudio",
    category: "Fonts",
    price: 49,
    originalPrice: 79,
    rating: 5,
    reviewCount: 92,
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=400&h=220&fit=crop&auto=format",
  },
  {
    id: "12",
    title: "E-commerce Kit",
    creator: "shopbuilder",
    category: "UI Kit",
    price: 89,
    rating: 5,
    reviewCount: 267,
    isHot: true,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=220&fit=crop&auto=format",
  },
]

const categories = ["All", "UI Kits", "Templates", "Icons", "Fonts", "Notion", "Framer"]
const sortOptions = ["Popular", "Newest", "Price: Low-High", "Price: High-Low"]

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [sortBy, setSortBy] = useState("Popular")
  const [showSortDropdown, setShowSortDropdown] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [visibleCount, setVisibleCount] = useState(9)

  const categoryMap: Record<string, string[]> = {
    "All": [],
    "UI Kits": ["UI Kit"],
    "Templates": ["Framer"],
    "Icons": ["Icons"],
    "Fonts": ["Fonts"],
    "Notion": ["Notion"],
    "Framer": ["Framer"],
  }

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.creator.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory =
      activeCategory === "All" || categoryMap[activeCategory]?.includes(product.category)
    return matchesSearch && matchesCategory
  })

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
    await new Promise((resolve) => setTimeout(resolve, 800))
    setVisibleCount((prev) => prev + 6)
    setIsLoadingMore(false)
  }

  return (
    <div className="relative min-h-screen">
      <div className="orb orb-blue w-[500px] h-[500px] top-[50px] -left-[200px] opacity-15" />
      <div className="orb orb-cyan w-[400px] h-[400px] top-[300px] -right-[150px] opacity-15" />
      <div className="orb orb-amber w-[350px] h-[350px] bottom-[200px] left-[30%] opacity-10" />

      <Navbar />

      <main className="py-16 px-6">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="mb-14">
            <h1
              className="font-display text-5xl md:text-7xl font-extrabold text-white mb-5"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              All <span className="text-gradient">Products</span>
            </h1>
            <p className="text-[#94A3B8] text-xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Discover <span className="text-[#3B82F6] font-bold">{allProducts.length}+</span> premium digital products
            </p>
          </div>

          {/* Search */}
          <div className="relative mb-10">
            <Search size={22} className="absolute left-6 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
            <input
              type="text"
              placeholder="Search templates, icons, fonts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-5 pl-16 pr-8 rounded-xl text-white placeholder:text-[#94A3B8] outline-none transition-all text-lg focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.06)",
              }}
            />
          </div>

          {/* Filters */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-3 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`filter-pill whitespace-nowrap text-sm font-semibold ${activeCategory === cat ? "active" : ""}`}
                  style={{
                    background: activeCategory === cat
                      ? "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)"
                      : "transparent",
                    color: activeCategory === cat ? "#FFFFFF" : "#94A3B8",
                    border: activeCategory === cat ? "none" : "1px solid rgba(255, 255, 255, 0.08)",
                    padding: "12px 24px",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
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
                  <ChevronDown size={16} className={`transition-transform ${showSortDropdown ? "rotate-180" : ""}`} />
                </button>

                {showSortDropdown && (
                  <div
                    className="absolute top-full right-0 mt-2 py-3 rounded-xl z-50 min-w-[200px]"
                    style={{
                      background: "rgba(15, 23, 42, 0.98)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(59, 130, 246, 0.2)",
                    }}
                  >
                    {sortOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => { setSortBy(option); setShowSortDropdown(false) }}
                        className={`w-full text-left px-5 py-3 text-sm font-medium transition-colors ${
                          sortBy === option ? "text-[#3B82F6]" : "text-[#94A3B8] hover:text-white"
                        }`}
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div
                className="flex items-center rounded-xl overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-3 transition-all ${viewMode === "grid" ? "bg-[#3B82F6] text-white" : "text-[#94A3B8] hover:text-white"}`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-3 transition-all ${viewMode === "list" ? "bg-[#3B82F6] text-white" : "text-[#94A3B8] hover:text-white"}`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Products */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
              {displayedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-5 mb-14">
              {displayedProducts.map((product) => (
                <ProductListCard key={product.id} {...product} />
              ))}
            </div>
          )}

          {/* Empty State */}
          {displayedProducts.length === 0 && (
            <div className="text-center py-24">
              <p className="text-3xl text-white font-bold mb-3" style={{ fontFamily: "'Syne', sans-serif" }}>
                No products found
              </p>
              <p className="text-[#94A3B8] text-lg">Try adjusting your search or filters</p>
            </div>
          )}

          {/* Load More */}
          {visibleCount < sortedProducts.length && (
            <div className="text-center">
              <button
                onClick={handleLoadMore}
                disabled={isLoadingMore}
                className="px-10 py-5 text-base font-semibold rounded-xl inline-flex items-center gap-3"
                style={{ border: "2px solid #3B82F6", color: "#3B82F6", background: "transparent" }}
              >
                {isLoadingMore ? (
                  <><Loader2 size={20} className="animate-spin" /> Loading...</>
                ) : (
                  "Load More Products"
                )}
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

// List View Card
function ProductListCard({
  id, title, creator, category, price, originalPrice, rating, reviewCount, isNew, isHot, image,
}: {
  id: string
  title: string
  creator: string
  category: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  isNew?: boolean
  isHot?: boolean
  image?: string
}) {
  const [isLoading, setIsLoading] = useState(false)

  const handleBuyNow = async () => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 800))
    window.location.href = `https://your-store.lemonsqueezy.com/checkout/buy/${id}`
  }

  const getCategoryColor = (cat: string) => {
    const colors: Record<string, string> = {
      "UI Kit": "#3B82F6",
      "Framer": "#06B6D4",
      "Icons": "#10B981",
      "Notion": "#F59E0B",
      "Fonts": "#06B6D4",
    }
    return colors[cat] || "#3B82F6"
  }

  return (
    <div
      className="product-card glass-card flex flex-col md:flex-row items-stretch overflow-hidden"
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(24px)",
        border: "1px solid rgba(255, 255, 255, 0.06)",
        borderRadius: "20px",
      }}
    >
      {/* Image */}
      <div className="relative w-full md:w-[220px] h-[160px] md:h-auto flex-shrink-0 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className="w-full h-full"
            style={{ background: "linear-gradient(145deg, rgba(59,130,246,0.15), rgba(6,182,212,0.08))" }}
          />
        )}
        {(isNew || isHot) && (
          <div
            className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide"
            style={{
              background: isHot
                ? "linear-gradient(135deg, #EF4444, #F59E0B)"
                : "linear-gradient(135deg, #3B82F6, #06B6D4)",
              color: "#fff",
            }}
          >
            {isHot ? "HOT" : "NEW"}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col md:flex-row items-start md:items-center justify-between p-6 gap-5">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{
                background: getCategoryColor(category),
                boxShadow: `0 0 10px ${getCategoryColor(category)}`,
              }}
            />
            <span className="text-xs text-[#94A3B8] font-semibold tracking-wide">{category}</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
            {title}
          </h3>
          <p className="text-sm text-[#94A3B8]" style={{ fontFamily: "'Space Mono', monospace" }}>
            by @{creator}
          </p>
          <div className="flex items-center gap-2 mt-3">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className={star <= rating ? "text-[#F59E0B]" : "text-[#94A3B8]"}>
                  &#9733;
                </span>
              ))}
            </div>
            <span className="text-xs text-[#94A3B8] font-medium">({reviewCount})</span>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="text-right">
            <span
              className="text-2xl font-bold"
              style={{
                fontFamily: "'Space Mono', monospace",
                background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ${price}
            </span>
            {originalPrice && (
              <span className="block text-sm text-[#94A3B8] line-through" style={{ fontFamily: "'Space Mono', monospace" }}>
                ${originalPrice}
              </span>
            )}
          </div>

          <button
            onClick={handleBuyNow}
            disabled={isLoading}
            className="px-8 py-4 rounded-xl font-bold text-white transition-all disabled:opacity-70 whitespace-nowrap hover:scale-105"
            style={{ background: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)" }}
          >
            {isLoading ? "Processing..." : <>Buy Now &#8594;</>}
          </button>
        </div>
      </div>
    </div>
  )
}
