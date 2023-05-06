import React, { useState } from 'react'
import ProductCard from '../product-card/ProductCard'

const Product = () => {
  const [ratingValue, setRatingValue] = useState<number>(0)
  
  return (
    <section className="product-wrapper">
        <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 className='section-heading'>Feature Collection</h3>
              </div>
                <ProductCard rating={ratingValue} setRating={setRatingValue} />
                <ProductCard rating={ratingValue} setRating={setRatingValue} />
                <ProductCard rating={ratingValue} setRating={setRatingValue} />
                <ProductCard rating={ratingValue} setRating={setRatingValue} />
            </div>
        </div>
    </section>
  )
}

export default Product