import type { PageMetadata, Project } from "./types";

/**
 * Portfolio Page Content
 * 
 * Content for the portfolio page including gallery intro and all projects
 * with descriptions, videos, and images.
 */

export const portfolioMetadata: PageMetadata = {
  title: "Portfolio - LEDream Gallery of Transformations",
  description:
    "Visit our gallery of memories & imagine the endless possibilities of your own LEDream transformation journey. See our completed residential, commercial, and event installations.",
  keywords: [
    "LED art portfolio",
    "LED installation gallery",
    "LED transformations",
    "LED project examples",
    "LED installation photos",
  ],
};

/**
 * Gallery Introduction
 */
export const galleryIntro =
  "Visit our gallery of memories & imagine the endless possibilities of your own LEDream transformation journey";

/**
 * All Portfolio Projects
 * Complete list of all projects with full details
 */
export const projects: Project[] = [
  {
    id: "psychedelic-funhouse",
    title: "Psychedelic Funhouse Fantasy",
    description:
      "We transformed an unremarkable living room into an out-of-this-world wonderland that left jaws open and cameras rolling",
    category: "residential",
    videoUrl: "https://youtu.be/Rl8RiOAwhac",
    images: ["/1.JPG", "/2.JPG", "/3.jpg", "/4.JPG"],
    tags: ["residential", "immersive", "psychedelic", "funhouse"],
    featured: true,
    location: "Residential Installation",
  },
  {
    id: "fantasy-jungle-nightclub",
    title: "Fantasy Jungle Nightclub",
    description:
      "We transformed Conga Latin Bistro into a psychedelic canopy of green LEDs, radiant flora & lasting impressions for AfterGlow: Reefer Dreamers",
    category: "commercial",
    videoUrl: "TBD", // Placeholder - video URL to be determined
    images: ["/5.JPG", "/6.JPG", "/7.JPG", "/8.JPG"],
    tags: ["commercial", "nightclub", "jungle", "green", "bistro"],
    featured: true,
    client: "Conga Latin Bistro",
    location: "Event: AfterGlow: Reefer Dreamers",
  },
  {
    id: "halloween-wonderland",
    title: "Halloween Wonderland",
    description:
      "We transformed an ordinary event space into an Alice in Wonderland meets Halloween psychedelic magnum opus",
    category: "event",
    videoUrl: "TBD", // Placeholder - video URL to be determined
    images: ["/9.JPG", "/10.JPG", "/11.JPG", "/12.jpg", "/13.jpg"],
    tags: ["event", "halloween", "wonderland", "themed", "alice"],
    featured: true,
    location: "Event Space",
  },
];

/**
 * Featured Projects Only
 * Filtered list of featured projects for homepage or featured sections
 */
export const featuredPortfolioProjects = projects.filter((project) => project.featured);

