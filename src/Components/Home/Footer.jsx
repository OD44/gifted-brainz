import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <h1>Join Our Newsletter</h1>
      <div className="in">
        <input type="email" placeholder="Hello@Smartquiz.com" />
        <button>JOIN NOW</button>
      </div>
      <div className="info">
        <div className="pro">
          <div><h2>Product</h2></div>
          <div className="pro1">
            <p>Courses</p>
            <p>Quiz</p>
            <p>Refer Program</p>
            <p>Spin Reward</p>
          </div>
        </div>
        <div className="ab">
          <div><h2>About</h2></div>
          <div className="ab1">
            <p>What We Do</p>
            <p>Our Mission</p>
            <p>Contact Us</p>
            <p>FAQ</p>
            <p>Privacy & Policy</p>
          </div>
        </div>
        <div className="sour">
          <div><h2>Resources</h2></div>
          <div className="sour1">
            <p>Docs</p>
            <p>Careers</p>
            <p>Blogs</p>
          </div>
        </div>
      </div>
        <p>
          © 2022 copyright by smartquiz. all right reserved.
        </p>
    </div>
  )
}

export default Footer