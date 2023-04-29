import React from 'react'
import './BigCard.scss'
import tick from '../../assets/tick.svg'
import Arrow from '../Section1/HoverArrow/Arrow'
const BigCard = ({ BigCardHeding, Price, services, bigCard2 }) => {
  const CardServices = services.map((service) => (
    <div className="CardServices" key={service}>
      <span className="tick">
        <img src={tick} alt="logo" height={15} width={20} />
      </span>
      <span className="service">{service}</span>
    </div>
  ))

  return (
    <div className={`BigCard ${bigCard2 ? 'bigCard2' : 'bigCard1'}`}>
      <div className="BigCardHeading">
        <span>Copilot for</span>&nbsp;{BigCardHeding}
      </div>
      <div className="BigCardPrice">
        <span className="DolorSign">$</span>
        <span className="Price">{Price}</span>
        <span className="PlanPrices">
          <span>per user</span>
          <span>per month</span>
        </span>
      </div>
      <div
        className="BigCardLine"
        style={{ borderBottom: '1px solid #30363d', marginBottom: '15px' }}
      ></div>
      <div className="BigCardServices">{CardServices}</div>
      <div className="buttons">
        {bigCard2 ? (
          <>
            <button className="btn1 arrowButton">
              Buy Now
              <Arrow />
            </button>
            <button className="btn2">Contact Sales</button>
          </>
        ) : (
          <>
            <button className="btn1 arrowButton">
              Start my free trial
              <Arrow />
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default BigCard
