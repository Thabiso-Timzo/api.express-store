import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import './StudentRegistration.css'
import { studentRegister } from '../../../actions/student-action/studentAction'
import { isEmpty } from '../../../utils/validation/Validation'

const StudentRegistration = () => {
  const [contact, setContact] = useState('')
  const [tertiaryName, setTertiaryName] = useState('')
  const [tertiaryEmail, setTertiaryEmail] = useState('')

  const dispatch = useDispatch()

const userLogin = useSelector((state) => state.userLogin)
const { userInfo } = userLogin

const register = useSelector((state) => state.student)
const { error } = register

useEffect(() => {
  if (error) {
    toast.error(error)
  }
},[error])

const handleSubmit = (e) => {
  e.preventDefault()

  if (isEmpty(contact || tertiaryEmail || tertiaryName)) {
    toast.error("Please fill in all fields.")
  }

  dispatch(studentRegister(contact, tertiaryEmail, tertiaryName))
}

  return (
    <div className='student-r-container'>
      <h1>Student Registration</h1>
      <div className="register-box">
          <div className="register-form">
            <span>Name</span>
            <input type="text" defaultValue={userInfo.name} disabled />
          </div>
          <div className="register-form">
            <span>Primary email address</span>
            <input type="text" defaultValue={userInfo.email} disabled />
          </div>
          <div className="register-form">
            <span>Contact number</span>
            <input type="text" value={contact} onChange={(e) => setContact(e.target.value)}/>
          </div>
          <div className="register-form">
            <span>Tertiary email</span>
            <input type="text"  value={tertiaryEmail} onChange={(e) => setTertiaryEmail(e.target.value)}/>
          </div>
          <div className="register-form">
            <span>Tertiary name</span>
            <input type="text"  value={tertiaryName} onChange={(e) => setTertiaryName(e.target.value)} />
          </div>
          <button onClick={handleSubmit} disabled={!contact || !tertiaryEmail || !tertiaryName}>Submit</button>
        </div>
    </div>
  )
}

export default StudentRegistration