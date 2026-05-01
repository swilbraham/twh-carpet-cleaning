import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Special Offer: 3 Carpets Cleaned for £119 | TWH Carpet Cleaning Chester & Wirral",
  description:
    "Limited-time offer — have 3 carpets professionally cleaned for only £119. NCCA-accredited carpet cleaning across Chester, Ellesmere Port, Wirral, Neston, Frodsham, Helsby and Runcorn. Call 0151 357 2295 to book.",
  alternates: {
    canonical: "https://twhcarpetcleaning.co.uk/offer",
  },
};

export default function OfferLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
