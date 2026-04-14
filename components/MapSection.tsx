"use client";

import { MapPin, Navigation } from "lucide-react";

export default function MapSection() {
  return (
    <section className="py-0">
      <div className="relative">
        {/* Header overlay on top of map */}
        <div className="bg-[#0A0A0A] py-10 text-center">
          <span
            className="text-sm font-semibold tracking-[4px] uppercase mb-3 block"
            style={{ color: "#C9A84C" }}
          >
            אזור פעילות
          </span>
          <h2 className="text-3xl font-bold text-white mb-2">
            הרצליה וסביבותיה
          </h2>
          <div className="flex items-center justify-center gap-2 text-white/50 text-sm">
            <MapPin size={14} style={{ color: "#C9A84C" }} />
            <span>הרצליה הירוקה, גליל ים, מרכז הרצליה</span>
          </div>
        </div>

        {/* Map */}
        <div className="relative h-[450px] overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26929.066720050644!2d34.82234!3d32.16337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d36e53a9b78f9%3A0xaa6568572ef7c3f9!2sHerzliya%2C%20Israel!5e0!3m2!1siw!2sil!4v1700000000000!5m2!1siw!2sil"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(20%) contrast(1.1)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="מיקום הרצליה"
          />
          {/* Overlay pin */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="flex flex-col items-center">
              <div
                className="bg-white rounded-xl px-5 py-3 shadow-2xl text-center mb-2"
                style={{ border: "2px solid #C9A84C" }}
              >
                <div className="font-bold text-[#0A0A0A] text-sm">דניאל דואן</div>
                <div className="text-[#C9A84C] text-xs font-medium">מומחה נדל&quot;ן הרצליה</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="bg-[#F8F6F1] py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap justify-center gap-6 sm:gap-12">
              {[
                { icon: "🏙️", label: "הרצליה הירוקה" },
                { icon: "🌊", label: "גליל ים החדשה" },
                { icon: "🏢", label: "מרכז הרצליה" },
                { icon: "🏗️", label: "פרויקטי בנייה" },
              ].map((area) => (
                <div key={area.label} className="flex items-center gap-2 text-neutral-600 text-sm font-medium">
                  <span>{area.icon}</span>
                  <span>{area.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
