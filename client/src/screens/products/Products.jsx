import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Products = () => {
  return (
    <div className={'flex'}>
          <input 
            className={'outline-none border-none rounded-l-lg h-7 w-75 placeholder-gray-500 placeholder-opacity-100'} 
            type="text" placeholder='search for products' 
          />
          <span 
            className={'cursor-pointer bg-slate-400 rounded-r-lg h-7 w-8 p-1.5 text-[#fff]'}
          >
            <BiSearch />
          </span>
        </div>
  )
}

export default Products