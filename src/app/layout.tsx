import type { Metadata } from "next";
import StructuredData from "@/components/ui/StructuredData";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "TWH Carpet Cleaning | Carpet, Upholstery & Hard Floor Cleaning in Chester, Ellesmere Port & Wirral",
    template: "%s | TWH Carpet Cleaning",
  },
  description:
    "Professional carpet cleaning, upholstery cleaning and hard floor cleaning in Chester, Ellesmere Port, Wirral, Neston, Frodsham, Helsby, Runcorn and the CH postcode area. NCCA accredited. Domestic & commercial. Free quotes. Call 0151 357 2295.",
  keywords: [
    "carpet cleaning Chester",
    "carpet cleaning Ellesmere Port",
    "carpet cleaning Wirral",
    "carpet cleaning Neston",
    "carpet cleaning Frodsham",
    "carpet cleaning Helsby",
    "carpet cleaning Runcorn",
    "carpet cleaning CH postcode",
    "carpet cleaning North Wales",
    "upholstery cleaning Chester",
    "upholstery cleaning Ellesmere Port",
    "upholstery cleaning Wirral",
    "upholstery cleaning Neston",
    "upholstery cleaning Frodsham",
    "upholstery cleaning Runcorn",
    "hard floor cleaning Chester",
    "hard floor cleaning Ellesmere Port",
    "hard floor cleaning Wirral",
    "hard floor cleaning Frodsham",
    "hard floor cleaning Runcorn",
    "professional carpet cleaner near me",
    "domestic carpet cleaning",
    "commercial carpet cleaning",
    "sofa cleaning Chester",
    "sofa cleaning Wirral",
    "sofa cleaning Ellesmere Port",
    "carpet cleaner Cheshire",
    "NCCA carpet cleaner",
    "deep carpet cleaning",
    "stain removal carpet",
  ],
  openGraph: {
    title:
      "TWH Carpet Cleaning | Professional Carpet, Upholstery & Hard Floor Cleaning",
    description:
      "Serving Chester, Ellesmere Port, Wirral, Neston, Frodsham, Helsby, Runcorn and the entire CH postcode area. NCCA accredited. Free no-obligation quotes.",
    type: "website",
    locale: "en_GB",
    siteName: "TWH Carpet Cleaning",
  },
  twitter: {
    card: "summary_large_image",
    title: "TWH Carpet Cleaning | Chester, Ellesmere Port & Wirral",
    description:
      "Professional carpet, upholstery & hard floor cleaning. NCCA accredited. Serving the CH postcode area. Free quotes.",
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
  alternates: {
    canonical: "https://twhcarpetcleaning.co.uk",
  },
  verification: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="geo.region" content="GB-CHW" />
        <meta name="geo.placename" content="Ellesmere Port" />
        <meta name="geo.position" content="53.2792;-2.9131" />
        <meta name="ICBM" content="53.2792, -2.9131" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <StructuredData />
        {children}
        <script
          src="https://www.cleanerbot.co.uk/embed.js"
          data-tenant-id="cmmp4ho9x0000jj041bqayftz"
          async
        />
      </body>
    </html>
  );
}
