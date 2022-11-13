import React from 'react'

import './404.css'
import Navigation from '../../../components/navigation/Navigation'

const Error404 = () => {
  return (
    <>
        <Navigation />
        <div className='Error-404'>
            <h1>404 Page not found</h1>
        </div>
    </>
  )
}

export default Error404