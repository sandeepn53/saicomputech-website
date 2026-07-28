import { BadgeCheck, Headphones, ShieldCheck, Wrench } from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Genuine, warranty-backed products",
    description: "Every product is selected for reliability and long-term performance.",
  },
  {
    icon: ShieldCheck,
    title: "Honest advice and fair pricing",
    description: "We help you choose solutions that fit your needs without unnecessary cost.",
  },
  {
    icon: Wrench,
    title: "Fast turnaround on repairs",
    description: "Our team keeps downtime low with efficient maintenance and support.",
  },
  {
    icon: Headphones,
    title: "End-to-end support after the sale",
    description: "From setup to follow-up service, we stay with you at every step.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#0f6db1]">
            About us
          </p>
          <h2 className="mb-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Trusted technology expertise, delivered with precision.
          </h2>
          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              <strong className="text-slate-900">Sai Computech</strong> is a trusted technology partner delivering
              enterprise-ready solutions across computing, networking, surveillance, access control, and managed support.
            </p>
            <p>
              With over <strong>10 years of experience</strong>, <strong>500+ satisfied clients</strong>, and
              <strong>1,000+ products delivered</strong>, we combine product quality, technical knowledge, and service
              excellence to support every stage of your infrastructure journey.
            </p>
            <p>
              Our approach is rooted in reliability, transparent consultation, and seamless implementation—whether for a
              single deployment or a long-term technology roadmap.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-2 shadow-[0_20px_40px_rgba(15,109,177,0.08)]">
            <div className="relative overflow-hidden rounded-[1.25rem]">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/15 to-transparent" />
              <img
                src="/images/about.jpg"
                alt="Sai Computech team and technology workspace"
                className="h-64 w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-6 rounded-[1.5rem] bg-slate-900 p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Why clients trust us</p>
            <p className="mt-3 text-2xl font-semibold">
              Premium solutions backed by engineering excellence and dependable service.
            </p>
          </div>

          <div className="mt-6 space-y-4">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0f6db1] text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}