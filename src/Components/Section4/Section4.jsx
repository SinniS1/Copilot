import React from 'react'
import './Section4.scss'

import ContentBlock from '../ContentBlock/ContentBlock'
import BigCard from '../BigCard/BigCard'
const Section4 = () => {
  const IndividulsCardService = [
    'Plugs right into your editor',
    'Turns natural language prompts into code',
    'Offers multi-line function suggestions',
    'Speeds up test generation',
    'Blocks suggestions matching public code',
  ]
  const BusinessCardService = [
    ' Everything included Copilot for Individuals, plus...',
    ' Simple license management',
    ' Organization-wide policy management',
    'Industry-leading privacy',
    'Corporate proxy support',
  ]
  return (
    <div className="Section4">
      <ContentBlock
        heading={`Don't fly solo`}
        headingFontSize={'48px'}
        paragraph={`Developers all over the world use GitHub Copilot to code faster, focus on business logic over boilerplate, and do what matters most: building great software.`}
        ParaFontSize={'19px'}
        SlidingAnimation={false}
      />
      <div className="BigCards">
        <BigCard
          BigCardHeding={'Individuals'}
          Price={`10`}
          services={IndividulsCardService}
        />
        <BigCard
          BigCardHeding={'Business'}
          Price={`19`}
          services={BusinessCardService}
          bigCard2={true}
        />
      </div>
      <ContentBlock
        heading={`Focus on solving bigger problems`}
        headingFontSize={'48px'}
        paragraph={`Spend less time creating boilerplate and repetitive code patterns, and more time on what matters: building great software. Write a comment describing the logic you want and GitHub Copilot will immediately suggest code to implement the solution.`}
        ParaFontSize={'19px'}
        SlidingAnimation={false}
      />
    </div>
  )
}

export default Section4
