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
  title: "Gamal Growth | Performance Marketing for E-commerce Growth",
  description:
    "14+ years of experience in performance marketing and e-commerce growth, formerly Director of Growth Marketing at GMG. Proven strategies for 7-8 figure brands.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Gamal Growth",
              url: "https://gamalgrowth.com",
              image: "https://gamalgrowth.com/images/Gamal-photo.png",
              description:
                "Expert performance marketing and e-commerce growth services from Mohamed Gamal, a former Director of Growth Marketing at GMG with 14+ years of experience scaling brands like Nike, Under Armour, and JD Sports.",
              founder: {
                "@type": "Person",
                name: "Mohamed Gamal",
                jobTitle: "Director of Growth Marketing",
                image: "https://gamalgrowth.com/images/Gamal-photo.png",
                description:
                  "Over 14 years of experience in the MENA region, managing $100M+ in ad spend and achieving an average of +25% ROAS lift for clients in 6 months.",
                alumniOf: "GMG (Gulf Marketing Group)",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "AE",
              },
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "POAS Power Audit",
                    description:
                      "A 2-week engagement to surface profit leaks and identify misallocated ad spend by analyzing Profit on Ad Spend (POAS) versus ROAS.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "90-Day Growth Sprint",
                    description:
                      "An intensive sprint to implement AI-driven performance systems, optimize creative loops, and clean up multi-channel strategies to achieve an average of 25% ROAS lift.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Fractional Retainer",
                    description:
                      "Ongoing strategic leadership and KPI ownership with direct access to Mohamed Gamal. Includes weekly performance reviews and monthly strategy sessions.",
                  },
                },
              ],
              areaServed: {
                "@type": "Country",
                name: "United Arab Emirates",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
