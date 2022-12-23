import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { HiOutlineChat } from 'react-icons/hi'
import { BsHeart, BsShop, BsChatFill, BsFillHeartFill, BsCartFill } from 'react-icons/bs'
import { GiShoppingCart, GiArchiveRegister } from 'react-icons/gi'
import { MdOutlineSell, MdLogin } from 'react-icons/md'
import { IoPersonCircleOutline } from 'react-icons/io5'

import './Navigation.css'
import express from '../../assets/logo/express.png'
import avatar from '../../assets/user/user.png'
import UserProfile from '../profile-dropdown/ProfileDropDown'

const Navigation = () => {
    const [open, setOpen] = useState(false)
    const [toggleState, setToggleState] = useState(0)
    // Initialise useNavigation hook
    const navigate = useNavigate()

    // Navigate to the products page
    const home = () => navigate('/')

    const user = useSelector((state) => state.userLogin)
    const { userInfo } = user

    const toggleIcon = (index, path) => {
        setToggleState(index)
        navigate(`/${path}`)
    }

    const sellOnGude = async (e) => {
        e.preventDefault()
    }

  return (
    <>
        <nav className='top-nav'>
            <img onClick={home} className='home' src={express} alt="" />
            <ul className='top-ul'>
                {userInfo ? (
                    <li>
                        <button onClick={() => toggleIcon(1, 'chat')} className={toggleState === 1 ? 'icon-active' : 'icon-inactive'}>
                            <BsChatFill />
                        </button>
                    </li>) 
                    : (null)
                }
                {userInfo ? (
                    <li>
                        <button onClick={() => toggleIcon(2, 'wish-list')} className={toggleState === 2 ? 'icon-active' : 'icon-inactive'}>
                            <BsFillHeartFill />
                        </button>
                    </li>) 
                    : (null)
                }
                <li>
                    <button onClick={() => toggleIcon(3, 'cart')} className={toggleState === 3 ? 'icon-active' : 'icon-inactive'}>
                        <BsCartFill />
                    </button>
                </li>
                <li>
                    <div className="profile-action" onClick={() => setOpen(!open)}>
                        <UserProfile  open={open} />
                        {userInfo ?  <img classname="list-image" src={userInfo ? userInfo.avatar : avatar} alt=""/>: <IoPersonCircleOutline  size={23}/> }
                    </div>
                </li> 
            </ul>
        </nav>
        
        <nav className={userInfo ? 'bottom-nav' : 'no-user'}> 
            <ul className='bottom-ul'>
                <li><Link to='/'><BsShop /></Link></li>
                {userInfo ? <li><Link to='/chat'><HiOutlineChat /></Link></li> : null}
                {userInfo ? <li><Link to='#' onClick={sellOnGude}><MdOutlineSell /></Link></li> : null}
                {userInfo ? <li><Link to='/wish-list'><BsHeart /></Link></li> : null}
                <li><Link to='/cart'><GiShoppingCart /></Link></li>
                {userInfo ? (
                    <li>
                        <Link to='/profile'>
                            {userInfo ? <img style={{width: 18, height: 18, border: '1px solid white', borderRaduis: 50}} src={userInfo ? userInfo.avatar : avatar}  alt=''/> : <IoPersonCircleOutline  size={23}/>} 
                        </Link> 
                    </li>
                ) : null}
                {userInfo ? null : <li><Link to='/login'><MdLogin /></Link></li>}
                {userInfo ? null : <li><Link to='/register'><GiArchiveRegister /></Link></li>}
            </ul>
        </nav>
    </>
  )
}

export default Navigation

// 3:36:25