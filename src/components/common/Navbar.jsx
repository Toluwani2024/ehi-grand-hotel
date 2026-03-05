import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Rooms", href: "/rooms" },
  { label: "Resort", href: "/resort" },
  { label: "Gallery", href: "/gallery" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#D4AF37]/25 bg-linear-to-r from-black via-neutral-900 to-black backdrop-blur font-sans">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        {/* LOGO */}
        <a href="/" aria-label="Home" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Ehi Grand Hotel Logo"
            className="h-13.5 w-auto object-contain"
          />
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden items-center gap-7 text-[13px] font-medium tracking-[0.10em] text-neutral-200 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="py-2 transition-colors hover:text-[#D4AF37]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#D4AF37]/70 bg-black/20 text-[#D4AF37] transition-colors hover:bg-black/35 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden border-t border-[#D4AF37]/20 bg-linear-to-b from-black via-neutral-900 to-black transition-[max-height,opacity] duration-200 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-1 px-4 py-3 text-[13px] font-medium tracking-[0.10em] text-neutral-200">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 transition-colors hover:bg-white/5 hover:text-[#D4AF37]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}


