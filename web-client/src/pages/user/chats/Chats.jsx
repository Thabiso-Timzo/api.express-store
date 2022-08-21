import React from 'react'

import './Chats.css'
import Navigation from '../../../components/navigation/Navigation'

const Chats = () => {
  return (
    <>
        <Navigation />
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
    </>
  )
}

export default Chats