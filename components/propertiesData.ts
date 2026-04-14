export interface PropertyDetail {
  label: string;
  value: string;
}

export interface Property {
  id: number;
  title: string;
  location: string;
  city: string;
  price: string;
  pricePerSqm?: string;
  rooms: number | string;
  sqm: number | string;
  sqmTotal?: string;
  floor: string;
  parking: number | string;
  tag: string;
  tagColor: string;
  exclusive?: boolean;
  description: string;
  features: string[];
  details: PropertyDetail[];
  images: string[];
  coverImage: string;
}

// Helper to generate image arrays
const imgs = (folder: string, count: number, ext = "jpeg") =>
  Array.from({ length: count }, (_, i) => `/images/${folder}/img_${String(i).padStart(2, "0")}.${ext}`);

// Mixed extensions for ramat-gan
const ramatGanImgs = [
  "/images/prop-ramat-gan/img_00.jpeg",
  "/images/prop-ramat-gan/img_01.jpg",
  "/images/prop-ramat-gan/img_02.jpeg",
  "/images/prop-ramat-gan/img_03.jpeg",
  "/images/prop-ramat-gan/img_04.jpg",
  "/images/prop-ramat-gan/img_05.jpeg",
  "/images/prop-ramat-gan/img_06.jpg",
  "/images/prop-ramat-gan/img_07.jpeg",
];

