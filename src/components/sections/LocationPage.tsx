"use client";

import StickyHeader from "@/components/ui/StickyHeader";
import LocationHero from "@/components/sections/LocationHero";
import LocationContent from "@/components/sections/LocationContent";
import PainPoints from "@/components/sections/PainPoints";
import ServiceShowcase from "@/components/sections/ServiceShowcase";
import Benefits from "@/components/sections/Benefits";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import CostCalculator from "@/components/sections/CostCalculator";
import Testimonials from "@/components/sections/Testimonials";
import ElfsightReviews from "@/components/ui/ElfsightReviews";
import About from "@/components/sections/About";
import QuoteForm from "@/components/sections/QuoteForm";
import FinalCTA from "@/components/sections/FinalCTA";
import NCCABadge from "@/components/ui/NCCABadge";
import Footer from "@/components/sections/Footer";
import StickyCTA from "@/components/sections/StickyCTA";
import type { Location } from "@/lib/locations";

export default function LocationPage({ location }: { location: Location }) {
  return (
    <>
      <StickyHeader />
      <main>
        <LocationHero location={location} />
        <LocationContent location={location} />
        <PainPoints />
        <ServiceShowcase />
        <Benefits />
        <Process />
        <Pricing />
        <CostCalculator />
        <Testimonials />
        <ElfsightReviews />
        <About />
        <QuoteForm />
        <FinalCTA />
        <NCCABadge />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
