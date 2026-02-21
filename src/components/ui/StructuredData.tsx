export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://twhcarpetcleaning.co.uk/#business",
    name: "TWH Carpet Cleaning",
    description:
      "Professional carpet cleaning, upholstery cleaning and hard floor cleaning for domestic and commercial customers in Chester, Ellesmere Port, Wirral and the CH postcode area.",
    url: "https://twhcarpetcleaning.co.uk",
    telephone: "+441513572295",
    email: "Twhcarpetcleaning@outlook.com",
    image: "https://twhcarpetcleaning.co.uk/logo.png",
    priceRange: "££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: "21 Girton Road",
      addressLocality: "Ellesmere Port",
      addressRegion: "South Wirral",
      postalCode: "CH65 5BE",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.2792,
      longitude: -2.9131,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Chester",
        containedInPlace: { "@type": "AdministrativeArea", name: "Cheshire" },
      },
      {
        "@type": "City",
        name: "Ellesmere Port",
        containedInPlace: { "@type": "AdministrativeArea", name: "Cheshire" },
      },
      {
        "@type": "City",
        name: "Wirral",
        containedInPlace: { "@type": "AdministrativeArea", name: "Merseyside" },
      },
      {
        "@type": "City",
        name: "Neston",
        containedInPlace: { "@type": "AdministrativeArea", name: "Cheshire" },
      },
      {
        "@type": "City",
        name: "Frodsham",
        containedInPlace: { "@type": "AdministrativeArea", name: "Cheshire" },
      },
      {
        "@type": "City",
        name: "Helsby",
        containedInPlace: { "@type": "AdministrativeArea", name: "Cheshire" },
      },
      {
        "@type": "City",
        name: "Runcorn",
        containedInPlace: { "@type": "AdministrativeArea", name: "Cheshire" },
      },
      {
        "@type": "AdministrativeArea",
        name: "CH Postcode Area",
      },
      {
        "@type": "AdministrativeArea",
        name: "Parts of North Wales",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Carpet Cleaning",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Carpet Cleaning",
                description:
                  "Professional hot water extraction carpet cleaning that removes embedded dirt, stains and allergens. Serving Chester, Ellesmere Port, Wirral, Neston, Frodsham, Helsby and Runcorn.",
              },
              priceSpecification: {
                "@type": "PriceSpecification",
                price: "69",
                priceCurrency: "GBP",
                unitText: "per visit",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Living Room, Stairs & Landing Carpet Cleaning",
                description:
                  "Complete carpet cleaning package for living room, stairs and landing.",
              },
              priceSpecification: {
                "@type": "PriceSpecification",
                price: "99",
                priceCurrency: "GBP",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Upholstery Cleaning",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Upholstery Cleaning",
                description:
                  "Professional sofa, armchair and fabric furniture cleaning. Restores upholstery to look and smell brand new. Available across Chester, Ellesmere Port, Wirral and the CH postcode area.",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Hard Floor Cleaning",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Hard Floor Cleaning",
                description:
                  "Professional tile, vinyl, laminate and stone floor cleaning, stripping and sealing. Serving Chester, Ellesmere Port, Wirral, Frodsham, Helsby and Runcorn.",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Commercial Carpet Cleaning",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Commercial Carpet Cleaning",
                description:
                  "Professional carpet and floor cleaning for offices, retail spaces and commercial premises. Out-of-hours cleaning available. Serving businesses across Chester, Ellesmere Port, Wirral and the CH postcode area.",
              },
            },
          ],
        },
      ],
    },
    memberOf: {
      "@type": "Organization",
      name: "National Carpet Cleaners Association",
      alternateName: "NCCA",
      url: "https://www.ncca.co.uk",
    },
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TWH Carpet Cleaning",
    url: "https://twhcarpetcleaning.co.uk",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://twhcarpetcleaning.co.uk/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does carpet cleaning cost in Chester and Ellesmere Port?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Carpet cleaning with TWH starts from £69 for the first room. Additional rooms are £30 for the second room and £20 per room thereafter. Our living room, stairs and landing package is just £99. We serve Chester, Ellesmere Port, Wirral, Neston, Frodsham, Helsby, Runcorn and the entire CH postcode area.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer upholstery cleaning in the Wirral?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide professional upholstery cleaning across the Wirral, Chester, Ellesmere Port, Neston and the entire CH postcode area. We clean sofas, armchairs and all fabric furniture using eco-friendly products that are safe for children and pets.",
        },
      },
      {
        "@type": "Question",
        name: "What areas do you cover for carpet cleaning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We cover anywhere with a CH postcode, including Chester, Ellesmere Port, Wirral, Neston, Frodsham, Helsby and Runcorn, as well as parts of North Wales. We offer both domestic and commercial carpet cleaning, upholstery cleaning and hard floor cleaning.",
        },
      },
      {
        "@type": "Question",
        name: "Are you NCCA accredited?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, TWH Carpet Cleaning is an advanced member of the National Carpet Cleaners Association (NCCA). This means our technicians are fully trained, insured and work to the highest professional standards in the carpet and upholstery cleaning industry.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer commercial carpet cleaning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide commercial carpet cleaning for offices, retail spaces and business premises across Chester, Ellesmere Port, Wirral and surrounding areas. We offer out-of-hours cleaning and regular contract discounts. Contact us for a tailored commercial quote.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer hard floor cleaning in Chester?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide professional hard floor cleaning in Chester, Ellesmere Port, Wirral and across the CH postcode area. We clean, strip and seal tile, vinyl, laminate and stone floors for both homes and businesses.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
