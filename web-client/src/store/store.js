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


const reducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  forgotPassword:forgotPasswordReducer,
});

const middleWare = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;