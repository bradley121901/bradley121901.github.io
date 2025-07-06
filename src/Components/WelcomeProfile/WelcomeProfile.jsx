import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './WelcomeProfile.css';
import profile_img from '../../assets/penguin.svg';
import wealthsimple from '../../assets/companies/wealthsimple.svg';
import morgan from '../../assets/companies/morgan-stanley.png';
import rbc from '../../assets/companies/rbc.png';

const WelcomeProfile = () => {
  // const [activeSection, setActiveSection] = useState('contact');
  return (
    <div className="profile">
      <div className="companies-container">
        <div className="companies-row">
          <img
            src={morgan}
            alt="Morgan Stanley"
            className="company-img morgan"
          />
        </div>
        <div className="companies-row">
          <img
            src={wealthsimple}
            alt="Wealthsimple"
            className="company-img wealthsimple"
          />
          <img src={profile_img} alt="Profile" className="profile-img" />
          <img src={rbc} alt="RBC" className="company-img rbc" />
        </div>
      </div>
      <div className="profile-content">
        <h1>
          <span>Hi I'm Bradley!</span> I am a software developer based in
          Toronto 🇨🇦
        </h1>
        <p>
          I have contributed to various applications at multiple fintech
          companies. I like to build. 🛠️
        </p>
        <div className="profile-action">
          {/* <div className="profile-connect">
            <AnchorLink
              className={`anchor-link ${
                activeSection === 'contact' ? 'active' : ''
              }`}
              offset={50}
              href={`#contact`}
              onClick={() => setActiveSection('contact')}
            >
              <p>Connect with me</p>
            </AnchorLink> */}
          {/* </div> */}
          <a
            href="/bradley-resume.pdf"
            download="bradley-resume.pdf"
            className="profile-resume"
          >
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default WelcomeProfile;
