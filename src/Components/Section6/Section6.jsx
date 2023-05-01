import React from 'react'
import gitCommit from '../../assets/gitCommit.svg'

import './Section6.scss'
import ContentBlock from '../ContentBlock/ContentBlock'
import CardSection from '../BigCard/CardSection/CardSection'
const Section6 = () => {
  return (
    <div className="Section6">
      <div className="Sec6LineContainer">
        <div className="Sec6Line">
          {/* first */}
          <>
            <img className="img1 img" src={gitCommit} alt="logo" />
            <img
              src="https://github.githubassets.com/images/modules/site/copilot/avatars/2.jpg"
              alt="Octocat"
              className="img1 img avatar"
            ></img>
          </>

          {/* second */}
          <>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              version="1.1"
              data-view-component="true"
              className="img2 img"
              style={{
                backgroundColor: '#1b1f24',
                height: '35px',
                width: '30px',
              }}
            >
              <path
                fill="#3fb950"
                d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.28-2.72a.751.751 0 0 0-.018-1.042.751.751 0 0 0-1.042-.018l-5.97 5.97-2.47-2.47a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042l3 3a.75.75 0 0 0 1.06 0Z"
              ></path>
            </svg>
            <img
              src="https://github.githubassets.com/images/modules/site/copilot/avatars/3.jpg"
              alt="Octocat"
              className="img2 img avatar"
            ></img>
          </>
          {/* third */}
          <>
            <svg
              aria-hidden="true"
              height="24"
              viewBox="0 0 16 16"
              version="1.1"
              width="24"
              data-view-component="true"
              className="img3 img"
            >
              <path
                fill="#6e7681"
                d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm3.031-12a4.38 4.38 0 0 0-3.097 1.283l-.23.229c-.156.157-.308.32-.452.49H5.65a.876.876 0 0 0-.746.417l-.856 1.388a.377.377 0 0 0 .21.556l1.552.477 1.35 1.35.478 1.553a.374.374 0 0 0 .555.21l1.389-.855a.876.876 0 0 0 .416-.746V8.747c.17-.144.333-.295.49-.452l.23-.23A4.379 4.379 0 0 0 12 4.969v-.093A.876.876 0 0 0 11.124 4Zm-5.107 7.144h-.001a.809.809 0 0 0-1.33-.881c-.395.394-.564 1.258-.62 1.62a.12.12 0 0 0 .035.108.12.12 0 0 0 .108.035c.362-.056 1.226-.225 1.62-.619a.803.803 0 0 0 .188-.263Z"
              ></path>
            </svg>
          </>
          {/* fourth */}
          <>
            <svg
              aria-hidden="true"
              height="24"
              viewBox="0 0 16 16"
              version="1.1"
              width="24"
              data-view-component="true"
              className="img4 img"
            >
              <path
                fill="#a371f7"
                d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm.25-11.25A1.75 1.75 0 1 0 6 6.428v3.144a1.75 1.75 0 1 0 1 0V8.236A2.99 2.99 0 0 0 9 9h.571a1.75 1.75 0 1 0 0-1H9a2 2 0 0 1-1.957-1.586A1.75 1.75 0 0 0 8.25 4.75Z"
              ></path>
            </svg>
            <img
              src="https://github.githubassets.com/images/modules/site/copilot/avatars/4.jpg"
              alt="Octocat"
              className="img4 img avatar"
            ></img>
          </>
          {/* fifth */}
          <>
            <svg
              aria-hidden="true"
              height="24"
              viewBox="0 0 16 16"
              version="1.1"
              width="24"
              data-view-component="true"
              className="img5 img"
            >
              <path
                fill="#3fb950"
                d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16Zm3.031-12a4.38 4.38 0 0 0-3.097 1.283l-.23.229c-.156.157-.308.32-.452.49H5.65a.876.876 0 0 0-.746.417l-.856 1.388a.377.377 0 0 0 .21.556l1.552.477 1.35 1.35.478 1.553a.374.374 0 0 0 .555.21l1.389-.855a.876.876 0 0 0 .416-.746V8.747c.17-.144.333-.295.49-.452l.23-.23A4.379 4.379 0 0 0 12 4.969v-.093A.876.876 0 0 0 11.124 4Zm-5.107 7.144h-.001a.809.809 0 0 0-1.33-.881c-.395.394-.564 1.258-.62 1.62a.12.12 0 0 0 .035.108.12.12 0 0 0 .108.035c.362-.056 1.226-.225 1.62-.619a.803.803 0 0 0 .188-.263Z"
              ></path>
            </svg>
          </>
        </div>
        <img
          src="https://github.githubassets.com/images/modules/site/copilot/bg-stroke-2.svg"
          alt="gradientLine"
          className="gradientLine"
        />
        <img
          src={`https://github.githubassets.com/images/modules/site/copilot/icon-diamond.png`}
          alt="BoxAnim"
          className="BoxAnimImg"
        />
      </div>
      <div className="Sec6AnimContainer">
        <ContentBlock
          heading={`Keep flying with your favorite editor`}
          headingFontSize={'32px'}
          paragraph={`GitHub Copilot integrates directly into your editor including Neovim, JetBrains IDEs, Visual Studio, and Visual Studio Code—and is fast enough to use as you type.`}
          ParaFontSize={'20px'}
          SlidingAnimation={true}
        />
        {/* ----------------- */}

        <CardSection />

        {/* ----------------- */}
        <div style={{ height: '90px', width: '100%' }}></div>
        <ContentBlock
          heading={`The numbers speak for themselves`}
          headingFontSize={'32px'}
          paragraph={`Research has found GitHub Copilot helps developers code faster, focus on solving bigger problems, stay in the flow longer, and feel more fullfilled with their work.`}
          ParaFontSize={'20px'}
          SlidingAnimation={true}
        />
        <div className="Sec6PecentContainer">
          <div className="firstPerc">
            <span className="Perc">74%</span>
            <span className="PercCont">Focus on more satisfying work</span>
          </div>
          <div style={{ border: '1px solid #777f89', margin: '0 50px' }}></div>
          <div className="firstPerc">
            <span className="Perc">84%</span>
            <span className="PercCont">Feel more productive</span>
          </div>
          <div style={{ border: '1px solid #777f89', margin: '0 50px' }}></div>
          <div className="firstPerc">
            <span className="Perc">96%</span>
            <span className="PercCont">Are faster with repetitive work</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section6
