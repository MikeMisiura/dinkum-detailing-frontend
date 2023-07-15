import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import Navigate from './components/Navigate';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <div>
        <Navigate />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
        <p>Test</p>
        <Button>Bootstrap Test</Button>
      </div>
    </div>
  );
}

export default App;