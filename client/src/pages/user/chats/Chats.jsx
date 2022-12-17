import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux"

import './Chats.css'
import { userChats } from '../../../api/chatRequest'
import Conversation from '../../../components/conversation/Conversation'

const Chats = () => {
  const [chats, setChats] = useState([])

  const user = useSelector((state) => state.userLogin)
  const { userInfo } = user

  useEffect(() => {
    const getChats = async () => {
      try {
        const {data} = await userChats(userInfo._id)
        setChats(data)
      } catch (error) {
        console.log(error)
      }
    }
    getChats()
  }, [userInfo ]) 

  return (
    <>
      <div className="top"></div>
      <div className="Chat">
        <div className="Left-side-chat">
          <div className="Chat-container">
            <h2>Chats</h2>
            <div className="Chat-list">
              {chats.map((chat, index) => {
                return (
                  <div key={index}>
                    <Conversation data={chat} currentUserId={userInfo._id} />
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
    </>
  )
}

export default Chats

