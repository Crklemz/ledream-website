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
    id: "image-1",
    title: "LED Installation #1",
    description: "A stunning LED transformation showcasing our artistic vision",
    category: "residential",
    images: ["/1.JPG"],
    tags: ["residential", "led", "installation"],
    featured: false,
  },
  {
    id: "image-2",
    title: "LED Installation #2",
    description: "A stunning LED transformation showcasing our artistic vision",
    category: "residential",
    images: ["/2.JPG"],
    tags: ["residential", "led", "installation"],
    featured: false,
  },
  {
    id: "image-3",
    title: "LED Installation #3",
    description: "A stunning LED transformation showcasing our artistic vision",
    category: "residential",
    images: ["/3.jpg"],
    tags: ["residential", "led", "installation"],
    featured: false,
  },
  {
    id: "image-4",
    title: "LED Installation #4",
    description: "A stunning LED transformation showcasing our artistic vision",
    category: "residential",
    images: ["/4.JPG"],
    tags: ["residential", "led", "installation"],
    featured: false,
  },
  {
    id: "image-5",
    title: "LED Installation #5",
    description: "A stunning LED transformation showcasing our artistic vision",
    category: "commercial",
    images: ["/5.JPG"],
    tags: ["commercial", "led", "installation"],
    featured: false,
  },
];

/**
 * Featured Projects Only
 * Filtered list of featured projects for homepage or featured sections
 */
export const featuredPortfolioProjects = projects.filter((project) => project.featured);

