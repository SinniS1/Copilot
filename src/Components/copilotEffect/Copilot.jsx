import React, { useEffect, useReducer, useRef, useState } from 'react'
import './Copilot.scss'
import Typing from './Typing'

// Initial state managed by useReducer
const initialState = {
  showText1: false,
  showText2: false,
  showText3: false,
  float: false,
  temp: null,
  nonActive: [],
  isVisible: false,
}

// Reducer function to handle state updates
const copilotReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_TEXT_1':
      return { ...state, showText1: true }
    case 'SHOW_TEXT_2':
      return { ...state, showText2: true }
    case 'SHOW_TEXT_3':
      return { ...state, showText3: true }
    case 'FLOAT':
      return { ...state, float: true }
    case 'SET_TEMP':
      return { ...state, temp: action.payload }
    case 'SET_NON_ACTIVE':
      return { ...state, nonActive: action.payload }
    case 'SET_IS_VISIBLE':
      return { ...state, isVisible: action.payload }
    case 'RESET_ANIMATIONS':
      return {
        ...state,
        showText1: false,
        showText2: false,
        showText3: false,
        float: false,
      }
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

  // useReducer hook to manage state with the copilotReducer function
  const [state, dispatch] = useReducer(copilotReducer, initialState)
  const { showText1, showText2, showText3, float, temp, nonActive, isVisible } =
    state

  // Animation on scroll
  const ref1 = useRef(null)
  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          dispatch({ type: 'SET_IS_VISIBLE', payload: true })
        } else {
          dispatch({ type: 'RESET_ANIMATIONS' })
          dispatch({ type: 'SET_IS_VISIBLE', payload: false })
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

  useEffect(() => {
    dispatch({ type: 'SET_TEMP', payload: activeNavbar })
    dispatch({ type: 'SET_NON_ACTIVE', payload: nonActiveNavbar })
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
              handleAnimationEnd={() => dispatch({ type: 'SHOW_TEXT_1' })}
              animationType={'type1'}
              styleType={'gray'}
              content={<>{Type1}</>}
            />
            <Typing
              isVisible={isVisible}
              showText={showText2}
              handleAnimationEnd={() => dispatch({ type: 'SHOW_TEXT_2' })}
              animationType={'type2'}
              styleType={'gray'}
              content={<>{Type2}</>}
            />
            <Typing
              isVisible={isVisible}
              showText={showText3}
              handleAnimationEnd={() => dispatch({ type: 'SHOW_TEXT_3' })}
              animationType={'type3'}
              content={<>{Type3}</>}
            />
            <Typing
              isVisible={isVisible}
              showText={float}
              handleAnimationEnd={() => dispatch({ type: 'FLOAT' })}
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
