import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/chat' element={<Chats />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wish-list' element={<WishList />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
