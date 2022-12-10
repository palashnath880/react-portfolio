import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './Components/Header'
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './Components/Portfolio';
import Services from './Components/Services';
import Blog from './Components/Blog';
import Contact from './Components/Contact';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Portfolio />} />
          <Route path='/services' element={<Services />} />
          <Route path='/blog' element={<Blog />}>
            <Route path=':page' element={<Blog />} />
          </Route>
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
    </>
  )
}
