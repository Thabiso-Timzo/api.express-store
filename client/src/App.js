import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'

import Layout from './components/layout/Layout'
import About from './pages/screens/about/About'
import Contact from './pages/screens/contact/Contact'
import Home from './pages/screens/home/Home'
import Products from './pages/screens/products/Products'
import Login from './pages/auth/login/Login'
import Register from './pages/auth/register/Register'
import Error404 from './pages/errors/404/404error';
import Compare from './pages/screens/compare/Compare';
import Wishlist from './pages/screens/wishlist/Wishlist';
import Main from './pages/auth/main/Main';
import Cart from './pages/screens/cart/Cart';
import Store from './pages/screens/store/Store';
import Blog from './pages/screens/blog/Blog'
import Forgot from './pages/auth/forgot-password/Forgot';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='auth/login' element={<Login />}/>
          <Route path='auth/register' element={<Register />}/>
          <Route path='auth/forgot' element={<Forgot />}/>
          <Route path='about' element={<About />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='products' element={<Products />}/>
          <Route path='compare' element={<Compare />} />
          <Route path='wishlist' element={<Wishlist />} />
          <Route path='auth' element={<Main />} />
          <Route path='cart' element={<Cart />} />
          <Route path='store' element={<Store />} />
          <Route path='blog' element={<Blog />} />
          <Route path='*' element={<Error404 />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App