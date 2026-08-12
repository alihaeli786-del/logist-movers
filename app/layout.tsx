import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.logistmovers.com"),

  title: {
    default: "Logist Movers | Professional Truck Dispatch Services",
    template: "%s | Logist Movers",
  },

  description:
    "Professional truck dispatch services for owner-operators and fleets across the USA. Logist Movers provides load booking, rate negotiation, broker communication, carrier setup, route planning, and dispatch support.",

  keywords: [
    "truck dispatch services",
    "truck dispatcher",
    "freight dispatch service",
    "owner operator dispatch",
    "dry van dispatch",
    "reefer dispatch",
    "flatbed dispatch",
    "step deck dispatch",
    "power only dispatch",
    "box truck dispatch",
    "hotshot dispatch",
    "gooseneck hotshot dispatch",
    "truck dispatch USA",
    "freight dispatcher Texas",
    "Logist Movers",
  ],

  authors: [
    {
      name: "Logist Movers",
    },
  ],

  creator: "Logist Movers",
  publisher: "Logist Movers",

  alternates: {
    canonical: "/",
  },

  openGraph: {
  type: "website",
  locale: "en_US",
  url: "https://www.logistmovers.com",
  siteName: "Logist Movers",
  title: "Logist Movers | Professional Truck Dispatch Services",
  description:
    "Professional dispatch support for owner-operators and fleets across the USA. Load booking, rate negotiation, broker communication, carrier setup and more.",

  images: [
    {
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Logist Movers Professional Truck Dispatch Services",
    },
  ],
},

  twitter: {
    card: "summary_large_image",
    title: "Logist Movers | Professional Truck Dispatch Services",
    description:
      "Professional truck dispatch support for owner-operators and fleets across the United States.",
      images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  category: "Transportation",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06101d",
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Logist Movers",
  url: "https://www.logistmovers.com",
  image: "https://www.logistmovers.com/logist-movers-logo.png",
logo: "https://www.logistmovers.com/logist-movers-logo.png",
  telephone: "+1-281-716-3420",
  email: "logistmovers@gmail.com",

  description:
    "Professional truck dispatch services for owner-operators and fleets across the United States.",

  address: {
    "@type": "PostalAddress",
    streetAddress: "6734 Blue Ridge Dr.",
    addressLocality: "Richmond",
    addressRegion: "TX",
    postalCode: "77469",
    addressCountry: "US",
  },

  areaServed: {
    "@type": "Country",
    name: "United States",
  },

  serviceType: [
    "Truck Dispatch Services",
    "Dry Van Dispatch",
    "Reefer Dispatch",
    "Flatbed Dispatch",
    "Step Deck Dispatch",
    "Power Only Dispatch",
    "Box Truck Dispatch",
    "Hotshot Dispatch",
    "Gooseneck Hotshot Dispatch",
    "Rate Negotiation",
    "Broker Communication",
    "Carrier Setup Assistance",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema),
          }}
        />
      </body>
    </html>
  );
}