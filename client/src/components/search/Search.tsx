import React from 'react'
import { BsSearch } from 'react-icons/bs'

import './Search.scss'

const Search = () => {
  return (
    <div className="input-group">
      <input type="text" className="form-control py-2" placeholder="Search product" />
      <span className="input-group-text p-1 cursorPointer" id="basic-addon2"><BsSearch className='fs-6' /></span>
    </div>  
  )
}

export default Search