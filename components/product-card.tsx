"use client"

import { useState } from "react"
import { Star, Loader2 } from "lucide-react"

interface ProductCardProps {
  id: string
  title: string
  creator: string
  category: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  image?: string
  isNew?: boolean
  isHot?: boolean
}

export function ProductCard({
  id,
  title,
  creator,
  category,
  price,
  originalPrice,
  rating,
  reviewCount,
  image,
  isNew,
  isHot,
}: ProductCardProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [imgError, setImgError] = useState(false)

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
      "Landing": "#3B82F6",
    }
    return colors[cat] || "#3B82F6"
  }

  return (
    <div
      className="product-card glass-card overflow-hidden flex flex-col group"
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(24px)",
        border: "1px solid rgba(255, 255, 255, 0.06)",
        borderRadius: "20px",
      }}
    >
      {/* Image Area */}
      <div
        className="relative h-[220px] overflow-hidden"
        style={{ borderRadius: "20px 20px 0 0" }}
      >
        {/* Real image */}
        {image && !imgError ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          /* Fallback gradient */
          <div
            className="w-full h-full"
            style={{
              background: "linear-gradient(145deg, rgba(59, 130, 246, 0.15), rgba(6, 182, 212, 0.08))",
            }}
          >
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
                                 radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.4) 0%, transparent 50%)`,
              }}
            />
          </div>
        )}

        {/* Dark overlay on hover for better badge visibility */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

        {/* Category Badge */}
        <div
          className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 rounded-full z-10"
          style={{
            background: "rgba(3, 7, 18, 0.8)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(59, 130, 246, 0.2)",
          }}
        >
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{
              background: getCategoryColor(category),
              boxShadow: `0 0 10px ${getCategoryColor(category)}`,
            }}
          />
          <span className="text-xs font-semibold text-white tracking-wide">{category}</span>
        </div>

        {/* NEW or HOT Badge */}
        {(isNew || isHot) && (
          <div
            className="absolute top-4 right-4 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide z-10"
            style={{
              background: isHot
                ? "linear-gradient(135deg, #EF4444, #F59E0B)"
                : "linear-gradient(135deg, #3B82F6, #06B6D4)",
              color: "#fff",
              boxShadow: isHot
                ? "0 0 20px rgba(239, 68, 68, 0.5)"
                : "0 0 20px rgba(59, 130, 246, 0.5)",
            }}
          >
            {isHot ? "HOT" : "NEW"}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <h3
          className="text-xl font-bold text-white mb-2 line-clamp-1 group-hover:text-[#3B82F6] transition-colors"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {title}
        </h3>

        <p className="text-sm text-[#94A3B8] mb-4" style={{ fontFamily: "'Space Mono', monospace" }}>
          by @{creator}
        </p>

        <div className="flex items-center gap-2 mb-5">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={16}
                className={star <= rating ? "fill-[#F59E0B] text-[#F59E0B]" : "text-[#94A3B8]"}
              />
            ))}
          </div>
          <span className="text-xs text-[#94A3B8] font-medium">({reviewCount})</span>
        </div>

        <div className="flex items-center gap-3 mb-6">
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
            <span className="text-sm text-[#94A3B8] line-through" style={{ fontFamily: "'Space Mono', monospace" }}>
              ${originalPrice}
            </span>
          )}
        </div>

        <button
          onClick={handleBuyNow}
          disabled={isLoading}
          className="w-full py-4 rounded-xl font-bold text-white transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.02]"
          style={{
            background: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)",
            boxShadow: "0 4px 20px rgba(59, 130, 246, 0.3)",
            fontSize: "14px",
          }}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 size={18} className="animate-spin" />
              Processing...
            </span>
          ) : (
            <>Buy Now &#8594;</>
          )}
        </button>
      </div>
    </div>
  )
}
