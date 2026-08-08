"use client";

import StickyHeader from "@/components/ui/StickyHeader";
import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import ServiceShowcase from "@/components/sections/ServiceShowcase";
import Benefits from "@/components/sections/Benefits";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import BookingCalculator from "@/components/sections/BookingCalculator";
import Testimonials from "@/components/sections/Testimonials";
import ElfsightReviews from "@/components/ui/ElfsightReviews";
import About from "@/components/sections/About";
import CoverageArea from "@/components/sections/CoverageArea";
import QuoteForm from "@/components/sections/QuoteForm";
import FinalCTA from "@/components/sections/FinalCTA";
import NCCABadge from "@/components/ui/NCCABadge";
import Footer from "@/components/sections/Footer";
import StickyCTA from "@/components/sections/StickyCTA";

export default function TestHome() {
  return (
    <>
      <StickyHeader />
      <main>
        <Hero />
        <PainPoints />
        <ServiceShowcase />
        <Benefits />
        <Process />
        <Pricing />
        <BookingCalculator />
        <Testimonials />
        <ElfsightReviews />
        <About />
        <CoverageArea />
        <QuoteForm />
        <FinalCTA />
        <NCCABadge />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
