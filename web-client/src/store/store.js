import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//import { composeWithDevTools } from "redux-devtools-extension";
 
import { reducer }  from "./index";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const userAuthFromStorage = localStorage.getItem('userAuthData')
  ? JSON.parse(localStorage.getItem('userAuthData'))
  : null;

let initialState = {
  userLogin: { 
    userInfo: userAuthFromStorage 
  },
};

const middleWare = [thunk];

const init_reduce = () => {
  return (
    initialState,
    reducer
  )
}

const store = createStore(
  init_reduce,
  composeEnhancer(applyMiddleware(...middleWare)),
  //composeWithDevTools(applyMiddleware(...middleWare))
)

export default store;  