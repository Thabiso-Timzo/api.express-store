import {
  LOGIN,
  GET_USER
} from '../../constants/user-constants/UserContants'

const initialState = {
  user: [],
  isLogged: false,
  isAdmin: false
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
      case LOGIN:
        return {
            ...state,
            isLogged: true
          }
      case GET_USER:
        return {
          ...state,
          user: action.payload.user,
          isAdmin: action.payload.isAdmin
        }
      default:
          return state
  }
}

// 3:15:17 

export default authReducer