import React from 'react'
import { Link } from 'react-router-dom';

import './Header.scss'
import logo from '../../assets/logo.png'
import WebHeader from '../web-header/WebHeader';
import Search from '../search/Search';

const Header = () => {
  return (
    <div className='header-container'>
      <div className="left-container">
        <Link to={'/'}>
          <img src={logo} alt="" />
        </Link>
      </div>
      <div>
        <Search />
      </div>
      <div className='right-container'>
        <WebHeader />
      </div>
    </div>
  )
}

export default Header