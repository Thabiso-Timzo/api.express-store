import React from 'react'
import  { Link } from 'react-router-dom'
import { MdLogout, MdLogin, MdAppRegistration } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'

import './ProfileDropDown.css'

const UserProfile = ({ open }) => {

    const logoutHandler = () => {
    };

    //const { userInfo } = state;
  return (
    <div className="profile-menu">
        {open ? <div className="profile-profile-menu">
             <div className="profile-prof">
                {/* <img src={user.avatar} alt='' /> */}
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
                            <button className="profile-btn" onClick={logoutHandler}>
                                <MdLogout className="profile-icon" />
                                Logout
                            </button>
                        </li>
                    </ul>
                    <ul>
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
                    </ul>
        </div> : null}
    </div>
  )
}

export default UserProfile