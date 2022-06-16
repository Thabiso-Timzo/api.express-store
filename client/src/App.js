import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/navbar/NavBar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
