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

export default function BrandStoreDesignPage() {
  return (
    <main>
      <HeroSection 
        eyebrow="Creative Service"
        headingLine1="Custom Amazon"
        headingLine2="Brand Store Design"
        description="Create a professional storefront that reflects your brand and improves customer experience. Turn your Amazon presence into a digital destination."
        primaryCta={{ label: "Build Your Store", href: "#contact-form" }}
        secondaryCta={{ label: "Our Approach", href: "#overview" }}
      />
      
      <div id="overview">
        <ServiceOverview 
          title="Your Brand's Digital Home"
          content="A well-designed brand store enhances credibility and improves product discovery. It allows customers to explore your full catalog in a distraction-free environment."
        />
      </div>

      <ServiceProblemSolution 
        problemsTitle="Storefront Challenges"
        problems={[
          "Poor store structure",
          "Weak branding",
          "Low engagement"
        ]}
        solutionsTitle="The Solution"
        solutions={[
          "Custom UI/UX layout",
          "Optimized product discovery",
          "Strong brand storytelling",
          "Conversion-focused design"
        ]}
        solutionHeading="Create an Elite Experience"
      />

      <ServiceDeliverables 
        title="Store Design Services"
        items={[
          "Store layout design",
          "UI/UX structuring",
          "Product categorization",
          "Visual design",
          "Brand storytelling"
        ]}
      />

      <ServiceProcess 
        title="Blueprint to Build"
        steps={[
          "Planning",
          "Structure Design",
          "Visual Creation",
          "Store Setup"
        ]}
      />

      <ServicePricing 
        price="Starting from $300"
        subtitle="Per custom store design"
      />

      <PortfolioPlaceholder />

      <ServiceFAQ 
        faqs={[
          {
            q: "Do you redesign existing stores?",
            a: "Yes, we can improve and optimize existing storefronts for better performance."
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
