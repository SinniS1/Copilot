import React from 'react'
import './Section3.scss'
import Arrow from '../Section1/HoverArrow/Arrow'

const Section3 = () => {
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
          autoPlay={true}
          muted={true}
          width="1920"
          height="780"
          poster="https://github.githubassets.com/images/modules/site/copilot/hero/bg-poster@2x.webp"
          loop={true}
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
