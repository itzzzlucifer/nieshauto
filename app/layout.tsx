import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nieshauto.com"),
  title: {
    default: "Niesh Automobile | Premium Electric Vehicles in Nepal",
    template: "%s | Niesh Automobile",
  },
  description: "Exclusive authorized partner for Jinpeng in Nepal. Experience premium urban mobility with the JINPENG LINGBOX-Z. Eco-friendly, efficient, and innovative electric vehicles.",
  keywords: ["Niesh Automobile", "Jinpeng Nepal", "Lingbox-Z", "Electric Vehicles Nepal", "EV Nepal", "Premium Dealership", "Urban Mobility"],
  authors: [{ name: "Niesh Automobile" }],
  creator: "Niesh Automobile",
  publisher: "Niesh Automobile",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Niesh Automobile | Premium Electric Vehicles in Nepal",
    description: "Exclusive authorized partner for Jinpeng in Nepal. Discover the JINPENG LINGBOX-Z.",
    url: "https://nieshauto.com",
    siteName: "Niesh Automobile",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 600,
        alt: "Niesh Automobile Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Niesh Automobile | Premium Electric Vehicles in Nepal",
    description: "Exclusive authorized partner for Jinpeng in Nepal.",
    images: ["/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "name": "Niesh Automobile Pvt. Ltd.",
    "image": "https://nieshauto.com/logo.jpeg",
    "@id": "https://nieshauto.com",
    "url": "https://nieshauto.com",
    "telephone": "01-4522211",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Baneshwor",
      "addressLocality": "Kathmandu",
      "postalCode": "44600",
      "addressCountry": "NP"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 27.6915,
      "longitude": 85.3420
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/nieshauto",
      "https://www.instagram.com/nieshauto"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-[#f8f9fa] text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
