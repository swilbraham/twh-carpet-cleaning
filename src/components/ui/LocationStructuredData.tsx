import type { Location } from "@/lib/locations";

export default function LocationStructuredData({
  location,
}: {
  location: Location;
}) {
  const url = `https://twhcarpetcleaning.co.uk${location.urlPath}`;

  const serviceType =
    location.serviceKey === "sofa"
      ? "Sofa, upholstery and mattress cleaning"
      : "Carpet, upholstery and hard floor cleaning";
  const priceFrom = location.serviceKey === "sofa" ? "45" : "69";
  const priceUnit =
    location.serviceKey === "sofa" ? "two-seater sofa" : "first room";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `${location.serviceShort} in ${location.name}`,
    serviceType,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://twhcarpetcleaning.co.uk/#business",
      name: "TWH Carpet Cleaning",
      telephone: "+441513572295",
      address: {
        "@type": "PostalAddress",
        streetAddress: "21 Girton Road",
        addressLocality: "Ellesmere Port",
        addressRegion: "South Wirral",
        postalCode: "CH65 5BE",
        addressCountry: "GB",
      },
    },
    areaServed: {
      "@type": "Place",
      name: location.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: location.county,
      },
    },
    description: location.metaDescription,
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      price: priceFrom,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: priceFrom,
        priceCurrency: "GBP",
        unitText: priceUnit,
      },
      url,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: location.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://twhcarpetcleaning.co.uk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `${location.serviceShort} ${location.name}`,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
