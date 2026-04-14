"use client";

import { Star, ShieldCheck, Clock, Award, UserCheck } from "lucide-react";

const testimonials = [
  {
    name: "Dana Schneider",
    role: "מכרה דירה בהרצליה",
    text: "ברצוני להביע את הערכתי הרבה והמלצתי החמה על דניאל דואן, אשר סייע לנו במכירת ביתנו בהרצליה. לאורך כל התהליך דניאל הפגין מקצועיות מרשימה, חריצות יוצאת דופן ושירות אישי מהשורה הראשונה. כבר מהפגישה הראשונה התרשמנו מהידע העמוק שלו בתחום.",
    rating: 5,
    avatar: "D",
    timeAgo: "לפני 9 חודשים",
  },
  {
    name: "Tal Kushnir",
    role: "9 ביקורות",
    text: "כשמחפשים מתווך - ואם מתלבטים - אין צורך לחפש יותר - דניאל זו התשובה! חוצמיזה שהוא מקצוען הוא גם חייכן ואופטימי ולא מתייאש אף פעם ותמיד בטוח שהכל מסתדר - ותכלס זה בדיוק מה שקורה. ממליצה מכל הלב ❤️",
    rating: 5,
    avatar: "T",
    timeAgo: "לפני 8 חודשים",
  },
  {
    name: "YAEL LAHAV",
    role: "מכרה דירה",
    text: "ממליצים מכל הלב על דניאל - מקצוען אמיתי, יסודי ונחוש! דניאל מכר את הדירה שלנו בימים לא פשוטים ובשוק מדשדש. לאורך כל התהליך עבד מולנו בשקיפות מלאה, היה סבלני, קשוב, ישר ואמין.",
    rating: 5,
    avatar: "Y",
    timeAgo: "לפני 5 חודשים",
  },
  {
    name: "Anna Lyakhovitsky",
    role: "שכרה דירה",
    text: "דניאל ליווה אותנו בתהליך השכרת הדירה בצורה נעימה, רגועה ומקצועית. הוא היה זמין לכל שאלה, טיפל בדברים במהירות ונתן תחושה אמיתית שיש על מי לסמוך. הכל התנהל ביעילות ובשקיפות, עם הרבה יחס אישי. ממליצים עליו בחום.",
    rating: 5,
    avatar: "A",
    timeAgo: "לפני 3 חודשים",
  },
  {
    name: "yonatan Fr",
    role: "מכר דירה",
    text: "קיבלתי המלצה על דניאל עבור מכירת הדירה של אמי ז\"ל. במשך כל התהליך דניאל היה אמין, קשוב, נעים, ועידכן בכל שלב עד מכירת הדירה. הוא ביצע שיתופי פעולה, לא הפסיק להשקיע מאמצים ומשאבים ולבסוף הצליח – וכל זאת עם חיוך ונועם. המון הצלחה!",
    rating: 5,
    avatar: "Y",
    timeAgo: "לפני 8 חודשים",
  },
  {
    name: "דפנה פולץ (Fufinka)",
    role: "ביקורת 1 | 7 תמונות",
    text: "המלצה חמה על דניאל דואן – מתווך עם נשמה. כאמנית, אני רגילה לחפש דיוק, רגש ויושרה בכל תהליך שאני שותפה בו – ובדניאל מצאתי את כל אלה. מתווך שמתייחס לאדם, לא רק לעסקה.",
    rating: 5,
    avatar: "ד",
    timeAgo: "לפני 8 חודשים",
  },
  {
    name: "Tom Rozner",
    role: "3 ביקורות",
    text: "נפגשתי עם דניאל עם צרכים מידיים בזמן משבר. רוצה לציין כי דניאל הוא לא רק בעל מקצוע – הוא קודם כל בן אדם. היה קשוב לצרכי, זמין תמיד ומצא בדיוק את מה שמתאים למידותי.",
    rating: 5,
    avatar: "T",
    timeAgo: "לפני 4 חודשים",
  },
  {
    name: "gilat cohen",
    role: "שכרה דירה",
    text: "שכרנו דירה דרך דניאל והחוויה הייתה מצוינת. הוא היה זמין לכל שאלה, סבלני מאוד והגיע מספר פעמים להראות לנו את הדירה עד שהרגשנו בטוחים בהחלטה.",
    rating: 5,
    avatar: "G",
    timeAgo: "לפני 3 חודשים",
  },
  {
    name: "Hezi Henen",
    role: "שכר דירה ברעננה",
    text: "שירות תיווך ברמה הגבוהה ביותר! ליוו אותי בתהליך השכרת דירת 4 חדרים במרכז רעננה בצורה אדיבה, מקצועית וסופר יעילה.",
    rating: 5,
    avatar: "H",
    timeAgo: "לפני חודשיים",
  },
  {
    name: "אילן אלקבץ",
    role: "ממליץ מקומי · 15 ביקורות",
    text: "אחלה שירות יעיל ענייני, תודה רבה.",
    rating: 5,
    avatar: "א",
    timeAgo: "לפני חודש",
  },
];

