import {
    STUDENT_REQUEST,
    STUDENT_SUCCESS,
    STUDENT_FAIL
} from '../../constants/student-constants/studentConstant'

export const studentReducer = (state = {}, action) => {
    switch (action.type) {
      case STUDENT_REQUEST:
        return { loading: true }
      case STUDENT_SUCCESS:
        return { loading: false, studentInfo: action.payload }
      case STUDENT_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }