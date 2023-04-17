import React from 'react'
import './Section1.scss'
const Section1 = () => {
  return (
    <div className="Section1">
      <div className="container">
        <span className="heading">Your AI pair programmer</span>
        <p className="para">
          GitHub Copilot uses the Open AI Codex to suggest code and entire
          functions in real time, right from editor.
        </p>
        <div className="buttons">
          <button className="btn1">
            Start my free trial
            <span className="arrow">{'->'}</span>
          </button>
          <button className="btn2">Compare plans</button>
        </div>
      </div>
    </div>
  )
}

export default Section1
