import React, { useState} from 'react'
//import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { MdModeEditOutline } from 'react-icons/md'

import './Profile.css'
import store from '../../../assets/images/stock.jpg'
import Modal from '../../../components/profile-modal/Modal'
import Navigation from '../../../components/navigation/Navigation'
import Student from '../../../components/student-profile/Student'
import Information from '../../../components/user-information/Information'
import Sold from '../../../components/sold-items/Sold'
import About from '../../../components/about/About'

const Profile = () => {
  const [openModal, setOpenModal] = useState(false)
  const [togglestate, SetTogglestate] = useState(1)

  const user = useSelector((state) => state.userLogin)
  const { userInfo } = user

  const toggleTab = (index) => {
    SetTogglestate(index)
  }

  return (
    <>
      <Navigation />
      <div className="profile-container">
        <img className="profile-cover-image" src={store} alt="" />
        <img className='profile-image' src={userInfo.avatar} alt="" />
        <h1>{userInfo.name}</h1>
        <button onClick={() => setOpenModal(true)} ><MdModeEditOutline /></button>
        <Modal 
           open={openModal} 
           onClose={() => setOpenModal(false)}
        />
      </div>
      <hr />
      <div className="toggle-wrapper">
        <div className='toggle-text'>
          <div
            className={togglestate === 1 ? "tab-active" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Student
          </div>
          <div
            className={togglestate === 2 ? "tab-active" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Information
          </div>
            <div 
              className={togglestate === 3 ? "tab-active" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              Sold
            </div>
            <div 
              className={togglestate === 4 ? "tab-active" : "tabs"}
              onClick={() => toggleTab(4)}
            >
              About
            </div>
        </div>
        <div>
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