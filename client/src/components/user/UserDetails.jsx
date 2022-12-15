import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { AiFillCamera } from 'react-icons/ai'

import './UserDetails.css'
import picture from '../../assets/user/user.png'
import { isLength, isMatch } from '../../utils/validation/Validation'
import { userUpdateAction } from '../../actions/user-actions/userActions'

const UserDetails = ({ user, dispatch, error }) => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [avatar, setAvatar] = useState('')

  useEffect(() => {
    if (error) {
      toast.error(error)
    }
  }, [error])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!isMatch(password, password2)) {
      toast.error('Password do not match')
    }

    if (isLength(password)) {
      toast.error('Password must be at least 8 character.')
    }

    dispatch(userUpdateAction(name, avatar, password))
  }

  return (
    <div className="profile-container" style={{marginTop: 150}}>
      <form>
        <div className="avatar">
          <img className='profile-image' src={user ? user.avatar: picture} alt="" />
          <span>
            <AiFillCamera />
            <p>Change</p>
            <input 
              type="file" 
              name="file" 
              id="file_up"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
             />
          </span>
        </div>
        <div className="form-box">
          <div className="form-group">
            <span>name</span>
            <input 
              type="text" 
              name="name" 
              id="name" 
              defaultValue={user.name} 
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <span htmlFor="email">Email</span>
            <input 
              type="text" 
              name="email" 
              id="email" 
              defaultValue={user.email} 
              placeholder="Enter your email address"
              disabled
            />
          </div>
          <div className="form-group">
            <span htmlFor="email">New password</span>
            <input 
              type="password" 
              name="password" 
              id="password" 
              defaultValue={user.password} 
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <span htmlFor="email">confirm password</span>
            <input 
              type="password" 
              name="password2" 
              id="password2" 
              placeholder="Conform your email address"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
          <button onClick={handleSubmit}>Update</button>
        </div>  
        </form>    
    </div>
  )
}

export default UserDetails