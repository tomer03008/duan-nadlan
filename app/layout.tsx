import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'דניאל דואן | מומחה נדל"ן בהרצליה | דואן נדל"ן',
  description:
    'דניאל דואן – מומחה נדל"ן בהרצליה עם ניסיון מ-2018. מכירה, קנייה, השקעות ויעוץ תב"ע. ליווי אישי ומקצועי משלב החיפוש ועד סגירת העסקה. התקשרו: 050-537-2227',
  keywords:
    'נדל"ן בהרצליה, דירות למכירה בהרצליה, מתווך בהרצליה, דניאל דואן, דואן נדל"ן, נכסים בהרצליה, השקעות נדל"ן הרצליה',
  authors: [{ name: "דניאל דואן" }],
  openGraph: {
    title: 'דניאל דואן | מומחה נדל"ן בהרצליה',
    description:
      "ליווי אישי ומקצועי משלב החיפוש ועד סגירת העסקה. התקשרו עכשיו: 050-537-2227",
    type: "website",
    locale: "he_IL",
  },
  twitter: {
    card: "summary_large_image",
    title: 'דניאל דואן | מומחה נדל"ן בהרצליה',
    description: 'ליווי אישי ומקצועי. נדל"ן בהרצליה.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={rubik.variable}>
      <body className="font-rubik antialiased bg-white text-neutral-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
