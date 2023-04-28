import React from 'react'

const Typing = ({
  isVisible,
  showText,
  handleAnimationEnd,
  content,
  animationType,
  styleType,
}) => {
  return (
    <span
      className={`${styleType}
      ${isVisible ? animationType : ''} 
      ${showText ? 'visible' : 'notVisible'} `}
      onAnimationEnd={handleAnimationEnd}
    >
      {content}
    </span>
  )
}

export default Typing
