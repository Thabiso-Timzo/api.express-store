import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { cartReducer } from '../reducers/cart-reducers/cartReducers'
import { productListReducer, productDetailReducer } from '../reducers/product-reducers/productReducers'
import {
  userLoginReducer,
  userRegisterReducer, 
  userDetailsReducer,
  updateUserProfile 
} from '../reducers/user-reducers/UserReducers'
import { studentReducer } from '../reducers/student-reducer/studentReducer'

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  updaterUser: updateUserProfile,
  student: studentReducer
})

// Cart
const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
? JSON.parse(localStorage.getItem("cartItems"))
: []

// Login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo"))
: null

const initialState = {
  cart: {
    cartItems: cartItemsFromLocalStorage
  },
  userLogin: {
    userInfo: userInfoFromLocalStorage
  }
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store