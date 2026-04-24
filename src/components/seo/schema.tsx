import React from "react";

export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Goldenshiruhllc",
    "url": "https://goldenshiruhllc.com",
    "logo": "https://goldenshiruhllc.com/images/logo.png",
    "description": "Elite Amazon Account Management Agency specializing in PPC, SEO, and full-scale operational growth.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1 213-816-2229",
      "contactType": "customer service",
      "email": "support@goldenshiruhllc.com"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const ServiceSchema = ({ name, description }: { name: string; description: string }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": name,
    "provider": {
      "@type": "Organization",
      "name": "Goldenshiruhllc"
    },
    "description": description
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
