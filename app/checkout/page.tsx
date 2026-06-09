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
          className="mt-8 w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 hover:scale-[1.02] transition-all duration-300 px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/20"
        >
          Complete Purchase 🚀
        </button>

        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          <span>Backed by our <strong>60-Day Money-Back Guarantee</strong></span>
        </div>

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