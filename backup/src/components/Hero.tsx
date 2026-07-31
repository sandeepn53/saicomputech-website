export default function Hero() {
  return (
    <section id="home" className="bg-[linear-gradient(135deg,_#0b3f6b_0%,_#1269b2_50%,_#1f7dc8_100%)] px-6 py-24 text-white lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">
            Enterprise-grade IT solutions
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Intelligent technology infrastructure for modern businesses.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
            From secure networking and surveillance systems to high-performance workstations and managed support, we deliver
            reliable, scalable technology with precision and professionalism.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-[#0b3f6b] transition hover:bg-slate-100"
            >
              Book a consultation
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-white/60"
            >
              Explore solutions
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-sm">
          <div className="absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.25),_transparent_55%)]" />
          <img
            src="/images/server-room.jpg"
            alt="Professional server room infrastructure"
            className="relative h-[360px] w-full rounded-[1.5rem] object-cover shadow-inner"
          />
        </div>
      </div>
    </section>
  );
}