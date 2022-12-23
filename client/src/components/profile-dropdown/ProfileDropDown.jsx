import React from 'react'
import  { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { MdLogout, MdLogin, MdAppRegistration } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'

import './ProfileDropDown.css'
import avatar from '../../assets/user/user.png'
import { logout } from '../../actions/user-actions/userActions'

const UserProfile = ({ open }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.userLogin)
    const { userInfo } = user

    const logoutHandler = () => {
        dispatch(logout())
        navigate('/')
    };

  return (
    <div className="profile-menu">
        {open ? (<div className="profile-profile-menu">
            {userInfo ?  (
                <div className="profile-prof">
                    <img src={userInfo ? userInfo.avatar : avatar} alt={''} />
                    <div className="info">
                        <h2>{userInfo.name}</h2>
                    </div>
                </div> ) : null}
            {userInfo ? (
                <>
                    <ul>
                        <li>
                            <Link to="/profile" className="profile-btn">
                                <CgProfile className="profile-icon"/>
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link to="/student" className="profile-btn">
                                <CgProfile className="profile-icon"/>
                                Student register
                            </Link>
                        </li>
                        <li>
                            <button className="profile-btn" onClick={logoutHandler}>
                                <MdLogout className="profile-icon" />
                                Logout
                            </button>
                        </li>
                    </ul>
                </>
            ) : (
                <>
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
                </>
            )}
        </div>) : null}
    </div>
  )
}

export default UserProfile