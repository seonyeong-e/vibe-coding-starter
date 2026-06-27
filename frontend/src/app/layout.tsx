import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "신선영 — 데이터 마케팅 프로필",
  description: "데이터 마케팅 자기소개 페이지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-[#f5f2f0] text-[#111827] antialiased">{children}</body>
    </html>
  );
}
