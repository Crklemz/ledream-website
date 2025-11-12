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
  {
    id: "image-6",
    title: "LED Installation #6",
    description: "A stunning LED transformation showcasing our artistic vision",
    category: "commercial",
    images: ["/6.JPG"],
    tags: ["commercial", "led", "installation"],
    featured: false,
  },
  {
    id: "image-7",
    title: "LED Installation #7",
    description: "A stunning LED transformation showcasing our artistic vision",
    category: "commercial",
    images: ["/7.JPG"],
    tags: ["commercial", "led", "installation"],
    featured: false,
  },
  {
    id: "image-8",
    title: "LED Installation #8",
    description: "A stunning LED transformation showcasing our artistic vision",
    category: "commercial",
    images: ["/8.JPG"],
    tags: ["commercial", "led", "installation"],
    featured: false,
  },
  {
    id: "image-9",
    title: "LED Installation #9",
    description: "A stunning LED transformation showcasing our artistic vision",
    category: "event",
    images: ["/9.JPG"],
    tags: ["event", "led", "installation"],
    featured: false,
  },
  {
    id: "image-10",
    title: "LED Installation #10",
    description: "A stunning LED transformation showcasing our artistic vision",
    category: "event",
    images: ["/10.JPG"],
    tags: ["event", "led", "installation"],
    featured: false,
  },
  {
    id: "image-11",
    title: "LED Installation #11",
    description: "A stunning LED transformation showcasing our artistic vision",
    category: "event",
    images: ["/11.JPG"],
    tags: ["event", "led", "installation"],
    featured: false,
  },
  {
    id: "image-12",
    title: "LED Installation #12",
    description: "A stunning LED transformation showcasing our artistic vision",
    category: "event",
    images: ["/12.jpg"],
    tags: ["event", "led", "installation"],
    featured: false,
  },
  {
    id: "image-13",
    title: "LED Installation #13",
    description: "A stunning LED transformation showcasing our artistic vision",
    category: "event",
    images: ["/13.jpg"],
    tags: ["event", "led", "installation"],
    featured: false,
  },
];

/**
 * Featured Projects Only
 * Filtered list of featured projects for homepage or featured sections
 */
export const featuredPortfolioProjects = projects.filter((project) => project.featured);

