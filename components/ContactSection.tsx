"use client";

import { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="text-sm font-semibold tracking-[4px] uppercase mb-4 block"
            style={{ color: "#C9A84C" }}
          >
            נצור קשר
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A0A0A] mb-4">
            השאירו פרטים ונחזור אליכם
          </h2>
          <div
            className="w-16 h-[2px] mx-auto mb-6"
            style={{ background: "linear-gradient(to right, transparent, #C9A84C, transparent)" }}
          />
          <p className="text-neutral-500 text-lg max-w-xl mx-auto">
            מוכנים לצעד הבא? השאירו פרטים ודניאל יחזור אליכם בהקדם
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Info Cards */}
            <div className="bg-[#0A0A0A] rounded-2xl p-8 text-white">
              <h3
                className="text-xl font-bold mb-6"
                style={{ color: "#C9A84C" }}
              >
                פרטי יצירת קשר
              </h3>

              <div className="space-y-5">
                <a
                  href="tel:0505372227"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(201,168,76,0.15)" }}
                  >
                    <Phone size={18} style={{ color: "#C9A84C" }} />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs mb-0.5">טלפון</div>
                    <div className="text-white font-semibold text-lg group-hover:text-[#C9A84C] transition-colors" dir="ltr">
                      050-537-2227
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/972505372227"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(37,211,102,0.15)" }}
                  >
                    <MessageCircle size={18} style={{ color: "#25D366" }} />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs mb-0.5">WhatsApp</div>
                    <div className="text-white font-semibold group-hover:text-[#25D366] transition-colors" dir="ltr">
                      050-537-2227
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:danielduan11@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(201,168,76,0.15)" }}
                  >
                    <Mail size={18} style={{ color: "#C9A84C" }} />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs mb-0.5">אימייל</div>
                    <div className="text-white font-semibold text-sm group-hover:text-[#C9A84C] transition-colors" dir="ltr">
                      danielduan11@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/duan.nadlan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(201,168,76,0.15)" }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <circle cx="12" cy="12" r="3.5"/>
                      <circle cx="17.5" cy="6.5" r="1" fill="#C9A84C" stroke="none"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white/50 text-xs mb-0.5">אינסטגרם</div>
                    <div className="text-white font-semibold group-hover:text-[#C9A84C] transition-colors" dir="ltr">
                      @duan.nadlan
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(201,168,76,0.15)" }}
                  >
                    <Clock size={18} style={{ color: "#C9A84C" }} />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs mb-0.5">זמינות</div>
                    <div className="text-white font-semibold">פתוח 24/7</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(201,168,76,0.15)" }}
                  >
                    <MapPin size={18} style={{ color: "#C9A84C" }} />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs mb-0.5">אזור פעילות</div>
                    <div className="text-white font-semibold">הרצליה וסביבותיה</div>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex gap-3 mt-8 pt-6 border-t border-white/10">
                <a
                  href="tel:0505372227"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#A07830] text-black font-bold py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm"
                >
                  <Phone size={15} />
                  התקשר
                </a>
                <a
                  href="https://wa.me/972505372227"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-bold py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm"
                >
                  <MessageCircle size={15} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-[#F8F6F1] rounded-2xl p-8 sm:p-10 border border-neutral-100">
              {submitted ? (
                <div className="text-center py-12">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: "rgba(201,168,76,0.1)" }}
                  >
                    <CheckCircle size={40} style={{ color: "#C9A84C" }} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A0A0A] mb-3">הודעתכם נשלחה!</h3>
                  <p className="text-neutral-500 text-lg">
                    דניאל יחזור אליכם בהקדם האפשרי
                  </p>
                  <div className="mt-8 flex gap-4 justify-center">
                    <a
                      href="tel:0505372227"
                      className="flex items-center gap-2 bg-[#0A0A0A] text-white font-bold px-6 py-3 rounded-full text-sm hover:scale-105 transition-transform"
                    >
                      <Phone size={15} />
                      050-537-2227
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        שם מלא *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="הכנס שמך המלא"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full border border-neutral-200 bg-white rounded-xl px-4 py-3.5 text-[#0A0A0A] placeholder-neutral-400 text-sm transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        טלפון *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="05X-XXX-XXXX"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full border border-neutral-200 bg-white rounded-xl px-4 py-3.5 text-[#0A0A0A] placeholder-neutral-400 text-sm transition-all duration-200"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      אימייל
                    </label>
                    <input
                      type="email"
                      placeholder="name@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-neutral-200 bg-white rounded-xl px-4 py-3.5 text-[#0A0A0A] placeholder-neutral-400 text-sm transition-all duration-200"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      הודעה
                    </label>
                    <textarea
                      rows={4}
                      placeholder="ספרו לנו על הנכס שאתם מחפשים, מוכרים, או כל שאלה אחרת..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-neutral-200 bg-white rounded-xl px-4 py-3.5 text-[#0A0A0A] placeholder-neutral-400 text-sm transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-3 bg-[#0A0A0A] hover:bg-[#C9A84C] text-white font-bold py-4 rounded-full transition-all duration-300 hover:scale-[1.02] text-lg disabled:opacity-60 disabled:cursor-not-allowed shadow-xl hover:shadow-[#C9A84C]/40"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        <span>שולח...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>שלח הודעה</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-neutral-400 text-xs">
                    דניאל יחזור אליכם בתוך שעה · פתוח 24/7
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
