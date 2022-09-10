import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/bounds.css';
import './styles/components.css';

import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Brands from './pages/Brands';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/brands' element={<Brands/>}/>
        <Route path='*' element={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;