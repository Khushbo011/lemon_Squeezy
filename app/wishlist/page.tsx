"use client"

import { useEffect, useState } from "react"
import { ProductCard } from "@/components/product-card"

export default function WishlistPage() {
  const [wishlistIds, setWishlistIds] = useState<string[]>([])

  // 🔥 Dummy products (same jo tum products page me use kar rahi ho)
  const allProducts = [
    {
      id: "1",
      title: "UI Kit Pro",
      creator: "designpro",
      category: "UI Kit",
      price: 49,
      rating: 5,
      reviewCount: 120,
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766",
      checkoutUrl: "#",
    },
    {
      id: "2",
      title: "Logo Templates",
      creator: "brandhub",
      category: "Icons",
      price: 29,
      rating: 4,
      reviewCount: 80,
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d",
      checkoutUrl: "#",
    },
    {
      id: "3",
      title: "Notion Dashboard",
      creator: "productivity",
      category: "Notion",
      price: 19,
      rating: 5,
      reviewCount: 200,
      image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3",
      checkoutUrl: "#",
    },
  ]

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist") || "[]")
    setWishlistIds(stored)
  }, [])

  // ✅ Filter only liked products
  const wishlistProducts = allProducts.filter((p) =>
    wishlistIds.includes(p.id)
  )

  return (
    <div className="min-h-screen p-10 text-white">
      <h1 className="text-3xl font-bold mb-6">❤️ Your Wishlist</h1>

      {wishlistProducts.length === 0 ? (
        <p className="text-gray-400">No items in wishlist</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wishlistProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </div>
  )
}