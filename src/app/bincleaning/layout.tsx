import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Wheelie Bin Cleaning from £6 | Chester, Ellesmere Port & Wirral | TWH",
  description:
    "Professional wheelie bin cleaning across Chester, Ellesmere Port, Wirral, Neston, Frodsham, Helsby and Runcorn. Kills 99.9% of germs, removes odours and grime. Eco-friendly, fully insured. Get your free quote today. Call 0151 357 2295.",
  alternates: {
    canonical: "https://twhcarpetcleaning.co.uk/bincleaning",
  },
};

export default function BinCleaningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
