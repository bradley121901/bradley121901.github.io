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
          <span>Hi I'm Bradley, it's nice to meet!</span> I am a software engineer with a passion for building robust, efficient, and scalable systems.
        </h1>
        <blockquote style={{
          margin: '20px 0 10px',
          paddingLeft: '16px',
          borderLeft: '4px solid rgba(134,225,255,0.5)',
          color: 'rgba(255,255,255,0.9)',
          fontSize: '22px'
        }}>
          <em>“Education never ends, Watson. It is a series of lessons, with the greatest for the last”</em>
        </blockquote>
        <p style={{ marginBottom: '0', opacity: 0.9, fontSize: '16px' }}>
          <em>— Sherlock Holmes, <span style={{ fontStyle: 'italic' }}>His Last Bow</span></em>
        </p>
      </div>
    </div>
  );
};

export default WelcomeProfile;
