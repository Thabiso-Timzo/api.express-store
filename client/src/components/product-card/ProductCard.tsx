import React, { useState }  from 'react'
import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { BiHeart } from 'react-icons/bi'
import { MdCompareArrows } from 'react-icons/md'
import { BsEye } from 'react-icons/bs'

import blog from '../../assets/brands/samsung.png'

const ProductCard = () => {
  const [ratingValue, setRatingValue] = useState<number>(0)

  const handleRating = (rate: number) => {
    setRatingValue(rate)
  }
  
  return (
    <div className="col-3">
      <div className="product-card position-relative">
        <div className="product-image">
          <img src={blog} alt="" />
          <div className="product-details">
            <h6 className="brand">Sumsang</h6>
            <h5 className="product-title">Samsung product</h5>
            <Rating onClick={handleRating} initialValue={ratingValue} size={window.innerWidth > 768 ? 20: 14} />
            <p className="price">R400</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
              <Link to='wishlist'><BiHeart/></Link>
              <Link to=''><MdCompareArrows /></Link>
              <Link to=''><BsEye /></Link>
              <Link to=''><HiOutlineShoppingBag /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard