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

export default function Home() {
  return (
    <>
      <Toaster />
      <HeroSection />
      <StatsMarquee />
      <ProblemSolution />
      <ServicesSection />
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