export default function TrustSection() {
  return (
    <section id="reviews" className="py-24 bg-[#0A0A0A] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-[4px] uppercase mb-4 block" style={{ color: "#C9A84C" }}>
            ביקורות אמיתיות מגוגל
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">מה הלקוחות אומרים</h2>
          <div className="w-16 h-[2px] mx-auto mb-6"
            style={{ background: "linear-gradient(to right, transparent, #C9A84C, transparent)" }}
          />

          {/* Rating badge */}
          <div className="inline-flex items-center gap-3 bg-white/5 border border-[#C9A84C]/30 rounded-full px-6 py-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#C9A84C" color="#C9A84C" />
              ))}
            </div>
            <span className="text-white font-bold text-xl">5.0</span>
            <span className="text-white/40 text-sm">Google Reviews</span>
            {/* Google logo */}
            <span className="text-sm font-bold" style={{
              background: "linear-gradient(90deg,#4285F4,#EA4335,#FBBC05,#34A853)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
            }}>Google</span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="luxury-card bg-white/5 border border-white/10 hover:border-[#C9A84C]/40 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300"
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-black font-bold text-sm flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #C9A84C, #E8C97A)" }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-white/40 text-xs">{t.role}</div>
                  </div>
                </div>
                {/* Google G icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" className="flex-shrink-0 mt-1">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={13} fill="#C9A84C" color="#C9A84C" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-white/75 leading-relaxed text-sm flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Time */}
              <div className="text-white/30 text-xs pt-2 border-t border-white/5">
                {t.timeAgo}
              </div>
            </div>
          ))}
        </div>

        {/* Trust stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-16 border-t border-white/10">
          {[
            {
              Icon: Award,
              stat: "200+",
              label: "עסקאות מוצלחות",
              sub: "מאז 2018",
            },
            {
              Icon: Clock,
              stat: "24/7",
              label: "זמינות מלאה",
              sub: "תמיד בשבילכם",
            },
            {
              Icon: ShieldCheck,
              stat: "100%",
              label: "שקיפות מוחלטת",
              sub: "ישרות ואמינות",
            },
            {
              Icon: UserCheck,
              stat: "5.0★",
              label: "דירוג גוגל",
              sub: "10 ביקורות",
            },
          ].map(({ Icon, stat, label, sub }) => (
            <div
              key={label}
              className="group flex flex-col items-center text-center bg-white/5 hover:bg-white/8 border border-white/10 hover:border-[#C9A84C]/40 rounded-2xl p-6 transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))", border: "1px solid rgba(201,168,76,0.3)" }}
              >
                <Icon size={22} style={{ color: "#C9A84C" }} />
              </div>
              <div
                className="text-2xl font-bold mb-1"
                style={{
                  background: "linear-gradient(135deg, #C9A84C, #E8C97A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat}
              </div>
              <div className="text-white text-sm font-semibold mb-0.5">{label}</div>
              <div className="text-white/40 text-xs">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
