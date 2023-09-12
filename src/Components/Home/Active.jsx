import React from 'react'
import './Active.css'
import logo1 from '../Images/Student Male (1).png'
import logo2 from '../Images/arrow_right_alt_FILL0_wght400_GRAD0_opsz48.svg'
import logo3 from '../Images/Win (1).png'
import logo4 from '../Images/arrow_right_alt_FILL0_wght400_GRAD0_opsz48.svg'
import logo5 from '../Images/Money Bag (1).png'
import logo6 from '../Images/arrow_right_alt_FILL0_wght400_GRAD0_opsz48.svg'

const Active = () => {
  return (
    <div className='active'>
        <div className="more">
        <div className="learn">
          <div className="image">
            <img src= {logo1} alt="" />
          </div>
          <h1>Learn</h1>
          <p>
            you’ll be taught by our experience and qualified teachers, and get
            update through our website, telegram page and newsletters.
          </p>
          <div className="btn0">
            <button>
              Learn More
              <img
                src= {logo2}
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="quiz">
          <div className="image1">
            <img src= {logo3} alt="" />
          </div>
          <h1>Quiz</h1>
          <p>
            Test your intellectual growth and win weekly/ monthly prizes
            respectively.
          </p>
          <div className="btn1">
            <button>
              Learn More
              <img
                src= {logo4}
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="earn1">
          <div className="image2">
            <img src= {logo5} alt="" />
          </div>
          <h1>Earn</h1>
          <p>
            you’ll earn reward by daily incentive, affiliate commission and the
            quiz you completed.
          </p>
          <div className="btn2">
            <button>
              Learn More
              <img
                src= {logo6}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Active