import React from 'react'
import ProductCard from '../product-card/ProductCard'
// 2:45:22
const Product = () => {
  return (
    <section className={window.innerWidth > 768 ?"product-wrapper": "product-wrapper-2"}>
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