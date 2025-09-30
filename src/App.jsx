import Navbar from './Components/Navbar/Navbar';
import WelcomeProfile from './Components/WelcomeProfile/WelcomeProfile';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Articles from './Components/Articles/Articles';

const App = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1 }}>
        <Navbar />
        <WelcomeProfile />
        <Articles />
        {/* <Contact /> */}
        {/* <About />
        <Contact /> */}
        <div style={{ height: '80px' }} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
