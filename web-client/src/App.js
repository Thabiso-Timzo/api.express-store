import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
