import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from "react-toastify"
import { useSelector } from 'react-redux'
import "react-toastify/dist/ReactToastify.css"

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
import Error404 from './pages/errors/404/404';
import Error401 from './pages/errors/401/401'

function App() {
  const user = useSelector((state) => state.userLogin)
  const { userInfo } = user

  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' exact element={<Products />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/chat' element={userInfo ? <Chats /> : <Error401 />} />
        <Route path='/cart/:id' element={<Cart />} />
        <Route path='/wish-list' element={userInfo ? <WishList /> : <Error401 />} />
        <Route path='/profile' element={userInfo ? <Profile /> : <Error401 />} />
        <Route path='/search' element={<Search />} />
        <Route path='/forgot_password' element={<ForgotPassword />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
