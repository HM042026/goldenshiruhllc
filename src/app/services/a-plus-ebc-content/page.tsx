import { Metadata } from "next";
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
import { ServiceSchema } from "@/components/seo/schema";

export const metadata: Metadata = {
  title: "Amazon A+ Content & EBC Design | Conversion-Focused | Goldenshiruhllc",
  description: "Boost trust and conversion with custom A+ Content and Enhanced Brand Content. Our designs tell your brand story and highlight key product benefits effectively.",
  openGraph: {
    title: "Amazon A+ Content & EBC Design | Goldenshiruhllc",
    description: "Premium visual storytelling for your Amazon product listings.",
  }
};

export default function APlusEbcContentPage() {
  return (
    <main>
      <ServiceSchema 
        name="Amazon A+ Content & EBC Design" 
        description="Custom design and layout for Amazon Enhanced Brand Content (EBC) to drive higher conversions." 
      />
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
