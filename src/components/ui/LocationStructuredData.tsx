import type { Location } from "@/lib/locations";

export default function LocationStructuredData({
  location,
}: {
  location: Location;
}) {
  const url = `https://twhcarpetcleaning.co.uk${location.urlPath}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `Carpet Cleaning in ${location.name}`,
    serviceType: "Carpet, upholstery and hard floor cleaning",
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
      price: "69",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "69",
        priceCurrency: "GBP",
        unitText: "first room",
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
        name: `Carpet Cleaning ${location.name}`,
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
