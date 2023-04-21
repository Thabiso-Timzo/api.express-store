import React, { useState } from 'react'
import { Link  } from 'react-router-dom'

import './Header.scss'
import logo from '../../assets/logo.png'
import Mobile from '../mobile/Mobile'
import AccDropdown from '../acc-dropdown/AccDropdown'
import { 
  bars, 
  search, 
  cart,
  wishlist,
 } from '../links/MobileNavigation';

const Header = () => {
  const [mobileNav, setMobileNav] = useState<boolean>(false)

  const handleClick = () => {
    setMobileNav(!mobileNav)
  }

  return (
    <>
      <header className="nav">
        <div className="container">
          <div className="item-container">
          <div className="bars" onClick={handleClick}>
            <bars.icon />
          </div>
          <div className="col-1">
            <Link to='/'>
              <img  src={logo} alt="" />
            </Link>
          </div>
          <div className="cart-group">
            <div className="search">
              <search.icon />
            </div>
            <div className="cart">
              <cart.icon />
            </div>
          </div>
          <div className="co1-2">
            <div className="upper-links">
              <div className='dropdown'>
                <AccDropdown /> 
              </div>
              <div className='favourite'>
                <Link to='/wishlist'>
                  <wishlist.icon className='icons'/>
                </Link>
              </div>
              <div className='cart'>
                <Link to='/cart'>
                  <cart.icon className='icons'/>
                  <div>
                    <span>0</span>
                  </div>
                </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </header>
     <header className='second-nav'>
      Thabiso
     </header>
     <Mobile handleClick={handleClick} mobileNav={mobileNav} />
    </>
  )
}

export default Header

// // <div className="col-5">
// <div className="input-group">
// <input type="text" className="form-control py-2" placeholder="Search product" aria-label="Search product" aria-describedby="basic-addon2" />
// <span className="input-group-text p-1" id="basic-addon2"><BsSearch className='fs-6' /></span>
// </div>
// </div>