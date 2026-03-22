import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Mizunomori Salon | 水の森の美容室",
  description: "靴を脱いで、ゆっくりどうぞ。キッズスペースもあるので、お子さま連れでも気兼ねなく。仙台市青葉区水の森のアットホームな美容室です。",
  openGraph: {
    title: "Mizunomori Salon | 水の森の美容室",
    description: "靴を脱いで、ゆっくりどうぞ。キッズスペースもあるので、お子さま連れでも気兼ねなく。仙台市青葉区水の森のアットホームな美容室です。",
    url: "https://mizunomori-salon-hp.vercel.app",
    siteName: "Mizunomori Salon",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={notoSerifJP.className}>{children}</body>
    </html>
  );
}
