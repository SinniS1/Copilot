import React from 'react'

export const Sec2TypingLine1 = () => {
  return <>// Determine whether the sentiment of the text is positive</>
}

export const Sec2TypingLine2 = () => {
  return <>// Use a web service</>
}

export const Sec2TypingLine3 = () => {
  return (
    <>
      <span className="orange">async function </span>
      <span className="purple">is Positive </span>
      <span className="white">{`(text: string): Promise<boolean> {`}</span>
    </>
  )
}
