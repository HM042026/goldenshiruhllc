"use client";

import HeroSection from "@/components/sections/herosection";
import { 
  ServiceOverview, 
  ServiceProblemSolution, 
  ServiceDeliverables, 
  ServiceProcess, 
  ServicePricing, 
  ServiceFAQ, 
  PortfolioPlaceholder 
} from "@/components/sections/service-sections";
import ContactForm from "@/components/sections/contact-form";
import Footer from "@/components/layout/footer";

export default function APlusEbcContentPage() {
  return (
    <main>
      <HeroSection 
        eyebrow="Creative Service"
        headingLine1="High-Converting"
        headingLine2="A+ Content & EBC"
        description="Enhance your product pages with visually engaging and conversion-driven A+ content. Build trust and communicate your brand story effectively."
        primaryCta={{ label: "Upgrade Your Content", href: "#contact-form" }}
        secondaryCta={{ label: "View Advantages", href: "#overview" }}
      />
      
      <div id="overview">
        <ServiceOverview 
          title="Elevate Your Brand Story"
          content="A+ content helps build trust, communicate value, and significantly improve conversion rates. It's the difference between a simple product and a premium brand experience."
        />
      </div>

      <ServiceProblemSolution 
        problemsTitle="Common Visual Gaps"
        problems={[
          "Low engagement on listings",
          "Lack of brand storytelling",
          "Poor visual presentation"
        ]}
        solutionsTitle="Our Creative Solution"
        solutions={[
          "Custom A+ layout design",
          "Impactful infographics",
          "Visual storytelling flow",
          "Brand-aligned aesthetics"
        ]}
        solutionHeading="Stand Out from the Crowd"
      />

      <ServiceDeliverables 
        title="Creative Deliverables"
        items={[
          "A+ content layout design",
          "Brand storytelling",
          "Infographic design",
          "Content structuring",
          "Visual optimization"
        ]}
      />

      <ServiceProcess 
        title="Design to Delivery"
        steps={[
          "Content Planning",
          "Design Creation",
          "Review & Refinement",
          "Final Delivery"
        ]}
      />

      <ServicePricing 
        price="Starting from $150"
        subtitle="Per design project"
      />

      <PortfolioPlaceholder />

      <ServiceFAQ 
        faqs={[
          {
            q: "Do you provide images?",
            a: "Yes, we design visuals and layout based on your product and existing assets."
          }
        ]}
      />

      <div id="contact-form">
        <ContactForm />
      </div>

      <Footer />
    </main>
  );
}
