export interface Location {
  slug: string;
  name: string;
  urlPath: string;
  postcode: string;
  county: string;
  travelMinutes: number;
  heroTitle: string;
  heroTitleAccent: string;
  heroSubtitle: string;
  intro: string;
  local: string;
  neighbours: string[];
  landmarks: string[];
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const locations: Location[] = [
  {
    slug: "ellesmere-port",
    name: "Ellesmere Port",
    urlPath: "/carpet-cleaning-ellesmere-port",
    postcode: "CH65 / CH66",
    county: "Cheshire West",
    travelMinutes: 5,
    heroTitle: "Carpet Cleaning in",
    heroTitleAccent: "Ellesmere Port",
    heroSubtitle:
      "TWH Carpet Cleaning is based on Girton Road in Ellesmere Port. As your local carpet, upholstery and hard floor cleaner, we're just around the corner — same-week bookings across CH65, CH66 and every street in between.",
    intro:
      "TWH Carpet Cleaning is Ellesmere Port's local carpet, upholstery and hard floor cleaning specialist. From our base on Girton Road (CH65 5BE) we cover every street in the town — Whitby, Great Sutton, Little Sutton, Overpool, Wolverham, Rivacre, Hooton and Little Neston — usually with same-week availability. Because we're around the corner, we can call in for stubborn stain emergencies or last-minute end-of-tenancy cleans without weeks of waiting.",
    local:
      "Ellesmere Port homes see everything from busy family carpets in Great Sutton and Whitby, to letting-agent turnovers in the town centre, to commercial premises around Cheshire Oaks and the Coliseum. We use professional hot water extraction (also known as steam cleaning) to lift out ground-in dirt, pet odours and stains that DIY machines just push around. Every job is completed by an NCCA-accredited technician using eco-friendly, child- and pet-safe solutions.",
    neighbours: ["Chester", "Wirral", "Neston", "Helsby"],
    landmarks: [
      "Cheshire Oaks",
      "Whitby",
      "Great Sutton",
      "Little Sutton",
      "Overpool",
      "Hooton",
    ],
    faqs: [
      {
        q: "How quickly can you get to my house in Ellesmere Port?",
        a: "We're based on Girton Road in Ellesmere Port so most jobs in CH65 and CH66 can be booked within the same week, and often within 24–48 hours. Give us a call on 0151 357 2295 to check availability.",
      },
      {
        q: "How much does carpet cleaning cost in Ellesmere Port?",
        a: "Our carpet cleaning starts from £69 for the first room. Additional rooms are £30 for the second and £20 per room after that. The living room, stairs and landing package is £99 — a popular choice for Ellesmere Port terraces and semis.",
      },
      {
        q: "Do you do end-of-tenancy carpet cleaning in Ellesmere Port?",
        a: "Yes. We work with tenants, homeowners and letting agents across Ellesmere Port to hand properties back in the best possible condition. We can provide a receipt for your deposit return.",
      },
    ],
    metaTitle:
      "Carpet Cleaning Ellesmere Port | TWH — Local, NCCA-Accredited, from £69",
    metaDescription:
      "Local carpet, upholstery and hard floor cleaning in Ellesmere Port. Based on Girton Road (CH65). NCCA-accredited, eco-friendly, from £69. Same-week bookings. Call 0151 357 2295.",
  },
  {
    slug: "chester",
    name: "Chester",
    urlPath: "/carpet-cleaning-chester",
    postcode: "CH1 – CH4",
    county: "Cheshire West",
    travelMinutes: 15,
    heroTitle: "Carpet Cleaning in",
    heroTitleAccent: "Chester",
    heroSubtitle:
      "Professional carpet, upholstery and hard floor cleaning across Chester — Hoole, Handbridge, Upton, Vicars Cross, Blacon and the city centre. NCCA-accredited, family-run, same-week appointments.",
    intro:
      "TWH Carpet Cleaning is a local, family-run carpet cleaner serving Chester and the wider CH1 to CH4 postcode areas. We travel out from Ellesmere Port every week to Hoole, Handbridge, Upton, Boughton, Vicars Cross, Newton, Blacon, Saughall and the city centre — so wherever you are in Chester, we can usually offer an appointment within the same week.",
    local:
      "Chester's mix of Victorian terraces, period conversions and modern estates each come with their own carpet challenges — thick wool twists in Hoole, cream Berbers in Upton, high-traffic commercial carpets in the city-centre shops and offices. Our hot water extraction system is safe for delicate fibres and powerful enough for the busiest hallways, and every job is done by an NCCA-accredited technician using eco-friendly, child- and pet-safe products.",
    neighbours: ["Ellesmere Port", "Frodsham", "Helsby", "Neston"],
    landmarks: [
      "Hoole",
      "Handbridge",
      "Upton",
      "Vicars Cross",
      "Boughton",
      "Blacon",
      "Saughall",
      "Chester city centre",
    ],
    faqs: [
      {
        q: "Do you cover the whole of Chester?",
        a: "Yes — we cover CH1, CH2, CH3 and CH4 including Hoole, Handbridge, Upton, Newton, Vicars Cross, Boughton, Blacon, Saughall and the city centre, as well as villages like Christleton, Waverton and Tarvin.",
      },
      {
        q: "Can you clean carpets in period homes and listed buildings in Chester?",
        a: "Yes. Chester has a lot of period properties and delicate flooring. Our hot water extraction machines are professionally calibrated and we always test in an inconspicuous area first. As NCCA members, we're trained on natural fibres, wool twists and antique rugs.",
      },
      {
        q: "Do you offer commercial carpet cleaning for Chester offices and shops?",
        a: "Yes. We work with Chester businesses on flexible schedules — out-of-hours cleans for shops in the city centre and regular contract cleaning for offices and letting agents. Call 0151 357 2295 for a commercial quote.",
      },
    ],
    metaTitle:
      "Carpet Cleaning Chester | TWH — NCCA-Accredited, from £69, Same Week",
    metaDescription:
      "Professional carpet, upholstery and hard floor cleaning in Chester (CH1–CH4). NCCA-accredited, family-run, eco-friendly, from £69. Serving Hoole, Handbridge, Upton and the city centre. Call 0151 357 2295.",
  },
  {
    slug: "wirral",
    name: "Wirral",
    urlPath: "/carpet-cleaning-wirral",
    postcode: "CH41 – CH49, CH60 – CH64",
    county: "Merseyside",
    travelMinutes: 15,
    heroTitle: "Carpet Cleaning on the",
    heroTitleAccent: "Wirral",
    heroSubtitle:
      "TWH is your local Wirral carpet, upholstery and hard floor cleaner — from Heswall and Neston to Bromborough, Bebington, Birkenhead and West Kirby. NCCA-accredited, eco-friendly, family-run.",
    intro:
      "TWH Carpet Cleaning covers the entire Wirral peninsula from our base just over the border in Ellesmere Port. We're regularly booked across South Wirral in Heswall, Neston, Parkgate, Bromborough and Bebington, and travel out to Wallasey, Birkenhead, West Kirby, Hoylake and Meols. Because we're minutes from the M53, response times are usually same-week and often within 48 hours.",
    local:
      "Wirral properties range from big family homes in Heswall and Caldy, to Victorian villas in Oxton and Rock Ferry, to holiday lets and coastal apartments in West Kirby and Hoylake. We use professional hot water extraction to lift out sand, salt, mud, pet stains and traffic soil that the sea-air and dune walks leave behind. All work is carried out by an NCCA-accredited technician with fully insured, eco-friendly products.",
    neighbours: ["Ellesmere Port", "Chester", "Neston"],
    landmarks: [
      "Heswall",
      "Bebington",
      "Bromborough",
      "Birkenhead",
      "Wallasey",
      "West Kirby",
      "Hoylake",
      "Oxton",
    ],
    faqs: [
      {
        q: "Which Wirral postcodes do you cover?",
        a: "We cover the whole Wirral peninsula — CH41 to CH49 (Birkenhead, Wallasey, West Kirby, Hoylake, Bromborough, Bebington) and CH60 to CH64 (Heswall, Neston, Parkgate, Little Neston, Willaston).",
      },
      {
        q: "Do you clean carpets in holiday lets on the Wirral?",
        a: "Yes — holiday lets and Airbnb properties in West Kirby, Hoylake and Parkgate are a common booking. We can work around changeover days and provide a receipted invoice for your bookkeeping.",
      },
      {
        q: "Can you remove pet stains and odours from Wirral homes?",
        a: "Yes. Our hot water extraction removes urine, mud and pet dander at fibre level, and we finish with a professional-grade deodoriser. Safe for children and pets to walk on once dry.",
      },
    ],
    metaTitle:
      "Carpet Cleaning Wirral | TWH — Heswall, Bebington, West Kirby & More",
    metaDescription:
      "Local carpet, upholstery and hard floor cleaning across the Wirral — Heswall, Neston, Bebington, Bromborough, Birkenhead, West Kirby, Hoylake. NCCA-accredited, from £69. Call 0151 357 2295.",
  },
  {
    slug: "neston",
    name: "Neston",
    urlPath: "/carpet-cleaning-neston",
    postcode: "CH64",
    county: "Cheshire West",
    travelMinutes: 10,
    heroTitle: "Carpet Cleaning in",
    heroTitleAccent: "Neston & Parkgate",
    heroSubtitle:
      "Local, family-run carpet, upholstery and hard floor cleaning in Neston, Parkgate, Little Neston, Willaston and Ness. NCCA-accredited, eco-friendly, from £69.",
    intro:
      "TWH Carpet Cleaning is a short drive from Neston, based just up the road in Ellesmere Port. We regularly clean carpets, sofas and hard floors across CH64 — including Neston town centre, Parkgate, Little Neston, Willaston, Ness and Burton — and can usually offer a same-week appointment.",
    local:
      "Homes around Neston and Parkgate get the full range of Wirral weather — the marshes bring damp and mud in winter, and the Dee estuary sends sand and salt into hallways in summer. Our professional hot water extraction cleans deep into the fibres to remove ground-in soil, salt and pet stains, and we use eco-friendly products that are safe for children and pets once dry.",
    neighbours: ["Ellesmere Port", "Wirral", "Chester"],
    landmarks: ["Parkgate", "Little Neston", "Willaston", "Ness", "Burton"],
    faqs: [
      {
        q: "Do you clean carpets in Parkgate and along the Dee estuary?",
        a: "Yes — Parkgate, Ness and Burton are all part of our regular Neston round. Salt, damp and sand from the estuary are exactly the kind of soiling professional carpet cleaning removes best.",
      },
      {
        q: "How much does carpet cleaning cost in Neston?",
        a: "From £69 for the first room. Our living-room, stairs and landing package is £99, which suits most Neston terraces and semis. Give us a call on 0151 357 2295 for a firm quote.",
      },
    ],
    metaTitle:
      "Carpet Cleaning Neston & Parkgate | TWH — NCCA-Accredited, from £69",
    metaDescription:
      "Local carpet, upholstery and hard floor cleaning in Neston, Parkgate, Little Neston, Willaston (CH64). NCCA-accredited, family-run, eco-friendly, from £69. Call 0151 357 2295.",
  },
  {
    slug: "frodsham",
    name: "Frodsham",
    urlPath: "/carpet-cleaning-frodsham",
    postcode: "WA6",
    county: "Cheshire West",
    travelMinutes: 15,
    heroTitle: "Carpet Cleaning in",
    heroTitleAccent: "Frodsham",
    heroSubtitle:
      "Professional carpet, upholstery and hard floor cleaning in Frodsham — Kingsley, Norley, Manley and the surrounding villages. NCCA-accredited, family-run, from £69.",
    intro:
      "TWH Carpet Cleaning serves Frodsham and the surrounding villages of Kingsley, Norley, Manley, Alvanley and Newton-by-Frodsham. We're based just up the M56 in Ellesmere Port, so travel to Frodsham is quick and we can usually offer same-week appointments.",
    local:
      "Frodsham has a real mix of older stone-built cottages around the Hill, roomy family homes off Overton Road and busy little businesses along Main Street — each with different flooring and different challenges. Our hot water extraction is powerful enough for country-lane mud and heavy soil, but gentle enough for wool twists and delicate natural fibres, and every job is done by an NCCA-accredited technician.",
    neighbours: ["Helsby", "Runcorn", "Chester"],
    landmarks: [
      "Frodsham Hill",
      "Main Street",
      "Kingsley",
      "Norley",
      "Manley",
      "Alvanley",
    ],
    faqs: [
      {
        q: "Do you cover the villages around Frodsham?",
        a: "Yes — we regularly clean carpets in Kingsley, Norley, Manley, Alvanley and Newton-by-Frodsham as well as Frodsham itself. The whole WA6 postcode is on our route.",
      },
      {
        q: "Can you clean tile and stone floors in Frodsham cottages?",
        a: "Yes. We clean, strip and seal tile, slate, stone, vinyl and laminate floors. Perfect for old cottage kitchens and utility rooms that need their sparkle back.",
      },
    ],
    metaTitle:
      "Carpet Cleaning Frodsham | TWH — Kingsley, Norley, Manley, from £69",
    metaDescription:
      "Local carpet, upholstery and hard floor cleaning in Frodsham (WA6) and surrounding villages. NCCA-accredited, family-run, eco-friendly, from £69. Call 0151 357 2295.",
  },
  {
    slug: "helsby",
    name: "Helsby",
    urlPath: "/carpet-cleaning-helsby",
    postcode: "WA6",
    county: "Cheshire West",
    travelMinutes: 12,
    heroTitle: "Carpet Cleaning in",
    heroTitleAccent: "Helsby",
    heroSubtitle:
      "Local carpet, upholstery and hard floor cleaning across Helsby, Elton and Hapsford — NCCA-accredited, family-run, from £69.",
    intro:
      "TWH Carpet Cleaning is a short hop up the A5117 from Helsby. We regularly clean carpets, upholstery and hard floors in Helsby, Elton, Hapsford and the surrounding villages — from bigger family homes on Robin Hood Lane to newer estates near the station and older cottages up on Helsby Hill.",
    local:
      "Helsby homes tend to have longer hallways and multiple bedrooms, so our multi-room pricing works well — the second room is £30 and every room after that is £20. We use professional hot water extraction with eco-friendly products, so carpets are dry in a matter of hours and safe for children and pets straight away.",
    neighbours: ["Frodsham", "Chester", "Ellesmere Port"],
    landmarks: ["Helsby Hill", "Robin Hood Lane", "Elton", "Hapsford"],
    faqs: [
      {
        q: "How much does a full-house carpet clean cost in Helsby?",
        a: "It depends on the size — but as a guide, our multi-room pricing is £69 for the first room, £30 for the second, and £20 per room after that. Most Helsby three- and four-bedroom homes come in well under £200.",
      },
      {
        q: "Do you clean sofas as well as carpets in Helsby?",
        a: "Yes. Upholstery cleaning is one of our most popular services — sofas, armchairs, corner suites, dining chairs and mattresses. We can often clean carpets and upholstery in the same visit.",
      },
    ],
    metaTitle:
      "Carpet Cleaning Helsby | TWH — Local, NCCA-Accredited, from £69",
    metaDescription:
      "Local carpet, upholstery and hard floor cleaning in Helsby, Elton and Hapsford (WA6). NCCA-accredited, family-run, eco-friendly, from £69. Call 0151 357 2295.",
  },
  {
    slug: "runcorn",
    name: "Runcorn",
    urlPath: "/carpet-cleaning-runcorn",
    postcode: "WA7",
    county: "Halton",
    travelMinutes: 20,
    heroTitle: "Carpet Cleaning in",
    heroTitleAccent: "Runcorn",
    heroSubtitle:
      "Professional carpet, upholstery and hard floor cleaning across Runcorn — Weston Point, Halton, Sandymoor, Preston Brook and the old town. NCCA-accredited, from £69.",
    intro:
      "TWH Carpet Cleaning covers Runcorn and the surrounding WA7 postcode area — from the old town and Weston Point across to Halton Village, Sandymoor, Preston Brook and Beechwood. We come out from Ellesmere Port, so via the M56 we're usually with you the same week you call.",
    local:
      "Runcorn has a real mix of housing — older terraces, big estates and new-builds in Sandymoor — as well as busy commercial premises across the industrial estates. Whatever the property, our hot water extraction system lifts out ground-in dirt and stains rather than just moving them around, and every job is completed by an NCCA-accredited technician with fully insured, eco-friendly products.",
    neighbours: ["Frodsham", "Helsby", "Chester"],
    landmarks: [
      "Halton Village",
      "Weston Point",
      "Sandymoor",
      "Preston Brook",
      "Beechwood",
    ],
    faqs: [
      {
        q: "Do you do commercial carpet cleaning in Runcorn?",
        a: "Yes. We clean carpets for offices, warehouses and shop units across the Runcorn industrial estates. Out-of-hours cleaning is available and we can arrange regular contract discounts.",
      },
      {
        q: "How quickly can you come out to Runcorn?",
        a: "Usually within the same week. Call 0151 357 2295 and we'll check the diary. For emergency stain call-outs we'll often squeeze you in within 24–48 hours.",
      },
    ],
    metaTitle:
      "Carpet Cleaning Runcorn | TWH — NCCA-Accredited, from £69, Same Week",
    metaDescription:
      "Professional carpet, upholstery and hard floor cleaning in Runcorn (WA7). NCCA-accredited, family-run, eco-friendly, from £69. Domestic & commercial. Call 0151 357 2295.",
  },
];

export const getLocation = (slug: string) =>
  locations.find((l) => l.slug === slug);
