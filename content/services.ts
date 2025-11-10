import type { PageMetadata, Package } from "./types";

/**
 * Services Page Content
 * 
 * Content for the services page including page intro and all service packages
 * (Spark, Spectacle, Legend) with features and pricing.
 */

export const servicesMetadata: PageMetadata = {
  title: "Services - LEDream Custom LED Installations",
  description:
    "Are you ready to begin crafting magic? We offer custom-tailored LED installation experiences. Choose from The Spark, The Spectacle, or The Legend packages.",
  keywords: [
    "LED installation services",
    "custom LED art",
    "LED packages",
    "immersive lighting",
    "LED design services",
  ],
};

/**
 * Page Introduction
 */
export const pageIntro =
  "Are you ready to begin crafting magic? We offer custom-tailored experiences designed to transform your space into a living art masterpiece.";

/**
 * Service Packages
 * All three service tiers with complete details
 */
export const packages: Package[] = [
  {
    id: "spark",
    name: "The Spark",
    price: 5000,
    priceDisplay: "$5,000+",
    tagline: "Ideal for intimate gatherings & boutique spaces to shine & surprise",
    description:
      "Perfect for those looking to add a touch of magic to smaller spaces. The Spark package includes immersive LED installations that transform key focal points into stunning visual experiences.",
    features: [
      "Immersive LED installation of key focal points",
      "Color-mapped lighting scenes",
      "1-2 signature pieces",
      "Hands-on training",
    ],
    tierColor: "blue",
    badge: "Starter",
  },
  {
    id: "spectacle",
    name: "The Spectacle",
    price: 10000,
    priceDisplay: "$10,000+",
    tagline: "For galas, ceremonies & larger spaces to enchant & enrapture",
    description:
      "Designed for larger events and spaces that demand a complete transformation. The Spectacle package creates an immersive environment that captivates and amazes.",
    features: [
      "Everything in Spark, plus:",
      "Full-room transformation",
      "3-4 signature pieces",
      "Complete synchronization & training",
    ],
    tierColor: "purple",
    badge: "Popular",
  },
  {
    id: "legend",
    name: "The Legend",
    price: 15000,
    priceDisplay: "$15,000+",
    tagline: "For venues & clients who wish to become unforgettable",
    description:
      "The ultimate LEDream experience. The Legend package creates a multi-room immersive fantasy that becomes the talk of the town. Perfect for venues and clients who want to make a lasting impression.",
    features: [
      "Everything in Spectacle, plus:",
      "Multi-room transformation",
      "Ultimate immersive fantasy",
      "Dedicated creative team",
      "Ongoing service & maintenance",
    ],
    tierColor: "magenta",
    badge: "Premium",
  },
];

