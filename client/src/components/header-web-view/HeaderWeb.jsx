import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdOptions } from 'react-icons/io'
import { BiDownArrow, BiUpArrow } from 'react-icons/bi'
import {  MdEmail } from 'react-icons/md'
import { ImCart } from 'react-icons/im'

import { rightHeader, dropdown,  } from '../header-data/HeaderData'
 
const HeaderWeb = ({ isOpen, setIsOpen }) => {
  return (
    <ul className={'hidden md:flex mr-10'}>
            {rightHeader.map((page, index) => {
              return (
                <Link to={page.path}>
                  <div key={index} className={'flex text-[#fff] ml-10 gap-x-4 p-2 hover:bg-blue-300 rounded-r-lg border-l-transparent hover:border-l-white border-l-4'}>
                    {page.icon}
                    <div clssName={'flex-row ml-1 text-xs uppercase'}>
                      <li>{page.page}</li>
                    </div>
                  </div>
                </Link>
              )
            })}
            
            {/* cart */}
            <Link to={'cart'}>
              <div className={'flex text-[#fff] ml-5 gap-x-4 p-2 hover:bg-blue-300 rounded-r-lg border-l-transparent hover:border-l-white border-l-4'}>
                <ImCart size={20} />
                <div className={'flex-row ml-1 text-xs uppercase'}>
                  <li className={'rounded-full h-4 w-4 bg-white text-black px-5'}>0</li>
                </div>
              </div>
            </Link>

            {/* Dropdown */}
            <Link to={'/'}>
              <div onClick={() => setIsOpen((prev) => !prev)} className={'flex gap-x-4 p-2 text-[#fff] ml-5'}>
                <IoMdOptions size={20} />
                {!isOpen ? (
                  <BiDownArrow />
                ) : (
                  <BiUpArrow />
                )}
                {isOpen && (
                  <div 
                    className={'bg-slate-700 absolute top-20  rounded-lg p-1 w-[180px] mr-2'}
                  >
                    <div className={'w-full -justify-between'}>
                      {dropdown.map((item, index) => {
                        return (
                          <Link to={item.path}>
                            <div className={'flex text-[#fff] m-5 justify-between p-2 hover:bg-blue-300 rounded-r-lg border-l-transparent hover:border-l-white border-l-4'}>
                              {item.icon}
                              <div className={'flex-row ml-5 text-xs uppercase'}>
                                <li>{item.page}</li>
                              </div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            </Link>
            <Link to={'contact'}>
              <div className={'flex text-[#fff] ml-5 gap-x-4 p-2 hover:bg-blue-300 rounded-r-lg border-l-transparent hover:border-l-white border-l-4'}>
                <MdEmail size={20} />
                <div className={'flex-row ml-1 text-xs uppercase'}>
                  <li>Contact</li>
                </div>
              </div>
            </Link>
          </ul>
  )
}

export default HeaderWeb