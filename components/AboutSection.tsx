"use client";

import Image from "next/image";
import { CheckCircle, Phone, MessageCircle } from "lucide-react";

const highlights = [
  "יליד ותושב הרצליה הירוקה",
  "פעיל בשוק הנדל\"ן מ-2018",
  "מומחה בפרויקטי התחדשות עירונית",
  "ידע עמוק בתב\"ע ורגולציה מקומית",
  "200+ עסקאות מוצלחות",
  "זמינות מלאה 24/7",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#F8F6F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10">
              {/* Main image frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto lg:mx-0 bg-[#F0EDE6]">
                <Image
                  src="/images/daniel.jpg"
                  alt="דניאל דואן - מומחה נדל&quot;ן הרצליה"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 448px"
                  priority
                />
                {/* Subtle bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                {/* Name tag */}
                <div className="absolute bottom-6 right-6 left-6">
                  <div className="bg-[#0A0A0A]/80 backdrop-blur-md border border-[#C9A84C]/30 rounded-xl p-4">
                    <div className="text-white font-bold text-lg">דניאל דואן</div>
                    <div className="text-[#C9A84C] text-sm font-medium">מומחה נדל&quot;ן | הרצליה</div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -left-4 bg-[#0A0A0A] text-white rounded-2xl p-5 shadow-2xl z-20 max-w-[180px]"
                style={{ border: "1px solid rgba(201,168,76,0.3)" }}
              >
                <div
                  className="text-4xl font-bold"
                  style={{
                    background: "linear-gradient(135deg, #C9A84C, #E8C97A)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  7+
                </div>
                <div className="text-white/70 text-sm leading-tight mt-1">
                  שנות ניסיון בשוק הנדל&quot;ן
                </div>
              </div>

              {/* Gold accent shape */}
              <div
                className="absolute -top-4 -right-4 w-32 h-32 rounded-full opacity-20 blur-2xl"
                style={{ background: "#C9A84C" }}
              />
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <span
              className="text-sm font-semibold tracking-[4px] uppercase mb-4 block"
              style={{ color: "#C9A84C" }}
            >
              אודות
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0A0A0A] leading-tight mb-6">
              מכיר את הרצליה
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #C9A84C, #A07830)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                כמו כף ידו
              </span>
            </h2>

            <div
              className="w-16 h-[2px] mb-8"
              style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }}
            />

            <p className="text-neutral-600 leading-relaxed text-lg mb-6">
              נולדתי וגדלתי בהרצליה הירוקה – העיר הזו לא רק מקום עבודה בשבילי,
              היא הבית שלי. הכרתי כל שכונה, כל רחוב, וכל שינוי שעבר על שוק
              הנדל&quot;ן המקומי מאז שנת 2018.
            </p>
            <p className="text-neutral-600 leading-relaxed text-lg mb-8">
              התמחיתי בפרויקטי התחדשות עירונית, פינוי-בינוי ותמ&quot;א 38,
              ומביא לכל עסקה את הידע העמוק על תב&quot;ע מקומית ורגולציה. אני
              מאמין בשקיפות מלאה ובליווי אישי – מהפגישה הראשונה עד מסירת המפתח.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={18} style={{ color: "#C9A84C" }} className="flex-shrink-0" />
                  <span className="text-neutral-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:0505372227"
                className="flex items-center gap-2 bg-[#0A0A0A] hover:bg-[#1a1a1a] text-white font-bold px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <Phone size={16} />
                <span>050-537-2227</span>
              </a>
              <a
                href="https://wa.me/972505372227"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <MessageCircle size={16} />
                <span>שלחו הודעה</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
