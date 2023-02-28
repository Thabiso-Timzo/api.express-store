import React from 'react'
import { BsSearch } from 'react-icons/bs'

import './Search.scss'

const Search = () => {
  return (
    <div className='search-container'>
        <div className='search-wrapper'>
            <input type="text"  placeholder='Search for a product'/>
            <button><BsSearch size={15}/></button>
        </div>
    </div>
  )
}

export default Search