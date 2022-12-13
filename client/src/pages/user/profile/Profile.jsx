import React, { useState} from 'react'
//import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
// 4:11:53
import './Profile.css'
import Navigation from '../../../components/navigation/Navigation'
import UserDetails from '../../../components/user/UserDetails'
import Student from '../../../components/student-profile/Student'
import Information from '../../../components/user-information/Information'
import Sold from '../../../components/sold-items/Sold'
import About from '../../../components/about/About'

const Profile = () => {
  const [togglestate, SetTogglestate] = useState(0)

  const user = useSelector((state) => state.userLogin)
  const { userInfo } = user

  const toggleTab = (index) => {
    SetTogglestate(index)
  }

  return (
    <>
      <Navigation />
      <div className="toggle-wrapper">
        <div className='toggle-text'>
          <button 
            className={togglestate === 0 ? "tab-active" : "tabs"}
            onClick={() => toggleTab(0)}
          >
            User
          </button> 
          <button
            className={togglestate === 1 ? "tab-active" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Student
          </button>
          <button
            className={togglestate === 2 ? "tab-active" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Information
          </button>
          <button 
            className={togglestate === 3 ? "tab-active" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Sold
          </button>
          <button 
            className={togglestate === 4 ? "tab-active" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            About
          </button>
        </div>
        <div>
          {togglestate === 0 && <UserDetails user={userInfo} />}
          {togglestate === 1 && <Student />}
          {togglestate === 2 && <Information />}
          {togglestate === 3 && <Sold />}
          {togglestate === 4 && <About />}
        </div>
      </div>
    </>
  )
}

export default Profile