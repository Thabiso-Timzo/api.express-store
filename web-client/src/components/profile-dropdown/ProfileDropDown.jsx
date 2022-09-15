import React from 'react'
import  { Link } from 'react-router-dom'
import { MdLogout, MdLogin, MdAppRegistration } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'

import './ProfileDropDown.css'
import defImag from '../../assets/images/profile.png'

const UserProfile = ({ open }) => {
  return (
    <div className="profile-menu">
        {open ? <div className="profile-profile-menu">
             <div className="profile-prof">
                 <img src={defImag} alt='' />
                 <div className="info">
                     <h2>Thabiso Hlatshwayo</h2>
                 </div>
             </div>
             <ul>
                 <li>
                    <Link to="/profile" className="profile-btn">
                        <CgProfile className="profile-icon"/>
                        Profile
                    </Link>
                 </li>
                 <li>
                    <Link to="/login" className="profile-btn">
                        <MdLogin className="profile-icon"/>
                        Login
                    </Link>
                 </li>
                 <li>
                    <Link to="/register" className="profile-btn">
                        <MdAppRegistration className="profile-icon"/>
                        Register
                    </Link>
                 </li>
                 <li>
                     <button className="profile-btn">
                        <MdLogout className="profile-icon" />
                         Logout
                    </button>
                 </li>
             </ul>
             
        </div>: null }
    </div>
  )
}

export default UserProfile