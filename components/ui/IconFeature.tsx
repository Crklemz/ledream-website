"use client";

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type IconAlignment = "left" | "center";

export interface IconFeatureProps {
  /**
   * Icon component (from lucide-react)
   */
  icon: LucideIcon;
  /**
   * Feature title
   */
  title: string;
  /**
   * Feature description
   */
  description: string;
  /**
   * Icon alignment
   * @default "center"
   */
  alignment?: IconAlignment;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * IconFeature Component
 * 
 * Feature display with icon, title, and description.
 * Used in "Why Choose Us" type sections.
 * 
 * @example
 * ```tsx
 * <IconFeature 
 *   icon={Sparkles}
 *   title="Custom Design"
 *   description="Tailored to your vision"
 *   alignment="center"
 * />
 * ```
 */
export function IconFeature({
  icon: Icon,
  title,
  description,
  alignment = "center",
  className,
}: IconFeatureProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        alignment === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          "mb-4 p-4 rounded-lg",
          "bg-dark-navy border border-neon-blue/30",
          "transition-all duration-normal",
          "hover:border-neon-blue hover:shadow-neon-blue",
          alignment === "center" ? "mx-auto" : ""
        )}
      >
        <Icon className="h-8 w-8 text-neon-blue" />
      </div>

      {/* Title */}
      <h3 className="text-h4 text-neutral-white font-heading mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-neutral-white/70 text-sm leading-relaxed max-w-md">
        {description}
      </p>
    </div>
  );
}

