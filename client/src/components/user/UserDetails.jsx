import React from 'react'
import { AiFillCamera } from 'react-icons/ai'

import './UserDetails.css'

const UserDetails = ({ user }) => {

  return (
    <div className="profile-container" style={{marginTop: 150}}>
        <div className="avatar">
          <img className='profile-image' src={user.avatar} alt="" />
          <span>
            <AiFillCamera />
            <p>Change</p>
            <input type="file" id="file_up" />
          </span>
        </div>
        <h1>{user.name}</h1>
      </div>
  )
}

export default UserDetails