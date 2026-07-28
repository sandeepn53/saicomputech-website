export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center">
          <img src="/images/logo.png" alt="Sai Computech" className="h-14 w-auto sm:h-16" />
        </a>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex">
          <a href="#about" className="transition hover:text-[#0f6db1]">
            About
          </a>
          <a href="#services" className="transition hover:text-[#0f6db1]">
            Services
          </a>
          <a href="#reviews" className="transition hover:text-[#0f6db1]">
            Reviews
          </a>
          <a href="#contact" className="transition hover:text-[#0f6db1]">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}