import {
  Monitor,
  Printer,
  Wrench,
  Headphones,
  Camera,
  KeyRound,
  Fingerprint,
  Network,
} from "lucide-react";

const services = [
  {
    title: "Computer Sales",
    description:
      "Premium desktops, laptops, workstations, and all-in-one systems tailored for business, education, and creative workloads.",
    details: ["Performance-focused hardware", "Business-ready productivity systems", "Trusted brands and warranty coverage"],
    icon: Monitor,
  },
  {
    title: "Peripherals & Accessories",
    description:
      "High-quality printers, monitors, UPS devices, storage solutions, and ergonomic accessories to complete your setup.",
    details: ["Reliable output devices", "Scalable office equipment", "Professional-grade accessories"],
    icon: Printer,
  },
  {
    title: "Repairs & Maintenance",
    description:
      "Fast turnaround support for hardware diagnostics, software issues, upgrades, and annual maintenance contracts.",
    details: ["On-site and desk-side support", "System optimization", "Preventive maintenance programs"],
    icon: Wrench,
  },
  {
    title: "IT Support & Consulting",
    description:
      "Strategic infrastructure planning, deployment guidance, and expert consulting for growing organizations.",
    details: ["Infrastructure assessments", "Server and network planning", "Scalable technology roadmaps"],
    icon: Headphones,
  },
  {
    title: "CCTV & Surveillance",
    description:
      "Smart security systems for monitoring, recording, and remote access across residential and commercial spaces.",
    details: ["HD and IP camera deployment", "Remote monitoring support", "Video management integration"],
    icon: Camera,
  },
  {
    title: "Access Control",
    description:
      "Secure and modern entry solutions including RFID, biometric, and smart access technologies.",
    details: ["Door access deployment", "Visitor management integration", "Enhanced security control"],
    icon: KeyRound,
  },
  {
    title: "Biometric Systems",
    description:
      "Attendance and identity verification systems built for reliable, secure personnel management.",
    details: ["Fingerprint and facial recognition", "Payroll-ready integrations", "Secure identity workflows"],
    icon: Fingerprint,
  },
  {
    title: "Networking",
    description:
      "Robust wired and wireless networking solutions designed to keep your environment connected and efficient.",
    details: ["Structured cabling", "Router and switch deployment", "Firewall and Wi-Fi solutions"],
    icon: Network,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#0f6db1]">
            WHAT WE OFFER
          </p>

          <h2 className="text-4xl font-extrabold text-gray-900 md:text-5xl">
            Comprehensive IT services, engineered for performance.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-500">
            From high-performance computing and secure infrastructure to intelligent surveillance and access systems,
            Sai Computech delivers end-to-end technology solutions with a premium standard of execution.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-sky-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0f6db1] transition-all duration-300 group-hover:bg-[#0b3f6b]">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-gray-900">{service.title}</h3>
                <p className="leading-8 text-gray-500">{service.description}</p>

                <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-900">Includes</p>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0f6db1]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}