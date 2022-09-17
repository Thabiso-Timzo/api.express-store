import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { 
  allUsersReducer, 
  forgotPasswordReducer, 
  profileReducer, 
  userDetailsReducer, 
  userReducer 
} from '../reducers/user-reducers/UserReducers';
import { alert } from "../reducers/alert/alert";


const reducer = combineReducers({
  alert: alert,
  user: userReducer,
  profile: profileReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  forgotPassword:forgotPasswordReducer,
});

//const initialState = {};

const middleWare = [thunk];

const store = createStore(
  //initialState,
  reducer,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;