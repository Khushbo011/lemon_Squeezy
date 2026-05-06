export default function DisclaimerPage() {
    return (
      <div className="min-h-screen bg-[#020617] text-white px-6 py-14 flex justify-center">
        
        {/* CENTERED CONTAINER */}
        <div className="w-full max-w-3xl space-y-10 text-left">
  
          {/* HEADER */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">⚠️ Disclaimer</h1>
            <p className="text-gray-400 text-sm">
              Transparency matters — here’s how our platform works
            </p>
          </div>
  
          {/* INTRO */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <p className="text-gray-300 leading-relaxed">
              Welcome to DigitalStore. We build and provide digital products with honesty,
              transparency, and a strong focus on user trust.  
              While we strive to deliver high-quality content, this disclaimer helps clarify
              the scope, responsibility, and limitations of our platform.
            </p>
          </div>
  
          {/* SECTION 1 */}
          <div>
            <h2 className="text-lg font-semibold mb-2">📌 Use at Your Own Responsibility</h2>
            <p className="text-gray-300 leading-relaxed">
              All products and content on this website are provided on an "as is" basis.
              We encourage users to evaluate and use them based on their own needs and judgment.
              We are always here to support you, but final usage decisions remain in your hands.
            </p>
          </div>
  
          {/* SECTION 2 */}
          <div>
            <h2 className="text-lg font-semibold mb-2">🎯 Information Accuracy & Updates</h2>
            <p className="text-gray-300 leading-relaxed">
              We put our best effort into keeping information accurate, relevant, and updated.
              However, digital content may evolve over time. Minor variations or updates may occur
              as we continuously improve our products and services.
            </p>
          </div>
  
          {/* SECTION 3 */}
          <div>
            <h2 className="text-lg font-semibold mb-2">🔗 Third-Party Links</h2>
            <p className="text-gray-300 leading-relaxed">
              Some pages may include links to external websites for reference or convenience.
              We do not control these third-party platforms and are not responsible for their
              content, policies, or updates. We recommend reviewing their terms before engaging.
            </p>
          </div>
  
          {/* SECTION 4 */}
          <div>
            <h2 className="text-lg font-semibold mb-2">💼 No Professional Advice</h2>
            <p className="text-gray-300 leading-relaxed">
              Our content is intended for informational and educational purposes only.
              It should not be considered legal, financial, or professional advice.
              For specific guidance, we always recommend consulting a qualified expert.
            </p>
          </div>
  
          {/* TRUST SECTION */}
          <div>
            <h2 className="text-lg font-semibold mb-2">🤝 Our Commitment to You</h2>
            <p className="text-gray-300 leading-relaxed">
              Your trust is important to us. We are committed to being transparent,
              improving continuously, and providing value through our digital products.  
              If you ever face any issue or have questions, we are always here to support you.
              Feedback is always welcome — it helps us grow better for you.
            </p>
          </div>
  
          {/* FINAL NOTE */}
          <div className="border-t border-white/10 pt-6 space-y-2">
            <p className="text-gray-400 text-sm">
              By using DigitalStore, you acknowledge and agree to this disclaimer.
            </p>
            <p className="text-gray-500 text-xs">
              Last updated: May 2026
            </p>
          </div>
  
        </div>
      </div>
    )
  }