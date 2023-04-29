import React from 'react'

export const Sec5TypingLine1 = () => {
  return <>// Get average runtime of successful runs in seconds</>
}

export const Sec5TypingLine2 = () => {
  return <>// Use a web service</>
}

export const Sec5TypingLine3 = () => {
  return (
    <>
      <span className="orange">func</span>
      <span className="purple"> averageRuntimeInSeconds</span>
      <span className="white">{`(runs []Run) float64 {`}</span>
    </>
  )
}
