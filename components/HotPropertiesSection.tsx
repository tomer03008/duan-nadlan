"use client";

import { useState } from "react";
import Image from "next/image";
import { Flame, BedDouble, Maximize2, MapPin, Phone, MessageCircle, ArrowUpLeft, Tag } from "lucide-react";
import { properties } from "./propertiesData";
import type { Property } from "./propertiesData";
import PropertyModal from "./PropertyModal";

// Feature the top 2 most premium properties
const hotList = [properties[0], properties[1]]; // הרצליה + רעננה

export default function HotPropertiesSection() {
  const [selected, setSelected] = useState<Property | null>(null);

  return (
    <>
      <section className="py-24 bg-[#0A0A0A] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Flame size={20} style={{ color: "#C9A84C" }} />
                <span className="text-sm font-semibold tracking-[4px] uppercase" style={{ color: "#C9A84C" }}>
                  נכסים מובילים
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                ההזדמנויות הטובות ביותר
              </h2>
              <div className="w-16 h-[2px] mt-4"
                style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }}
              />
            </div>
            <button
              onClick={() => document.getElementById("properties")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 border border-[#C9A84C]/50 hover:border-[#C9A84C] text-[#C9A84C] px-6 py-3 rounded-full text-sm font-semibold transition-all hover:bg-[#C9A84C]/10 whitespace-nowrap"
            >
              לכל הנכסים
              <span className="rotate-180">→</span>
            </button>
          </div>

          {/* Featured cards */}
          <div className="space-y-6">
            {hotList.map((p, i) => (
              <HotCard key={p.id} property={p} reversed={i % 2 === 1} onOpen={() => setSelected(p)} />
            ))}
          </div>
        </div>
      </section>

      {selected && <PropertyModal property={selected} onClose={() => setSelected(null)} />}
    </>
  );
}

function HotCard({
  property: p, reversed, onOpen
}: { property: Property; reversed: boolean; onOpen: () => void }) {
  const waText = encodeURIComponent(
    `שלום דניאל, אני מעוניין/ת לשמוע עוד על הנכס: ${p.title} – ${p.location}. מחיר: ${p.price}`
  );

  return (
    <div
      className={`group grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden border border-white/10 hover:border-[#C9A84C]/50 transition-all duration-400 cursor-pointer`}
      onClick={onOpen}
      style={{ transition: "all 0.35s ease" }}
    >
      {/* Image */}
      <div className={`relative overflow-hidden h-64 lg:h-[380px] ${reversed ? "lg:order-2" : ""}`}>
        <Image
          src={p.coverImage}
          alt={p.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Tag */}
        <div
          className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-xs font-bold"
          style={{ background: p.tagColor }}
        >
          <Tag size={10} />
          {p.tag}
        </div>

        {/* Image count */}
        <div className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm">
          📸 {p.images.length} תמונות
        </div>
      </div>

      {/* Content */}
      <div
        className={`p-8 lg:p-10 flex flex-col justify-center bg-white/5 hover:bg-white/8 transition-colors ${reversed ? "lg:order-1" : ""}`}
        style={{ background: "rgba(255,255,255,0.04)" }}
      >
        <div className="flex items-center gap-2 text-[#C9A84C] text-xs font-semibold mb-3">
          <MapPin size={12} />
          {p.location}
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{p.title}</h3>

        <p className="text-white/60 leading-relaxed mb-6 text-sm line-clamp-3">
          {p.description}
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-5 mb-6 text-white/70 text-sm">
          {p.rooms !== "–" && (
            <span className="flex items-center gap-1.5">
              <BedDouble size={14} style={{ color: "#C9A84C" }} />
              {p.rooms} חדרים
            </span>
          )}
          {p.sqm !== "–" && (
            <span className="flex items-center gap-1.5">
              <Maximize2 size={14} style={{ color: "#C9A84C" }} />
              {p.sqm} מ&quot;ר
            </span>
          )}
          {p.sqmTotal && (
            <span className="text-white/40 text-xs self-center">{p.sqmTotal}</span>
          )}
        </div>

        {/* Price */}
        <div
          className="text-3xl font-bold mb-8"
          style={{
            background: "linear-gradient(135deg, #C9A84C, #E8C97A)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {p.price}
          {p.pricePerSqm && (
            <span className="text-base font-normal text-white/30 mr-2">
              · {p.pricePerSqm} למ&quot;ר
            </span>
          )}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3" onClick={e => e.stopPropagation()}>
          <button
            onClick={onOpen}
            className="flex items-center gap-2 bg-[#C9A84C] hover:bg-[#A07830] text-black font-bold px-6 py-3 rounded-full transition-all hover:scale-105 text-sm"
          >
            <ArrowUpLeft size={15} />
            פרטים וגלריה
          </button>
          <a
            href={`tel:0505372227`}
            className="flex items-center gap-2 border border-white/20 hover:border-[#C9A84C] text-white hover:text-[#C9A84C] font-semibold px-6 py-3 rounded-full transition-all text-sm"
          >
            <Phone size={15} />
            התקשרו
          </a>
          <a
            href={`https://wa.me/972505372227?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[#25D366]/40 hover:bg-[#25D366] text-[#25D366] hover:text-white font-semibold px-6 py-3 rounded-full transition-all text-sm"
          >
            <MessageCircle size={15} />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
