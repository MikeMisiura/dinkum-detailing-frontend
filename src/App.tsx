import React from 'react';
import './App.css';
import { Button, Col, Container } from 'react-bootstrap';
import Navigate from './components/Navigate';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import ContactUs from './pages/ContactUsPage';
import Login from './pages/LogInPage';
import { MessageProvider } from './contexts/MessageProvider';
import DinkumColors from './theme/dinkumColors';

function App() {
  return (
    <MessageProvider>
      <Navigate />
      <Container>
        <Col sm={2} md={3} lg={4}></Col>
        <Col>
          <div
            style={{
              backgroundColor: DinkumColors.grey,
              color: DinkumColors.black,
            }}
            className='m-5'
          >
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about-us' element={<About />} />
                <Route path='/contact-us' element={<ContactUs />} />
                <Route path='/login' element={<Login />} />
              </Routes>
            </BrowserRouter>
          </div>
        </Col>
        <Col sm={2} md={3} lg={4}></Col>
      </Container>
    </MessageProvider>
  );
}

export default App;