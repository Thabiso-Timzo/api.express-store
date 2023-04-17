import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
