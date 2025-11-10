"use client";

import { cn } from "@/lib/utils";

export type GradientSpeed = "slow" | "medium" | "fast";

export interface GradientBackgroundProps {
  /**
   * Array of neon colors for gradient
   * @default ["red", "blue", "purple", "magenta"]
   */
  colors?: string[];
  /**
   * Animation speed
   * @default "medium"
   */
  speed?: GradientSpeed;
  /**
   * Add brick texture overlay
   * @default false
   */
  overlay?: boolean;
  /**
   * Add dark overlay for readability
   * @default false
   */
  darkOverlay?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Child content
   */
  children?: React.ReactNode;
}

const defaultColors = ["#FF3D00", "#00F0FF", "#BF00FF", "#FF10F0"];

/**
 * GradientBackground Component
 * 
 * Animated gradient background with optional brick texture overlay.
 * Covers full section or hero area.
 * 
 * @example
 * ```tsx
 * <GradientBackground 
 *   colors={["#FF3D00", "#00F0FF"]} 
 *   speed="slow" 
 *   overlay 
 * >
 *   <h1>Hero Content</h1>
 * </GradientBackground>
 * ```
 */
export function GradientBackground({
  colors = defaultColors,
  speed = "medium",
  overlay = false,
  darkOverlay = false,
  className,
  children,
}: GradientBackgroundProps) {
  const speedClasses = {
    slow: "animate-[gradient-shift_5s_ease_infinite]",
    medium: "animate-[gradient-shift_3s_ease_infinite]",
    fast: "animate-[gradient-shift_2s_ease_infinite]",
  };

  const gradientString = colors.join(", ");

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        overlay && "bg-brick-wall",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0",
          speedClasses[speed],
          "bg-[length:200%_200%]"
        )}
        style={{
          backgroundImage: `linear-gradient(135deg, ${gradientString})`,
        }}
      />
      {darkOverlay && (
        <div className="absolute inset-0 bg-dark-black/40 z-[1]" />
      )}
      {children && (
        <div className="relative z-10">{children}</div>
      )}
    </div>
  );
}

