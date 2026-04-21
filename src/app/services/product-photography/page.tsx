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

export default function ProductPhotographyPage() {
  return (
    <main>
      <HeroSection 
        eyebrow="Visual Service"
        headingLine1="Professional Amazon"
        headingLine2="Product Photography"
        description="High-quality visuals that improve click-through rates and conversions. We capture your product's best angles for maximum marketplace impact."
        primaryCta={{ label: "Get Professional Images", href: "#contact-form" }}
        secondaryCta={{ label: "View Services", href: "#overview" }}
      />
      
      <div id="overview">
        <ServiceOverview 
          title="The Power of Visuals"
          content="Images are the first thing customers notice. Professional photography directly impacts CTR and conversion. We don't just take photos; we create sales-driving assets."
        />
      </div>

      <ServiceProblemSolution 
        problemsTitle="Common Photography Issues"
        problems={[
          "Low-quality images",
          "Poor lighting",
          "Lack of lifestyle visuals"
        ]}
        solutionsTitle="Our Visual Solution"
        solutions={[
          "High-definition studio shots",
          "Professional lighting setup",
          "Lifestyle & context photography",
          "Post-production editing"
        ]}
        solutionHeading="Capture Your Brand's Essence"
      />

      <ServiceDeliverables 
        title="Photography Package"
        items={[
          "White background images",
          "Lifestyle photography",
          "Infographic images",
          "Product highlighting",
          "Visual storytelling"
        ]}
      />

      <ServiceProcess 
        title="Shoot to Shipment"
        steps={[
          "Requirement Analysis",
          "Shoot Planning",
          "Photography",
          "Editing & Delivery"
        ]}
      />

      <ServicePricing 
        price="Starting from $200"
        subtitle="Per project / SKU"
      />

      <PortfolioPlaceholder />

      <ServiceFAQ 
        faqs={[
          {
            q: "Do you handle product shipping?",
            a: "Yes, details are discussed based on your location and project scope."
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
