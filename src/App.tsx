import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import Navigate from './components/Navigate';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import ContactUs from './pages/ContactUsPage';
import Login from './pages/LogInPage';

function App() {
  return (
    <div>
      <div>
        <Navigate />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
        <p>Test</p>
        <Button>Bootstrap Test</Button>
      </div>
    </div>
  );
}

export default App;