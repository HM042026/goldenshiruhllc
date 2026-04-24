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
  title: "Amazon PPC Management | High-ROAS Advertising Strategy | Goldenshiruhllc",
  description: "Maximize your Amazon ad spend. We provide data-driven PPC management for Sponsored Products, Brands, and Display to lower ACOS and scale revenue.",
  openGraph: {
    title: "Expert Amazon PPC Management | Goldenshiruhllc",
    description: "Scale your sales with precision-targeted Amazon advertising.",
  }
};

export default function AmazonPPCManagementPage() {
  return (
    <main>
      <ServiceSchema 
        name="Amazon PPC Management" 
        description="Data-driven advertising strategies for Amazon Sponsored Products, Brands, and Display ads." 
      />
      <HeroSection 
        eyebrow="High Value Service"
        headingLine1="Performance-Driven"
        headingLine2="Amazon PPC Management"
        description="We optimize your Amazon advertising campaigns to reduce wasted spend, improve ACOS, and scale profitable products."
        primaryCta={{ label: "Get Free PPC Audit", href: "#contact-form" }}
        secondaryCta={{ label: "Our Approach", href: "#overview" }}
      />
      
      <div id="overview">
        <ServiceOverview 
          title="Mastering the Auction"
          content="Amazon PPC is one of the most powerful growth tools — but only when managed correctly. Poor campaign structure and weak optimization can lead to significant wasted spend."
        />
      </div>

      <ServiceProblemSolution 
        problemsTitle="Common PPC Problems"
        problems={[
          "High ACOS / low ROI",
          "Poor keyword targeting",
          "Inefficient campaign structure",
          "Wasted ad spend",
          "Lack of scaling strategy"
        ]}
        solutionsTitle="Our PPC Approach"
        solutions={[
          "Data-driven keyword research",
          "Structured campaign hierarchy",
          "Continuous bid optimization",
          "Negative keyword mining"
        ]}
        solutionHeading="Performance First Strategy"
      />

      <ServiceDeliverables 
        title="Key PPC Metrics & Services"
        items={[
          "Sponsored Products, Brands & Display setup",
          "Campaign restructuring",
          "Keyword targeting refinement",
          "Search term mining",
          "Negative keyword implementation",
          "Bid optimization",
          "Budget allocation",
          "Campaign scaling"
        ]}
      />

      <ServiceProcess 
        title="Our Optimization Cycle"
        steps={[
          "PPC Audit",
          "Campaign Restructuring",
          "Optimization",
          "Performance Tracking",
          "Scaling"
        ]}
      />

      <ServicePricing 
        price="Starting from $300/month"
        subtitle="Depends on ad spend and complexity"
      />

      <PortfolioPlaceholder />

      <ServiceFAQ 
        faqs={[
          {
            q: "Do you manage all campaign types?",
            a: "Yes — Sponsored Products, Brands, and Display."
          },
          {
            q: "How long before results improve?",
            a: "Typically within 2–4 weeks depending on account condition."
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
