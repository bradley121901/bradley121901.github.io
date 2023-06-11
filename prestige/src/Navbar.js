import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="nav">
      <b href="logo">
        <Link to="/" className="site-title">
          <img src="./logo.jpg" alt="bug" height={50} />
          Prestige Barbershop
        </Link>
      </b>
      <ul>
        <li>
          <Link to="/book">Book Appointment</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
