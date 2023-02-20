import React from 'react'
import { MdCategory } from 'react-icons/md'
import { BiDownArrow, BiUpArrow } from 'react-icons/bi'

import {  category  } from '../header-data/HeaderData'

const SearchBar = ({ open, setOpen }) => {
  return (
    <div className={'w-full h-10 bg-neutral-800'}>
      <div className={'flex justify-around '}>
        <div className={'flex p-1'}>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="search" id="search" class="block w-full p-1 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
            <button type="submit" class="text-white absolute h-6 right-2.5 bottom-1 bg-neutral-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-0.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
        </div>
        <div onClick={() => setOpen((prev) => !prev)} className={'flex gap-x-2 p-2 text-[#fff] ml-5'}>
          <MdCategory size={20} />
          <p>Shop Categories</p>
          {!open ? (
            <BiDownArrow />
          ) : (
            <BiUpArrow />
          )}
          {open && (
            <div 
              className={'bg-neutral-800 absolute top-28  rounded-lg p-1 w-[150px] mr-2'}
            >
              <div className={'w-full -justify-between'}>
                {category.map((item, index) => {
                  return (
                    <div key={index} className={'flex-row ml-5 text-xs uppercase hover:bg-blue-300 rounded-r-lg border-l-transparent hover:border-l-white border-l-4'}>
                      <ul className={'list-none'}>
                        <li className={'p-2'}>{item.name}</li>
                      </ul>
                    </div>
                  )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
  )
}

export default SearchBar