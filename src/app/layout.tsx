import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "진명에어컨 이전설치 | 에어컨 설치, 수리, 청소 전문",
  description: "진명에어컨은 에어컨 설치, 이전설치, 수리, 청소 전문 업체입니다. 합리적인 에어컨 설치 가격과 친절한 상담으로 고객 만족을 최우선으로 합니다. 지금 바로 문의하세요!",
  keywords: "에어컨 설치, 에어컨 이전설치, 에어컨, 진명에어컨, 에어컨 설치 가격, 에어컨 설치 문의, 에어컨 수리, 에어컨 청소",
  openGraph: {
    title: "진명에어컨 이전설치 | 에어컨 설치, 수리, 청소 전문",
    description: "진명에어컨은 에어컨 설치, 이전설치, 수리, 청소 전문 업체입니다. 합리적인 에어컨 설치 가격과 친절한 상담으로 고객 만족을 최우선으로 합니다. 지금 바로 문의하세요!",
    url: "https://jmair-install-service.vercel.app",
    siteName: "진명에어컨 이전설치",
    images: [
      {
        url: "https://jmair-install-service.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "진명에어컨 이전설치",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

import { Manrope, Noto_Sans } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const notoSans = Noto_Sans({ subsets: ['latin'], variable: '--font-noto-sans' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${notoSans.variable} ${geistSans.variable}`}>
      <body>
        <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
