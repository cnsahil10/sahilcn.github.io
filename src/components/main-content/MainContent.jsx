import React from 'react'
import './maincontent.css'
import sahilimg from '../main-content/myPortrait.jpg'
import 'animate.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const MainContent = () => {
  // Memoize social links data
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/sahilcn007",
      icon: <FaLinkedin />,
      label: "LinkedIn"
    },
    {
      href: "https://github.com/cnsahil10",
      icon: <FaGithub />,
      label: "GitHub"
    },
    {
      href: "https://www.instagram.com/esmaelesaac",
      icon: <FaInstagram />,
      label: "Instagram"
    }
  ];

  // Memoize skills list
  const skills = "javascript-python-react-node-sql-oop-c-c++-java-mongodb-html-css";

  return (
    <section className="main-content-wrapper">
      <div className="main-content">
        <div className="content-left">
            <div className='item-1' role="banner">
              <h1 className='diff'>Hi, I'm Sahil. I'm a</h1>
              <h1 className='intro'>Developer.</h1>
            </div>
            <div className='item-2'>
              <img src={sahilimg} alt="Sahil's portrait" /> {/* More descriptive alt text */}
            </div>
            <div className='item-3'> <div><h1 className='about'><i>About</i> me</h1></div><p className="desc">Grow and Help Grow</p></div>
            <a href='mailto:sahilcn87@gmail.com' className="item-4"> <p>know more</p> <h1>Contact <i>me</i></h1></a>
        </div>
        <div className="content-right">
            <div className="projects">
              <div className="reactjs">
                <div className="row-head">
                  <h1>skills</h1>
                </div>
                  <div className="row">
                    <h1>{skills}</h1>
                  </div>
                  <p className="value">I have a particular set of skills, skills that make me a valuable asset for people like you.</p>
              </div>
            </div>
            <div className="socials">
              <div className="social-links">
                {socialLinks.map(({ href, icon, label }) => (
                  <a 
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <i className={`fab fa-${label.toLowerCase()}`}>{icon}</i>
                  </a>
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(MainContent);
