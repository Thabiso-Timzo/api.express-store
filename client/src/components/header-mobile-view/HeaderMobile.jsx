import React from 'react'
import { Link } from 'react-router-dom'
import { ImCart } from 'react-icons/im'

import { mobile1Header, mobile2Header } from '../header-data/HeaderData'

const HeaderMobile = ({ setNav }) => {
  return (
    <div className={'grid grid-cols-2 gap-4'}>
        <div className={'py-4 flex flex-col'}>
            <ul className='uppercase'>
                {mobile1Header.map((mobile, index) => {
                    return (
                        <Link to={mobile.path}> 
                            <div key={index} onClick={() => setNav(false)} className={'flex text-[#fff] py-4 text-sm'}>
                                {mobile.icon}
                                <div className={'flex-row ml-3 text-xs uppercase hover:border-b'}>
                                    <li>{mobile.page}</li>
                                </div>
                            </div>
                        </Link>
                    )
                })}
      
                <Link to={'cart'}>
                    <div onClick={() => setNav(false)} className={'flex text-[#fff] py-4 text-sm'}>
                        <ImCart size={20} />
                        <div className={'flex-row ml-3 text-xs uppercase hover:border-b'}>
                            <li>0</li>
                            <li>R1500</li>
                        </div>
                    </div>
                </Link>
            </ul> 
        </div>

        <div className={'py-6 flex flex-col'}>
            <ul className='uppercase text-[#fff] text-xs'>
                {mobile2Header.map((mobile2, index) => {
                    return (
                        <Link to={mobile2.path}>
                            <div key={index} className={'flex mt-5'}>
                                {mobile2.icon}
                                <div className={'ml-3 p-2'}>
                                    <li>{mobile2.page}</li>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default HeaderMobile