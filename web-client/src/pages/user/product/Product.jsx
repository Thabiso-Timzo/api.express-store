import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import './Product.css'
import Navigation from '../../../components/navigation/Navigation'
import { listProductDetails } from '../../../actions/product-actions/productActions'
import Spinner from '../../../components/Spinner/Spinner'
import Message from '../../../components/Message/Message'
import Rating from '../../../components/rating/Rating'

const Product = ({ match }) => {
  const [qty, setQty] = useState(1)
  const productId = match.params.id
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(productId))
  },[dispatch, productId])

  const AddToCartHandler = (e) => {
    e.preventDefault()
    navigate(`/cart/${productId}?qty=${qty}`)
  }

  return (
    <>
        <Navigation />
        <div className="single-container">
          {
            loading ? (
              <div className="loading">
                <Spinner />
              </div>
            ) : error ? (
              <Message variant={'alert-danger'}>
                {error}  
              </Message >
            ) : (
              <>
                <div className="single-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="word-wrapper">
                  <div className="name-wrapper">
                    <div className="product-name">{product.name}</div>
                  </div>
                  <p>{product.description}</p>
                  <div className=''>
                    <div className=''>
                      <h6>Price</h6>
                      <span>R{product.price}</span>
                    </div>
                    <div className=''>
                      <h6>Status</h6>
                      {product.countInStock > 0 ? (
                        <span>In Stock</span>
                      ) : (
                        <span>Out of stock</span>
                      )}
                    </div>
                    <div className=''>
                      <h6>Reviews</h6>
                      <Rating
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                      />
                    </div>
                        {product.countInStock > 0 ? (
                          <>
                            <div className=''>
                              <h6>Qauntity</h6>
                              <select value={qty} 
                              onChange={(e) => setQty(e.target.value)}>
                                {[...Array(product.countInStock).keys()].map(
                                  (x) => (
                                    <option key={x + 1} value={x + 1}>
                                      {x + 1}
                                    </option>
                                  )
                                )}
                              </select>
                            </div>
                            <button className='' onClick={AddToCartHandler}>Add to Cart</button>
                          </>
                        ) : null}
                  </div>
                </div>

                {/** Rating */}
                <div className=''>

                </div>
              </>
            )
          }
        </div>
    </>
  )
}

export default Product