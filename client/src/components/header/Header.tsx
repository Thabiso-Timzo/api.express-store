import React from 'react'
import { Link  } from 'react-router-dom'
import { FaBars, FaSearch } from 'react-icons/fa'
import { MdFavorite, MdShoppingCart } from 'react-icons/md' 

import logo from '../../assets/logo.png'
import AccDropdown from '../acc-dropdown/AccDropdown'
import './Header.scss'

const Header = () => {
  return (
    <>
      <header className="nav">
        <div className="container">
          <div className="item-container">
          <div className="bars">
            <FaBars />
          </div>
          <div className="col-1">
            <Link to='/'>
              <img  src={logo} alt="" />
            </Link>
          </div>
          <div className="cart-group">
            <div className="search">
              <FaSearch />
            </div>
            <div className="cart">
              <MdShoppingCart />
            </div>
          </div>
          <div className="co1-2">
            <div className="upper-links">
              <div className='dropdown'>
                <AccDropdown /> 
              </div>
              <div className='favourite'>
                <Link to='/wishlist'>
                  <MdFavorite className='icons'/>
                </Link>
              </div>
              <div className='cart'>
                <Link to='/cart'>
                  <MdShoppingCart className='icons'/>
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
     <header className='mobile'>
      <div className="container">
        <div className="close">x</div>
      </div>
     </header>
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