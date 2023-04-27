import React, { useState } from 'react'
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown, MdCategory} from 'react-icons/md'

import './SecondHeader.scss'
import { navigation } from '../links/NavigationLinks'
import { Link } from 'react-router-dom'

const SecondHeader = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [selected, setSelected] = useState<any>(false)

    const options = ["Electronics", "Furniture", "Clothes", "Kitchen-ware"]

    const handleClick = () => {
        setOpen(!open)
    }

  return (
    <div className='header-container'>
        <div className="wrapper">
            <div className="dropdown">
                <div className="dropdown-wrapper">
                    <div className="dropdown-container">
                        <div className="dropdown-header" onClick={handleClick}>
                            <div className="dropdown-title">
                                <MdCategory />
                                {selected ? selected : "Category"} 
                            </div>
                            {open ? <MdOutlineKeyboardArrowDown />: <MdOutlineKeyboardArrowUp /> }
                        </div>
                    </div>
                    {open && (
                        <ul className='list'>
                            {options.map((item, i) => (
                                <li 
                                    onClick={
                                        () => {setSelected(item);
                                        setOpen(false)
                                    }}
                                >{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
        <div className="page">
            <ul>
                {navigation.map(item => (
                    <Link to={item.url} key={item.id}>
                        <li>{item.name}</li>
                    </Link>
                ))}                        
            </ul>                
        </div>
    </div>
  )
}

export default SecondHeader