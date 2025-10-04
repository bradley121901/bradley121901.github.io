import React from 'react';
import { Link } from 'react-router-dom';
import './Articles.css';

function Articles() {
  return (
    <div className="articles">
      <h2 className="articles-title">Recent Articles</h2>
      <Link className="articles-link" to="/streaming">
        # A Comparison of Event Streaming Tools (Apache Kafka v.s. Amazon SQS)
      </Link>
      <Link className="articles-link" to="/communication-protocols">
        # A Comparision of API Communication Protocols (REST v.s. GraphQL v.s.
        gRPC)
      </Link>
      <Link className="articles-link" to="/monolith">
        # From Microservices Back to Monoliths
      </Link>
      <Link className="articles-link" to="/watermarking">
        # A Study on Watermarking Large Language Models
      </Link>

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
          Download My Resume
        </a>
      </div>
    </div>
  );
}

export default Articles;
