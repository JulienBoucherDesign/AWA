'use client'

import { useState, useEffect, useCallback } from 'react'

interface PreloaderProps {
  onLoadComplete: () => void
}

// List of all videos to preload
const VIDEOS_TO_PRELOAD = [
  '/awa-video.webm',
  '/awa-video.mp4',
  '/gitana-flash.mp4',
  '/ferrari-flash.mp4',
  '/ferrari-flash.webm',
  '/trecento-flash.mp4',
  '/alibi-flash.mp4',
  '/72-skimming-flash.webm',
]

export function Preloader({ onLoadComplete }: PreloaderProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [showBlinkingDot, setShowBlinkingDot] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const [videosLoaded, setVideosLoaded] = useState(false)
  const [minTimeElapsed, setMinTimeElapsed] = useState(false)

  const part1 = 'Same wind'
  const part2 = ', unequal future.'
  const part3 = '\nUnlock apparent wind.'
  const fullText = part1 + part2 + part3

  // Pause points: after part1, after part1+part2
  const pauseAfterPart1 = part1.length
  const pauseAfterPart2 = part1.length + part2.length

  // Minimum 5 seconds duration
  useEffect(() => {
    const minDuration = setTimeout(() => {
      setMinTimeElapsed(true)
    }, 5000)

    return () => clearTimeout(minDuration)
  }, [])

  // Preload all videos using fetch for better mobile support
  useEffect(() => {
    let isMounted = true
    
    const preloadVideos = async () => {
      const preloadPromises = VIDEOS_TO_PRELOAD.map(async (src) => {
        try {
          // Use fetch to actually download the video data
          const response = await fetch(src, { 
            method: 'GET',
            cache: 'force-cache'
          })
          
          if (response.ok) {
            // Read the response to ensure it's fully downloaded
            await response.blob()
            console.log('[v0] Preloaded:', src)
          }
        } catch (error) {
          console.log('[v0] Failed to preload:', src, error)
          // Continue even if one video fails
        }
      })

      // Wait for all videos to preload (or fail)
      await Promise.allSettled(preloadPromises)
      
      if (isMounted) {
        console.log('[v0] All videos preloaded')
        setVideosLoaded(true)
      }
    }

    preloadVideos()

    // Fallback timeout in case videos take too long
    const timeout = setTimeout(() => {
      if (isMounted && !videosLoaded) {
        console.log('[v0] Preload timeout reached')
        setVideosLoaded(true)
      }
    }, 15000) // 15 second max wait

    return () => {
      isMounted = false
      clearTimeout(timeout)
    }
  }, [])

  // Typewriter animation with syncope pauses
  useEffect(() => {
    let currentIndex = 0
    let isPaused = false
    
    const typeNextChar = () => {
      if (currentIndex < fullText.length) {
        // Check for pause points
        if ((currentIndex === pauseAfterPart1 || currentIndex === pauseAfterPart2) && !isPaused) {
          isPaused = true
          setTimeout(() => {
            isPaused = false
            currentIndex++
            setDisplayedText(fullText.substring(0, currentIndex))
            typeNextChar()
          }, 500) // 0.5 second pause
          return
        }
        
        currentIndex++
        setDisplayedText(fullText.substring(0, currentIndex))
        
        // Random typing speed for natural effect
        const speed = 50 + Math.random() * 30
        setTimeout(typeNextChar, speed)
      } else {
        setIsTypingComplete(true)
        setShowBlinkingDot(true)
      }
    }

    // Start typing after a small delay
    const startDelay = setTimeout(typeNextChar, 300)
    
    return () => clearTimeout(startDelay)
  }, [fullText, pauseAfterPart1, pauseAfterPart2])

  // Handle exit animation when videos are loaded, typing is complete, AND minimum time has elapsed
  useEffect(() => {
    if (videosLoaded && isTypingComplete && minTimeElapsed) {
      // Small delay before starting exit animation
      const exitDelay = setTimeout(() => {
        setIsExiting(true)
        // Wait for exit animation to complete
        setTimeout(onLoadComplete, 800)
      }, 500)
      
      return () => clearTimeout(exitDelay)
    }
  }, [videosLoaded, isTypingComplete, minTimeElapsed, onLoadComplete])

  // Render text with blinking dot
  const renderText = useCallback(() => {
    if (!showBlinkingDot) {
      return displayedText
    }
    
    // Remove the last dot and add a blinking one
    const textWithoutLastDot = displayedText.slice(0, -1)
    return (
      <>
        {textWithoutLastDot}
        <span className="animate-blink">.</span>
      </>
    )
  }, [displayedText, showBlinkingDot])

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#f9f9f9] flex items-start justify-start transition-transform duration-700 ease-in-out ${
        isExiting ? 'translate-x-full' : 'translate-x-0'
      }`}
    >
      <div 
        className="preloader-text"
        style={{
          paddingTop: 'calc(3 * var(--awa-row, 24px))',
          paddingLeft: 'calc(3 * (100vw / 42))',
        }}
      >
        <pre 
          className="text-[#3f3f3f] text-sm md:text-base whitespace-pre-wrap"
          style={{
            fontFamily: '"Source Code Pro Variable", monospace',
            fontVariationSettings: "'wght' 500",
          }}
        >
          {renderText()}
        </pre>
      </div>
    </div>
  )
}
