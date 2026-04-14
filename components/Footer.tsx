"use client";

import { Phone, MessageCircle, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div
                className="text-3xl font-bold mb-1"
                style={{ color: "#C9A84C" }}
              >
                דואן נדל&quot;ן
              </div>
              <div className="text-white/40 text-sm tracking-widest uppercase font-light">
                Duan Nadlan
              </div>
            </div>
            <p className="text-white/60 leading-relaxed text-sm max-w-sm mb-6">
              דניאל דואן – מומחה נדל&quot;ן בהרצליה עם ניסיון מ-2018. ליווי
              אישי ומקצועי משלב החיפוש ועד סגירת העסקה. זמין 24/7.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/duan.nadlan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C9A84C] flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="3.5"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
                </svg>
              </a>
              <a
                href="https://wa.me/972505372227"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href="tel:0505372227"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C9A84C] flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="font-bold text-sm tracking-widest uppercase mb-6"
              style={{ color: "#C9A84C" }}
            >
              ניווט מהיר
            </h3>
            <ul className="space-y-3">
              {[
                { label: "בית", href: "#hero" },
                { label: "אודות", href: "#about" },
                { label: "שירותים", href: "#services" },
                { label: "נכסים למכירה", href: "#properties" },
                { label: "המלצות", href: "#reviews" },
                { label: "צור קשר", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[#C9A84C] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="font-bold text-sm tracking-widest uppercase mb-6"
              style={{ color: "#C9A84C" }}
            >
              פרטי קשר
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:0505372227"
                  className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors group"
                >
                  <Phone size={14} style={{ color: "#C9A84C" }} className="flex-shrink-0" />
                  <span dir="ltr">050-537-2227</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:danielduan11@gmail.com"
                  className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors"
                >
                  <Mail size={14} style={{ color: "#C9A84C" }} className="flex-shrink-0" />
                  <span dir="ltr" className="break-all">danielduan11@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/duan.nadlan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors"
                >
                  <ExternalLink size={14} style={{ color: "#C9A84C" }} className="flex-shrink-0" />
                  <span dir="ltr">@duan.nadlan</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-white/60 text-sm">
                  <MapPin size={14} style={{ color: "#C9A84C" }} className="flex-shrink-0" />
                  <span>הרצליה, ישראל</span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-sm font-medium">פתוח 24/7</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Gold divider */}
      <div
        className="h-[1px] mx-auto max-w-7xl"
        style={{ background: "linear-gradient(to right, transparent, #C9A84C, transparent)" }}
      />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} דואן נדל&quot;ן | דניאל דואן. כל הזכויות שמורות.</p>
          <p>נדל&quot;ן בהרצליה | דירות למכירה | מתווך מורשה</p>
        </div>
      </div>
    </footer>
  );
}
