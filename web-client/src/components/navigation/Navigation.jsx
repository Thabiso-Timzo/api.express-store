import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { HiOutlineChat } from 'react-icons/hi'
import { BsHeart } from 'react-icons/bs'
import { GiShoppingCart } from 'react-icons/gi'
import { MdOutlineDashboard, MdOutlineSell } from 'react-icons/md'

import './Navigation.css'
import img1 from '../../assets/logo/Gude.png'
import profile from '../../assets/images/profile.png'

const Navigation = () => {
    // Initialise useNavigation hook
    const navigate = useNavigate()

    // Navigate to the dashboard page
    const home = () => navigate('/dashboard')

    // Check if its a student or a seller
    const sellOnGude = async (e) => {
        e.preventDefault()
        //await post('/auth/check-student',{
            //_user_id : _user_id
        //}).then(resp => {
            //if (!resp.data.isStudent) {
                //navigate('/student-register')
            //}else{
                //navigate('/add')
            //}
        //})
    }

  return (
    <>
        <nav className='top-nav'>
            <img onClick={home} src={img1} alt="" />
            <ul className='top-ul'>
                <li><button onClick={sellOnGude}><MdOutlineSell /> sell on gude</button></li>
                <li><Link to='/search'><FiSearch /></Link></li>
                <li><Link to='/chat'><HiOutlineChat /></Link></li>
                <li><Link to='/wish-list'><BsHeart /></Link></li>
                <li><Link to='/cart'><GiShoppingCart /></Link></li>
                <li><Link to='/profile'><img src={profile} alt='' /></Link></li>
            </ul>
        </nav>
        
        <nav className='bottom-nav'>
            <ul className='bottom-ul'>
                <li><Link to='/dashboard'><MdOutlineDashboard /></Link></li>
                <li><Link to='/chat'><HiOutlineChat /></Link></li>
                <li><Link to='#' onClick={sellOnGude}><MdOutlineSell /></Link></li>
                <li><Link to='/wish-list'><BsHeart /></Link></li>
                <li><Link to='/cart'><GiShoppingCart /></Link></li>
                <li><Link to='/profile'><img src={profile} alt='' /></Link></li>
            </ul>
        </nav>
    </>
  )
}

export default Navigation