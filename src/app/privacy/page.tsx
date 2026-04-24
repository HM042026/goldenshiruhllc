import { Metadata } from "next";
import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ServiceSchema } from "@/components/seo/schema";

export const metadata: Metadata = {
  title: "Privacy Policy | Goldenshiruhllc Amazon Agency",
  description: "Our privacy policy explains how we protect your data, business information, and Amazon account details while providing elite management services.",
  openGraph: {
    title: "Privacy Policy | Goldenshiruhllc",
    description: "Data protection and transparency policies for Goldenshiruhllc.",
  }
};

const PrivacyPage = () => {
  const points = [
    {
      title: "1. Information We Collect",
      content: "We may collect name, contact details, business information, and Amazon account data (with permission)."
    },
    {
      title: "2. How We Use Information",
      content: "We use data for service delivery, communication, and performance optimization."
    },
    {
      title: "3. Data Protection",
      content: "We implement restricted access, secure systems, and encryption practices."
    },
    {
      title: "4. Data Sharing",
      content: "We do not sell or share your data except when required by law or necessary to deliver services."
    },
    {
      title: "5. Data Retention",
      content: "Data is retained only as long as necessary for service and legal purposes."
    },
    {
      title: "6. Client Responsibility",
      content: "Clients are responsible for protecting their credentials and providing access responsibly."
    },
    {
      title: "7. Third-Party Platforms",
      content: "We are not responsible for the privacy practices of third-party platforms."
    },
    {
      title: "8. Updates",
      content: "This policy may be updated periodically."
    },
    {
      title: "9. Contact",
      content: "Email: contact@yourdomain.com"
    }
  ];

  return (
    <main className="bg-white min-h-screen relative overflow-hidden font-sans flex flex-col">
      <ServiceSchema 
        name="Privacy Policy" 
        description="Data protection and transparency policies for Goldenshiruhllc Amazon Agency." 
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
              Privacy <span className="text-brand">Policy</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed">
              We are committed to protecting your data and ensuring transparency.
            </p>
          </div>

          <div className="grid gap-8 md:gap-12">
            {points.map((item, index) => (
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

export default PrivacyPage;
