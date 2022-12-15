import React, { useState } from 'react'

import './Student.css'

const Student = () => {
  const [name, setName] = useState('')
  const [studentNumber, setStudentNumber] = useState('')
  const [tertiary, setTertiary] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  // 4:10:58
  const handleDelete = (e) => {
    e.preventDefault()
  }

  return (
    <div className='student-container'>
       <form>
        <div className="form-box">
          <div className="form-group">
            <span>name</span>
            <input 
              type="text" 
              name="name" 
              id="name" 
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.targe.value)}
            />
          </div>
          <div className="form-group">
            <span htmlFor="email">Student tertiary email</span>
            <input 
              type="text" 
              name="email" 
              id="email" 
              placeholder="Enter your student email address"
              disabled
            />
          </div>
          <div className="form-group">
            <span htmlFor="email">Student number</span>
            <input 
              type="text" 
              name="number" 
              id="number" 
              placeholder="Enter your student number"
              value={studentNumber}
              onChange={(e) => setStudentNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <span htmlFor="email">Tertiary name</span>
            <input 
              type="text" 
              name="tertiary" 
              id="tertiary" 
              placeholder="Enter tertiary name"
              value={tertiary}
              onChange={(e) => setTertiary(e.target.value)}
            />
          </div>
          <div className="btn-group"> 
            <button onClick={handleSubmit} className="update">Update</button>
            <button onClick={handleDelete} className="delete">Delete</button>
          </div>
        </div>  
        </form>    
    </div>
  )
}

export default Student