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
          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
