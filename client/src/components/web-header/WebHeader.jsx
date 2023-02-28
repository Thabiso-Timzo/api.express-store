import React from 'react'
import { Link } from 'react-router-dom'

import './WebHeader.scss'
import { navLinks } from '../nav-links/Nav-links'

const WebHeader = () => {
  return (
    <div className='nav-container'>
        <ul>
            {navLinks.map((items, i) => {
                return (
                    <div key={i}>
                        <Link to={items.path}>
                            <li>
                                {items.icon}
                                <span>{items.title}</span>
                            </li>
                        </Link>
                    </div>   
                )
            })}
        </ul>
    </div>
  )
}

export default WebHeader