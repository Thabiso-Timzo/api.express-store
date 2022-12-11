import React from 'react'

import './401.css'
import Navigation from '../../../components/navigation/Navigation'

const Error401 = () => {
  return (
    <>
    <Navigation />
    <div className='Error-401'>
        <h1>401 Unauthorized</h1>
    </div>
</>
  )
}

export default Error401