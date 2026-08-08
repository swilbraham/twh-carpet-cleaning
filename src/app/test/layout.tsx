import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking Calculator Test | TWH Carpet Cleaning",
  robots: { index: false, follow: false },
};

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
