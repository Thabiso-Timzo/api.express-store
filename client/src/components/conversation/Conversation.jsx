import React, { useState, useEffect } from 'react'

import { getUser } from '../../api/userRequest';

const Conversation = ({ data, currentUserId }) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const userId = data.members.find((id) => id !== currentUserId)
        console.log(userId)
        const getUserData = async () => {
          try {
            const { data } = await getUser(userId)
            setUserData(data)
          } catch (error) {
            console.log(error)
          }
        }
        getUserData()
    }, [currentUserId, data]);
  return (
    <div className='follower conversation'>
      <div>
        <div className="online-dot"></div>
      </div>
    </div>
  )
}
 
export default Conversation