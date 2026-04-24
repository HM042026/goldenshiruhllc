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
  title: "Strategic Amazon Product Launch | Ranking & Sales Velocity | Goldenshiruhllc",
  description: "Enter the market with momentum. Our structured Amazon product launch strategy combines aggressive PPC, expert SEO, and market research to drive early rankings and sales.",
  openGraph: {
    title: "Expert Amazon Product Launch Services | Goldenshiruhllc",
    description: "Architecting successful market entries for new Amazon brands.",
  }
};

export default function NewProductLaunchPage() {
  return (
    <main>
      <ServiceSchema 
        name="Amazon Product Launch Strategy" 
        description="Structured ranking and sales velocity strategies for new product entries on the Amazon marketplace." 
      />
      <HeroSection 
        eyebrow="Launch Service"
        headingLine1="Strategic Amazon"
        headingLine2="Product Launch Services"
        description="Launch your product with a structured plan focused on visibility, ranking, and sales. We ensure your product enters the market with momentum."
        primaryCta={{ label: "Start Your Launch", href: "#contact-form" }}
        secondaryCta={{ label: "View Strategy", href: "#overview" }}
      />
      
      <div id="overview">
        <ServiceOverview 
          title="Market Entry with Impact"
          content="A strong launch determines long-term success. We combine PPC, keywords, and listing optimization into a unified strategy to gain early sales momentum."
        />
      </div>

      <ServiceProblemSolution 
        problemsTitle="Launch Obstacles"
        problems={[
          "Poor launch strategy",
          "Weak keyword targeting",
          "Slow ranking velocity"
        ]}
        solutionsTitle="Our Launch Engine"
        solutions={[
          "Data-backed market research",
          "Aggressive PPC launch plan",
          "Ranking-focused SEO",
          "Performance monitoring"
        ]}
        solutionHeading="Ignite Your Sales Velocity"
      />

      <ServiceDeliverables 
        title="Launch Framework"
        items={[
          "Market research",
          "Keyword strategy",
          "Listing preparation",
          "PPC launch campaigns",
          "Ranking strategy"
        ]}
      />

      <ServiceProcess 
        title="The Launch Sequence"
        steps={[
          "Research",
          "Strategy",
          "Listing Setup",
          "Launch Execution",
          "Optimization"
        ]}
      />

      <ServicePricing 
        price="Starting from $400"
        subtitle="Per product launch project"
      />

      <PortfolioPlaceholder />

      <ServiceFAQ 
        faqs={[
          {
            q: "Do you guarantee ranking?",
            a: "No guarantees, but we follow proven launch frameworks designed to maximize ranking potential."
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
