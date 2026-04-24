import { Metadata } from "next";
import HeroSection from "@/components/sections/herosection";
import WhoWeAre from "@/components/sections/whoweare";
import ProcessSection from "@/components/sections/process";
import WhyUsSection from "@/components/sections/whyus";
import TheStory from "@/components/sections/thestory";
import CtaSection from "@/components/sections/cta";
import Footer from "@/components/layout/footer";
import { ServiceSchema } from "@/components/seo/schema";

export const metadata: Metadata = {
  title: "About Us | Goldenshiruhllc - The Architects of Amazon Growth",
  description: "Learn how Goldenshiruhllc engineering team uses data-backed strategy and algorithm research to scale brands to category dominance on Amazon.",
  openGraph: {
    title: "About Us | Goldenshiruhllc",
    description: "The story and vision behind the elite Amazon account management agency.",
  }
};

export default function AboutPage() {
  return (
    <main>
      <ServiceSchema 
        name="Amazon Agency Consulting" 
        description="Elite marketplace intelligence and brand scaling strategies." 
      />
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
