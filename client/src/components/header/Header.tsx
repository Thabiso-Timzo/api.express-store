import React from 'react'
import { NavLink, Link  } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { TiArrowSync } from 'react-icons/ti'
import { MdFavorite, MdShoppingCart } from 'react-icons/md' 
import { FaUser } from 'react-icons/fa'
import { BiCategoryAlt } from 'react-icons/bi'

import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
          <div className="col-2">
            <Link to='/'>
              <img className='w-25' src={logo} alt="" />
            </Link>
          </div>
          <div className="col-5">
            <div className="input-group">
              <input type="text" className="form-control py-2" placeholder="Search product" aria-label="Search product" aria-describedby="basic-addon2" />
              <span className="input-group-text p-1" id="basic-addon2"><BsSearch className='fs-6' /></span>
            </div>
          </div>
          <div className="col-5">
            <div className="header-upper-links d-flex align-items-center justify-content-between">
              <div className="">
                <Link className='d-flex align-items-center gap-10 text-white' to=''>
                  <TiArrowSync className='icons'/>
                  <p className='mb-0 size'>Compare <br /> Products</p>
                </Link>
              </div>
              <div className="">
                <Link className='d-flex align-items-center gap-10 text-white' to=''>
                  <MdFavorite className='icons'/>
                  <p className='mb-0 size'>WishList <br /> Favourite</p>
                </Link>
              </div>
              <div className="">
                <Link className='d-flex align-items-center gap-10 text-white' to=''>
                  <FaUser className='icons'/>
                  <p className='mb-0 size'>Login <br /> My Account</p>
                </Link>
              </div>
              <div className="">
                <Link className='d-flex align-items-center gap-10 text-white' to=''>
                  <MdShoppingCart className='icons'/>
                  <div className="d-flex flex-column gap-10">
                    <span className='badge bg-white text-dark size'>0</span>
                    <p className='mb-0 size'>R1500</p>
                  </div>
                </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="column-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
              <div>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex gap-30"  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <BiCategoryAlt size={20} />
                    <span>Shop Categories</span> 
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                  </ul>
                </div>
              </div>
              <div className='menu-links'>
                <div className="d-flex align-items-center gap-15">
                  <NavLink to='/'>Home</NavLink>
                  <NavLink to='/'>Our Store</NavLink>
                  <NavLink to='/'>Blogs</NavLink>
                  <NavLink to='/contact'>Contact</NavLink>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header