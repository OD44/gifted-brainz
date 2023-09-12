import React from 'react'
import './Feature.css'
import do1 from '../Images/Rectangle 145 (1).png'
import do2 from '../Images/Group 46 1 (1).png'
import do3 from '../Images/red cancel icon (1).png'

const Feature = () => {
  return (
    <div className='feature'>
        <h1>Feature & Benefits</h1>
            <div className="feat">
        <div className="fast">
          <div><img src= {do1} alt="" /></div>
          <div className="fast1">
            <h3>Fast Withdrawals</h3>
            <p>we pay within 10-24hrs to your specific bank account.</p>
          </div>
        </div>
        <div className="spin">
          <div className="imag">
            <img src= {do2} alt="" />
          </div>
          <div className="spin1">
            <h3>Spin And Win</h3>
            <p>win amazing price by simply spinning the wheel.</p>
          </div>
        </div>
        <div className="ref">
          <div className="imag1">
            <img src= {do3} alt="" />
          </div>
          <div className="ref1">
            <h3>Referral Is Not Compulsory</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature