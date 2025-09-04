import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flow Minimal - 미니멀한 디자인 솔루션",
  description: "복잡함을 줄이고 몰입을 키우는 미니멀한 디자인으로 사용자 경험을 혁신하고 비즈니스 성과를 극대화합니다.",
  keywords: ["미니멀 디자인", "UI/UX", "웹 디자인", "사용자 경험", "브랜딩"],
  authors: [{ name: "Flow Minimal" }],
  creator: "Flow Minimal",
  publisher: "Flow Minimal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://flowminimal.com'),
  openGraph: {
    title: "Flow Minimal - 미니멀한 디자인 솔루션",
    description: "복잡함을 줄이고 몰입을 키우는 미니멀한 디자인으로 사용자 경험을 혁신하고 비즈니스 성과를 극대화합니다.",
    url: 'https://flowminimal.com',
    siteName: 'Flow Minimal',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Flow Minimal - 미니멀한 디자인 솔루션',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Flow Minimal - 미니멀한 디자인 솔루션",
    description: "복잡함을 줄이고 몰입을 키우는 미니멀한 디자인으로 사용자 경험을 혁신하고 비즈니스 성과를 극대화합니다.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3B82F6" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
