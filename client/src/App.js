import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Layout from './components/layout/Layout'
import About from './screens/about/About'
import Contact from './screens/contact/Contact'
import Home from './screens/home/Home'
import Products from './screens/products/Products'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />}/>
          <Route path='contact' element={<Contact />}/>
          <Route path='products' element={<Products />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App