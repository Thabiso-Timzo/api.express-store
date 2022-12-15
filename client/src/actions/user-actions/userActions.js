import axios from 'axios'
import { 
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST, 
  USER_LOGIN_SUCCESS, 
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_UPADTE_SUCCESS,
  USER_UPADTE_FAIL
} from "../../constants/user-constants/UserContants"

// User login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({type: USER_LOGIN_REQUEST})

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }

    const { data } = await axios.post(
      '/api/users/login', 
      {email, password}, 
      config
    )
    dispatch({ 
      type: USER_LOGIN_SUCCESS, payload: data 
    })

    localStorage.setItem("userInfo", JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response && error.response.message
      ? error.response.data.message 
      : error.message
    })
  }
}

// User login
export const register = (name, email, password, avatar) => async (dispatch) => {
  try {
    dispatch({type: USER_REGISTER_REQUEST})

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }

    const { data } = await axios.post(
      '/api/users/register', 
      {name, email, password, avatar}, 
      config
    )
    dispatch({ 
      type: USER_REGISTER_SUCCESS, payload: data 
    })

    localStorage.setItem("userInfo", JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response && error.response.message
      ? error.response.data.message 
      : error.message
    })
  }
}

// User details
export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({type: USER_DETAILS_REQUEST})

    const {
      userLogin: { userInfo }
    } = getState()

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`
      },
    }

    const { data } = await axios.get(`/api/users/details/${id}`, config)
    dispatch({ 
      type: USER_DETAILS_SUCCESS, payload: data 
    })
// 4:00:00
    localStorage.setItem("userInfo", JSON.stringify(data))
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    if ((message === "You not authorised, token failed.")) {
        dispatch(logout())
      }
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: message
    })
  }
}

// Logout user
export const logout = () =>  (dispatch) => {
  localStorage.removeItem("userInfo")
  dispatch({type: USER_LOGOUT})
}

export const userUpdateAction = (name, avatar, password) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST})

    const {
      userLogin: { userInfo }
    } = getState()

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`
      },
    }

    const { data } = await axios.put(
      '/api/users/update/', 
      {name, avatar, password},
      config)
    
    dispatch({
      type: USER_UPADTE_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      USER_UPADTE_FAIL,
      payload: error.response && error.response.message
      ? error.response.data.message 
      : error.message
    })
  }
}