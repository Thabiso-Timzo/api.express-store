import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsHeart, BsCart3, BsSearch, BsChatDots } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { BiLogOut } from 'react-icons/bi'

import './NavBar.css'
import logo from '../../images/logo.png'

const NavigationBar = () => {
    const [show, setShow] = useState(true);
    const navigate = useNavigate();

    const showSwitch = () => {
        return setShow(!show);
    }

    const logoLink = () => {
        navigate('/products')
    }

  return (
    <div className="navbar"> 
        <div className="logo">
            <img onClick={logoLink} src={logo} alt=""/>
        </div>
        <div className={show ? "links active" : "links"}>
            <button>Sell on Gude</button>
            <Link onClick={() => showSwitch()} to="/search"><BsSearch size={25} /></Link> 
            <Link onClick={() => showSwitch()} to="/message"><BsChatDots size={25} /></Link> 
            <Link onClick={() => showSwitch()} to="/favourites"><BsHeart size={25} /></Link>
            <Link onClick={() => showSwitch()} to="/cart"><BsCart3 size={25} /></Link>
            <Link onClick={() => showSwitch()} to="/profile"><CgProfile size={25} /></Link>
            <i className='logout'><BiLogOut size={25} /></i>
        </div>
        <div 
            className={show ? "bars-button active" : "bars-button"} 
            onClick={() => showSwitch()}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
  )
}

export default NavigationBar