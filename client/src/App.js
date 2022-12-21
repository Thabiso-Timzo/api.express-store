import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
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
import WishList from './pages/user/wish-list/WishList';
import ForgotPassword from './pages/auth/forgot-password/ForgotPassword';
import Error404 from './pages/errors/404/404';
import Error401 from './pages/errors/401/401'
import UserProfile from './pages/user/user-profile/UserProfile'
import Student from './pages/user/student/Student'
import View from './pages/user/view-profile/View'
import Sold from './pages/user/sold-items/Sold'
import Electronics from './pages/user/electronics/Electronics'
import Furniture from './pages/user/furniture/Furniture'
import Stationery from './pages/user/stationery/Stationery'
import CookWare from './pages/user/cook-ware/CookWare'
import ProductHeader from './components/product/ProductHeader'
import StudentRegistration from './pages/user/student-register/StudentRegistration'

function App() {
  const user = useSelector((state) => state.userLogin)
  const { userInfo } = user

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Navigate to="/all" />} />
        <Route 
          path='/all' 
          element={
            <>
              <ProductHeader/>
              <Products />
            </>
          } 
        />
        <Route 
          path='/electronics' 
          element={
            <>
              <ProductHeader/>
              <Electronics />
            </>
          } 
        />
        <Route 
          path='/furniture' 
          element={
            <>
              <ProductHeader/>
              <Furniture />
            </>
          }
        />
        <Route 
          path='/stationery' 
          element={
            <>
              <ProductHeader/>
              <Stationery />
            </>
          } 
        />
        <Route 
          path='/cook-ware' 
          element={
            <>
              <ProductHeader/>
              <CookWare />
            </>
          } 
        />
        <Route 
          path='student'
          element={
            <>
              <ProductHeader />
              {userInfo ? <StudentRegistration /> : <Error401 />}
            </>
          }
        />
        <Route 
          path='/product/:id' 
          element={
            <>
              <ProductHeader/>
              <Product />
            </>
          } 
        />
        <Route path='/login' exact element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route 
          path='/chat' 
          element={
            <>
              <ProductHeader/>
              {userInfo ? <Chats /> : <Error401 />}
            </>
          } 
        />
        <Route 
          path='/cart' 
          element={
            <>
              <ProductHeader/>
              <Cart />
            </>
          } 
        />
        <Route 
          path='/wish-list' 
          element={
            <>
              <ProductHeader/>
              {userInfo ? <WishList /> : <Error401 />}
            </>
          } 
        />
        <Route 
          path='/profile' 
          element={
            <>
              <ProductHeader/>
              {userInfo ? <Profile /> : <Error401 />}
            </>
          } 
        />
        <Route 
          path='/profile/user' 
          element={
            <>
              <ProductHeader/>
              {userInfo ? <UserProfile /> : <Error401 />}
            </>
            } 
          />
        <Route 
          path='/profile/student' 
          element={
            <>
              <ProductHeader/>
              {userInfo ? <Student /> : <Error401 />}
            </>
          }
        />
        <Route 
          path='/profile/view' 
          element={
            <>
              <ProductHeader/>
              {userInfo ? <View /> : <Error401 />}
            </>
          } 
        />
        <Route 
          path='/profile/sold' 
          element={
            <>
              <ProductHeader/>
              {userInfo ? <Sold /> : <Error401 />}
            </>
          } 
        />
        <Route path='/forgot_password' element={<ForgotPassword />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
