import { Metadata } from "next";
import HeroSection from "@/components/sections/herosection";
import ServicePillars from "@/components/sections/service-pillars";
import ServicesSection from "@/components/sections/services";
import WhyUsSection from "@/components/sections/whyus";
import CtaSection from "@/components/sections/cta";
import Footer from "@/components/layout/footer";
import { ServiceSchema } from "@/components/seo/schema";

export const metadata: Metadata = {
  title: "Professional Amazon Management Services | PPC, SEO, FBA | Goldenshiruhllc",
  description: "Explore our full suite of Amazon account management services. We offer PPC management, listing optimization, A+ content design, and global brand scaling solutions.",
  openGraph: {
    title: "Full-Service Amazon Management | Goldenshiruhllc",
    description: "Data-driven strategies for Amazon marketplace dominance.",
  }
};

export default function ServicesPage() {
  return (
    <main>
      <ServiceSchema 
        name="Full-Service Amazon Management" 
        description="Comprehensive account scaling, PPC optimization, and operational management on Amazon." 
      />
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
      <ServicesSection />
      <WhyUsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
