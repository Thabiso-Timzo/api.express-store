import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MdCategory, MdArrowDropUp, MdArrowDropDown } from 'react-icons/md';

import './Header.scss'
import logo from '../../../assets/logo.png'
import WebHeader from '../web-header/WebHeader';
import Search from '../search/Search';
import MobileHeader from '../mobile-header/MobileHeader'
import { navLinks2 } from '../nav-links/Nav-links'

const category = ["Electronics", "Furniture", "Kitchen-ware"]

const Header = () => {
  const [value, setValue] = useState('Shop Category')
  const [open, setOpen] = useState(false)
  const [nav, setNav] = useState(false)

  const onElementClicked = (string) => {
    setValue(string)
  }

  const onButton = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <>
    <div className='header-wrapper'>
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
          <WebHeader handleNav={handleNav} />
        </div>
      </div>
      <div className="secondary-container">
        <div className="secondary-wrapper">
          <div className="drop-dwown">
            <div className="button-group">
              <MdCategory size={30} />
              <button onClick={() => onButton()}>
                <p>{value}</p>
                <span>{open ? <MdArrowDropUp size={20} /> : <MdArrowDropDown size={20} />}</span>
              </button>
            </div>
            {
              open && <div className="content">
              {
                category.map((item, index) => {
                  return (
                    <p key={index} onClick={() => onElementClicked(item)}>{item}</p>
                  )
                })
              }
            </div>
            }
          </div>
          <div className="navigation">
            <ul>
              {navLinks2.map((page, index) => {
                return (
                  <Link to={page.path}>
                    <li>{page.title}</li>
                  </Link>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
    <MobileHeader nav={nav} handleNav={handleNav} setNav={setNav} />
    </>
  )
}

export default Header