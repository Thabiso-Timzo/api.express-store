import React from 'react'
import { Audio } from 'react-loader-spinner'

const Spinner = () => {
  return (
    <>
        <Audio
            height="80"
            width="80"
            radius="9"
            color="#D52600"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
        />
    </>
  )
}

export default Spinner