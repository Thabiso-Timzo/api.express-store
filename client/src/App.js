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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />}/>
          <Route path='register' element={<Register />}/>
          <Route path='about' element={<About />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='products' element={<Products />}/>
          <Route path='*' element={<Error404 />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App