import React, { Dispatch, SetStateAction } from 'react'
import { BsSearch } from 'react-icons/bs'

import './MobileSearch.scss'

type MobileProps = {
    handleShownClick: Dispatch<SetStateAction<any>>
}

const MobileSearch = ({ handleShownClick }: MobileProps) => {
  return (
    <div className='mobile-search-container'>
        <div className="wrapper">
            <div className="search">
                <div className="input-group">
                    <input type="text" className="form-control py-2" placeholder="Search product" />
                    <span className="input-group-text p-1 cursorPointer" id="basic-addon2"><BsSearch className='fs-6' /></span>
                </div> 
            </div>
            <div className="close" onClick={handleShownClick}>
                <span>Cancel</span>
            </div>
        </div>
    </div>
  )
}

export default MobileSearch