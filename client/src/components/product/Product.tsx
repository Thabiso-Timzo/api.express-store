import React from 'react'
import ProductCard from '../product-card/ProductCard'

const Product = () => {
  return (
    <section className="product-wrapper">
        <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 className='section-heading'>Feature Collection</h3>
              </div>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    </section>
  )
}

export default Product