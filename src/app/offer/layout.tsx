import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "3 Carpets Cleaned from £119 | TWH Carpet Cleaning Chester & Wirral",
  description:
    "Have 3 carpets professionally cleaned from just £119. NCCA-accredited carpet cleaning across Chester, Ellesmere Port, Wirral, Neston, Frodsham, Helsby and Runcorn. Call 0151 357 2295 to book.",
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
