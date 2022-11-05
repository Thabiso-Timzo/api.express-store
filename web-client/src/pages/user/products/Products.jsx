import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import './Products.css'
import Spinner from '../../../components/Spinner/Spinner'
import Navigation from '../../../components/navigation/Navigation'
import { listProduct } from '../../../actions/product-actions/productActions'

const Products = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProduct())

    if (error) {
      return toast.error(error)
    }
  }, [dispatch, error])

  

  return (
    <>
      <Navigation />
      <div className="products-container">
          <div className="product-loading">
            {loading ? (
            <div className="loading">
              <Spinner />
            </div>
            ) : (
              <>
                {
                  products.map((product) => (
                    <div className="product" key={product._id}>
                      <div className="product-border">
                        <Link to={`/product/${product._id}`}>
                          <div className="product-image">
                            <img src={product.image} alt={product.name} />
                          </div>
                        </Link>
                        <div className="product-text">
                          <p>
                            <Link to={`/product/${product._id}`}>
                              {product.name}
                            </Link>
                          </p>
                          
                          {/* <Rating 
                              value={product.rating}
                              text={`${product.numReviews}`}
                          /> */}
                          <h3>R{product.price}</h3>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </>
              )
            }
          </div>
        </div>
    </>
  )
}

export default Products