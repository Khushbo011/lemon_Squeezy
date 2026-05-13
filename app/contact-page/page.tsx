export default function ContactPage() {
    return (
      <div className="min-h-screen bg-[#020617] text-white px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Contact Us
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
              Have questions about our products, orders, or support? Feel free to
              reach out and we’ll get back to you as soon as possible.
            </p>
          </div>
  
          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Email Support
              </h2>
              <p className="text-slate-300 leading-7">
                For product inquiries, order support, or business-related
                questions, contact us via email.
              </p>
              <p className="mt-4 text-blue-400 break-all">
                khushbookushwah726@gmail.com
              </p>
            </div>
  
            <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Business Hours
              </h2>
              <p className="text-slate-300 leading-7">
                Monday – Saturday
                <br />
                10:00 AM – 7:00 PM IST
              </p>
            </div>
          </div>
  
          {/* Contact Form */}
          <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-6">
              Send a Message
            </h2>
  
            <form className="space-y-5">
              <div>
                <label className="block mb-2 text-sm text-slate-300">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-[#020617] border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>
  
              <div>
                <label className="block mb-2 text-sm text-slate-300">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-[#020617] border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>
  
              <div>
                <label className="block mb-2 text-sm text-slate-300">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message"
                  className="w-full bg-[#020617] border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500 resize-none"
                />
              </div>
  
              <button
                type="submit"
                className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
  
          {/* Footer */}
          <div className="mt-14 border-t border-slate-800 pt-6 text-center text-slate-500 text-sm">
            © 2026 Digital Store. All rights reserved.
          </div>
        </div>
      </div>
    )
  }
  