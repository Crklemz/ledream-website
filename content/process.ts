import type { PageMetadata, ProcessStep } from "./types";

/**
 * Process Page Content
 * 
 * Content for the process page including journey intro and all process steps
 * with descriptions and icons.
 */

export const processMetadata: PageMetadata = {
  title: "Our Process - LEDream Transformation Journey",
  description:
    "Each LEDream journey is unique. Our pros will guide you at each stage of your exciting transformation from vision to reality.",
  keywords: [
    "LED installation process",
    "LED design process",
    "LED consultation",
    "LED installation steps",
  ],
};

/**
 * Journey Introduction
 */
export const journeyIntro =
  "Each LEDream journey is unique. Our pros will guide you at each stage of your exciting transformation.";

/**
 * Process Steps
 * The three main steps in the LEDream transformation process
 */
export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Vision-Crafting Consultation",
    description:
      "We'll begin by formulating your vision, surveying your space & sculpting a proposal that balances creativity with your budget.",
    icon: "consultation",
  },
  {
    step: 2,
    title: "Full-Scale Installation",
    description:
      "Our team of artisans & technicians will transform your space on your preferred schedule & availability.",
    icon: "installation",
  },
  {
    step: 3,
    title: "Seamless Integration & Training",
    description:
      "We will empower your team with expert training for effortless control, automation & synchronization of your fantasy environment.",
    icon: "training",
  },
];

