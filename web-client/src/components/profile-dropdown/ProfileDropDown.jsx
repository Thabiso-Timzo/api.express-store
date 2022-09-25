import React from 'react'
import  { Link, useNavigate } from 'react-router-dom'
import { MdLogout, MdLogin, MdAppRegistration } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { useSelector, useDispatch } from 'react-redux'

import './ProfileDropDown.css'
import defImag from '../../assets/images/profile.png'
import { logout, reset } from '../../features/auth/authSlice'

const UserProfile = ({ open }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)

    const logoutHandler = () => {
        dispatch(logout());
        dispatch(reset())
        navigate('/')
    };

    //const { userInfo } = state;
  return (
    <div className="profile-menu">
        {open ? <div className="profile-profile-menu">
            {user ? (
                <div className="profile-prof">
                    <img src={defImag} alt='' />
                    <div className="info">
                        <h2>{user.name}</h2>
                    </div>
                </div>
            ) : null}
            {user ? (
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
            ) : (
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
                )}
        </div> : null}
    </div>
  )
}

export default UserProfile