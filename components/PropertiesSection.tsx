"use client";

import { useState } from "react";
import Image from "next/image";
import {
  BedDouble, Maximize2, MapPin, Phone, MessageCircle,
  Building2, ArrowUpLeft, ParkingSquare, Tag
} from "lucide-react";
import { properties } from "./propertiesData";
import type { Property } from "./propertiesData";
import PropertyModal from "./PropertyModal";

const filters = ["הכל", "הרצליה", "רמת גן", "רעננה"];

export default function PropertiesSection() {
  const [activeFilter, setActiveFilter] = useState("הכל");
  const [selected, setSelected] = useState<Property | null>(null);

  const filtered =
    activeFilter === "הכל"
      ? properties
      : properties.filter((p) => p.city === activeFilter);

  return (
    <>
      <section id="properties" className="py-24 bg-[#F8F6F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <div className="text-center mb-14">
            <span className="text-sm font-semibold tracking-[4px] uppercase mb-4 block" style={{ color: "#C9A84C" }}>
              נכסים למכירה
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0A0A0A] mb-4">
              הנכסים שלנו
            </h2>
            <div className="w-16 h-[2px] mx-auto mb-6"
              style={{ background: "linear-gradient(to right, transparent, #C9A84C, transparent)" }}
            />
            <p className="text-neutral-500 text-base max-w-xl mx-auto">
              לחצו על נכס לצפייה בגלריה המלאה, פרטים ויצירת קשר מיידי
            </p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === f
                    ? "bg-[#0A0A0A] text-white shadow-lg scale-105"
                    : "bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <PropertyCard key={p.id} property={p} onOpen={() => setSelected(p)} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-14">
            <p className="text-neutral-500 text-sm mb-4">מחפשים נכס שלא רואים כאן?</p>
            <a
              href="https://wa.me/972505372227?text=שלום%20דניאל,%20אני%20מחפש/ת%20נכס%20בהרצליה"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg text-sm"
            >
              <MessageCircle size={17} />
              שלחו לנו הודעה ונמצא עבורכם
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <PropertyModal property={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}

/* ── Property Card ── */
function PropertyCard({ property: p, onOpen }: { property: Property; onOpen: () => void }) {
  const waText = encodeURIComponent(
    `שלום דניאל, אני מעוניין/ת לשמוע עוד על הנכס: ${p.title} – ${p.location}. מחיר: ${p.price}`
  );

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-400 border border-neutral-100 hover:border-[#C9A84C]/30 cursor-pointer flex flex-col"
      style={{ transition: "all 0.35s ease" }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52 flex-shrink-0" onClick={onOpen}>
        <Image
          src={p.coverImage}
          alt={p.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
        />
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Tag */}
        <div
          className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-white text-[11px] font-bold"
          style={{ background: p.tagColor }}
        >
          <Tag size={9} />
          {p.tag}
        </div>

        {/* Image count badge */}
        <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-2 py-0.5 rounded-full backdrop-blur-sm">
          {p.images.length} תמונות
        </div>

        {/* Click to open hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5">
            <ArrowUpLeft size={13} />
            לחץ לפרטים
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Location */}
        <div className="flex items-center gap-1 text-[#C9A84C] text-xs font-semibold mb-1.5">
          <MapPin size={11} />
          <span className="truncate">{p.location}</span>
        </div>

        {/* Title */}
        <h3
          className="font-bold text-base text-[#0A0A0A] mb-3 leading-snug cursor-pointer hover:text-[#C9A84C] transition-colors"
          onClick={onOpen}
        >
          {p.title}
        </h3>

        {/* Stats row */}
        <div className="flex items-center gap-3 text-neutral-500 text-xs mb-3 flex-wrap">
          {p.rooms !== "–" && (
            <span className="flex items-center gap-1">
              <BedDouble size={12} style={{ color: "#C9A84C" }} />
              {p.rooms} חד&apos;
            </span>
          )}
          {p.sqm !== "–" && (
            <span className="flex items-center gap-1">
              <Maximize2 size={12} style={{ color: "#C9A84C" }} />
              {p.sqm} מ&quot;ר
            </span>
          )}
          <span className="flex items-center gap-1">
            <Building2 size={12} style={{ color: "#C9A84C" }} />
            ק&apos; {p.floor}
          </span>
          <span className="flex items-center gap-1">
            <ParkingSquare size={12} style={{ color: "#C9A84C" }} />
            {p.parking} חנ&apos;
          </span>
        </div>

        {/* Features tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {p.features.slice(0, 3).map((f) => (
            <span key={f} className="text-[10px] bg-[#F8F6F1] text-neutral-500 px-2 py-0.5 rounded-full border border-neutral-100">
              {f}
            </span>
          ))}
          {p.features.length > 3 && (
            <span className="text-[10px] text-[#C9A84C] font-semibold cursor-pointer" onClick={onOpen}>
              +{p.features.length - 3} עוד
            </span>
          )}
        </div>

        {/* Price */}
        <div
          className="text-xl font-bold mb-4"
          style={{
            background: "linear-gradient(135deg, #C9A84C, #A07830)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {p.price}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 mt-auto">
          <button
            onClick={onOpen}
            className="flex-1 bg-[#0A0A0A] hover:bg-[#C9A84C] text-white text-xs font-bold py-2.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5"
          >
            <ArrowUpLeft size={13} />
            פרטים מלאים
          </button>
          <a
            href={`tel:0505372227`}
            className="w-10 h-10 bg-[#F8F6F1] hover:bg-[#0A0A0A] text-neutral-600 hover:text-white rounded-xl flex items-center justify-center transition-all flex-shrink-0"
          >
            <Phone size={14} />
          </a>
          <a
            href={`https://wa.me/972505372227?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#F8F6F1] hover:bg-[#25D366] text-neutral-600 hover:text-white rounded-xl flex items-center justify-center transition-all flex-shrink-0"
          >
            <MessageCircle size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
