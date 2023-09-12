import React from 'react'
import './Take.css'
import cup from '../Images/vecteezy_3d-winner-award-gold-trophy-icon-or-3d-business-success_10915898_609 1 (1).png'
import icon1 from '../Images/Gifted-Brainz-PNG (1).png'
import icon2 from '../Images/facebook logo png 1.png'
import icon3 from '../Images/Mask group.png'
import icon4 from '../Images/Frame.png'
import icon5 from '../Images/Frame (1).png'

const Take = () => {
  return (
    <div className='take'>
        <div className="oreo">
        <div className="points">
          <h1>Take Quiz And Earn Points</h1>
          <p>
            win and earn points to purchase course and acquire more skills from
            the experts.
          </p>
          <button className="but"><a href="www.google.com">Play Now</a></button>
        </div>
        <div className="cup">
          <img
            src={cup}
            alt=""
          />
        </div>
      </div>
      <div className="highcon">
      <div className="gif">
        <img src= {icon1} alt="" />
      </div>
      <div className="facebook">
        <img src= {icon2} alt="" />
      </div>
      <div className="twi"><img src= {icon3} alt="" /></div>
      <div className="mask"><img src= {icon4} alt="" /></div>
      <div className="tel"><img src= {icon5} alt="" /></div>
    </div>
    </div>
  )
}

export default Take