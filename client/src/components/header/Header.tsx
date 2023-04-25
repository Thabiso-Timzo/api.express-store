import React, { useState } from 'react'

import './Header.scss'
import Mobile from '../mobile/Mobile'
import WebView from '../web/WebView'

const Header = () => {
  const [mobileNav, setMobileNav] = useState<boolean>(false)

  const handleClick = () => {
    setMobileNav(!mobileNav)
  }

  return (
    <>
      <WebView handleClick={handleClick} mobileNav={mobileNav} />
     <header className='second-nav'>
      Thabiso
     </header>
     <Mobile handleClick={handleClick} mobileNav={mobileNav} />
    </>
  )
}

export default Header

// // <div className="col-5">
// <div className="input-group">
// <input type="text" className="form-control py-2" placeholder="Search product" aria-label="Search product" aria-describedby="basic-addon2" />
// <span className="input-group-text p-1" id="basic-addon2"><BsSearch className='fs-6' /></span>
// </div>
// </div>