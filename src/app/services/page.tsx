"use client";

import HeroSection from "@/components/sections/herosection";
import ServicePillars from "@/components/sections/service-pillars";
import WhyUsSection from "@/components/sections/whyus";
import CtaSection from "@/components/sections/cta";
import Footer from "@/components/layout/footer";

export default function ServicesPage() {
  return (
    <main>
      <HeroSection 
        eyebrow="The Master Solution"
        headingLine1="Full-Service Amazon"
        headingLine2="Account Management"
        description="We don't just 'manage' your account—we architect its growth. From global category strategy to backend keyword indexing, we take total ownership of your marketplace performance."
        primaryCta={{ label: "View Our Pillars", href: "#pillars" }}
        secondaryCta={{ label: "Get Free Audit", href: "/contact" }}
      />
      <div id="pillars">
        <ServicePillars />
      </div>
      <WhyUsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
