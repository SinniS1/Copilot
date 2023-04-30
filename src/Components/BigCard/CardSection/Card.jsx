import React, { useEffect, useRef, useState } from 'react'
const Card = ({ cardName, cardLink, cardImage, CardNum }) => {
  const cardRef = useRef(null)
  useEffect(() => {
    const Observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(`${CardNum}`)
          console.log({ cardName })
          entry.target.classList.remove(`InVisible`)
        } else {
          entry.target.classList.remove(`${CardNum}`)
          entry.target.classList.add(`InVisible`)
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1,
      }
    )
    Observer.observe(cardRef.current)

    return () => {
      Observer.unobserve(cardRef.current)
    }
  }, [])

  const handleAnimationEnd = () => {
    cardRef.current.classList.remove(`${CardNum}`)
  }
  // Fix the card animatation issue late
  return (
    <div className={`Card `} ref={cardRef} onAnimationEnd={handleAnimationEnd}>
      <a href={cardLink} target="_blank">
        <img src={cardImage} alt="VisulaStudioLogo" className="CardImages" />
        <span className="CardName">{cardName}</span>
      </a>
    </div>
  )
}

export default Card
