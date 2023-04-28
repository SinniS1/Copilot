import React from 'react'

const Float = ({ isVisible, showText, handleAnimationEnd, content }) => {
  return (
    <div
      className={` float-animation ${isVisible ? 'floating' : ''} ${
        showText ? 'visible' : 'notVisible'
      }`}
      onAnimationEnd={handleAnimationEnd}
    ></div>
  )
}

export default Float
