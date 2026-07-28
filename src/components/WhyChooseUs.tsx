import { Cpu, ShieldCheck, Laptop2, Sparkles } from "lucide-react";

const points = [
  {
    title: "10+ Years Experience",
    desc: "Trusted IT solutions provider supporting homes and businesses with confidence.",
    icon: Cpu,
  },
  {
    title: "500+ Happy Customers",
    desc: "Long-term relationships built on reliability, transparency, and service.",
    icon: ShieldCheck,
  },
  {
    title: "1000+ Products Sold",
    desc: "A curated selection of genuine technology products from leading brands.",
    icon: Laptop2,
  },
  {
    title: "Expert Support",
    desc: "Professional installation, maintenance, and troubleshooting whenever you need it.",
    icon: Sparkles,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0f6db1]">Why choose us</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            A dependable partner for high-performance technology environments.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            From mission-critical infrastructure to daily workplace productivity, we deliver strategic guidance, seamless implementation, and lasting support.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {points.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0f6db1] text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}