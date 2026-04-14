"use client";

import { useEffect, useRef } from "react";
import { Phone, MessageCircle, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    const timer = setTimeout(() => {
      el.style.transition = "all 1s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image via CSS gradient + pseudo-realistic overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85&fit=crop')`,
        }}
      />
      {/* Dark luxury overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Gold accent lines */}
      <div
        className="absolute top-0 right-0 w-1 h-full opacity-30"
        style={{ background: "linear-gradient(to bottom, transparent, #C9A84C, transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-1 opacity-20"
        style={{ background: "linear-gradient(to right, transparent, #C9A84C, transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-[#C9A84C]/50 bg-[#C9A84C]/10 backdrop-blur-sm px-5 py-2 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
          <span className="text-[#C9A84C] text-sm font-medium tracking-widest uppercase">
            דואן נדל&quot;ן • הרצליה
          </span>
        </div>

        {/* Main Headline */}
        <h1
          ref={headlineRef}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight text-shadow-luxury mb-6"
        >
          מומחה נדל&quot;ן
          <br />
          <span
            className="text-gold-gradient"
            style={{
              background: "linear-gradient(135deg, #C9A84C 0%, #E8C97A 50%, #A07830 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            בהרצליה
          </span>
        </h1>

        {/* Divider */}
        <div className="w-24 h-[2px] mx-auto mb-8"
          style={{ background: "linear-gradient(to right, transparent, #C9A84C, transparent)" }}
        />

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-white/85 font-light leading-relaxed mb-4 text-shadow-luxury max-w-3xl mx-auto">
          ליווי אישי ומקצועי משלב החיפוש ועד סגירת העסקה
        </p>

        <p className="text-base sm:text-lg text-white/60 mb-12 font-light">
          דניאל דואן | פעיל בהרצליה מ-2018 | זמין 24/7
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group flex items-center gap-3 bg-[#C9A84C] hover:bg-[#A07830] text-black font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-2xl hover:shadow-[#C9A84C]/50 hover:scale-105 w-full sm:w-auto justify-center"
          >
            <span>קבלו הערכת נכס חינם</span>
            <span className="group-hover:translate-x-[-4px] transition-transform duration-300 rotate-180">→</span>
          </a>

          <a
            href="tel:0505372227"
            className="flex items-center gap-3 border-2 border-white/30 hover:border-[#C9A84C] text-white hover:text-[#C9A84C] font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:bg-[#C9A84C]/10 w-full sm:w-auto justify-center"
          >
            <Phone size={20} />
            <span>צור קשר</span>
          </a>

          <a
            href="https://wa.me/972505372227"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#25D366]/40 hover:scale-105 w-full sm:w-auto justify-center"
          >
            <MessageCircle size={20} />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-20 max-w-2xl mx-auto">
          {[
            { number: "7+", label: "שנות ניסיון" },
            { number: "200+", label: "עסקאות" },
            { number: "5.0★", label: "דירוג" },
          ].map((stat) => (
            <div key={stat.label} className="text-center group">
              <div
                className="text-3xl sm:text-4xl font-bold mb-1"
                style={{
                  background: "linear-gradient(135deg, #C9A84C, #E8C97A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.number}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-[#C9A84C] transition-colors flex flex-col items-center gap-1 animate-bounce"
      >
        <span className="text-xs tracking-widest uppercase">גלול</span>
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
