import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux"

import './Chats.css'
import Navigation from '../../../components/navigation/Navigation'
import { utiliseChat } from '../../../api/chatRequest'
import Conversation from '../../../components/conversation/Conversation'

const Chats = () => {
  const [chats, setChats] = useState([])

  const user = useSelector((state) => state.userLogin)
  const { userInfo } = user

  useEffect(() => {
    const getChats = async () => {
      try {
        const {data} = await utiliseChat(user._id)
        setChats(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getChats()
  }, [user]) 

  return (
    <>
      <Navigation />
      {userInfo ? (
        <div className="Chat">
           <div className="Left-side-chat">
              <div className="Chat-container">
                <h2>Chats</h2>
                <div className="Chat-list">
                  {chats.map((chat, index) => {
                    return (
                      <div key={index}>
                        <Conversation data={chat} currentUserId={user._id} />
                      </div>
                    )
                  })}
                </div>
              </div>
          </div>
          <div className="Right-side-chat">
            Right side
          </div>
        </div> 
      ) : (
        <div className="unauthorised">
          <h1>Unauthorised</h1>
          <p>You need to login in order you for to access this page</p>
        </div>
      )}  
    </>
  )
}

export default Chats

