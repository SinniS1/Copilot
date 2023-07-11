import React, { useEffect, useRef, useState } from 'react'
import './ContentBlock.scss'
const ContentBlock = ({
  heading,
  paragraph,
  headingFontSize,
  ParaFontSize,
  SlidingAnimation,
}) => {
  const SlidingRef = useRef(null)
  const [runAnimation, setRunAnimation] = useState(false)
  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRunAnimation(true)
        } else {
          setRunAnimation(false)
          setSliding1End(false)
          setSlding2End(false)
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1,
      }
    )
    if (SlidingAnimation) {
      observer1.observe(SlidingRef.current)
    }
    return () => {
      observer1.unobserve(SlidingRef.current)
    }
  }, [])

  const [Sliding1End, setSliding1End] = useState(false)
  const [Slding2End, setSlding2End] = useState(false)
  const handleAnimationEnd1 = () => {
    setSliding1End(true)
  }
  const handleAnimationEnd2 = () => {
    setSlding2End(true)
  }
  return (
    <>
      <div
        className="ContentBlock"
        style={{ alignItems: SlidingAnimation ? '' : 'center' }}
        ref={SlidingRef}
      >
        <span
          className={`heading ${runAnimation ? 'Sliding1' : ''}
          ${Sliding1End ? 'visible' : ''}
          ${SlidingAnimation && !Sliding1End && 'InVisible'}
          `}
          style={{
            fontSize: headingFontSize,
          }}
          onAnimationEnd={handleAnimationEnd1}
        >
          {heading}
        </span>
        <p
          className={`para ${runAnimation ? 'Sliding2' : ''}
          ${Slding2End ? 'visible' : ''}
          ${SlidingAnimation && !Sliding1End && 'InVisible'}
          `}
          style={{
            fontSize: ParaFontSize,
            textAlign: SlidingAnimation ? 'justify' : 'center',
          }}
          onAnimationEnd={handleAnimationEnd2}
        >
          {paragraph}
        </p>
      </div>
    </>
  )
}

export default ContentBlock
