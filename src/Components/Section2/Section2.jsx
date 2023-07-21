import React from 'react'
import './Section2.scss'
import Copilot from '../copilotEffect/Copilot'
import Section2NonTyping from './Section2NonTyping'
import { Sec2TypingLine3 } from './Section2TypingLines'
import Section2Float from './Section2Float'
const Section2 = () => {
  const nonType = <Section2NonTyping />
  const Type1 = `// Determine whether the sentiment of the text is positive`
  const Type2 = `// Use a web service`
  const Type3 = <Sec2TypingLine3 />
  const Float = <Section2Float />
  return (
    <div className="Section2">
      <Copilot
        nonType={nonType}
        Type1={Type1}
        Type2={Type2}
        Type3={Type3}
        Float={Float}
        numLines={17}
        activeNavbar={'sentiments.ts'}
        nonActiveNavbar={['write_sql.go', 'parse_expenses.py', 'addresses.pb']}
      />
    </div>
  )
}

export default Section2
