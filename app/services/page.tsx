import type { Metadata } from "next";
import Script from "next/script";
import { ServicesPageContent } from "@/components/pages/ServicesPageContent";
import { servicesMetadata, packages } from "@/content/services";
import { contactInfo, siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: servicesMetadata.title,
  description: servicesMetadata.description,
  keywords: servicesMetadata.keywords,
  openGraph: {
    title: servicesMetadata.title,
    description: servicesMetadata.description,
    type: "website",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: servicesMetadata.title,
    description: servicesMetadata.description,
  },
};

export default function Services() {
  // Build structured data for services
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "LEDream Custom LED Installations",
    description: servicesMetadata.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      email: contactInfo.email,
      telephone: contactInfo.phone,
    },
    areaServed: "United States",
    serviceType: "LED Installation Services",
    offers: packages.map((pkg) => ({
      "@type": "Offer",
      name: pkg.name,
      description: pkg.description,
      price: pkg.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `https://ledream.com/services#${pkg.id}`,
    })),
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="services-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData),
        }}
      />
      <ServicesPageContent />
    </>
  );
}

