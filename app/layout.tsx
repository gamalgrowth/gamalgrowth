import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gamal Growth | Performance Marketing & E-commerce Growth",
  description:
    "Expert performance marketing and e-commerce growth services. 14 years of experience as Director of Growth Marketing at GMG, scaling brands like Nike, Under Armour, JD Sports, and Sun and Sands Sports.",
  openGraph: {
    title: "Gamal Growth | Performance Marketing & E-commerce Growth",
    description: "14 years of experience scaling brands like Nike, Under Armour, & more.",
    url: "https://gamalgrowth.com",
    siteName: "Gamal Growth",
    images: [
      {
        url: "https://gamalgrowth.com/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: {
      url: "/logo.svg?v=2",
      type: "image/svg+xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
