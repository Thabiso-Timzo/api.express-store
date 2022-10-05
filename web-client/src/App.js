import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from 'axios'

import { dispatchLogin, fetchUser, dispatchGetUser } from './actions/user-actions/userActions'

import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';
import Cart from './pages/user/cart/Cart';
import Chats from './pages/user/chats/Chats';
import Dashboard from './pages/admin/Dashboard/Dashboard';
import Product from './pages/user/product/Product';
import Products from './pages/user/products/Products';
import Profile from './pages/user/profile/Profile';
import Search from './pages/user/search/Search';
import WishList from './pages/user/wish-list/WishList';
import ForgotPassword from './pages/auth/forgot-password/ForgotPassword';
import NotFound from './pages/not-found/NotFound';
import Activation from './pages/auth/activation/Activation';

function App() {
  const dispatch = useDispatch()
  const token = useSelector(state => state.token)
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin')
    if(firstLogin){
      const getToken = async () => {
        const res = await axios.post('/api/users/refresh_token', null)
        dispatch({type: 'GET_TOKEN', payload: res.data.access_token})
      }
      getToken()
    }
  },[auth.isLogged, dispatch])

  useEffect(() => {
    if(token){
      const getUser = () => {
        dispatch(dispatchLogin())

        return fetchUser(token).then(res => {
          dispatch(dispatchGetUser(res))
        })
      }
      getUser()
    }
  },[token, dispatch])

  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/chat' element={<Chats />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wish-list' element={<WishList />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/search' element={<Search />} />
        <Route path='/forgot_password' element={<ForgotPassword />} />
        <Route path='/user/activate/:activation_token' element={<Activation />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
