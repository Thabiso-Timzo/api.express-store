import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'

import logo from '../../../assets/logo.png'
import { mobile1, mobile2, socials } from  '../nav-links/Mobile-nav-links'

const MobileHeader = ({ nav, handleNav, setNav }) => {

  return (
    <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
      <div className={
        nav 
        ? 'fixed left-0 w-[75%] sm:[60%] md:w-[45%] h-screen bg-blue-500 p-10 ease-in duration-500' 
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
            <p className={'w-[85%] md:w-[90%] text-[#fff] py-4'}>An exciting place for the whole family to shop.</p>
          </div>
        </div>
        <div className={'py-4 flex w-full'}>
          <div className={'w-[50%]'}>
            <ul ul className='uppercase'>
              {mobile1.map((mobile, index) => {
                return (
                  <Link to={mobile.path}>
                    <li onClick={() => setNav(false)} className={'py-4 text-sm'}>
                      <div className={'flex text-[#fff] cursor-pointer'} key={index}>
                        <span>{mobile.icon}</span>
                        <span className={'ml-5'}>
                          {mobile.title}<br />
                          {mobile.title2}
                        </span>
                      </div>
                    </li>
                  </Link>
                )
              })}
            </ul>
          </div>
          <div className={'w-[50%]'}>
            <ul className='uppercase'>
              {mobile2.map((mobile, index) => {
                return (
                  <Link to={mobile.path}>
                    <li onClick={() => setNav(false)} className={'py-4 text-sm'}>
                      <div className={'flex text-[#fff] cursor-pointer'} key={index}>
                        <span>{mobile.icon}</span>
                        <span className={'ml-5'}>
                          {mobile.title}<br />
                        </span>
                      </div>
                    </li>
                  </Link>
                )
              })}
            </ul>
          </div> 
        </div>
        <div className={'pt-4'}>
          <p className={'uppercase tracking-widest text-[#D4AF37]'}>Let's talk.</p>
          <div className={'flex items-center justify-between my-4 w-full sm:w-[80%]'}>
            {socials.map((social, index) => {
              return (
                <div className={'rounded-full shadow-lg text-[#fff] shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-75'}>
                  <Link to={social.path}>{social.icon}</Link>
                </div> 
              )
            })}
          </div>
        </div> 
    </div>
  </div>
  )
}

export default MobileHeader