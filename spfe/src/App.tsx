import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/bounds.css';

import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import Brands from './pages/Brands';


function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/brands' element={<Brands/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
