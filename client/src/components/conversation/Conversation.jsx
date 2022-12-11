import React, { useState, useEffect } from 'react'
//import { utiliseUser } from '../../api/chatRequest';

const Conversation = ({ data, currentUserId }) => {
    const [userData, setUserData] = useState(null)

    // 46:53

    useEffect(() => {
        const userId = data.members.find((id) => id !== currentUserId)
        const getUserData = async () => {
            //const { data } = await utiliseUser(userId)
            setUserData(data)
        }
        getUserData()
    }, [currentUserId, data]);
  return (
    <div>Conversation</div>
  )
}
 
export default Conversation