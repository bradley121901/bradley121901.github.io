import React from 'react';
import './About.css';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me 👨🏻‍💻</h1>
      </div>
      <div className="about-sections">
        <div className="about-para">
          <p>
            I am passionate in building on all parts of the software development
            process.
          </p>
          <p>
            I pick up on new tools fast but my favourite tech stack currently is
            React/JS for frontend and Springboot/Kotlin for backend. 🛠️
          </p>
  

          {/* <div className="about-skills">
            <div className="about-skill">
              <p>Java & Kotlin</p>
              <hr style={{ width: '60%' }} />
            </div>
            <div className="about-skill">
              <p>SpringBoot & React</p>
              <hr style={{ width: '70%' }} />
            </div>
            <div className="about-skill">
              <p>SQL & Python</p>
              <hr style={{ width: '75%' }} />
            </div>
            <div className="about-skill">
              <p>Kubernetes & Docker</p>
              <hr style={{ width: '60%' }} />
            </div>
          </div> */}
          <div>
            Other than that, I find enjoyment in exploring the outdoors! 🏕️
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>BSc Computer Science</h1>
          <p>University of Ottawa</p>
        </div>
        <div className="about-achievement">
          <h1>2+ Years </h1>
          <p>of software developement experience</p>
        </div>
        <div className="about-achievement">
          <h1>4+ Years </h1>
          <p>of computer science teaching</p>
        </div>
      </div>
    </div>
  );
};

export default About;
