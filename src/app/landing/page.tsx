"use client";

import LandingHero from "@/components/landing/LandingHero";
import TrustBar from "@/components/landing/TrustBar";
import ProblemSolution from "@/components/landing/ProblemSolution";
import ServicesStrip from "@/components/landing/ServicesStrip";
import CostCalculator from "@/components/sections/CostCalculator";
import HowItWorks from "@/components/landing/HowItWorks";
import TestimonialStrip from "@/components/landing/TestimonialStrip";
import ElfsightReviews from "@/components/ui/ElfsightReviews";
import CoverageStrip from "@/components/landing/CoverageStrip";
import LandingCTA from "@/components/landing/LandingCTA";
import NCCABadge from "@/components/ui/NCCABadge";
import LandingFooter from "@/components/landing/LandingFooter";

export default function LandingPage() {
  return (
    <div id="top">
      <main>
        <LandingHero />
        <TrustBar />
        <ProblemSolution />
        <ServicesStrip />
        <CostCalculator />
        <HowItWorks />
        <TestimonialStrip />
        <ElfsightReviews />
        <CoverageStrip />
        <LandingCTA />
        <NCCABadge />
      </main>
      <LandingFooter />
    </div>
  );
}
