import React from 'react'

const Section5Float = () => {
  return (
    <>
      {/* line 1 */}
      <span className="line">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="orange">var</span>
        <span className="white"> totalTime </span>
        <span className="gray">init</span>
      </span>
      {/* line 2 */}
      <span className="line">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="orange">var</span>
        <span className="white"> failedRuns </span>
        <span className="gray">init</span>
      </span>
      {/* line 3 */}
      <span className="line">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="orange">for</span>
        <span className="white"> _, run </span>
        <span className="blue"> := </span>
        <span className="white"> range </span>
        <span className="white">{` runs  {`}</span>
      </span>
      {/* line 4 */}
      <span className="line">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="orange">if</span>
        <span className="white"> run.</span>
        <span className="blue">Failed </span>
        <span className="white">{`{`}</span>
      </span>
      {/* line 5 */}
      <span className="line">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="white">failedRuns++</span>
      </span>
      {/* line 6 */}
      <span className="line">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="white">{`}`}</span>
        <span className="orange"> else </span>
        <span className="white">{`{`}</span>
      </span>
      {/* line 7 */}
      <span className="line">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="white">totalTime</span>
        <span className="blue"> += </span>
        <span className="white">run.</span>
        <span className="blue">Time</span>
      </span>
      {/* line 8 */}
      <span className="line">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="white">{`}`}</span>
      </span>
      {/* line 9 */}
      <span className="line">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="white">{`}`}</span>
      </span>
      {/* line 10 */}
      <span className="line">
        &nbsp;&nbsp;
        <span className="white">
          <br />
        </span>
      </span>
      {/* line 11 */}
      <span className="line">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="white">averageRuntime</span>
        <span className="blue"> := </span>
        <span className="purple">float64</span>
        <span className="white">{`(totalTime)`}</span>
        <span className="blue">{` / `}</span>
        <span className="purple">float64</span>
        <span className="white">{`(`}</span>
        <span className="purple">len</span>
        <span className="white">{`(runs)`}</span>
        <span className="blue"> - </span>
        <span className="white">{`failedRuns)`}</span>
        <span className="blue">{` / 1000`}</span>
      </span>
      {/* line 12 */}
      <span className="line">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="orange">return </span>
        <span className="white">averageRuntime</span>
      </span>
      {/* line 13 */}
      <span className="white line">&nbsp;{`}`}</span>
      <div className="Cp-Button">Copilot</div>
    </>
  )
}

export default Section5Float
