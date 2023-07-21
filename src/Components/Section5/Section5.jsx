import React from 'react'
import './Section5.scss'
import Copilot from '../copilotEffect/Copilot'
import Section5NonTyping from './Section5NonTyping'
import { Sec5TypingLine3 } from './Section5TypingLines'
import Section5Float from './Section5Float'
import ContentBlock from '../ContentBlock/ContentBlock'
import gitCommit from '../../assets/gitCommit.svg'
import Section2Float from '../Section2/Section2Float'

const Section5 = () => {
  const nonType = <Section5NonTyping />
  const Type1 = '// Get average runtime of successful runs in seconds'
  const Type2 = `// Use a web service`
  const Type3 = <Sec5TypingLine3 />
  const Float = <Section5Float />

  // Copilot 2
  const CPnonType = (
    <>
      <span>
        <span className="orange">const</span>
        <span className="white"> seconds </span>
        <span className="blue"> = 3600</span>
      </span>
      <br />
    </>
  )
  const CPType3 = (
    <>
      <span>
        <span className="orange">async function </span>
        <span className="purple">is Positive </span>
        <span className="white">{`(text: string): Promise<boolean> {`}</span>
      </span>
    </>
  )
  return (
    <div className="Section5">
      <Copilot
        nonType={nonType}
        Type1={Type1}
        Type2={Type2}
        Type3={Type3}
        Float={Float}
        numLines={24}
        activeNavbar={'runTime.go'}
        nonActiveNavbar={['course.rb', 'time.js', 'isPrimeTest.java']}
      />
      <div className="lineBox">
        <div className="line">
          <img className="img1 img" src={gitCommit} alt="logo" />
          <img className="img2 img" src={gitCommit} alt="logo" />
          <img
            src="https://github.githubassets.com/images/modules/site/copilot/octocat.svg"
            alt="Octocat"
            className="img3 img"
          ></img>
          <img
            src="https://github.githubassets.com/images/modules/site/copilot/avatars/1.jpg"
            alt="Octocat"
            className="img4 img"
          ></img>
        </div>
        <ContentBlock
          heading={'Get AI-based suggestions, just for you'}
          headingFontSize={`32px`}
          paragraph={`GitHub Copilot shares recommendations based on the project's context and style conventions. Quickly cycle through lines of code, complete function suggestions, and decide which to accept, reject, or edit.`}
          ParaFontSize={`20px`}
          SlidingAnimation={true}
        />
      </div>
      <Copilot
        nonType={CPnonType}
        Type1={'// Hello viewer, this copilot clone is made my Sachin Yadav'}
        Type2={Type2}
        Type3={CPType3}
        Float={<Section2Float />}
        numLines={15}
        activeNavbar={'time.js'}
        nonActiveNavbar={[
          'max_sum_slice.py',
          'address.js',
          'parseExpenses.java',
        ]}
      />
    </div>
  )
}

export default Section5
