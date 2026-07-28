export default function Contact() {
  return (
    <section id="contact" className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0f6db1]">Contact</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Contact us</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Reach out for product advice, project support, or a quick quote.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900">Sai Computech</h3>
            <div className="mt-6 space-y-3 text-slate-600">
              <p>📍 Jalahalli, Bengaluru</p>
              <p>� info@saicomputech.com</p>
              <p>🕒 Monday – Saturday: 9:30 AM – 7:00 PM</p>
            </div>
            <p className="mt-8 text-sm leading-7 text-slate-600">
              Fill out the form and we will contact you with the details you need.
            </p>
          </div>

          <form className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <label className="space-y-2 text-sm font-medium text-slate-700">
              <span>Name</span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0f6db1] focus:ring-2 focus:ring-[#0f6db1]/10"
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-slate-700">
              <span>Email</span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0f6db1] focus:ring-2 focus:ring-[#0f6db1]/10"
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-slate-700">
              <span>Message</span>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your requirements"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#0f6db1] focus:ring-2 focus:ring-[#0f6db1]/10"
              />
            </label>
            <button
              type="submit"
              className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[#0f6db1] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0b3f6b]"
            >
              Send inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}