import React from 'react'
import './Section2.scss'
import Copilot from '../copilotEffect/Copilot'
import Section2NonTyping from './Section2NonTyping'
import {
  Sec2TypingLine1,
  Sec2TypingLine2,
  Sec2TypingLine3,
} from './Section2TypingLines'
import Section2Float from './Section2Float'
const Section2 = () => {
  const nonType = <Section2NonTyping />
  const Type1 = <Sec2TypingLine1 />
  const Type2 = <Sec2TypingLine2 />
  const Type3 = <Sec2TypingLine3 />
  const Float = <Section2Float />
  return (
    <div>
      <Copilot
        nonType={nonType}
        Type1={Type1}
        Type2={Type2}
        Type3={Type3}
        Float={Float}
        numLines={17}
      />
    </div>
  )
}

export default Section2
