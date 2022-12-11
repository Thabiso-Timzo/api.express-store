import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom' 
import { useDispatch , useSelector } from 'react-redux'

import './Cart.css'
import Navigation from '../../../components/navigation/Navigation'
import { addToCart, removeFromCart } from '../../../actions/cart-actions/cartActions'

const Cart = ({ match, location }) => {
  window.scrollTo(0,0)
  const productId = match.params.id
  const qty = location.search ? Number(location.search.split("=")[1]) : 1
  
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const total = cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2)

  useEffect(() =>  {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [productId, qty, dispatch])

  const checkOutHandler = () => {
    navigate('/login?redirect=shipping')
  }

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  } 

  return (
    <>
        <Navigation />
        <div className="cart-container">
          {
            cartItems.length === 0 ? (
              <div className=''>
                You cart is empty
                <Link to='/'>
                  shop now
                </Link>
              </div>
            ) : (
              <>
                <div className=''>
                  Total cart products
                  <Link to='/cart'>
                    ({cartItems.length})
                  </Link>
                </div>
                {
                  cartItems.map((item) => (
                    <div className=''>
                  <div 
                    className='' 
                    onClick={() => removeFromCartHandler(item.product)}
                  >
                    <i className='fas fa-times'></i>
                  </div>
                  <div className=''>
                      <img src={item.image} alt={item.name} />
                  </div>
                  <div to=''>
                    <Link to={`/products/${item.product}`}>
                      <h4>{item.name}</h4>
                    </Link>
                  </div>
                  <div className=''>
                    <h6>Quantity</h6>
                    <select value={item.qty}
                      onChange={(e) => 
                      dispatch(addToCart(item.product, Number(e.target.value)))}
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className=''>
                    <h6>Price</h6>
                    <h4>R{item.price}</h4>
                  </div>
                </div>
                  ))
                }
                <div className=''>
                  <span className=''>Total</span>
                  <span className=''>R{total}</span>
                </div>
                <hr />
                <div className=''>
                  <Link to="/" className=''>
                    <button>Continue to shipping</button>
                  </Link>
                  {
                    total > 0 && (
                      <div className=''>
                        <button onChange={checkOutHandler}>
                            Checkout
                        </button>
                      </div>
                    )
                  }
                </div>
              </>
            )
          }
        </div>
    </>
  )
}

export default Cart