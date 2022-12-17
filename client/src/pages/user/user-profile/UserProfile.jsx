import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { AiFillCamera } from 'react-icons/ai'

import './UserProfile.css'
import picture from '../../../assets/user/user.png'
import { isLength, isMatch } from '../../../utils/validation/Validation'
import { userUpdateAction } from '../../../actions/user-actions/userActions'

const UserProfile = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [avatar, setAvatar] = useState('')

  const dispatch = useDispatch()

  const user = useSelector((state) => state.userLogin)
  const { userInfo, error } = user

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
    <>
        <div className="profile-wrapper">
          <div className="back">
            <Link to='/profile'>
              <BsFillArrowLeftCircleFill color={'#0083A0'}/>
            </Link>
            <form>
              <div className="avatar-2">
                <img className='profile-image-2' src={user ? user.avatar: picture} alt="" />
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
              <div className="form-box-2">
                <div className="form-group-2">
                  <span>name</span>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    defaultValue={userInfo.name} 
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group-2">
                  <span htmlFor="email">Email</span>
                  <input 
                    type="text" 
                    name="email" 
                    id="email" 
                    defaultValue={userInfo.email} 
                    placeholder="Enter your email address"
                    disabled
                  />
                </div>
                <div className="form-group-2">
                  <span htmlFor="email">New password</span>
                  <input 
                    type="password" 
                    name="password" 
                    id="password"  
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group-2">
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
        </div>
    </>
  )
}

export default UserProfile