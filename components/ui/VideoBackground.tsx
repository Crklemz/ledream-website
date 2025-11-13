"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export interface VideoBackgroundProps {
  /**
   * Path to the video file (relative to /public)
   */
  videoSrc: string;
  /**
   * Overlay opacity (0-1)
   * @default 0.6
   */
  overlayOpacity?: number;
  /**
   * Overlay color
   * @default "dark-black"
   */
  overlayColor?: "dark-black" | "dark-navy" | "dark-brick";
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Whether the video should loop
   * @default true
   */
  loop?: boolean;
  /**
   * Whether the video should autoplay
   * @default true
   */
  autoplay?: boolean;
  /**
   * Whether the video should be muted
   * @default true
   */
  muted?: boolean;
}

/**
 * VideoBackground Component
 * 
 * Full-screen video background with semi-transparent overlay for sections.
 * 
 * @example
 * ```tsx
 * <VideoBackground 
 *   videoSrc="/LED Dream - Psych Funhouse Promo.mp4"
 *   overlayOpacity={0.7}
 *   overlayColor="dark-black"
 * />
 * ```
 */
export function VideoBackground({
  videoSrc,
  overlayOpacity = 0.6,
  overlayColor = "dark-black",
  className,
  loop = true,
  autoplay = true,
  muted = true,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Log video source for debugging
    if (process.env.NODE_ENV === "development") {
      console.log("VideoBackground src:", videoSrc);
    }

    // Handle video errors
    const handleError = (e: Event) => {
      console.error("Video error:", e);
      console.error("Video src:", videoSrc);
      console.error("Video error details:", video.error);
    };

    video.addEventListener("error", handleError);

    // Ensure video plays
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.warn("Video autoplay prevented:", error);
      });
    }

    return () => {
      video.removeEventListener("error", handleError);
    };
  }, [videoSrc]);

  const overlayColorClasses = {
    "dark-black": "bg-dark-black",
    "dark-navy": "bg-dark-navy",
    "dark-brick": "bg-dark-brick",
  };

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        loop={loop}
        autoPlay={autoplay}
        muted={muted}
        playsInline
      />
      <div
        className={cn(
          "absolute inset-0",
          overlayColorClasses[overlayColor]
        )}
        style={{ opacity: overlayOpacity }}
      />
    </div>
  );
}

