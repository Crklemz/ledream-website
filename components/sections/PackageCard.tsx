"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface Package {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  color: "red" | "blue" | "purple" | "magenta" | "green";
  badge?: string;
}

export interface PackageCardProps {
  /**
   * Package data object
   */
  package: Package;
  /**
   * CTA button text
   * @default "Get Started"
   */
  ctaText?: string;
  /**
   * CTA button href
   */
  ctaHref?: string;
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
 * PackageCard Component
 * 
 * Service package display card (Spark/Spectacle/Legend tiers).
 * Clean layout with clear hierarchy and tier-specific neon color accent.
 * 
 * @example
 * ```tsx
 * <PackageCard 
 *   package={{
 *     name: "Spark",
 *     price: "$2,500",
 *     tagline: "Perfect starter",
 *     features: ["Feature 1", "Feature 2"],
 *     color: "blue",
 *     badge: "Popular"
 *   }}
 *   ctaText="Choose Spark"
 *   ctaHref="/contact"
 * />
 * ```
 */
export function PackageCard({
  package: pkg,
  ctaText = "Get Started",
  ctaHref,
  className,
  onClick,
}: PackageCardProps) {
  const colorClasses = {
    red: {
      border: "border-neon-red",
      shadow: "shadow-neon-red",
      text: "text-neon-red",
      button: "btn-neon-red",
    },
    blue: {
      border: "border-neon-blue",
      shadow: "shadow-neon-blue",
      text: "text-neon-blue",
      button: "btn-neon-outline border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-black",
    },
    purple: {
      border: "border-neon-purple",
      shadow: "shadow-neon-purple",
      text: "text-neon-purple",
      button: "btn-neon-outline border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-dark-black",
    },
    magenta: {
      border: "border-neon-magenta",
      shadow: "shadow-neon-magenta",
      text: "text-neon-magenta",
      button: "btn-neon-outline border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:text-dark-black",
    },
    green: {
      border: "border-neon-green",
      shadow: "shadow-neon-green",
      text: "text-neon-green",
      button: "btn-neon-outline border-neon-green text-neon-green hover:bg-neon-green hover:text-dark-black",
    },
  };

  const colors = colorClasses[pkg.color];

  return (
    <div
      className={cn(
        "bg-dark-brick border-2 rounded-lg p-6 md:p-8",
        "flex flex-col h-full",
        "transition-all duration-normal",
        "hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg",
        colors.border,
        colors.shadow,
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {/* Badge */}
      {pkg.badge && (
        <div className="mb-4 flex justify-end">
          <span
            className={cn(
              "text-xs font-semibold px-3 py-1 rounded-full",
              "bg-dark-navy border border-current",
              colors.text
            )}
          >
            {pkg.badge}
          </span>
        </div>
      )}

      {/* Package Name */}
      <h3
        className={cn(
          "text-h2 font-heading font-black mb-2",
          colors.text
        )}
      >
        {pkg.name}
      </h3>

      {/* Price */}
      <div className="mb-2">
        <span className="text-3xl md:text-4xl font-bold text-neutral-white">
          {pkg.price}
        </span>
      </div>

      {/* Tagline */}
      <p className="text-neutral-white/70 text-sm mb-6">{pkg.tagline}</p>

      {/* Features List */}
      <ul className="flex-1 space-y-3 mb-6">
        {pkg.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check
              className={cn(
                "h-5 w-5 flex-shrink-0 mt-0.5",
                colors.text
              )}
            />
            <span className="text-neutral-white/80 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      {ctaHref ? (
        <Button asChild className={cn("w-full mt-auto", colors.button)}>
          <a href={ctaHref}>{ctaText}</a>
        </Button>
      ) : (
        <Button
          className={cn("w-full mt-auto", colors.button)}
          onClick={onClick}
        >
          {ctaText}
        </Button>
      )}
    </div>
  );
}

