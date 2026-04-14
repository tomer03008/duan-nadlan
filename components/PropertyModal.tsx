"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import {
  X, ChevronRight, ChevronLeft, BedDouble, Maximize2,
  MapPin, Phone, MessageCircle, Building2, ParkingSquare,
  CheckCircle, ArrowUpRight, Tag
} from "lucide-react";
import type { Property } from "./propertiesData";

interface Props {
  property: Property;
  onClose: () => void;
}

export default function PropertyModal({ property, onClose }: Props) {
  const [activeImg, setActiveImg] = useState(0);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const prev = useCallback(() =>
    setActiveImg(i => (i === 0 ? property.images.length - 1 : i - 1)), [property.images.length]);
  const next = useCallback(() =>
    setActiveImg(i => (i === property.images.length - 1 ? 0 : i + 1)), [property.images.length]);

  const waText = encodeURIComponent(
    `שלום דניאל, אני מעוניין/ת לשמוע עוד על הנכס: ${property.title} – ${property.location}. מחיר: ${property.price}`
  );

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 bg-white w-full max-w-5xl max-h-[95vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">

        {/* ── LEFT: Gallery ── */}
        <div className="relative w-full lg:w-[55%] bg-black flex-shrink-0" style={{ minHeight: 280 }}>
          {/* Main image */}
          <div className="relative w-full h-64 sm:h-80 lg:h-full" style={{ minHeight: 280 }}>
            <Image
              key={activeImg}
              src={property.images[activeImg]}
              alt={`${property.title} - תמונה ${activeImg + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
            />
            {/* Gradient bottom */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Nav arrows */}
            {property.images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all"
                >
                  <ChevronRight size={18} />
                </button>
                <button
                  onClick={next}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all"
                >
                  <ChevronLeft size={18} />
                </button>
              </>
            )}

            {/* Counter */}
            <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-2.5 py-1 rounded-full">
              {activeImg + 1} / {property.images.length}
            </div>

            {/* Tag */}
            {property.tag && (
              <div
                className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-white text-xs font-bold"
                style={{ background: property.tagColor || "#C9A84C" }}
              >
                <Tag size={11} />
                {property.tag}
              </div>
            )}
          </div>

          {/* Thumbnails */}
          {property.images.length > 1 && (
            <div className="flex gap-1.5 p-2 overflow-x-auto bg-black/90 scrollbar-thin">
              {property.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                    i === activeImg ? "border-[#C9A84C] opacity-100" : "border-transparent opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" sizes="56px" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── RIGHT: Details ── */}
        <div className="flex flex-col flex-1 overflow-y-auto">
          {/* Header */}
          <div className="flex items-start justify-between gap-3 px-6 pt-5 pb-4 border-b border-neutral-100">
            <div>
              <div className="flex items-center gap-1.5 text-[#C9A84C] text-xs font-semibold mb-1">
                <MapPin size={11} />
                <span>{property.location}</span>
              </div>
              <h2 className="text-xl font-bold text-[#0A0A0A] leading-tight">{property.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors mt-1"
            >
              <X size={16} />
            </button>
          </div>

          {/* Price */}
          <div className="px-6 py-4 border-b border-neutral-100">
            <div
              className="text-3xl font-bold"
              style={{
                background: "linear-gradient(135deg, #C9A84C, #A07830)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {property.price}
            </div>
            {property.pricePerSqm && (
              <div className="text-neutral-400 text-sm mt-0.5">{property.pricePerSqm} למ&quot;ר</div>
            )}
          </div>

          {/* Key stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 px-6 py-4 border-b border-neutral-100">
            {[
              { icon: BedDouble, label: "חדרים", value: String(property.rooms) },
              { icon: Maximize2, label: `מ"ר`, value: String(property.sqm) },
              { icon: Building2, label: "קומה", value: property.floor },
              { icon: ParkingSquare, label: "חניות", value: String(property.parking) },
            ].map((s) => (
              <div key={s.label} className="bg-[#F8F6F1] rounded-xl p-3 text-center">
                <s.icon size={16} className="mx-auto mb-1" style={{ color: "#C9A84C" }} />
                <div className="font-bold text-[#0A0A0A] text-sm">{s.value}</div>
                <div className="text-neutral-400 text-xs">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          {property.description && (
            <div className="px-6 py-4 border-b border-neutral-100">
              <h3 className="text-sm font-bold text-[#0A0A0A] mb-2">תיאור הנכס</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{property.description}</p>
            </div>
          )}

          {/* Features */}
          {property.features && property.features.length > 0 && (
            <div className="px-6 py-4 border-b border-neutral-100">
              <h3 className="text-sm font-bold text-[#0A0A0A] mb-3">מה יש בנכס</h3>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                {property.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-neutral-600">
                    <CheckCircle size={13} style={{ color: "#C9A84C" }} className="flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Details table */}
          <div className="px-6 py-4 border-b border-neutral-100">
            <h3 className="text-sm font-bold text-[#0A0A0A] mb-3">פרטים נוספים</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {property.details?.map(d => (
                <div key={d.label} className="flex justify-between border-b border-neutral-50 pb-1">
                  <span className="text-neutral-400">{d.label}</span>
                  <span className="font-medium text-[#0A0A0A]">{d.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="px-6 py-5 mt-auto bg-white sticky bottom-0 border-t border-neutral-100 flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/972505372227?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold py-3.5 rounded-xl transition-all hover:scale-[1.02] text-sm shadow-lg"
            >
              <MessageCircle size={17} />
              שלח הודעה בוואטסאפ
            </a>
            <a
              href="tel:0505372227"
              className="flex-1 flex items-center justify-center gap-2 bg-[#0A0A0A] hover:bg-[#C9A84C] text-white font-bold py-3.5 rounded-xl transition-all hover:scale-[1.02] text-sm shadow-lg"
            >
              <Phone size={17} />
              050-537-2227
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
