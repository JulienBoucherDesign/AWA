"use client"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"

interface HoverVideoLinkProps {
  imageSrc: string
  videoSrc: string
  href: string
  alt: string
}

export function HoverVideoLink({ imageSrc, videoSrc, href, alt }: HoverVideoLinkProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const router = useRouter()

  const handleMouseEnter = () => {
    if (videoRef.current && !isPlaying) {
      setIsPlaying(true)
      videoRef.current.currentTime = 0
      videoRef.current.play()
    }
  }

  const handleVideoEnd = () => {
    setIsPlaying(false)
  }

  const handleClick = () => {
    router.push(href)
  }

  return (
    <div className="relative w-full cursor-pointer" onMouseEnter={handleMouseEnter} onClick={handleClick}>
      {/* Image - visible when video is not playing */}
      <img
        src={imageSrc}
        alt={alt}
        className={`w-full h-auto transition-opacity duration-300 ${isPlaying ? "opacity-0" : "opacity-100"}`}
      />
      
      {/* Video - overlayed on top, visible when playing */}
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        playsInline
        onEnded={handleVideoEnd}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  )
}
