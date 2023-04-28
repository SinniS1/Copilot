import { useEffect, useRef, useState } from 'react'
import './Copilot.scss'

const Copilot = () => {
  const generateSpans = () => {
    const spans = []
    for (let i = 1; i <= 17; i++) {
      spans.push(
        <span className="num" key={i}>
          {i}
        </span>
      )
    }
    return spans
  }

  const [showText1, setShowText1] = useState(false)
  const [showText2, setShowText2] = useState(false)
  const [showText3, setShowText3] = useState(false)
  const [float, setFloat] = useState(false)

  const handleAnimationEnd1 = () => {
    setShowText1(true)
  }
  const handleAnimationEnd2 = () => {
    setShowText2(true)
  }
  const handleAnimationEnd3 = () => {
    setShowText3(true)
  }
  const handleAnimationEnd4 = () => {
    setFloat(true)
  }

  // Animation on scroll
  const [isVisible1, setIsVisible1] = useState(false)
  const ref1 = useRef(null)

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible1(true)
        } else {
          setFloat(false)
          setShowText1(false)
          setShowText2(false)
          setShowText3(false)
          setIsVisible1(false)
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    )
    observer1.observe(ref1.current)
    return () => {
      observer1.unobserve(ref1.current)
    }
  }, [])
  return (
    <div className="Section2">
      <div className="CopilotEffect">
        <div className="Nav">
          <div className="pages">
            <span className="active-page">Sentiments.ts</span>
            <span>write_sql.go</span>
            <span>parse_expenses.py</span>
            <span>addresses.pb</span>
          </div>
        </div>
        <div className="Typing">
          <span className="numberBar">{generateSpans()}</span>
          <div className="typingSection">
            <span className="white ">#!/usr/bin/env ts-node</span>
            <span>
              <br />
            </span>
            <span className="">
              <span className="orange">import </span>
              <span className="white">{`{ fetch  }`}</span>
              <span className="orange"> from </span>
              <span className="blue"> "fetch-h2" </span>
              <span className="white">{`;`}</span>
            </span>
            <span>
              <br />
            </span>
            <div className="animation" ref={ref1}>
              <span
                className={`gray  ${isVisible1 ? 'type1' : ''} ${
                  showText1 ? 'visible' : 'notVisible'
                }`}
                onAnimationEnd={handleAnimationEnd1}
              >
                // Determine whether the sentiment of the text is positive
              </span>
              <span
                className={`gray ${isVisible1 ? 'type2' : ''} ${
                  showText2 ? 'visible' : 'notVisible'
                }`}
                onAnimationEnd={handleAnimationEnd2}
              >
                // Use a web service
              </span>
              <span
                className={` ${isVisible1 ? 'type3' : ''}
                  ${showText3 ? 'visible' : 'notVisible'}
                  `}
                onAnimationEnd={handleAnimationEnd3}
              >
                <span className="orange">async function </span>
                <span className="purple">is Positive </span>
                <span className="white">{`(text: string): Promise<boolean> {`}</span>
              </span>
              <div
                className={` float-animation ${isVisible1 ? 'floating' : ''} ${
                  float ? 'visible' : 'notVisible'
                }`}
                onAnimationEnd={handleAnimationEnd4}
              >
                <span className="line">
                  <span className="orange">&nbsp;&nbsp;&nbsp;&nbsp;const</span>
                  <span className="white">&nbsp;response</span>
                  <span className="blue">&nbsp;=&nbsp;</span>
                  <span className="orange">&nbsp;await&nbsp;</span>
                  <span className="purple">&nbsp;await</span>
                  <span className="blue">{`(\`http://text-processing.com/sentiment/\`,{`}</span>
                </span>
                <span className="blue line">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;method:&nbsp;"POST",
                </span>
                <span className="blue line">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;body:&nbsp;`text=
                  <span className="white">{`\${text}`}</span>`,
                </span>
                <span className="blue line">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;headers:&nbsp;{' '}
                  <span className="white line"> {`\{`} </span>
                </span>
                <span className="white line">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Content-Type":&nbsp;"
                  <span className="blue">
                    application/x-www-form-urlencoded
                  </span>
                  ",
                </span>
                <span className="white line">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {`\},`}
                </span>
                <span className="white line">
                  &nbsp;&nbsp;&nbsp;&nbsp; {`\});`}
                </span>
                <span className="line">
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="orange">const</span>
                  <span className="white">&nbsp;json</span>
                  <span className="white">&nbsp;=&nbsp;</span>
                  <span className="orange">await&nbsp;</span>
                  <span className="white">response.</span>
                  <span className="purple">json{`()`};&nbsp;</span>
                </span>
                <span className="line">
                  &nbsp;&nbsp;&nbsp; <span className="orange">const</span>
                  <span className="white">&nbsp;json.</span>
                  <span className="blue">label === </span>
                  <span className="purple">"pos"</span>
                  <span className="white">{`;`}</span>
                </span>
                <span className="white line">&nbsp;{`}`}</span>
                <div className="Cp-Button">Copilot</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Copilot
