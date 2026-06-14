"use client";

import BinHero from "@/components/bincleaning/BinHero";
import TrustBar from "@/components/landing/TrustBar";
import BinBenefits from "@/components/bincleaning/BinBenefits";
import BinServices from "@/components/bincleaning/BinServices";
import BinPricing from "@/components/bincleaning/BinPricing";
import BinHowItWorks from "@/components/bincleaning/BinHowItWorks";
import CoverageStrip from "@/components/landing/CoverageStrip";
import BinCTA from "@/components/bincleaning/BinCTA";
import LandingFooter from "@/components/landing/LandingFooter";

export default function BinCleaningPage() {
  return (
    <div id="top">
      <main>
        <BinHero />
        <TrustBar />
        <BinBenefits />
        <BinServices />
        <BinPricing />
        <BinHowItWorks />
        <CoverageStrip />
        <BinCTA />
      </main>
      <LandingFooter />
    </div>
  );
}
