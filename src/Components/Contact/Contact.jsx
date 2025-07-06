import React from 'react';
import './Contact.css';
function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch 🎙️</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h3>Let's talk!</h3>
          <p>
            I am currently working on a AI powered laser cat toy. Feel free to
            reach out to exchange ideas or if you would like to learn more!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <p>bradley121901@gmail.com</p>
            </div>
            <div className="contact-detail">
              <p>+1(438)860-0415</p>
            </div>
            <div className="contact-detail">
              <p>https://www.linkedin.com/in/bradleyliu121901</p>
            </div>
          </div>
        </div>
        {/* <form action="" className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form> */}
      </div>
    </div>
  );
}

export default Contact;
