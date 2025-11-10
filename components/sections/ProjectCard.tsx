"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
   * Project data object
   */
  project: Project;
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

  return (
    <div
      className={cn(
        "group bg-dark-brick rounded-lg overflow-hidden",
        "transition-all duration-normal",
        "hover:scale-[1.02] hover:shadow-lg",
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
          src={project.image}
          alt={project.imageAlt || project.title}
          fill
          className={cn(
            "object-cover transition-all duration-normal",
            isHovered && "brightness-110 scale-105"
          )}
        />
        {/* Neon Frame Overlay on Hover */}
        <div
          className={cn(
            "absolute inset-0 border-2 border-transparent transition-all duration-normal",
            isHovered && "border-neon-blue shadow-neon-blue"
          )}
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-dark-black/80 backdrop-blur-sm text-neon-blue text-xs font-semibold px-3 py-1 rounded-full border border-neon-blue/50">
            {project.category}
          </span>
        </div>
        {/* View Details Button (appears on hover) */}
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center",
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

