"use client";

import HeroSection from "@/components/sections/herosection";
import ContactForm from "@/components/sections/contact-form";
import SupportGrid from "@/components/sections/supportgrid";
import Footer from "@/components/layout/footer";

export default function ContactPage() {
  return (
    <main>
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
