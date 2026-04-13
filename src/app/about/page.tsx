"use client";

import HeroSection from "@/components/sections/herosection";
import WhoWeAre from "@/components/sections/whoweare";
import ProcessSection from "@/components/sections/process";
import WhyUsSection from "@/components/sections/whyus";
import TheStory from "@/components/sections/thestory";
import CtaSection from "@/components/sections/cta";
import Footer from "@/components/layout/footer";

export default function AboutPage() {
  return (
    <main>
      <HeroSection 
        eyebrow="Our History & Vision"
        headingLine1="Architecting the Future"
        headingLine2="Of Amazon Dominance"
        description="Goldenshiruhllc represents the pinnacle of marketplace intelligence. We don't just solve problems; we engineer growth through proprietary algorithm research and data-backed scale."
        primaryCta={{ label: "View Our Process", href: "#process" }}
        secondaryCta={{ label: "Connect with Us", href: "/contact" }}
      />
      <WhoWeAre />
      <div id="process">
        <ProcessSection />
      </div>
      <WhyUsSection />
      <TheStory />
      <CtaSection />
      <Footer />
    </main>
  );
}
