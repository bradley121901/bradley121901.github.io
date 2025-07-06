import Navbar from './Components/Navbar/Navbar';
import WelcomeProfile from './Components/WelcomeProfile/WelcomeProfile';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <WelcomeProfile />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
