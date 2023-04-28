import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaApple, FaArrowCircleUp, FaGooglePlay } from 'react-icons/fa';

import './Footer.scss'
import { socials } from '../links/SocialLinks';
import { information, account, quickLinks } from '../links/FooterLinks';

const Footer = () => {
  const [visible, setVisible] = useState<boolean>(false)

  const year: number = new Date().getFullYear();

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } else if (scrolled <= 300){
      setVisible(false)
    }
  }
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    })
  }

  window.addEventListener('scroll', toggleVisible);

  return (
    <>
      <footer>
        <div onClick={scrollToTop} className={visible ? 'arrow' : 'none'}>
          <FaArrowCircleUp  />
        </div>
        <div className="letter">
          <h3>Sign up for our news letter</h3>
          <div className="input-group">
            <input type="text" className="form-control py-2" placeholder="Email address..." />
            <span className="input-group-text p-1 cursorPointer" id="basic-addon2">Subscribe</span>
          </div>
        </div>
        <hr />
        <div className="footer-section">
          <div className="section">
            <h5>Contact us</h5>
            <ul>
              {socials.map(social => (
                <Link to={social.url}>
                  <div key={social.id} className="link">
                    <li>
                      <social.icon color={social.color} className='icon' />
                    </li>
                  </div>
                </Link>
              ))}
            </ul>
          </div>
          <div className="section">
            <h5>Information</h5>
            <ul className='information'>
              {information.map(info => (
                 <Link to={info.url}>
                    <div key={info.id}>
                      <li>{info.name}</li>
                    </div>
                 </Link> 
              ))}
            </ul>
          </div>
          <div className="section">
            <h5>Account</h5>
            <ul className='account'>
              {account.map(acc => (
                <Link to={acc.url}>
                  <div key={acc.id}>
                    <li>{acc.name}</li>
                  </div>
                </Link> 
              ))}
            </ul>
          </div>
          <div className="section">
            <h5>Quick links</h5>
            <ul className='links'>
              {quickLinks.map(link => (
                <Link to={link.url}>
                  <div key={link.id}>
                    <li>{link.name}</li>
                  </div>
                </Link> 
              ))}
            </ul>
          </div>
          <div className="section">
            <h5>Our app</h5>
            <p>Download our applications</p>
            <div className="app">
              <div className="play-store">
                <div className="icon">
                  <FaGooglePlay />
                </div>
                <div className="text">
                  <p>Get it on</p>
                  <h6>Google Play</h6>
                </div>
              </div>
              <div className="i-store">
                <div className="icon">
                  <FaApple />
                </div>
                <div className="text">
                  <p>Download on the</p>
                  <h6>Apple store</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <p>Copyright  &copy; { year } Express store</p>
      </div>
    </>
  )
}

export default Footer
