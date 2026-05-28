"use client"

import { useEffect, useState } from "react"

interface Product {
  id: string
  title: string
  price: number
  image: string
  buyLink?: string
}

export default function CartPage() {
  const [cart, setCart] = useState<string[]>([])

  // ✅ SAME PRODUCTS (jo tum products page me use kar rahi ho)
  const allProducts: Product[] = [
    {
      id: "1",
      title: "Nebula UI Kit",
      price: 99,
      image: "/images/nebula.png",
      buyLink: "https://digitalnestt.lemonsqueezy.com/checkout",
    },
    {
      id: "2",
      title: "Icons Pack",
      price: 99,
      image: "/images/icons.png",
    },
    {
      id: "3",
      title: "Landing Template",
      price: 99,
      image: "/images/template.png",
    },
    {
      id: "7",
      title: "Top 5 AI Tools",
      price: 499,
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=220&fit=crop&auto=format",
      // buyLink: "https://drive.google.com/drive/folders/1ZshFscuQOkie64_mA87s1AxMQCZcGwQ9?usp=drive_link",
        buyLink: "/sales",

    },
  ]

  useEffect(() => {
    const loadCart = () => {
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]")
      setCart(storedCart)
    }

    loadCart()

    window.addEventListener("cartUpdated", loadCart)

    return () => {
      window.removeEventListener("cartUpdated", loadCart)
    }
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
                    <p className="text-blue-400">${product.price}</p>
                  </div>
                  {/* ✅ BUY BUTTON ADD HERE */}
                  {product.buyLink ? (
                    <a
                      href={product.buyLink}
                      target="_blank"
                      className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                      Buy Now
                    </a>
                  ) : (
                    <button
                      className="bg-gray-500 px-4 py-2 rounded-lg cursor-not-allowed"
                    >
                      Buy Now
                    </button>
                  )}

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
              ${total}
            </span>
          </div>
        </>
      )}
    </div>
  )
}