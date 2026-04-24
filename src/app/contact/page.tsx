import { Metadata } from "next";
import HeroSection from "@/components/sections/herosection";
import ContactForm from "@/components/sections/contact-form";
import SupportGrid from "@/components/sections/supportgrid";
import Footer from "@/components/layout/footer";
import { ServiceSchema } from "@/components/seo/schema";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Amazon Account Audit | Goldenshiruhllc",
  description: "Request a free Amazon account audit. Connect with our expert team to discuss PPC management, listing optimization, and scaling your brand to the next level.",
  openGraph: {
    title: "Contact Goldenshiruhllc | Expert Amazon Consulting",
    description: "Start your journey to Amazon category dominance today.",
  }
};

export default function ContactPage() {
  return (
    <main>
      <ServiceSchema 
        name="Amazon Account Consultation" 
        description="Free audits and strategic planning for Amazon brand owners." 
      />
      <HeroSection 
        eyebrow="Connect with the Experts"
        headingLine1="Architecting Your"
        headingLine2="Amazon Future"
        description="Ready to scale beyond the revenue ceiling? Let's discuss your marketplace strategy, PPC performance, and international expansion goals."
        primaryCta={{ label: "Fill the Growth Form", href: "#contact-form" }}
        secondaryCta={{ label: "Browse Services", href: "/services" }}
      />
      <div id="contact-form">
        <ContactForm />
      </div>
      <SupportGrid />
      <Footer />
    </main>
  );
}
