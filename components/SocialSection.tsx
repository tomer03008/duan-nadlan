"use client";

import { ExternalLink } from "lucide-react";

const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80&fit=crop",
    caption: "פנטהאוז חדש בהרצליה הירוקה 🏠✨",
    likes: 142,
    comments: 18,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80&fit=crop",
    caption: "נמכר! עסקה נוספת סגורה 🎉",
    likes: 198,
    comments: 31,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=400&q=80&fit=crop",
    caption: "נכס מדהים בגליל ים החדשה 🌊",
    likes: 87,
    comments: 12,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80&fit=crop",
    caption: "וילה חלומית • פינוי-בינוי הרצליה",
    likes: 223,
    comments: 42,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&q=80&fit=crop",
    caption: "טיפ שישי: איך לתמחר נכס נכון?",
    likes: 166,
    comments: 27,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80&fit=crop",
    caption: "פרויקט תמ\"א חדש בהרצליה 🏗️",
    likes: 134,
    comments: 19,
  },
];

export default function SocialSection() {
  return (
    <section className="py-24 bg-[#F8F6F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <span
              className="text-sm font-semibold tracking-[4px] uppercase mb-3 block"
              style={{ color: "#C9A84C" }}
            >
              אינסטגרם
            </span>
            <h2 className="text-4xl font-bold text-[#0A0A0A]">
              עקבו אחרינו
            </h2>
            <div
              className="w-16 h-[2px] mt-3"
              style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }}
            />
          </div>

          <a
            href="https://www.instagram.com/duan.nadlan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <div
              className="flex items-center gap-3 bg-white border border-neutral-200 hover:border-[#C9A84C] rounded-2xl px-6 py-4 transition-all duration-300 hover:shadow-lg group-hover:shadow-[#C9A84C]/20"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="3.5"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-[#0A0A0A] text-sm">@duan.nadlan</div>
                <div className="text-neutral-500 text-xs">עקבו לעדכונים ונכסים</div>
              </div>
              <ExternalLink size={16} className="text-neutral-400 group-hover:text-[#C9A84C] transition-colors mr-2" />
            </div>
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/duan.nadlan"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">
                  <div className="flex items-center justify-center gap-3 text-white text-sm font-semibold">
                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comments}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/duan.nadlan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-neutral-600 hover:text-[#C9A84C] font-semibold transition-colors text-sm"
          >
            <span>לגלריית הנכסים המלאה באינסטגרם</span>
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
