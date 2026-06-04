"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"

interface HoverVideoLinkProps {
  imageSrc: string
  videoSrc?: string
  videoSrcWebm?: string
  href: string
  alt: string
}

export function HoverVideoLink({ imageSrc, videoSrc, videoSrcWebm, href, alt }: HoverVideoLinkProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const router = useRouter()
  const touchStartTime = useRef<number>(0)
  const longPressTimer = useRef<NodeJS.Timeout | null>(null)
  const isTouching = useRef<boolean>(false)
  const longPressThreshold = 400 // ms - time before video starts playing

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

  const startVideo = () => {
    if (videoRef.current && !isPlaying && isTouching.current) {
      setIsPlaying(true)
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {
        setIsPlaying(false)
      })
    }
  }

  const handleTouchStart = () => {
    touchStartTime.current = Date.now()
    isTouching.current = true
    
    // Clear any existing timer
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current)
    }
    
    // Start video after threshold, regardless of scroll
    longPressTimer.current = setTimeout(() => {
      startVideo()
    }, longPressThreshold)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchDuration = Date.now() - touchStartTime.current
    isTouching.current = false
    
    // Clear the timer
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current)
      longPressTimer.current = null
    }
    
    // If it was a quick tap (not a long press and video not playing), navigate
    if (touchDuration < longPressThreshold && !isPlaying) {
      e.preventDefault()
      router.push(href)
    } else {
      // Long press ended - stop video and show image
      if (videoRef.current) {
        videoRef.current.pause()
      }
      setIsPlaying(false)
    }
  }

  const handleTouchCancel = () => {
    isTouching.current = false
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current)
      longPressTimer.current = null
    }
    if (videoRef.current) {
      videoRef.current.pause()
    }
    setIsPlaying(false)
  }

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (longPressTimer.current) {
        clearTimeout(longPressTimer.current)
      }
    }
  }, [])

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
      onTouchCancel={handleTouchCancel}
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
        preload="auto"
        onEnded={handleVideoEnd}
        onError={() => setIsPlaying(false)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? "opacity-100" : "opacity-0"}`}
      >
        {videoSrcWebm && <source src={videoSrcWebm} type="video/webm" />}
        {videoSrc && <source src={videoSrc} type="video/mp4" />}
      </video>
    </div>
  )
}
