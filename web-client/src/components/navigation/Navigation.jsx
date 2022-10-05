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

    const auth = useSelector(state => state.auth)
    
    const { user, isLogged } = auth

    // Check if its a student or a seller
    const sellOnGude = async (e) => {
        e.preventDefault()
    }

  return (
    <>
        <nav className='top-nav'>
            <img onClick={home} src={img1} alt="" />
            <ul className='top-ul'>
                {isLogged ?  <li><button onClick={sellOnGude}><MdOutlineSell /> sell on gude</button></li> : null}
                <li><Link to='/search'><FiSearch /></Link></li>
                {isLogged ? <li><Link to='/chat'><HiOutlineChat /></Link></li> : null}
                <li><Link to='/wish-list'><BsHeart /></Link></li>
                <li><Link to='/cart'><GiShoppingCart /></Link></li>
                <li>
                    <div className="profile-action" onClick={() => setOpen(!open)}>
                        <UserProfile  open={open} />
                        {isLogged ? <img src={user.avatar} alt=''/> : <IoPersonCircleOutline  size={23}/>}
                    </div>
                </li> 
            </ul>
        </nav>
        
        <nav className={isLogged ? 'bottom-nav' : 'no-user'}> 
            <ul className='bottom-ul'>
                <li><Link to='/'><BsShop /></Link></li>
                {isLogged ? <li><Link to='/chat'><HiOutlineChat /></Link></li> : null}
                {isLogged ? <li><Link to='#' onClick={sellOnGude}><MdOutlineSell /></Link></li> : null}
                <li><Link to='/wish-list'><BsHeart /></Link></li>
                <li><Link to='/cart'><GiShoppingCart /></Link></li>
                <li><Link to='/profile'>
                        {isLogged ? <img src={user.avatar} alt=''/> : <IoPersonCircleOutline  size={23}/>}
                    </Link>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navigation