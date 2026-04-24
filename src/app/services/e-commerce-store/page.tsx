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
  title: "Custom E-commerce Store Development | Shopify & WooCommerce | Goldenshiruhllc",
  description: "Expand beyond Amazon. We build high-converting Shopify and WooCommerce stores that empower brand independence and increase DTC profit margins.",
  openGraph: {
    title: "E-commerce & DTC Store Development | Goldenshiruhllc",
    description: "Building scalable digital storefronts for global brands.",
  }
};

export default function EcommerceStorePage() {
  return (
    <main>
      <ServiceSchema 
        name="E-commerce Store Development" 
        description="Custom design and development for Shopify and WooCommerce stores to build brand independence." 
      />
      <HeroSection 
        eyebrow="Expansion Service"
        headingLine1="Build & Scale Your"
        headingLine2="E-commerce Store"
        description="Expand beyond Amazon with a professionally built online store. Build brand independence and increase your direct-to-consumer profit margins."
        primaryCta={{ label: "Start Your Store", href: "#contact-form" }}
        secondaryCta={{ label: "Why Go DTC?", href: "#overview" }}
      />
      
      <div id="overview">
        <ServiceOverview 
          title="Brand Independence"
          content="A dedicated e-commerce store helps you build brand independence and increase profit margins. It's the ultimate way to own your customer data and long-term brand equity."
        />
      </div>

      <ServiceProblemSolution 
        problemsTitle="Scale Constraints"
        problems={[
          "No direct-to-consumer channel",
          "Low brand control",
          "Limited scalability beyond marketplaces"
        ]}
        solutionsTitle="The Solution"
        solutions={[
          "Custom Shopify/WooCommerce build",
          "DTC strategy development",
          "Seamless payment integration",
          "Conversion rate optimization"
        ]}
        solutionHeading="Beyond the Marketplace"
      />

      <ServiceDeliverables 
        title="Full Store Ecosystem"
        items={[
          "Store setup",
          "Design & development",
          "Product integration",
          "Payment setup",
          "Conversion optimization"
        ]}
      />

      <ServiceProcess 
        title="Development Roadmap"
        steps={[
          "Planning",
          "Design",
          "Development",
          "Testing",
          "Launch"
        ]}
      />

      <ServicePricing 
        price="Starting from $500"
        subtitle="Per custom e-commerce store"
      />

      <PortfolioPlaceholder />

      <ServiceFAQ 
        faqs={[
          {
            q: "Which platform do you use?",
            a: "We primarily use Shopify or WooCommerce based on your specific business needs and scaling goals."
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
