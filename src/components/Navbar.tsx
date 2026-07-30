import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const menuItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigate = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState({}, "", "/");
    }

    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button type="button" onClick={() => handleNavigate("home")} className="flex items-center">
          <img src="/images/logo.png" alt="Sai Computech" className="h-14 w-auto sm:h-16" />
        </button>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex">
          {menuItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavigate(item.id)}
              className="transition hover:text-[#0f6db1]"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 transition hover:bg-slate-100 hover:text-[#0f6db1] md:hidden"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-slate-200 bg-white/95 transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavigate(item.id)}
              className="rounded-md px-2 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-[#0f6db1]"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}