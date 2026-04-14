"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "בית", href: "#hero" },
  { label: "אודות", href: "#about" },
  { label: "שירותים", href: "#services" },
  { label: "נכסים", href: "#properties" },
  { label: "המלצות", href: "#reviews" },
  { label: "צור קשר", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "nav-glass bg-black/90 shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex flex-col leading-tight group">
          <span className="text-xl font-bold tracking-wide text-white group-hover:text-gold transition-colors duration-300"
            style={{ color: "#C9A84C" }}>
            דואן נדל&quot;ן
          </span>
          <span className="text-[11px] text-white/60 tracking-widest uppercase font-light">
            Duan Nadlan
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-[#C9A84C] text-sm font-medium tracking-wide transition-all duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 right-0 w-0 h-[1px] bg-[#C9A84C] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="tel:0505372227"
            className="flex items-center gap-2 bg-[#C9A84C] hover:bg-[#A07830] text-black font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#C9A84C]/40 hover:scale-105"
          >
            <Phone size={14} />
            <span>050-537-2227</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="תפריט"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/95 px-6 py-4 flex flex-col gap-4 border-t border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-[#C9A84C] text-base font-medium py-2 border-b border-white/5 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:0505372227"
            className="flex items-center justify-center gap-2 bg-[#C9A84C] text-black font-bold py-3 rounded-full mt-2"
          >
            <Phone size={16} />
            050-537-2227
          </a>
        </div>
      </div>
    </nav>
  );
}
