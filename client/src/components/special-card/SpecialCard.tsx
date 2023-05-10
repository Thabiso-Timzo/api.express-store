import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'
// 3:20:17
import product from '../../assets/product/3.jpeg'

const SpecialCard = () => {
  const [ratingValue, setRatingValue] = useState<number>(0)

  const handleRating = (rate: number) => {
    setRatingValue(rate)
  }

  return (
    <div className='col-4'>
      <div className="special-product-card">
        <div className="spacial-wrapper">
          <div>
            <img src={product} className="image-fluid" alt="" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Lenovo</h5>
            <h6 className="title">IdeaPad S145</h6>
            <Rating onClick={handleRating} initialValue={ratingValue} size={window.innerWidth > 768 ? 20: 12} />
            <p className="price">
              <span className="red-p">R12 500 - <s> R3000</s></span> 
            </p>
            <div className="discount-till">
              <p><b>6</b> days</p>
              <div className="badge-container">
                <span className="p-1">1</span>:
                <span className="p-1">1</span>:
                <span className="p-1">1</span>
              </div>
            </div>
            <div className="product-count">
              <p>Products: 5</p>
              <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={10}></div>
              </div>
            </div>
            <Link to="#">Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialCard