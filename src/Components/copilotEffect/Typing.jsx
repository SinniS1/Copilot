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
      className={`${isVisible ? animationType : ''} ${
        showText ? 'visible' : 'notVisible'
      } ${styleType}`}
      onAnimationEnd={handleAnimationEnd}
    >
      {content}
    </span>
  )
}

export default Typing
