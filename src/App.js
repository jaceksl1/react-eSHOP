import React from 'react';
import './App.css';
import './components/Index.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (    
    <Router>
    <Header/>
      <Routes>
        <Route path="" element={<Home />}/>
        <Route path="/checkout" element={<Checkout />}/>
      </Routes>
    </Router>
  );
}

export default App;