import React from 'react'
import './Section7.scss'
import ContentBlock from '../ContentBlock/ContentBlock'
const Section7 = () => {
  return (
    <div className="Section7">
      <ContentBlock
        heading={`Flight Thoughts`}
        headingFontSize={`48px`}
        paragraph={`A special thanks to senior developers and mentors for giving guidance.`}
        ParaFontSize={`20px`}
      />
      <div className="underLine"></div>
      <span className="GradiantText">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            fill="#93f5ec"
            d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"
          />
        </svg>
        {`I would like to express my deepest gratitude to the entire web
        development community across the globe for their unwavering support and
        guidance in my journey of learning and building front-end projects. 
        `}
        <br />
        {` A special thanks to CodeWithHarry, whose exceptional teaching
        skills and dedication have helped me from the very beginning to the
        present day. I am honored to be part of such a wonderful community that
        constantly inspires me to grow and learn.`}
      </span>
      <div className="Footer">
        <span>made with 💖 by GEEK😎💻</span>
      </div>
    </div>
  )
}

export default Section7
