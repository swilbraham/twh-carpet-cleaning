import type { Metadata } from "next";
import LocationPage from "@/components/sections/LocationPage";
import LocationStructuredData from "@/components/ui/LocationStructuredData";
import { getSofaLocation } from "@/lib/locations";

const location = getSofaLocation("runcorn")!;

export const metadata: Metadata = {
  title: location.metaTitle,
  description: location.metaDescription,
  alternates: {
    canonical: `https://twhcarpetcleaning.co.uk${location.urlPath}`,
  },
  openGraph: {
    title: location.metaTitle,
    description: location.metaDescription,
    url: `https://twhcarpetcleaning.co.uk${location.urlPath}`,
    type: "website",
    locale: "en_GB",
  },
};

export default function Page() {
  return (
    <>
      <LocationStructuredData location={location} />
      <LocationPage location={location} />
    </>
  );
}
