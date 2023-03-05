import React from 'react'
import { Outlet } from 'react-router-dom'

import Footer from '../footer/Footer'
import Header from '../navigation-bar/Header/Header'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout