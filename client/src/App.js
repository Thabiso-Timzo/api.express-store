import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/authentication/login/Login';
import Register from './pages/authentication/register/Register';
import Cart from './pages/cart/Cart';
import Favourites from './pages/favourites/Favourites';
import Home from './pages/home/Home';
import Message from './pages/message/Message';
import Profile from './pages/profile/Profile';
import Search from './pages/search/Search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login/>} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/message" element={<Message />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
