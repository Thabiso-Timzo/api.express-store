import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Cart from './pages/cart/Cart';
import WishList from './pages/wishlist/WishList';
import Error404 from './pages/404/Error404';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Compare from './pages/compare/Compare';
import Store from './pages/store/Store';
import Blog from './pages/blog/Blog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='cart' element={<Cart />} />
          <Route path='wishlist' element={<WishList />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='compare' element={<Compare />} />
          <Route path='store' element={<Store />} />
          <Route path='blog' element={<Blog />} />
          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
