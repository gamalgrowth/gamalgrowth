import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { headers } from 'next/headers';

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = headers().get('x-nonce') || undefined;
  return (
    <html lang="en">
      {/* Google Tag Manager */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W4V3RKR6');`,
        }}
        nonce={nonce}
      />
      {/* End Google Tag Manager */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W4V3RKR6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
