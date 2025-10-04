import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Streaming from './Pages/Streaming.jsx';
import Watermarking from './Pages/Watermarking.jsx';
import Monolith from './Pages/Monolith.jsx';
import Protocols from './Pages/Protocols.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function Root() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/streaming" element={<Streaming />} />
        <Route path="/watermarking" element={<Watermarking />} />
        <Route path="/monolith" element={<Monolith />} />
        <Route path="/communication-protocols" element={<Protocols />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
