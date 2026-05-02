import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "3 Carpets Cleaned for £99 — Save £20 | TWH Carpet Cleaning Chester & Wirral",
  description:
    "Limited-time offer — three carpets professionally cleaned for just £99 (normally £119). Truck-mounted hot-water extraction, NCCA accredited. Chester, Ellesmere Port, Wirral & the CH postcode area. Call 0151 357 2295.",
  alternates: {
    canonical: "https://twhcarpetcleaning.co.uk/3for99",
  },
};

export default function ThreeForNinetyNineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
