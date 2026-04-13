"use client";

import HeroSection from "@/components/sections/herosection";
import ManagementBlueprint from "@/components/sections/management-blueprint";
import ServicePillars from "@/components/sections/service-pillars";
import ProcessSection from "@/components/sections/process";
import ContactForm from "@/components/sections/contact-form";
import Footer from "@/components/layout/footer";

export default function AmazonAccountManagementPage() {
  return (
    <main>
      <HeroSection 
        eyebrow="Flagship Solution"
        headingLine1="Full-Spectrum Amazon"
        headingLine2="Account Management"
        description="We take total ownership of your marketplace performance. Our elite account management ecosystem integrates SEO, PPC, and Logistics into a unified scaling engine designed for global dominance."
        primaryCta={{ label: "View Our Blueprint", href: "#blueprint" }}
        secondaryCta={{ label: "Direct Consultation", href: "/contact" }}
      />
      
      <div id="blueprint">
        <ManagementBlueprint />
      </div>

      <div className="bg-gray-50">
        <ServicePillars />
      </div>

      <ProcessSection />

      <div id="contact-form">
        <ContactForm />
      </div>

      <Footer />
    </main>
  );
}
