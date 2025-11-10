import { cn } from "@/lib/utils";

export type SectionVariant = "dark" | "darker" | "gradient";

export interface SectionContainerProps {
  /**
   * Background variant
   * @default "dark"
   */
  variant?: SectionVariant;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Child content
   */
  children: React.ReactNode;
  /**
   * Show decorative divider at top
   * @default false
   */
  divider?: boolean;
  /**
   * Custom padding override
   */
  padding?: string;
}

/**
 * SectionContainer Component
 * 
 * Reusable section wrapper for consistent spacing and styling.
 * 
 * @example
 * ```tsx
 * <SectionContainer variant="dark" divider>
 *   <h2>Section Title</h2>
 *   <p>Section content</p>
 * </SectionContainer>
 * ```
 */
export function SectionContainer({
  variant = "dark",
  className,
  children,
  divider = false,
  padding,
}: SectionContainerProps) {
  const variantClasses = {
    dark: "bg-dark-black",
    darker: "bg-dark-navy",
    gradient: "bg-gradient-dark-brick",
  };

  const defaultPadding = "py-16 md:py-24 lg:py-32";

  return (
    <section
      className={cn(
        variantClasses[variant],
        padding || defaultPadding,
        className
      )}
    >
      {divider && (
        <div className="h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent mb-16 md:mb-24" />
      )}
      <div className="container-standard">{children}</div>
    </section>
  );
}

