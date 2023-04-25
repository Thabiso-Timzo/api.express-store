import React, { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom';

import './WebView.scss'
import { 
    bars, 
    search, 
    cart,
    wishlist,
} from '../links/MobileNavigation';
import logo from '../../assets/logo.png'
import AccDropdown from '../acc-dropdown/AccDropdown'

type WebViewProps = {
    handleClick: Dispatch<SetStateAction<any>>,
    mobileNav: boolean,
}

const WebView = ({ handleClick, mobileNav }: WebViewProps) => {
  return (
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
  )
}

export default WebView