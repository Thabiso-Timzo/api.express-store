import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './Profile.css'
import Navigation from '../../../components/navigation/Navigation'

const Profile = () => {
  const { user } = useSelector((state) => state.user)

  return (
    <>
      <Navigation />
      {user ? (
        <div className="profile-no-user-container">
          <h1>Unauthorised!!! please login to access this page.</h1>
          <div className="profile-no-user-link">
            <div className="profile-login">
              <Link to='/login'><p>Login</p></Link>
            </div> 
            <div className="profile-register">
              <Link to='/register'><p>Register</p></Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          user
        </>
        )}
    </>
  )
}

export default Profile