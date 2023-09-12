import React from 'react'
import './main.css'
import vec from '../Images/Vector 4.png'
import vet from '../Images/Vector 3.png'
import elipe from '../Images/Ellipse.png'
const Mainbar = () => {
  return (
    <div className='main-side'>
      <div className='eng'>
        <div className='bod'>
        <h3>Dashboard</h3>
        <div className='mom'>
          <input type="text" />
          <img className='push' src= {vec} alt="" />
        </div>
        <img src={vet} alt="" />
        <div className='eat'>
          <img  src={elipe} alt="" />
        </div>
      </div>
      <div>
        <h2>Welcome, Jays</h2>
        <div className='total'>
          <div className='ing'>
            <p>Total Earnings</p>
            <h1>#203,978</h1>
          </div>
          <div className='point'>
            <p>Total Points</p>
            <h1>2000 <span>SQP</span></h1>
          </div>
          <div className='rem'>
            <p>Referrals Earnings</p>
            <h1>#12,000</h1>
          </div>
        </div>
      </div>
      <div className='wait'> 
        <h3>Earnings History</h3>
        <div className='task'>
          <p className='the'>Task</p>
          <div className='fat'>
          <p>Total Answered</p>
          <p>Points</p>
        </div>
      </div>
        <div className='ur'>
            <p className='at'>1. What is Ur/Ux Design</p>
            <div className='hmm'>
            <p>15</p>
            <p>20pts</p>
            </div>
          </div>
          <div className='pri'>
            <p className='so'>2. Principle Of Design</p>
            <div className='pom'>
              <p>15</p>
              <p>10pts</p>
            </div>
          </div>
          <div className='into'>
            <p className='ion'> 3.Introduction to Design</p>
            <div className='pts'>
              <p>15</p>
              <p>20pts</p>
            </div>
          </div>
        </div>
        <div className='into'>
            <p className='ion'> 4.User Research</p>
            <div className='pts'>
              <p>15</p>
              <p>50pts</p>
            </div>
          </div>
          <div className='into'>
            <p className='ion'> 5.Prototype</p>
            <div className='pts'>
              <p>15</p>
              <p>40pts</p>
            </div>
          </div>
          <div className='into'>
            <p className='ion'> 6.Data Analysis</p>
            <div className='pts'>
              <p>15</p>
              <p>50pts</p>
            </div>
          </div>
      </div>
    </div>
  )
}
export default Mainbar