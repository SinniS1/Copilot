import React, { useEffect, useState } from 'react'
import './Section3.scss'
import { useRef } from 'react'

const Section3 = () => {
  const videoRef = useRef(null)
  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.playbackRate = 1
          videoRef.current.play()
        } else {
          videoRef.current.pause()
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    )
    observer1.observe(videoRef.current)
    return () => {
      observer1.unobserve(videoRef.current)
    }
  }, [])

  return (
    <div className="Section3">
      <div className="content">
        <p className="tagLine">
          Trained on billions of lines of code, GitHub Copilot turns natural
          language prompts into coding suggestions across dozens of languages.
        </p>
        <a className="button">Explore docs</a>
      </div>
      <div className="video">
        <video
          playsInline={true}
          autoPlay={false}
          ref={videoRef}
          muted={true}
          width="1920"
          height="780"
          poster="https://github.githubassets.com/images/modules/site/copilot/hero/bg-poster@2x.webp"
        >
          <source
            type="video/webm"
            src="https://github.githubassets.com/images/modules/site/copilot/hero/bg@1.5x.webm"
            media="(min-device-pixel-ratio: 1.3), (-webkit-min-device-pixel-ratio: 1.3)"
          />
        </video>
      </div>
    </div>
  )
}

export default Section3
