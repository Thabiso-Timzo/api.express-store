import { combineReducers } from "redux";
import auth from './user-reducers/UserReducers'
import token from './toke-reducer/tokenReducer'
// import {
//     deleteProductReducer,
//     deleteReviewReducer,
//     newProductReducer,
//     newReviewReducer,
//     productDetailsReducer,
//     productReviewsReducer,
//     productsReducer,
//   } from './product-reducers/productReducers';
  
//   import { cartReducer } from './cart-reducers/cartReducers';
//   import { favouriteReducer } from './wish-reducers/wishReducers';
//   import {
//     allOrdersReducer,
//     myOrdersReducer,
//     newOrderReducer,
//     orderDetailsReducer,
//     orderReducer,
//   } from './order-reducers/orderReducers';

export default combineReducers({
    auth,
    token
})