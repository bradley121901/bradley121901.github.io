import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Openapi from './Openapi';
import Trading from './Trading';
import Watermark from './Watermark';
import Experience from './Experience';
const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Custom-Command-Line-Tool" element={<Openapi />} />
          <Route path="/trading" element={<Trading />} />
          <Route path="/LLM-Watermark" element={<Watermark />} />
          <Route path="/work" element={<Experience />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
