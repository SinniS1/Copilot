import React from 'react'

const Section5NonTyping = () => {
  return (
    <>
      {/* line1 */}
      <span className="white ">
        <span className="orange">package</span>
        &nbsp;
        <span>main</span>
      </span>
      <br />
      {/* line 3 */}
      <span className="white">
        <span className="orange">type </span>
        <span>Run</span>
        <span className="orange"> struct </span>
        <span className="white">{`{`}</span>
      </span>
      {/* line 4 */}
      <span className="white">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="blue">Time </span>
        <span> int </span>
        <span className="gray"> // in millisecods</span>
      </span>
      {/* line4 */}
      <span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="blue">Results</span>
        <span className="white"> string</span>
      </span>
      {/* line5 */}
      <span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="blue">Failed</span>
        <span className="white"> bool</span>
      </span>
      {/* line 6 */}
      <span className="white">{`}`}</span>
      <br />
    </>
  )
}

export default Section5NonTyping
