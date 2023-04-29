import { useEffect, useRef, useState } from 'react'
import './Copilot.scss'
import Typing from './Typing'

const Copilot = ({
  nonType,
  Type1,
  Type2,
  Type3,
  Float,
  numLines,
  activeNavbar,
  nonActiveNavbar,
}) => {
  const generateSpans = (num) => {
    const spans = []
    for (let i = 1; i <= num; i++) {
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
  const [isVisible, setIsVisible] = useState(false)
  const ref1 = useRef(null)

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setFloat(false)
          setShowText1(false)
          setShowText2(false)
          setShowText3(false)
          setIsVisible(false)
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

  const [temp, setTemp] = useState(null)
  const [nonActive, setNonActive] = useState([])
  useEffect(() => {
    setTemp(activeNavbar)
    setNonActive(nonActiveNavbar)
  }, [])

  return (
    <div className="CopilotEffect">
      <div className="Nav">
        <div className="pages">
          <span className="active-page">{temp && temp}</span>
          {nonActive && nonActive.map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>
      <div className="Typing">
        <span className="numberBar">{generateSpans(numLines)}</span>
        <div className="typingSection">
          {nonType}
          <div className="animation" ref={ref1}>
            <Typing
              isVisible={isVisible}
              showText={showText1}
              handleAnimationEnd={handleAnimationEnd1}
              animationType={'type1'}
              styleType={'gray'}
              content={<>{Type1}</>}
            />
            <Typing
              isVisible={isVisible}
              showText={showText2}
              handleAnimationEnd={handleAnimationEnd2}
              animationType={'type2'}
              styleType={'gray'}
              content={<>{Type2}</>}
            />
            <Typing
              isVisible={isVisible}
              showText={showText3}
              handleAnimationEnd={handleAnimationEnd3}
              animationType={'type3'}
              content={<>{Type3}</>}
            />
            <Typing
              isVisible={isVisible}
              showText={float}
              handleAnimationEnd={handleAnimationEnd4}
              animationType={'floating'}
              styleType={'float-animation'}
              content={<>{Float}</>}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Copilot
