import React, { useState } from 'react'
import './Available.css'
import plus from '../Images/MacOS Maximize (1).png'

const Availlable = () => {
    const [tog, setTog] = useState(false)
    const createClick = ()=>{
        setTog(!tog)
    }
  return (
    <div className='available'>
        <h1>Available Courses</h1>
             <div className="type">
        <div className="type1">
          <div className="ui">
            <div className="ui1">
              <h4>1.</h4>
              <div className="ui2">
                <h4>UI/UX Design</h4>
                <p className={tog?"accord" : "accordion"}>
                  you’ll be taught by our experience and qualified teachers, and
                  get update through our website, telegram page and newsletters
                </p>
              </div>
            </div>
            <button onClick={createClick}><img src= {plus} alt="" /></button>
          </div>
          <div className="backend">
            <div className="backend1">
              <h3>2.</h3>
              <h4>Backend Web Development</h4>
            </div>
            <img src= {plus} alt="" />
          </div>
          <div className="frontend">
            <div className="frontend1">
              <h3>3.</h3>
              <h4>Front-End Web Development</h4>
            </div>
            <img src= {plus} alt="" />
          </div>
          <div className="page">
            <div className="page1">
              <h3>4.</h3>
              <h4>Page Management</h4>
            </div>
            <img src= {plus} alt="" />
          </div>
          <div className="advance0">
            <div className="advance1">
              <h3>5.</h3>
              <h4>Advance Cryptocurrency</h4>
            </div>
            <img src= {plus} alt="" />
          </div>
          <div className="q">
            <div className="q1">
              <h3>6.</h3>
              <h4>Quantum Mechanics</h4>
            </div>
            <img src= {plus} alt="" />
          </div>
        </div>
        <div className="type2">
          <div className="graph">
            <div className="graph1">
              <h3>7.</h3>
              <h4>Graphics Design</h4>
            </div>
            <img src= {plus} alt="" />
          </div>
          <div className="health">
            <div className="health1">
              <h3>8.</h3>
              <h4>African Health And Herb Methodology</h4>
            </div>
            <img src= {plus} alt="" />
          </div>
          <div className="true">
            <div className="true1">
              <h3>9.</h3>
              <h4>True Africa History</h4>
            </div>
            <img src= {plus} alt="" />
          </div>
          <div className="care">
            <div className="care1">
              <h3>10.</h3>
              <h4>Skin Care Production</h4>
            </div>
            <img src= {plus} alt="" />
          </div>
          <div className="nft">
            <div className="nft1">
              <h3>11.</h3>
              <h4>DeFi & NFTs</h4>
            </div>
            <img src= {plus} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Availlable