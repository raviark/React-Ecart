import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import Login from './components/login/Login';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
