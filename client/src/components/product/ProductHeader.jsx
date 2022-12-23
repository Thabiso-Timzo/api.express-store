import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GrProductHunt } from 'react-icons/gr'
import { RiComputerFill } from 'react-icons/ri'
import { GiSofa, GiCampCookingPot } from 'react-icons/gi'
import { ImBooks } from 'react-icons/im'

import './ProductHeader.css'
import Products from '../../pages/user/products/Products'
import Navigation from '../navigation/Navigation'
import Furniture from '../../pages/user/furniture/Furniture'
import Electronics from '../../pages/user/electronics/Electronics'
import Stationery from '../../pages/user/stationery/Stationery'
import CookWare from '../../pages/user/cook-ware/CookWare'

const ProductHeader = () => {
  const [category, setCategory] = useState(0)

  const navigate = useNavigate()

  const catergoryHandler = (index, path) => {
    setCategory(index)
    navigate(`/${path}`)
  }
  return (
    <>
        <Navigation />
        <div className="height"></div>
        <div className="sidebar-container">
            <button onClick={() => catergoryHandler(1, 'all')} className={category === 1 ? 'active' : 'inactive'}><GrProductHunt /></button>
            <button onClick={() => catergoryHandler(2, 'electronics')} className={category === 2 ? 'active' : 'inactive'}><RiComputerFill /></button>
            <button onClick={() => catergoryHandler(3, 'furniture')} className={category === 3? 'active' : 'inactive'}><GiSofa /></button>
            <button onClick={() => catergoryHandler(4, 'stationery')} className={category === 4 ? 'active' : 'inactive'}><ImBooks /></button>
            <button onClick={() => catergoryHandler(5, 'cook-ware')} className={category === 5 ? 'active' : 'inactive'}><GiCampCookingPot /></button>
        </div>
        { category === 1 && <Products /> }
        {  category === 2 && <Electronics /> }
        {  category === 3 && <Furniture /> }
        {  category === 4 && <Stationery /> }
        {  category === 5 && <CookWare /> }
    </>
  )
}

export default ProductHeader