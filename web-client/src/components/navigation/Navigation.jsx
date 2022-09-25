import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { HiOutlineChat } from 'react-icons/hi'
import { BsHeart, BsShop } from 'react-icons/bs'
import { GiShoppingCart } from 'react-icons/gi'
import { MdOutlineSell } from 'react-icons/md'
import { useSelector } from 'react-redux'

import './Navigation.css'
import img1 from '../../assets/logo/Gude.png'
import profile from '../../assets/images/profile.png'
import UserProfile from '../profile-dropdown/ProfileDropDown'
import defImag from '../../assets/images/profile.png'

const Navigation = () => {
    const [open, setOpen] = useState(false)
    // Initialise useNavigation hook
    const navigate = useNavigate()

    // Navigate to the products page
    const home = () => navigate('/')

    const { user } = useSelector((state) => state.auth)

    // Check if its a student or a seller
    const sellOnGude = async (e) => {
        e.preventDefault()
    }

  return (
    <>
        <nav className='top-nav'>
            <img onClick={home} src={img1} alt="" />
            <ul className='top-ul'>
                {user ? (<li><button onClick={sellOnGude}><MdOutlineSell /> sell on gude</button></li>) : null}
                <li><Link to='/search'><FiSearch /></Link></li>
                {user ? (<li><Link to='/chat'><HiOutlineChat /></Link></li>) : null}
                <li><Link to='/wish-list'><BsHeart /></Link></li>
                <li><Link to='/cart'><GiShoppingCart /></Link></li>
                <li>
                    <div className="profile-action" onClick={() => setOpen(!open)}>
                        <UserProfile  open={open} />
                        <img src={defImag} alt=''/>
                    </div>
                </li>
                
            </ul>
        </nav>
        
        <nav className='bottom-nav'>
            <ul className='bottom-ul'>
                <li><Link to='/'><BsShop /></Link></li>
                {user ? (<li><Link to='/chat'><HiOutlineChat /></Link></li>) : null}
                {user ? (<li><Link to='#' onClick={sellOnGude}><MdOutlineSell /></Link></li>) : null}
                <li><Link to='/wish-list'><BsHeart /></Link></li>
                <li><Link to='/cart'><GiShoppingCart /></Link></li>
                <li><Link to='/profile'><img src={profile} alt='' /></Link></li>
            </ul>
        </nav>
    </>
  )
}

export default Navigation