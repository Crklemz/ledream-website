import type { PageMetadata, OriginStory, TeamMember } from "./types";

/**
 * About Page Content
 * 
 * Content for the about page including welcome message, origin story,
 * philosophy, LED art explanations, why LEDream, and team information.
 */

export const aboutMetadata: PageMetadata = {
  title: "About LEDream - Your LEDream Curator & Guide",
  description:
    "Welcome to LEDream. We're dream-weavers, reality-shifters and experts of psychedelic fantasy. Learn about our origin story, philosophy, and team.",
  keywords: [
    "LED art",
    "LED installation",
    "about LEDream",
    "LED design philosophy",
    "custom LED art",
  ],
};

/**
 * Welcome Message
 */
export const welcomeMessage =
  "Welcome, friend. We greet you with open doors and wonder...";

/**
 * Origin Story
 * LEDream's founding and early milestones
 */
export const originStory: OriginStory[] = [
  {
    year: "Late 2024",
    story:
      "LEDream was born from a desire to transform the ordinary into the extraordinary. Founded with a vision to create immersive, psychedelic fantasy experiences through cutting-edge LED art.",
    highlights: [
      "Founded late 2024",
      "Born from desire to transform ordinary into extraordinary",
      "Hosted two unforgettable shows",
    ],
  },
];

/**
 * Philosophy Section
 */
export const philosophy = {
  title: "Our Philosophy in Motion",
  description:
    "We believe in the power of light to transform spaces and experiences. Every installation is a work of art, a portal to another dimension, and a testament to the limitless possibilities of human creativity.",
};

/**
 * What is LED Art Sections
 */
export const ledArtSections = [
  {
    title: "Technology as Canvas",
    description:
      "We use cutting-edge LED technology as our canvas, pushing the boundaries of what's possible in lighting design and immersive experiences.",
  },
  {
    title: "Art as Portal",
    description:
      "Each installation serves as a portal to another dimension, transforming ordinary spaces into extraordinary realms of psychedelic fantasy.",
  },
  {
    title: "Fantasy as Fuel",
    description:
      "Fantasy fuels our creativity. We don't just install lights—we craft dreams, weave realities, and create unforgettable experiences that leave lasting impressions.",
  },
] as const;

/**
 * Why LEDream Section
 */
export const whyLEDream = [
  {
    title: "Unrivaled Expertise",
    description:
      "Our team brings years of experience in LED art, lighting design, and immersive installations. We combine technical mastery with artistic vision.",
  },
  {
    title: "Unmatched Creativity",
    description:
      "Every project is a unique work of art. We don't follow templates—we create custom experiences tailored to your vision and space.",
  },
  {
    title: "Unparalleled Professionalism",
    description:
      "From initial consultation to final installation and training, we provide complete service with attention to detail and commitment to excellence.",
  },
] as const;

/**
 * Team Member
 */
export const teamMember: TeamMember = {
  name: "Jester Dapper Dan",
  title: "Your LEDream Curator & Guide",
  credentials: "Ph.D.",
  bio:
    "Jester Dapper Dan, Ph.D., is the visionary behind LEDream. With a passion for transforming spaces through light and art, Jester brings together technical expertise and creative genius to craft unforgettable experiences.",
  role: "founder",
};

/**
 * Closing Invitation
 */
export const closingInvitation =
  "Let's build your dream together. Your LEDream transformation begins here.";

