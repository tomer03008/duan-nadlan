"use client";

import { Home, Search, TrendingUp, FileText } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "מכירת נכסים",
    description:
      "אסטרטגיית שיווק פרמיום שמביאה את הנכס שלכם לקהל הרוכשים הנכון. תמחור מדויק, צילום מקצועי, ומשא ומתן לתוצאות מקסימליות.",
    features: ["תמחור שוק מדויק", "שיווק דיגיטלי ומוחשי", "ניהול משא ומתן"],
  },
  {
    icon: Search,
    title: "קניית נכסים",
    description:
      "מאתר עבורכם את הנכס המושלם בהרצליה תוך הגנה מלאה על האינטרסים שלכם. בדיקת נכס, ייעוץ משפטי, ומניעת מלכודות.",
    features: ["סריקת שוק מקיפה", "בדיקת רקע ומסמכים", "ייעוץ לפני חתימה"],
  },
  {
    icon: TrendingUp,
    title: "השקעות נדל\"ן",
    description:
      "ניתוח השקעות מקצועי שמזהה הזדמנויות בשוק הרצליה. תשואה מקסימלית עם סיכון מינימלי – בנייה, פינוי-בינוי ונכסים מניבים.",
    features: ["ניתוח תשואה", "נכסים מניבים", "פרויקטי בנייה"],
  },
  {
    icon: FileText,
    title: "ייעוץ תב\"ע וקרקעות",
    description:
      "מומחיות ייחודית בתכנון ובנייה, תב\"ע מקומית, ופרויקטי פינוי-בינוי. מסייע ליזמים ובעלי קרקע להבין את הפוטנציאל המלא.",
    features: ["ניתוח תב\"ע מקומית", "פינוי-בינוי ותמ\"א", "ייעוץ ליזמים"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="text-sm font-semibold tracking-[4px] uppercase mb-4 block"
            style={{ color: "#C9A84C" }}
          >
            מה אני מציע
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A0A0A] mb-4">
            שירותים
          </h2>
          <div
            className="w-16 h-[2px] mx-auto mb-6"
            style={{ background: "linear-gradient(to right, transparent, #C9A84C, transparent)" }}
          />
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            פתרונות נדל&quot;ן מקיפים לכל צורך – מהרעיון ועד המפתח
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="luxury-card group bg-white border border-neutral-100 hover:border-[#C9A84C]/40 rounded-2xl p-7 flex flex-col gap-5 shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "linear-gradient(135deg, #C9A84C15, #C9A84C30)" }}
                >
                  <Icon size={26} style={{ color: "#C9A84C" }} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0A0A0A]">{service.title}</h3>

                {/* Description */}
                <p className="text-neutral-500 text-sm leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 pt-4 border-t border-neutral-100">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-neutral-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Arrow */}
                <a
                  href="#contact"
                  className="flex items-center gap-2 text-[#C9A84C] text-sm font-semibold group-hover:gap-3 transition-all duration-300 mt-2"
                >
                  <span>ספר לי עוד</span>
                  <span className="rotate-180">→</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
