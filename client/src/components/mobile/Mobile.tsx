import React, { Dispatch, SetStateAction } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-router-dom'

import './mobile.scss'
import { 
    cart,
    wishlist,
    links,
    authentication
} from '../links/MobileNavigation';
import logo from '../../assets/logo.png'

type mobileProps = {
    handleClick: Dispatch<SetStateAction<any>>,
    mobileNav: boolean,
}

const Mobile = ({ handleClick, mobileNav }: mobileProps) => {
  return (
    <header className={window.innerWidth < 768 ? 'mobile' : ''}>
    <div className={mobileNav ? 'container' : 'none'}>
      <div className={mobileNav ? "top-section" : 'none'}>
        <img src={logo} alt="logo" />
        <div onClick={handleClick} className="close"><RxCross2 /></div>
      </div>
      <div className={mobileNav ?"nav-section": "none"}>
        <div className="links">
          <div className="link">
            {links.map(link => (
              <Link to={link.url} key={link.id}>
                <link.icon className='icon' />
                <p>{link.name}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="btn-links">
          <div className="link">
            <Link to=''>
              <cart.icon size={20} color='#019AB8' />
              <p>0 items</p>
            </Link>
          </div>
          <div className="link">
            <Link to=''>
              <wishlist.icon size={20} color='#FF3E3E' />
            </Link>
          </div>
        </div>
        <div className="auth-btn-links">
          <div className="auth">
            {authentication.map(link => (
              <Link to={link.url} key={link.id}>
                <link.icon className='icon' />
                <p>{link.name}</p> 
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
   </header>
  )
}

export default Mobile