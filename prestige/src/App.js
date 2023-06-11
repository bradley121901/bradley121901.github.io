import Navbar from './Navbar';
import Book from './pages/Book';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import SelectServices from './pages/SelectService';
import Policy from './pages/Policy';
import ConfirmBook from './pages/ConfirmBook';
import ConfirmPage from './pages/ConfirmPage';

import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar className="m-auto" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/services" element={<Services />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/select" element={<SelectServices />} />
        <Route path="/confirm" element={<ConfirmBook />} />
        <Route path="/confirmation" element={<ConfirmPage />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
    </>
  );
}

export default App;
