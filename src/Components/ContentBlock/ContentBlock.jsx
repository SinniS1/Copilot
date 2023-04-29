import React from 'react'
import './ContentBlock.scss'
const ContentBlock = ({
  heading,
  paragraph,
  headingFontSize,
  ParaFontSize,
  SlidingAnimation,
}) => {
  return (
    <>
      <div
        className="ContentBlock"
        style={{ alignItems: SlidingAnimation ? '' : 'center' }}
      >
        <span
          className={`heading ${SlidingAnimation ? 'Sliding1' : ''}`}
          style={{ fontSize: headingFontSize }}
        >
          {heading}
        </span>
        <p
          className={`para ${SlidingAnimation ? 'Sliding2' : ''}`}
          style={{
            fontSize: ParaFontSize,
            textAlign: SlidingAnimation ? 'justify' : 'center',
          }}
        >
          {paragraph}
        </p>
      </div>
    </>
  )
}

export default ContentBlock
