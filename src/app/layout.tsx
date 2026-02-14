import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TWH Carpet Cleaning | Professional Carpet, Upholstery & Hard Floor Cleaning",
  description:
    "Transform your home or business with TWH Carpet Cleaning. Professional carpet, upholstery, and hard floor cleaning services. Get a free, no-obligation quote today.",
  keywords: [
    "carpet cleaning",
    "upholstery cleaning",
    "hard floor cleaning",
    "professional cleaning",
    "domestic cleaning",
    "commercial cleaning",
  ],
  openGraph: {
    title: "TWH Carpet Cleaning | Professional Cleaning Services",
    description:
      "Professional carpet, upholstery, and hard floor cleaning for homes and businesses. Get your free quote today.",
    type: "website",
  },
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
      </head>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
