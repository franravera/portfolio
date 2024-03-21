import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Inicio from './Components/Inicio'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Inicio />} />
      </Routes>
    </Router>
  );
};

export default App;
