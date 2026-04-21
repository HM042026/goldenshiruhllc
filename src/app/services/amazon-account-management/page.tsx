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

export default function AmazonAccountManagementPage() {
  return (
    <main>
      <HeroSection 
        eyebrow="Core Service"
        headingLine1="End-to-End Amazon"
        headingLine2="Account Management"
        description="We manage your Amazon business with a structured, data-driven approach focused on performance, compliance, and long-term growth."
        primaryCta={{ label: "Request Free Audit", href: "#contact-form" }}
        secondaryCta={{ label: "View Our Process", href: "#process" }}
      />
      
      <ServiceOverview 
        title="Comprehensive Oversight"
        content="Managing an Amazon account requires continuous monitoring, optimization, and strategic decision-making. Our account management service ensures your business operates efficiently while identifying opportunities for growth."
      />

      <ServiceProblemSolution 
        problems={[
          "Lack of consistent account monitoring",
          "Poor performance tracking",
          "Missed growth opportunities",
          "Policy compliance risks",
          "Inefficient operations"
        ]}
        solutions={[
          "Complete account oversight",
          "Integrated performance tracking",
          "Operational excellence management",
          "Scalable growth strategies"
        ]}
      />

      <ServiceDeliverables 
        title="What We Handle"
        items={[
          "Daily account monitoring",
          "Performance tracking (sales, traffic, conversion)",
          "Inventory coordination",
          "Listing performance analysis",
          "Advertising performance alignment",
          "Issue identification & resolution",
          "Compliance monitoring"
        ]}
      />

      <div id="process">
        <ServiceProcess 
          title="Our Management Roadmap"
          steps={[
            "Account Audit",
            "Strategy Development",
            "Implementation",
            "Monitoring",
            "Scaling"
          ]}
        />
      </div>

      <ServicePricing 
        price="Starting from $500/month"
        subtitle="Scalable solutions for new and established sellers"
      />

      <PortfolioPlaceholder />

      <ServiceFAQ 
        faqs={[
          {
            q: "Do you handle complete account operations?",
            a: "Yes, we manage daily operations, monitoring, and performance optimization."
          },
          {
            q: "Do you work with new sellers?",
            a: "Yes, we support both new and established sellers."
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