export const properties: Property[] = [
  {
    id: 1,
    title: "דירת 5 חדרים – בני בנימין",
    location: "הרצליה הירוקה, נווה עובד",
    city: "הרצליה",
    price: "₪4,590,000",
    pricePerSqm: "32,553 ₪",
    rooms: 5,
    sqm: 125,
    sqmTotal: "141 מ\"ר (כולל מרפסת 18 מ\"ר)",
    floor: "5 מתוך 6",
    parking: 1,
    tag: "בלעדי",
    tagColor: "#C9A84C",
    exclusive: true,
    description:
      "למכירה בבלעדיות בהרצליה הירוקה – דירת חמישה חדרים ברחוב בני בנימין. כ-125 מ\"ר בנוי ומרפסת שמש של 18 מ\"ר. קומה 5 מתוך 6 בבניין עם מעלית. כיווני אוויר דרום וצפון, דירה מוארת ונעימה. מיזוג מרכזי מתקדם מסוג VRF. חניה פרטית בטאבו. מיקום מרכזי – קרוב לפארקים, מרכזים מסחריים, בתי ספר, המרכז הבינתחומי וגנים. הזדמנות מצוינת למגורים או להשקעה.",
    features: [
      "מעלית", "גישה לנכים", "מיזוג VRF מרכזי", "מחסן",
      "דוד שמש", "משופצת", "ממ\"ד", "מרפסת שמש 18 מ\"ר", "חניה פרטית בטאבו", "סורגים",
    ],
    details: [
      { label: "סוג עסקה", value: "מכירה" },
      { label: "מצב הנכס", value: "חדש (גרו בנכס)" },
      { label: "מ\"ר בנוי", value: "125 מ\"ר" },
      { label: "מ\"ר סה\"כ", value: "141 מ\"ר" },
      { label: "קומות בבניין", value: "6" },
      { label: "חניות", value: "1 פרטית בטאבו" },
      { label: "מחיר למ\"ר", value: "32,553 ₪" },
      { label: "כניסה", value: "גמישה" },
    ],
    images: imgs("prop-herzliya-1", 11),
    coverImage: "/images/prop-herzliya-1/img_00.jpeg",
  },
  {
    id: 2,
    title: "גג פנטהאוז – בורוכוב 35",
    location: "נווה דוד רמז, רעננה",
    city: "רעננה",
    price: "₪7,590,000",
    pricePerSqm: "20,240 ₪",
    rooms: 6,
    sqm: 210,
    sqmTotal: "375 מ\"ר (כולל מרפסות 165 מ\"ר)",
    floor: "7 מתוך 7 (קומה עליונה)",
    parking: 2,
    tag: "פנטהאוז",
    tagColor: "#805AD5",
    exclusive: false,
    description:
      "למכירה ברעננה – פנטהאוז נדיר בבורוכוב המבוקש. פנטהאוז בודד ויחיד בקומה עם פרטיות מושלמת ושקט מלא. בניין בן 4 שנים בלבד. חלוקה חכמה ונוחה למשפחה עם יחידת הורים גדולה ומפנקת. כ-210 מ\"ר בנוי ועוד כ-165 מ\"ר מרפסות גדולות ומרווחות. 5 חדרים גדולים + 6 בסה\"כ. נכס משודרג ברמה גבוהה, VRF, בית חכם, נוף פתוח שלא ייסגר. 2 חניות רובוטיות ומחסן פרטי.",
    features: [
      "מעלית", "גישה לנכים", "מיזוג VRF", "2 חניות רובוטיות",
      "מחסן פרטי", "דוד שמש", "משופצת", "ממ\"ד", "מרפסות 165 מ\"ר",
      "בית חכם", "נוף פתוח", "מרוהטת",
    ],
    details: [
      { label: "סוג עסקה", value: "מכירה" },
      { label: "מצב הנכס", value: "חדש (גרו בנכס)" },
      { label: "מ\"ר בנוי", value: "210 מ\"ר" },
      { label: "מ\"ר מרפסות", value: "165 מ\"ר" },
      { label: "קומות בבניין", value: "7" },
      { label: "חניות", value: "2 רובוטיות" },
      { label: "מחיר למ\"ר", value: "20,240 ₪" },
      { label: "כניסה", value: "גמישה" },
    ],
    images: imgs("prop-raanana", 15),
    coverImage: "/images/prop-raanana/img_00.jpeg",
  },
  {
    id: 3,
    title: "דירת 2 חדרים – ישורון 10",
    location: "נווה רם, שיכון מזרחי, רמת גן",
    city: "רמת גן",
    price: "₪2,100,000",
    pricePerSqm: "42,000 ₪",
    rooms: 2,
    sqm: 50,
    floor: "4 מתוך 9",
    parking: 1,
    tag: "בלעדי",
    tagColor: "#C9A84C",
    exclusive: true,
    description:
      "דירה מתוקה בקומה 4 לכיוון דרום. 2 חדרים עם ממ\"ד בבניין מתחוזק משנת 2019. חניה תת-קרקעית רגילה. 2 מעליות. כניסה גמישה.",
    features: [
      "מעלית (2)", "גישה לנכים", "מיזוג", "חניה תת-קרקעית",
      "דוד שמש", "משופצת", "ממ\"ד", "מחסן", "בניין מחוזק 2019",
    ],
    details: [
      { label: "סוג עסקה", value: "מכירה" },
      { label: "מצב הנכס", value: "חדש (גרו בנכס)" },
      { label: "מ\"ר בנוי", value: "50 מ\"ר" },
      { label: "קומות בבניין", value: "9" },
      { label: "חניות", value: "1 תת-קרקעית" },
      { label: "מחיר למ\"ר", value: "42,000 ₪" },
      { label: "בניין", value: "מחוזק 2019" },
      { label: "כניסה", value: "גמישה" },
    ],
    images: ramatGanImgs,
    coverImage: "/images/prop-ramat-gan/img_00.jpeg",
  },
  {
    id: 4,
    title: "דירה – ראש פינה 15",
    location: "מרכז הרצליה",
    city: "הרצליה",
    price: "לפי דרישה",
    rooms: "–",
    sqm: "–",
    floor: "–",
    parking: 1,
    tag: "חדש",
    tagColor: "#2D8A4E",
    exclusive: false,
    description:
      "דירה במיקום מרכזי בהרצליה ברחוב ראש פינה 15. לפרטים נוספים ומחיר צרו קשר עם דניאל.",
    features: ["מעלית", "חניה", "מרפסת"],
    details: [
      { label: "סוג עסקה", value: "מכירה" },
      { label: "מיקום", value: "מרכז הרצליה" },
      { label: "כניסה", value: "גמישה" },
    ],
    images: imgs("prop-herzliya-2", 13),
    coverImage: "/images/prop-herzliya-2/img_00.jpeg",
  },
];
