import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Carpet Cleaning from £69 | Chester, Ellesmere Port & Wirral | TWH Carpet Cleaning",
  description:
    "Professional carpet cleaning from just £69. Upholstery cleaning and hard floor cleaning in Chester, Ellesmere Port, Wirral, Neston, Frodsham, Helsby and Runcorn. NCCA accredited. Get your free quote today. Call 0151 357 2295.",
  alternates: {
    canonical: "https://twhcarpetcleaning.co.uk/landing",
  },
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
