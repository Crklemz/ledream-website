"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface ScrollButtonProps {
  text: string;
  targetId: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export function ScrollButton({
  text,
  targetId,
  variant = "outline",
  size = "lg",
}: ScrollButtonProps) {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const variantClasses = {
    primary:
      "bg-neon-blue text-dark-black border-neon-blue hover:bg-neon-blue-light hover:shadow-neon-blue font-semibold",
    secondary:
      "bg-transparent text-neon-blue border-2 border-neon-blue hover:bg-neon-blue hover:text-dark-black hover:shadow-neon-blue font-semibold",
    outline:
      "bg-transparent text-neutral-white border-2 border-neutral-white/30 hover:border-neon-blue hover:text-neon-blue hover:shadow-neon-blue font-semibold",
  };

  const sizeClasses = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-12 px-8 text-lg",
  };

  return (
    <Button
      onClick={handleClick}
      className={cn(
        "transition-all duration-normal",
        "hover:scale-105 focus:scale-105",
        "inline-flex items-center gap-2",
        variantClasses[variant],
        sizeClasses[size]
      )}
    >
      {text}
      <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
    </Button>
  );
}

