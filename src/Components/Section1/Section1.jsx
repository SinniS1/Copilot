import React from 'react'
import './Section1.scss'
import Arrow from './HoverArrow/Arrow'
import ContentBlock from '../ContentBlock/ContentBlock'
const Section1 = () => {
  return (
    <div className="Section1">
      <div className="container">
        <ContentBlock
          heading={'Your AI pair programmer'}
          paragraph={
            'GitHub Copilot uses the Open AI Codex to suggest code and entire functions in real time, right from editor.'
          }
          headingFontSize={'70px'}
          ParaFontSize={'19px'}
        />
        <div className="buttons">
          <button className="btn1 arrowButton">
            Start my free trial
            <Arrow />
          </button>
          <button className="btn2">Compare plans</button>
        </div>
      </div>
    </div>
  )
}

export default Section1
