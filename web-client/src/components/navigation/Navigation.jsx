import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FiSearch } from 'react-icons/fi'
import { HiOutlineChat } from 'react-icons/hi'
import { BsHeart, BsShop } from 'react-icons/bs'
import { GiShoppingCart } from 'react-icons/gi'
import { MdOutlineSell } from 'react-icons/md'
import { IoPersonCircleOutline } from 'react-icons/io5'

import './Navigation.css'
import img1 from '../../assets/logo/Gude.png'
import UserProfile from '../profile-dropdown/ProfileDropDown'

const Navigation = () => {
    const [open, setOpen] = useState(false)
    // Initialise useNavigation hook
    const navigate = useNavigate()

    // Navigate to the products page
    const home = () => navigate('/')

    const user = useSelector((state) => state.userLogin)
    const { userInfo } = user

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart

    const sellOnGude = async (e) => {
        e.preventDefault()
    }

  return (
    <>
        <nav className='top-nav'>
            <img onClick={home} src={img1} alt="" />
            <ul className='top-ul'>
                {userInfo ? <li><button onClick={sellOnGude}><MdOutlineSell /> sell on gude</button></li> : null} 
                <li><Link to='/search'><FiSearch /></Link></li>
                {userInfo ? <li><Link to='/chat'><HiOutlineChat /></Link></li> : null}
                {userInfo ? <li><Link to='/wish-list'><BsHeart /></Link></li> : null}
                <li><Link to='/cart'>
                    <GiShoppingCart />
                    <span className="badge">{cartItems.length}</span>
                    </Link></li>
                <li>
                    <div className="profile-action" onClick={() => setOpen(!open)}>
                        <UserProfile  open={open} />
                        {userInfo ?  <img  src={img1} alt=""/>: <IoPersonCircleOutline  size={23}/> }
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
                <li>
                    <Link to='/profile'>
                        {userInfo ? <img src={img1} alt=''/> : <IoPersonCircleOutline  size={23}/>} 
                    </Link> 
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navigation

// 3:36:25