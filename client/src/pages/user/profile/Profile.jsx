import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// 4:11:53
import './Profile.css'
import Navigation from '../../../components/navigation/Navigation'
import UserDetails from '../../../components/user/UserDetails'
import Student from '../../../components/student-profile/Student'
import Information from '../../../components/user-information/Information'
import Sold from '../../../components/sold-items/Sold'
import About from '../../../components/about/About'
import { logout } from '../../../actions/user-actions/userActions'

const Profile = () => {
  const [togglestate, SetTogglestate] = useState(0)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const user = useSelector((state) => state.userLogin)
  const { userInfo, error } = user

  const toggleTab = (index) => {
    SetTogglestate(index)
  }

  const toggleTabHandler = (index, path) => {
    SetTogglestate(index)
    navigate(`/profile/${path}`)
  }

  const logoutHandler = (index) => {
    SetTogglestate(index)
    dispatch(logout())
    navigate('/')
};

  return (
    <>
      <div className="toggle-wrapper">
        <div className='toggle-text'>
          <button 
            className={togglestate === 0 ? "tab-active" : "tabs"}
            onClick={() => toggleTab(0)}
          >
            Edit user
          </button> 
          <button
            className={togglestate === 1 ? "tab-active" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            student
          </button>
          <button
            className={togglestate === 2 ? "tab-active" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            View Profile
          </button>
          <button 
            className={togglestate === 3 ? "tab-active" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Sold Items
          </button>
          <button 
            className={togglestate === 4 ? "tab-active" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            About
          </button>
        </div>
        <div>
          {togglestate === 0 && <UserDetails user={userInfo} dispatch={dispatch} error={error} />}
          {togglestate === 1 && <Student />}
          {togglestate === 2 && <Information />}
          {togglestate === 3 && <Sold />}
          {togglestate === 4 && <About />}
        </div>
        <div className="mobile-toggle-text">
          <button 
            className={togglestate === 0 ? "tab-active" : "tabs"}
            onClick={() => toggleTabHandler(0, 'user')}
          >
            Edit user
          </button> 
          <button
            className={togglestate === 1 ? "tab-active" : "tabs"}
            onClick={() => toggleTabHandler(1, 'student')}
          >
            student 
          </button>
          <button
            className={togglestate === 2 ? "tab-active" : "tabs"}
            onClick={() => toggleTabHandler(2, 'view')}
          >
            View profile
          </button>
          <button 
            className={togglestate === 3 ? "tab-active" : "tabs"}
            onClick={() => toggleTabHandler(3, 'sold')}
          >
            Sold items
          </button>
          <button 
            className={togglestate === 4 ? "tab-active" : "tabs"}
            onClick={() => toggleTabHandler(4, 'student')}
          >
            Student registration
          </button>
          <button 
            className={togglestate === 5 ? "tab-active" : "tabs"}
            onClick={() => logoutHandler(5)}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  )
}

export default Profile