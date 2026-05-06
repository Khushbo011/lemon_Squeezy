"use client"

import { useEffect, useState } from "react"

interface Product {
  id: string
  title: string
  price: number
  image: string
}

export default function CartPage() {
  const [cart, setCart] = useState<string[]>([])

  // ✅ SAME PRODUCTS (jo tum products page me use kar rahi ho)
  const allProducts: Product[] = [
    {
      id: "1",
      title: "Nebula UI Kit",
      price: 499,
      image: "/images/nebula.png",
    },
    {
      id: "2",
      title: "Icons Pack",
      price: 299,
      image: "/images/icons.png",
    },
    {
      id: "3",
      title: "Landing Template",
      price: 799,
      image: "/images/template.png",
    },
  ]

  // ✅ Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]")
    setCart(storedCart)
  }, [])

  // ✅ Remove item
  const removeItem = (id: string) => {
    const updated = cart.filter((item) => item !== id)
    localStorage.setItem("cart", JSON.stringify(updated))
    setCart(updated)

    // update navbar
    window.dispatchEvent(new Event("cartUpdated"))
  }

  // ✅ Total price
  const total = cart.reduce((sum, id) => {
    const product = allProducts.find((p) => p.id === id)
    return sum + (product?.price || 0)
  }, 0)

  return (
    <div className="min-h-screen p-10 text-white">
      <h1 className="text-3xl font-bold mb-8">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-400">Cart is empty</p>
      ) : (
        <>
          {/* ITEMS */}
          <div className="flex flex-col gap-4 mb-8">
            {cart.map((id) => {
              const product = allProducts.find((p) => p.id === id)

              if (!product) return null

              return (
                <div
                  key={id}
                  className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl"
                >
                  {/* IMAGE */}
                  <img
                    src={product.image}
                    className="w-20 h-20 object-cover rounded-lg"
                  />

                  {/* DETAILS */}
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold">
                      {product.title}
                    </h2>
                    <p className="text-blue-400">₹{product.price}</p>
                  </div>

                  {/* REMOVE */}
                  <button
                    onClick={() => removeItem(id)}
                    className="text-red-400 hover:text-red-600"
                  >
                    ❌ Remove
                  </button>
                </div>
              )
            })}
          </div>

          {/* TOTAL */}
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl flex justify-between items-center">
            <h2 className="text-xl font-bold">Total</h2>
            <span className="text-2xl text-blue-400 font-bold">
              ₹{total}
            </span>
          </div>
        </>
      )}
    </div>
  )
}