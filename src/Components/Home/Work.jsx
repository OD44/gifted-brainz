import React from 'react'
import './Work.css'
import image1 from '../Images/Group 51 (1).png'
import image2 from '../Images/Group 50 (1).png'
import image3 from '../Images/Group 48 (1).png'
import image4 from '../Images/Group 49 (1).png'

const Work = () => {
  return (
    <div className='work'>
        <h1>How It Works?</h1>
        <div className="part">
            <div className="part1">
                <div className="first_part">
                    <img src= {image1} alt="" />
                    <p>
                        nigerians and other african countries can come and challenge one
                        another.
                        <br />
                        <br />
                        in a daily active quiz competition and stand a chance to win cash
                        prize more than #100,000 weekly/monthly respectively or it’s
                        equivalent in USDT.
                    </p>
                </div>
                <div className="second_part">
                    <img src= {image2} alt="" />
                    <p>
                        you will acquire valuable skills and knowledge in blockchain,
                        De-fi, nFTs, UI/UX Design, fashion/cosmetic and so on.
                    </p>
                </div>
            </div>
            <div className="part2">
                <div className="f_part">
                    <img src= {image3} alt="" />
                    <p>
                        you will participate in intellectual contest for a life changing
                        prize. you have the chance to join our innovative and creative
                        team.
                    </p>
                </div>
                <div className="t_part">
                    <img src= {image4} alt="" />
                    <p>
                        you enjoy steady affiliate earnings. refer your friends and earn
                        40% affiliate commision.
                    </p>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Work