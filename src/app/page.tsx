import { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import HeroSection from "@/components/sections/herosection";
import { StatsMarquee } from "@/components/sections/stats-marquee";
import ProblemSolution from "@/components/sections/problem-solution";
import ServicesSection from "@/components/sections/services";
import StatsSection from "@/components/sections/stats";
import WhyUsSection from "@/components/sections/whyus";
import ProcessSection from "@/components/sections/process";
import TestimonialsSection from "@/components/sections/testimonials";
import ContactForm from "@/components/sections/contact-form";
import CtaSection from "@/components/sections/cta";
import Footer from "@/components/layout/footer";
import { AmazonPortfolio } from "@/components/sections/amazon-portfolio";
import { ServiceSchema } from "@/components/seo/schema";

export const metadata: Metadata = {
  title: "Goldenshiruhllc | Elite Amazon Account Management Agency",
  description:
    "Architecting Amazon category dominance through data-backed PPC scaling, listing optimization, and elite FBA operations. Partner with the masters of marketplace growth.",
  openGraph: {
    title: "Goldenshiruhllc | Elite Amazon Growth Partners",
    description:
      "Scale your brand beyond the revenue ceiling with our data-driven Amazon management solutions.",
  },
};

export default function Home() {
  return (
    <>
      <ServiceSchema
        name="Amazon Marketplace Scaling"
        description="Elite account management and growth strategies for Amazon brands."
      />
      <Toaster />
      <HeroSection />
      <StatsMarquee />
      <ProblemSolution />
      <ServicesSection />
      <AmazonPortfolio />
      <StatsSection />
      <WhyUsSection />
      <ProcessSection />
      <TestimonialsSection />

      <ContactForm />
      <CtaSection />
      <Footer />
    </>
  );
}
