import type { Metadata } from "next";
import { portfolioMetadata } from "@/content/portfolio";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: portfolioMetadata.title,
  description: portfolioMetadata.description,
  keywords: portfolioMetadata.keywords,
  openGraph: {
    title: portfolioMetadata.title,
    description: portfolioMetadata.description,
    type: "website",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioMetadata.title,
    description: portfolioMetadata.description,
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

