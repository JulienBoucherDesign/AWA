"use client"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"

interface HoverVideoLinkProps {
  imageSrc: string
  videoSrc: string
  videoSrcWebm?: string
  href: string
  alt: string
}

export function HoverVideoLink({ imageSrc, videoSrc, videoSrcWebm, href, alt }: HoverVideoLinkProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const router = useRouter()

  const handleMouseEnter = () => {
    if (videoRef.current && !isPlaying) {
      setIsPlaying(true)
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {
        // Video play failed (e.g., user hasn't interacted yet), reset state
        setIsPlaying(false)
      })
    }
  }

  const handleVideoEnd = () => {
    setIsPlaying(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (videoRef.current && !isPlaying) {
      setIsPlaying(true)
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {
        setIsPlaying(false)
      })
    }
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    // Only navigate if the video has finished or hasn't started
    if (!isPlaying) {
      router.push(href)
    }
  }

  const handleClick = (e: React.MouseEvent) => {
    // Only handle click on desktop (non-touch)
    if (!(e.nativeEvent as any).sourceCapabilities?.firesTouchEvents) {
      router.push(href)
    }
  }

  return (
    <div
      className="relative w-full cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Image - visible when video is not playing */}
      <img
        src={imageSrc}
        alt={alt}
        className={`w-full h-auto transition-opacity duration-300 ${isPlaying ? "opacity-0" : "opacity-100"}`}
      />
      
      {/* Video - overlayed on top, visible when playing */}
      <video
        ref={videoRef}
        muted
        playsInline
        onEnded={handleVideoEnd}
        onError={() => setIsPlaying(false)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? "opacity-100" : "opacity-0"}`}
      >
        {videoSrcWebm && <source src={videoSrcWebm} type="video/webm" />}
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  )
}
