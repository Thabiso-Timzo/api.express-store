import React from 'react'
import { useSelector } from "react-redux"

import './Chats.css'
import Navigation from '../../../components/navigation/Navigation'

const Chats = () => {
  const { user } = useSelector((state) => state.user)
  return (
    <>
      <Navigation />
      {user ? (
        <div className="unauthorised">
          <h1>Unauthorised</h1>
          <p>You need to login in order you for to access this page</p>
        </div>
      ): (
        <div className="Chat">
          <div className="Left-side-chat">
            <div className="Chat-container">
              <h2>Chats</h2>
              <div className="Chat-list">
                Conversations
              </div>
            </div>
          </div>
          <div className="Right-side-chat">
            Right side
          </div>
        </div>
      )}  
    </>
  )
}

export default Chats