"use client"

import { useState,useEffect} from "react"
import { Star, Loader2,Heart} from "lucide-react"



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
  checkoutUrl?: string
  features?: string[]
  delivery?: string
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
  checkoutUrl,
  features,
  delivery,
}: ProductCardProps) {

  const [isLoading, setIsLoading] = useState(false)
  const [imgError, setImgError] = useState(false)
  const [inCart, setInCart] = useState(false)

useEffect(() => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]")
  if (cart.includes(id)) {
    setInCart(true)
  }
}, [id])

  const [liked, setLiked] = useState(false)

// Load wishlist from localStorage
useEffect(() => {
  const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
  if (wishlist.includes(id)) {
    setLiked(true)
  }
}, [id])

  const handleBuyNow = () => {
    if (isLoading) return

    console.log("Checkout URL:", checkoutUrl)

    if (!checkoutUrl || checkoutUrl.trim() === "") {
      alert("Checkout link missing ❌")
      return
    }

    setIsLoading(true)

    try {
      window.open(checkoutUrl, "_blank", "noopener,noreferrer")
    } catch (err) {
      console.error("Checkout error:", err)
      alert("Failed to open checkout")
    } finally {
      setIsLoading(false)
    }
  }
  const handleWishlist = () => {
    console.log("Clicked product ID:", id)
    let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
  
    if (wishlist.includes(id)) {
      wishlist = wishlist.filter((item: string) => item !== id)
      setLiked(false)
    } else {
      wishlist.push(id)
      setLiked(true)
    }
  
    localStorage.setItem("wishlist", JSON.stringify(wishlist))
  }
  const handleCart = () => {
    console.log("Cart clicked ID:", id)
  
    let cart = JSON.parse(localStorage.getItem("cart") || "[]")
  
    if (cart.includes(id)) {
      cart = cart.filter((item: string) => item !== id)
      setInCart(false)
    } else {
      cart.push(id)
      setInCart(true)
    }
  
    localStorage.setItem("cart", JSON.stringify(cart))
    window.dispatchEvent(new Event("cartUpdated"))
  }

  const getCategoryColor = (cat: string) => {
    const colors: Record<string, string> = {
      "UI Kit": "#3B82F6",
      "Framer": "#06B6D4",
      "Icons": "#10B981",
      "Notion": "#F59E0B",
      "Fonts": "#8B5CF6",
      "Landing": "#3B82F6",
    }
    return colors[cat] || "#3B82F6"
  }

  return (
    <div
      className="overflow-hidden flex flex-col group"
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(24px)",
        border: "1px solid rgba(255, 255, 255, 0.06)",
        borderRadius: "20px",
      }}
    >

      {/* IMAGE */}
      <div className="relative h-[220px] overflow-hidden">
        {image && !imgError ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(145deg, rgba(59,130,246,0.15), rgba(6,182,212,0.08))",
            }}
          />
        )}

        {/* CATEGORY */}
        <div className="absolute top-4 left-12 px-3 py-1 rounded-full text-xs font-semibold text-white"
          style={{ background: "rgba(0,0,0,0.6)" }}
        >
          {category}
        </div>

        {/* BADGE */}
        {(isNew || isHot) && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white"
            style={{
              background: isHot
                ? "linear-gradient(135deg,#EF4444,#F59E0B)"
                : "linear-gradient(135deg,#3B82F6,#06B6D4)",
            }}
          >
            {isHot ? "HOT" : "NEW"}
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">
            {title}
          </h3>

          <p className="text-sm text-gray-400 mb-3">
            by @{creator}
          </p>

          {/* RATING */}
          <div className="flex items-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={16}
                className={star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-500"}
              />
            ))}
            <span className="text-xs text-gray-400 ml-2">
              ({reviewCount})
            </span>
          </div>

          {/* PRICE */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl font-bold text-blue-400">
              ${price}
            </span>

            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${originalPrice}
              </span>
            )}
          </div>

          {/* FEATURES - CRITICAL FOR DIGISTORE */}
          {features && features.length > 0 && (
            <div className="border-t border-white/5 pt-3 mb-4">
              <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-2">What you receive:</p>
              <ul className="text-xs text-gray-300 space-y-1.5 pl-4 list-disc">
                {features.map((f, idx) => (
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

          {/* ❤️ WISHLIST */}
          <button
            onClick={handleWishlist}
            className="absolute top-4 left-4 z-20 cursor-pointer"
          >
            <Heart
              size={20}
              className={`transition-all ${
                liked ? "text-red-500 fill-red-500" : "text-white"
              }`}
            />
          </button>

          {/* ADD TO CART */}
          <button
            onClick={handleCart}
            className={`w-full py-3 mb-3 rounded-xl font-semibold cursor-pointer ${
              inCart
                ? "bg-green-500 text-white"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {inCart ? "✅ Added to Cart" : "🛒 Add to Cart"}
          </button>

          {/* BUY NOW */}
          <button
            onClick={handleBuyNow}
            disabled={isLoading}
            className="w-full py-3 rounded-xl font-bold text-white cursor-pointer"
            style={{
              background: "linear-gradient(135deg,#3B82F6,#06B6D4)",
            }}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="animate-spin" size={18} />
                Opening...
              </span>
            ) : (
              "Buy Now →"
            )}
          </button>
        </div>

      </div>
    </div>
  )
}