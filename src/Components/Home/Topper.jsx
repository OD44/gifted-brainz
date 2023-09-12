// import React, { useState } from 'react'
// import './Topper.css'
// import pics from '../Images/Gifted-Brainz-PNG (1).png'

// const Topper = () => {
//     const [toggle, setToggle] = useState(false)
//     const handleClick = ()=>{
//         setToggle(!toggle)
//     }
//   return (
//     <nav>
//         <div className='desktop-screen'>
//             <a href=""><img src={pics} alt="" /></a>
//             <div className="menu">
//                 <a href="">Course</a>
//                 <a href="">Career</a>
//                 <a href="">About Us</a>
//                 <div>
//                     <a href=""><button className="btn">Sign in</button></a>
//                 </div>
//             </div>
//             <div className='mobile_btn'>
//                 <button onClick={handleClick}>=</button>
//             </div>
//         </div>
         
        
//         <div className = {toggle?"mobile_sub" : "mobile_menu"}>
//             <a href="">Course</a>
//             <a href="">Career</a>
//             <a href="">About Us</a>
//             <a href=""><button className='btn'>Sign Up</button></a>
//         </div>
//     </nav>
//   )
// }

// export default Topper