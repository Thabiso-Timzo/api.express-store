// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import { createStore  } from "redux";
import { Provider } from "react-redux";
import rootReducer from '../reducers/index'

// let initialState = {
//   cart: {
//     cartItems: localStorage.getItem("cartItems")
//       ? JSON.parse(localStorage.getItem("cartItems"))
//       : [],

//     shippingInfo: localStorage.getItem("shippingInfo")
//       ? JSON.parse(localStorage.getItem("shippingInfo"))
//       : {},
//   },
//   favourite: {
//     favouriteItems: localStorage.getItem("favouriteItems")
//       ? JSON.parse(localStorage.getItem("favouriteItems"))
//       : [],
//   },
// };


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function DataProvider({children}) {
  return (
      <Provider store={store}>
          {children}
      </Provider>
  )
}

export default DataProvider;