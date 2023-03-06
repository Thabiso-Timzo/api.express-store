import React from 'react'
import { Link } from 'react-router-dom'
import { GoThreeBars } from 'react-icons/go'

import './WebHeader.scss'
import { navLinks } from '../nav-links/Nav-links'

const WebHeader = ({ handleNav }) => {
  return (
    <div className='wrapper'>
    <div className='nav-container'>
        <ul>
            {navLinks.map((items, i) => {
                return (
                    <div key={i}>
                        <Link to={items.path}>
                            <li>
                                <div className='item-wrapper'>
                                    <span>{items.icon}</span>
                                    <span>{items.title}<br />{items.title2}</span>
                                </div>
                            </li>
                        </Link>
                    </div>   
                )
            })}
        </ul>
    </div>
    <div className="bars" onClick={handleNav}>
            <GoThreeBars size={30} />
    </div>
  </div>
  )
}

export default WebHeader