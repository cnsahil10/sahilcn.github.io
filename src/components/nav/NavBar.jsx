import React from 'react'
import './nav.css'
import sahilcn from '../nav/Sahilcn-Resume.pdf'
const NavBar = () => {
  return (
    <div>
      <div className="nav-container">
        <div className="nav-bar">
            <div className="section-left">
                 <h1>Developer</h1>
            </div>
            <div className="section-right">
                  <ul className='flex-nav'>
                    {/* <li><h1>About</h1></li>
                    <li><h1>Projects</h1></li>
                    <li><h1>Contact</h1></li> */}
                    <h1 className='cv'><a href={sahilcn}>Get my CV</a></h1>
                  </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
