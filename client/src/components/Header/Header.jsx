import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  AiOutlineClose, 
  AiOutlineMenu, 
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiFillMail,
  AiOutlineTwitter
} from 'react-icons/ai'

import logo from '../../assets/logo.png'
import HeaderWeb from '../header-web-view/HeaderWeb'
import HeaderMobile from '../header-mobile-view/HeaderMobile'

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    } 
    window.addEventListener('scroll', handleShadow)
  }, [])

  return (
    <div 
      className={
        shadow 
        ? 'fixed w-full h-[60px] shadow-xl z-[100] bg-slate-700 m-0 p-0' 
        : 'fixed w-full h-[60px] z-[100] bg-slate-700 m-0 p-0'}
      > 
      <div 
        className={'flex justify-between items-center w-full h-full px-2 2xl:px-16'}>
        <Link to={'/'}>
          <img 
            src={logo} 
            alt='' 
            width={'50'} 
            height={'50'}
          />
        </Link>
        <div>
          <HeaderWeb isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className={'md:hidden text-[#fff]'} onClick={handleNav}>
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={
          nav 
          ? 'fixed left-0 w-[75%] sm:[60%] md:w-[45%] h-screen bg-slate-600 p-10 ease-in duration-500' 
          : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div className="">
            <div className={'flex w-full items-center justify-between'}>
              <Link to={'/'}>
                <img
                  src={logo} 
                  alt='' 
                  width={'100'} 
                  height={'50'}
                />
              </Link>
              <div onClick={handleNav} className={'rounded-full text-[#fff] shadow-lg shadow-gray-700 p-3 cursor-pointer'}>
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className={'border-b border-grey-300 my-4'}>
                <p className={'w-[85%] md:w-[90%] py-4 text-[#fff]'}>A higher form of shopping.</p>
              </div>
            </div>
            {/*  */}
            <HeaderMobile setNav={setNav} />
            <div className={'pt-4'}>
              <p className={'uppercase tracking-widest text-[#fff]'}>Let's talk.</p>
              <div className={'flex text-[#fff] items-center justify-between my-4 w-full sm:w-[80%]'}>
                <div className={'rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-75'}>
                  <Link to={'https://www.instagram.com/thabiso.timzo.dev/'}><AiFillInstagram size={20} /></Link>
                </div>
                <div className={'rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-75'}>
                  <Link to={'https://twitter.com/thabiso_dev'}><AiOutlineTwitter size={20} /></Link>
                </div>
                <div className={'rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-75'}>
                  <Link to={'https://www.linkedin.com/in/thabiso-hlatshwayo-8a4079198/'}><AiFillLinkedin size={20} /></Link>
                </div>
                <div className={'rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-75'}>
                  <Link to={'https://github.com/Thabiso-Timzo'}><AiFillGithub size={20}/></Link>
                </div>
                <div className={'rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-75'}>
                  <Link to={'mailto:thabiso.hlatshwayo24@gmail.com'}><AiFillMail size={20}/></Link>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar