"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect") || "/thank-you";

  return (
    <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center px-6">

      <div className="bg-white/5 border border-white/10 rounded-3xl p-10 max-w-md w-full text-center">

        <div className="text-6xl mb-4">💳</div>

        <h1 className="text-4xl font-bold">
          Secure Checkout
        </h1>

        <p className="text-gray-400 mt-4 leading-7">
          Complete your payment securely and get instant access to your digital product.
        </p>

        <button
          onClick={() => router.push(redirectUrl)}
          className="mt-8 w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 hover:scale-[1.02] transition-all duration-300 px-6 py-3 rounded-xl font-semibold"
        >
          Complete Purchase 🚀
        </button>

      </div>

    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#020617] text-white flex items-center justify-center">Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}