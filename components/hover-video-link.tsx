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
  const touchStartTime = useRef<number>(0)
  const isLongPress = useRef<boolean>(false)
  const longPressThreshold = 200 // ms - anything longer than this is a long press

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
    touchStartTime.current = Date.now()
    isLongPress.current = false
    
    // Start video after a short delay to detect long press
    setTimeout(() => {
      if (touchStartTime.current > 0) {
        isLongPress.current = true
        if (videoRef.current && !isPlaying) {
          setIsPlaying(true)
          videoRef.current.currentTime = 0
          videoRef.current.play().catch(() => {
            setIsPlaying(false)
          })
        }
      }
    }, longPressThreshold)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchDuration = Date.now() - touchStartTime.current
    touchStartTime.current = 0
    
    // If it was a quick tap (not a long press), navigate
    if (touchDuration < longPressThreshold && !isLongPress.current) {
      e.preventDefault()
      router.push(href)
    } else {
      // Long press ended - stop video and show image
      if (videoRef.current) {
        videoRef.current.pause()
      }
      setIsPlaying(false)
    }
    isLongPress.current = false
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
