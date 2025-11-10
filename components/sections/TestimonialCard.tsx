"use client";

import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TestimonialCardProps {
  /**
   * Testimonial quote text
   */
  quote: string;
  /**
   * Client name
   */
  client: string;
  /**
   * Project name
   */
  project?: string;
  /**
   * Star rating (1-5)
   */
  rating?: number;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * TestimonialCard Component
 * 
 * Client testimonial display card with quote, client info, and optional rating.
 * Clean, professional styling inspired by LED Strip Studio.
 * 
 * @example
 * ```tsx
 * <TestimonialCard 
 *   quote="Amazing work!"
 *   client="John Doe"
 *   project="Residential Installation"
 *   rating={5}
 * />
 * ```
 */
export function TestimonialCard({
  quote,
  client,
  project,
  rating,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "bg-dark-brick border border-dark-navy rounded-lg p-6 md:p-8",
        "relative",
        className
      )}
    >
      {/* Decorative Quote Mark */}
      <Quote className="absolute top-6 left-6 h-12 w-12 text-neon-blue/20" />

      {/* Quote Text */}
      <p className="text-neutral-white text-base md:text-lg leading-relaxed mb-6 relative z-10 pl-8">
        {quote}
      </p>

      {/* Rating */}
      {rating && (
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={cn(
                "text-lg",
                i < rating ? "text-neon-blue" : "text-neutral-white/20"
              )}
            >
              ★
            </span>
          ))}
        </div>
      )}

      {/* Client Info */}
      <div className="border-t border-dark-navy pt-4">
        <p className="text-neutral-white font-semibold">{client}</p>
        {project && (
          <p className="text-neutral-white/60 text-sm">{project}</p>
        )}
      </div>
    </div>
  );
}

