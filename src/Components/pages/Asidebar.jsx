import React from 'react'
import './aside.css'
import gift from '../Images/Gifted.png'
import arr from '../Images/arrowright.svg'
import dash from '../Images/Dashboard .png'
import run from '../Images/Running.png'
import lead from '../Images/Group 33.png'
import rat from '../Images/RGB Color.png'
import cou from '../Images/Graduation.png'
import tot from '../Images/Bank Cards .png'
import cola from '../Images/Collaboration Female.png'
import earn from '../Images/Order History.png'
import mat from '../Images/Group 34.png'
import help from '../Images/Group 35.png'
import com from '../Images/Group 36.png'
const Asidebar = () => {
  return (
    <div className='mat'>
        <div className='gift'>
          <img className='mo' src= {gift} alt="" />
          <img src={arr} alt="" />
        </div>
        <div className='dash'>
          <img src= {dash} alt="" />
          <h3>Dashboard</h3>
        </div>
        <div className='run'>
          <img src= {run} alt="" />
          <h3>Quiz Competition</h3>
        </div>
        <div className='lead'>
            <img src= {lead} alt="" />
            <h3>Quiz Leaderboard</h3>
          </div>
          <div className='spin'>
            <img src= {rat} alt="" />
            <h3>Spin To Win</h3>
          </div>
          <div className='course'>
            <img src= {cou} alt="" />
            <h3>Courses</h3>
          </div>
          <div className='pay'>
            <img src= {tot} alt="" />
            <h3>Payment</h3>
          </div>
          <div className='ref'>
            <img src= {cola} alt="" />
            <h3>Referrals History</h3>
          </div>
          <div className='earn'>
            <img src= {earn} alt="" />
            <h3>Earnings History</h3>
          </div>
          <div className='all'>
            <div className='set'>
            <img src= {mat} alt="" />
            <h3>Settings</h3>
            </div>
            <div className='help'>
            <img src= {help} alt="" />
            <h3>Get Help</h3>
            </div>
            <div className='com'>
              <img src= {com} alt="" />
              <h3>Community</h3>
            </div>
          </div>
    </div>
  )
}

export default Asidebar