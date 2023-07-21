import { useEffect, useLayoutEffect, useReducer, useRef, useState } from 'react'
import './Copilot.scss'
import Typing from './Typing'

const initialState = {
  showText1: false,
  showText2: false,
  showText3: false,
  float: false,
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'showText1':
      return { ...state, showText1: true }
    case 'showText2':
      return { ...state, showText2: true }
    case 'showText3':
      return { ...state, showText3: true }
    case 'float':
      return { ...state, float: true }
    default:
      return state
  }
}

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

  // Use Reducer instead of useState
  const [state, dispatch] = useReducer(reducer, initialState)
  const { showText1, showText2, showText3, float } = state

  // const [showText1, setShowText1] = useState(false)
  // const [showText2, setShowText2] = useState(false)
  // const [showText3, setShowText3] = useState(false)
  // const [float, setFloat] = useState(false)

  // const handleAnimationEnd1 = () => {
  //   setShowText1(true)
  // }
  // const handleAnimationEnd2 = () => {
  //   setShowText2(true)
  // }
  // const handleAnimationEnd3 = () => {
  //   setShowText3(true)
  // }
  // const handleAnimationEnd4 = () => {
  //   setFloat(true)
  // }

  // Animation on scroll
  const [isVisible, setIsVisible] = useState(false)
  const ref1 = useRef(null)

  useLayoutEffect(() => {
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
        threshold: 0.2,
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
          <span className="active-page">{temp}</span>
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
              handleAnimationEnd={dispatch({ type: 'showText1' })}
              animationType={'type1'}
              styleType={'gray'}
              content={<>{Type1}</>}
            />
            <Typing
              isVisible={isVisible}
              showText={showText2}
              handleAnimationEnd={dispatch({ type: 'showText2' })}
              animationType={'type2'}
              styleType={'gray'}
              content={<>{Type2}</>}
            />
            <Typing
              isVisible={isVisible}
              showText={showText3}
              handleAnimationEnd={dispatch({ type: 'showText3' })}
              animationType={'type3'}
              content={<>{Type3}</>}
            />
            <Typing
              isVisible={isVisible}
              showText={float}
              handleAnimationEnd={dispatch({ type: 'float' })}
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
