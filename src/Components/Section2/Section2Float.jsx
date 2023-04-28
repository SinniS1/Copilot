import React from 'react'

const Section2Float = () => {
  return (
    <>
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
        <span className="blue">application/x-www-form-urlencoded</span>
        ",
      </span>
      <span className="white line">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {`\},`}
      </span>
      <span className="white line">&nbsp;&nbsp;&nbsp;&nbsp; {`\});`}</span>
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
    </>
  )
}

export default Section2Float
