import React from 'react';
import './Footer.css'; // You can create a separate CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2023 Bradleys Portfolio. All rights reserved.</p>
      <div>
        <p>
          Email: bradley121901@gmail.com | Mobile: +1(438)-860-0415 | Affliated
          websites:&nbsp;
          <a
            href="https://github.com/bradley121901"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/bradley121901
          </a>
          &nbsp;| &nbsp;
          <a
            href="https://www.linkedin.com/in/bradleyliu121901"
            target="_blank"
            rel="noreferrer"
          >
            https://www.linkedin.com/in/bradleyliu121901
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
