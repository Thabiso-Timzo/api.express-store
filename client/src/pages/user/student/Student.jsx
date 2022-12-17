import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

const Student = () => {
  return (
    <>
        <div className="profile-wrapper">
          <div className="back">
            <Link to='/profile'>
              <BsFillArrowLeftCircleFill color={'#0083A0'}/>
            </Link>
          </div>
        </div>
    </>
  )
}

export default Student