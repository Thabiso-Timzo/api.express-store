import React from 'react'
import Navigation from '../../components/navigation/Navigation'

import './NotFound.css'
//43:10
const NotFound = () => {
  return (
    <>
      <Navigation />
      <div className='notFound'>Page not found</div>
    </>
  )
}

export default NotFound