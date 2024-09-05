import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Assuming you create a CSS file named Home.css for styling

const Home = () => {
  return (
    <div className="container">
      <p>bradley121901@gmail.com | +14388600415 | Toronto, Ontario Canada</p>
      <h1>Bradley Liu</h1>
      <ul>
        <li>
          <Link to="/work">Work Experience</Link>
        </li>
        <li>
          <Link to="/cat">
            Intelligent Cat Laser Toy w/RaspberryPi + Python + Tensorflow +
            SwiftUI
          </Link>
        </li>
        <li>
          <Link to="/LLM-Watermark">LLM Watermarking Expansion w/Python</Link>
        </li>
        <li>
          <a href="https://github.com/bradley121901">
            Projects/Github (Full stack web/mobile, ML model implementations,
            ETL data anaylsis)
          </a>
        </li>
        {/* <li>
          <Link to="/Custom-Command-Line-Tool">
            Automated CLI API Client Tool w/OpenAPI Generator & Golang
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Home;
