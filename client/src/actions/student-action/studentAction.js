import axios from 'axios'
import {
    STUDENT_REQUEST,
    STUDENT_SUCCESS,
    STUDENT_FAIL
} from '../../constants/student-constants/studentConstant'

export const studentRegister = (contact, tertiaryEmail, tertiaryName) => async (dispatch) => {
    try {
      dispatch({type:STUDENT_REQUEST})
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      }
  
      const { data } = await axios.post(
        '/api/students/', 
        {contact, tertiaryEmail, tertiaryName}, 
        config
      )
      dispatch({ 
        type: STUDENT_SUCCESS, payload: data 
      })
    } catch (error) {
      dispatch({
        type: STUDENT_FAIL,
        payload: error.response && error.response.message
        ? error.response.data.message 
        : error.message
      })
    }
  }