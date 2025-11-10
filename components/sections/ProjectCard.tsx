"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Project as PortfolioProject } from "@/content/types";

// Legacy interface for backward compatibility
export interface Project {
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt?: string;
  videoUrl?: string;
  href?: string;
}

export interface ProjectCardProps {
  /**
   * Project data object (portfolio or legacy format)
   */
  project: PortfolioProject | Project;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Click handler
   */
  onClick?: () => void;
}

/**
 * ProjectCard Component
 * 
 * Portfolio project display card with image, category badge, and hover effects.
 * 
 * @example
 * ```tsx
 * <ProjectCard 
 *   project={{
 *     title: "Project Name",
 *     description: "Project description",
 *     category: "Residential",
 *     image: "/projects/project1.jpg",
 *     href: "/portfolio/project1"
 *   }}
 * />
 * ```
 */
export function ProjectCard({
  project,
  className,
  onClick,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Check if it's a portfolio project (has images array) or legacy (has image string)
  const isPortfolioProject = "images" in project;
  const imageSrc = isPortfolioProject
    ? project.images[0] || "/placeholder.jpg"
    : project.image;
  const imageAlt = "imageAlt" in project ? project.imageAlt : project.title;
  const categoryDisplay =
    isPortfolioProject && project.category
      ? project.category.charAt(0).toUpperCase() + project.category.slice(1)
      : project.category;

  return (
    <div
      className={cn(
        "group bg-dark-brick rounded-lg overflow-hidden",
        "transition-all duration-normal",
        "hover:scale-[1.02] hover:shadow-lg hover:-translate-y-1",
        onClick && "cursor-pointer",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden bg-dark-navy">
        <Image
          src={imageSrc}
          alt={imageAlt || project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={cn(
            "object-cover transition-all duration-normal",
            isHovered && "brightness-110 scale-105"
          )}
        />
        {/* Neon Frame Overlay - subtle by default, intensifies on hover */}
        <div
          className={cn(
            "absolute inset-0 border-2 border-neon-blue/20 transition-all duration-normal",
            isHovered && "border-neon-blue shadow-neon-blue"
          )}
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-dark-black/80 backdrop-blur-sm text-neon-blue text-xs font-semibold px-3 py-1 rounded-full border border-neon-blue/50">
            {categoryDisplay}
          </span>
        </div>
        {/* View Details Button (appears on hover) */}
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center z-10",
            "bg-dark-black/60 backdrop-blur-sm",
            "transition-opacity duration-normal",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <Button
            variant="outline"
            className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-black"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            View Details
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-h4 text-neutral-white font-heading mb-2">
          {project.title}
        </h3>
        <p className="text-neutral-white/70 text-sm line-clamp-2">
          {project.description}
        </p>
      </div>
    </div>
  );
}

