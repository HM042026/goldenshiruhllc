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
  title: "Amazon Listing Optimization | SEO & Copywriting Experts | Goldenshiruhllc",
  description: "Rank higher and convert more. We combine elite Amazon SEO with conversion-focused copywriting to turn product browsers into buyers.",
  openGraph: {
    title: "Amazon SEO & Listing Optimization | Goldenshiruhllc",
    description: "Data-backed keyword research and copywriting for Amazon dominance.",
  }
};

export default function ListingOptimizationPage() {
  return (
    <main>
      <ServiceSchema 
        name="Amazon Listing Optimization" 
        description="SEO-optimized copywriting and keyword mapping for Amazon product listings." 
      />
      <HeroSection 
        eyebrow="Conversion Service"
        headingLine1="Amazon Listing"
        headingLine2="Optimization Expert"
        description="We optimize your product listings to improve visibility, attract the right audience, and increase conversion rates."
        primaryCta={{ label: "Optimize Your Listings", href: "#contact-form" }}
        secondaryCta={{ label: "View Benefits", href: "#overview" }}
      />
      
      <div id="overview">
        <ServiceOverview 
          title="Rank Higher, Sell More"
          content="Your listing is your sales page. Even with traffic, poor listing structure leads to low conversions. We ensure your listings are both search-optimized and conversion-focused."
        />
      </div>

      <ServiceProblemSolution 
        problemsTitle="Conversion Killers"
        problems={[
          "Low conversion rate",
          "Poor keyword placement",
          "Weak titles and bullet points",
          "Unstructured product descriptions"
        ]}
        solutionsTitle="The Solution"
        solutions={[
          "Keyword research & mapping",
          "Conversion psychology copywriting",
          "SEO-driven structure",
          "Competitive benchmarking"
        ]}
        solutionHeading="Convert Traffic into Sales"
      />

      <ServiceDeliverables 
        title="Full Listing Optimization"
        items={[
          "Keyword research and mapping",
          "Title optimization",
          "Bullet point rewriting",
          "Product description enhancement",
          "Backend keyword optimization",
          "SEO structure improvement"
        ]}
      />

      <ServiceProcess 
        title="Our Optimization Process"
        steps={[
          "Keyword Research",
          "Competitor Analysis",
          "Content Optimization",
          "Implementation",
          "Performance Tracking"
        ]}
      />

      <ServicePricing 
        price="Starting from $100"
        subtitle="Per individual product listing"
      />

      <PortfolioPlaceholder />

      <ServiceFAQ 
        faqs={[
          {
            q: "Do you guarantee ranking?",
            a: "We follow proven strategies, but ranking depends on competition and market conditions."
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
