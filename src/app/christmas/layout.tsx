import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christmas Carpet Cleaning Chester & Wirral — Guest-Ready Before the Big Day",
  description:
    "Get carpets and sofas guest-ready before Christmas. Truck-mounted hot-water extraction, dry in 2\u20134 hours, NCCA accredited. December dates across Chester, Ellesmere Port & Wirral go fast \u2014 reserve yours. Call 0151 357 2295.",
  alternates: {
    canonical: "https://twhcarpetcleaning.co.uk/christmas",
  },
};

export default function ChristmasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
