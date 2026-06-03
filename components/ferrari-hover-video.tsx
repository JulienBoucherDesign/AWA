"use client"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"

export function FerrariHoverVideo() {
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
    router.push("/racing/ferrari-hypersail")
  }

  return (
    <div className="relative w-full cursor-pointer" onMouseEnter={handleMouseEnter} onClick={handleClick}>
      {/* Image - visible when video is not playing */}
      <img
        src="/ferrari-cover-black.png"
        alt="Ferrari yacht design"
        className={`w-full h-auto transition-opacity duration-300 ${isPlaying ? "opacity-0" : "opacity-100"}`}
      />
      
      {/* Video - overlayed on top, visible when playing */}
      <video
        ref={videoRef}
        src="/ferrari-flash.mp4"
        muted
        playsInline
        onEnded={handleVideoEnd}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  )
}
