import React, { useState} from 'react'
//import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { MdModeEditOutline } from 'react-icons/md'

import './Profile.css'
import profile from '../../../assets/images/profile.png'
import store from '../../../assets/images/stock.jpg'
import Modal from '../../../components/profile-modal/Modal'
import Navigation from '../../../components/navigation/Navigation'

const Profile = () => {
  const [openModal, setOpenModal] = useState(false);

  const user = useSelector((state) => state.userLogin)
  const { userInfo } = user

  return (
    <>
      <Navigation />
      <div className="profile-container">
        <img className="profile-cover-image" src={store} alt="" />
        <img className='profile-image' src={profile} alt="" />
        <h1>{userInfo.name}</h1>
        <button onClick={() => setOpenModal(true)} ><MdModeEditOutline /></button>
        <Modal 
           open={openModal} 
           onClose={() => setOpenModal(false)}
        />
      </div>
    </>
  )
}

export default Profile