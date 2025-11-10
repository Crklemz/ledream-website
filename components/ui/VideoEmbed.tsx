"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

export interface VideoEmbedProps {
  /**
   * YouTube video URL or ID
   */
  videoUrl: string;
  /**
   * Video title for accessibility
   */
  title?: string;
  /**
   * Thumbnail image URL (optional, will use YouTube thumbnail if not provided)
   */
  thumbnail?: string;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Enable lazy loading
   * @default true
   */
  lazy?: boolean;
}

/**
 * VideoEmbed Component
 * 
 * YouTube video embed wrapper with responsive 16:9 aspect ratio and neon border.
 * 
 * @example
 * ```tsx
 * <VideoEmbed 
 *   videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
 *   title="Project Video"
 *   lazy
 * />
 * ```
 */
export function VideoEmbed({
  videoUrl,
  title = "Video",
  thumbnail,
  className,
  lazy = true,
}: VideoEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(!isLoaded);

  // Extract YouTube video ID from URL
  const getYouTubeId = (url: string): string | null => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeId(videoUrl);
  const embedUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}`
    : null;
  const thumbnailUrl =
    thumbnail || (videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null);

  if (!embedUrl) {
    return (
      <div
        className={cn(
          "aspect-video bg-dark-navy rounded-lg border-2 border-dark-brick",
          "flex items-center justify-center",
          className
        )}
      >
        <p className="text-neutral-white/60 text-sm">Invalid video URL</p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative aspect-video rounded-lg overflow-hidden",
        "border-2 border-neon-blue/30 shadow-neon-blue/20",
        "transition-all duration-normal hover:border-neon-blue hover:shadow-neon-blue",
        className
      )}
    >
      {showPlaceholder && thumbnailUrl ? (
        <div
          className="absolute inset-0 cursor-pointer"
          onClick={() => {
            setIsLoaded(true);
            setShowPlaceholder(false);
          }}
        >
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-dark-black/40 hover:bg-dark-black/20 transition-colors">
            <div className="bg-neon-blue/80 rounded-full p-4 hover:bg-neon-blue transition-colors">
              <Play className="h-12 w-12 text-dark-black fill-current" />
            </div>
          </div>
        </div>
      ) : (
        <iframe
          src={`${embedUrl}${lazy && !isLoaded ? "" : "?autoplay=1"}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          loading={lazy ? "lazy" : "eager"}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
}

