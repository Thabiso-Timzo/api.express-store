import { combineReducers } from "redux";
import { 
    allUsersReducer, 
    forgotPasswordReducer, 
    profileReducer, 
    userDetailsReducer, 
    userReducer 
} from './user-reducers/UserReducers';
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
    allUsersReducer: allUsersReducer,
    forgotPasswordReducer: forgotPasswordReducer, 
    profileReducer: profileReducer, 
    userDetailsReducer: userDetailsReducer, 
    userReducer: userReducer 
})