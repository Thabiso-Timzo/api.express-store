import {  combineReducers } from "redux";

import { 
    allUsersReducer, 
    forgotPasswordReducer, 
    profileReducer, 
    userDetailsReducer, 
    userReducer 
} from '../reducers/user-reducers/UserReducers';

const reducer =  combineReducers({
    user: userReducer,
    profile: profileReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    forgotPassword:forgotPasswordReducer,
});

export {
    reducer
};