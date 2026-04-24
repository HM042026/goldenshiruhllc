import { Metadata } from "next";
import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ServiceSchema } from "@/components/seo/schema";

export const metadata: Metadata = {
  title: "Terms & Conditions | Goldenshiruhllc Amazon Agency",
  description: "Read our terms and conditions. Learn about client responsibilities, payment terms, and our service policies for Amazon account management.",
  openGraph: {
    title: "Terms & Conditions | Goldenshiruhllc",
    description: "Legal terms and service policies for Goldenshiruhllc clients.",
  }
};

const TermsPage = () => {
  const terms = [
    {
      title: "1. Services",
      content: "We provide Amazon-related services including account management, listing optimization, advertising management, content creation, and e-commerce solutions."
    },
    {
      title: "2. Client Responsibilities",
      content: "Clients are responsible for providing accurate information, granting necessary access, and ensuring compliance with Amazon policies."
    },
    {
      title: "3. Payment Terms",
      content: "Payments must be made as agreed. Delays may result in suspension of services."
    },
    {
      title: "4. No Guarantee of Results",
      content: "We do not guarantee specific sales, rankings, or advertising performance due to market and platform variables."
    },
    {
      title: "5. Compliance",
      content: "All services are performed in accordance with Amazon policies. No unethical practices are used."
    },
    {
      title: "6. Limitation of Liability",
      content: "We are not liable for account suspensions, listing removals, or revenue losses caused by external factors."
    },
    {
      title: "7. Confidentiality",
      content: "All client data is treated as confidential and used only for service delivery."
    },
    {
      title: "8. Termination",
      content: "Either party may terminate services with prior notice."
    },
    {
      title: "9. Updates",
      content: "We reserve the right to update these terms at any time."
    }
  ];

  return (
    <main className="bg-white min-h-screen relative overflow-hidden font-sans flex flex-col">
      <ServiceSchema 
        name="Terms & Conditions" 
        description="Legal terms and service policies for Goldenshiruhllc Amazon Agency." 
      />
      <Navbar />
      
      {/* Architectural Grid Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.05] z-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-brand w-full"
            style={{ top: `${10 * (i + 1)}%` }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-brand h-full"
            style={{ left: `${8.33 * (i + 1)}%` }}
          />
        ))}
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand/5 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="flex-grow container mx-auto px-4 pt-40 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 font-heading tracking-tight">
              Terms & <span className="text-brand">Conditions</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed">
              By accessing and using our services, you agree to the following terms and conditions.
            </p>
          </div>

          <div className="grid gap-8 md:gap-12">
            {terms.map((item, index) => (
              <div key={index} className="group">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand transition-colors duration-300">
                  {item.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default TermsPage;
