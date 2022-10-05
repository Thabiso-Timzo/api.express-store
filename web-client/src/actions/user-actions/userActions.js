import axios from 'axios'
import {
    LOGIN,
    GET_USER
} from '../../constants/user-constants/UserContants'

export const dispatchLogin = () => {
    return {
        type: LOGIN
    }
}

export const fetchUser = async (token) => {
    const res = await axios.get('/api/users/info', {
        headers: {Authorization: token}
    })
    return res
}

export const dispatchGetUser = async (res) => {
    return {
        type: GET_USER,
        payload: {
            user: res.data,
            isAdmin: res.data.role === 1 ? true : false
        }
    }
}