import {
    GET_TOKEN
} from '../../constants/user-constants/UserContants'

const token = ''

const tokenReducer = (state = token, action) => {
    switch(action.type) {
        case GET_TOKEN:
            return action.payload
        default:
            return state
    }
}

export default tokenReducer