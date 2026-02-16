"use client";

import LandingHero from "@/components/landing/LandingHero";
import TrustBar from "@/components/landing/TrustBar";
import ProblemSolution from "@/components/landing/ProblemSolution";
import ServicesStrip from "@/components/landing/ServicesStrip";
import HowItWorks from "@/components/landing/HowItWorks";
import TestimonialStrip from "@/components/landing/TestimonialStrip";
import GoogleReviews from "@/components/ui/GoogleReviews";
import CoverageStrip from "@/components/landing/CoverageStrip";
import LandingCTA from "@/components/landing/LandingCTA";
import LandingFooter from "@/components/landing/LandingFooter";

export default function LandingPage() {
  return (
    <div id="top">
      <main>
        <LandingHero />
        <TrustBar />
        <ProblemSolution />
        <ServicesStrip />
        <HowItWorks />
        <TestimonialStrip />
        <GoogleReviews variant="compact" />
        <CoverageStrip />
        <LandingCTA />
      </main>
      <LandingFooter />
    </div>
  );
}
