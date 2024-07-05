import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <body>
      <div className="header-container">
        <div className="header">
          <p>Professional Experience</p>
        </div>
        <div className="outer-container">
          <div className="work_container">
            <div className="left-column">
              <div className="left-row">
                <img
                  src={process.env.PUBLIC_URL + 'thales-logo.png'}
                  alt="Thales-Logo"
                  className="thales-logo"
                />
                <br />
                <br />
                <h className="workheader">Thales Group</h>
                <br />
                <p>Software Developer</p>
                <p>May 2024 - Dec 2024</p>
              </div>
            </div>
            <div className="right-column">
              <div className="right-row">
                <p>Key Takeaways</p>
                <p>
                  Open source adaptation to generate cli API client to do
                  communicate with hardware secure module api endpoints, for any
                  given yaml/json Swagger/OpenAPI specification. Custom CI/CD
                  pipeline setup in Gitlab for passing application build stages,
                  docker image deployment to run application on all systems.
                  Currently interning.
                </p>
              </div>
              <div className="right-row">
                <div className="rbc_description">
                  <p>
                    Definitely learned a lot from this project. Rigiourous code
                    review.
                    <a href="https://github.com/OpenAPITools/openapi-generator">
                      Open source reading and debugging.
                    </a>
                    Powerful tool with flexible customization. Generates golang
                    code to compile a cli executable binary with the golang
                    cobra library. Works with any OpenAPI/Swagger specification.
                  </p>
                </div>
                <p>
                  Development on Linux machines. Makefile generates and compiles
                  cli mounted in a custom dockerized environment. Custom CI/CD
                  pipeline on Gitlab to test, build, and deploy needed Docker
                  image.
                </p>
              </div>
            </div>
          </div>
          <br /> <br />
          <div className="work_container">
            <div className="left-column">
              <div className="left-row">
                <img
                  src={process.env.PUBLIC_URL + 'rbc-logo.png'}
                  alt="RBC-Logo"
                  className="rbc-logo"
                />
                <br />
                <br />
                <h className="workheader">Royal Bank of Canada</h>

                <br />
                <p>Mobile Application Developer</p>
                <p>Sept 2023 - Dec 2023</p>
              </div>
            </div>
            <div className="right-column">
              <div className="right-row">
                <p>Key Takeaways</p>
                <p>
                  Contributing to a large production repository for an
                  application to use at large publicly worldwide. It was
                  especially interesting to have the chance to explore and play
                  around with the Android Banking code, as well as to work with
                  cutting edge Google API releases.
                </p>
              </div>
              <div className="right-row">
                <div className="rbc_description">
                  <p>
                    Implemented proof of concept for passwordless authentication
                    for RBC's Android mobile banking application. This method of
                    authentication uses Google's newly released Credential
                    Manager API to create and authenticate users. I created this
                    integration with mock backend server requests, triggered
                    through various button implementations throughout the
                    application.
                  </p>
                </div>
                <p>
                  Furthermore I created a python script which automates checking
                  monthly new releases of the RBC Android banking application.
                  This script allows any developers to complete the checklist
                  with 95% faster efficiency than done manually. It installs the
                  application apk to be tested, performs the necessary checks
                  needed to ensure proper release onto Google playstore, and
                  sends the evaluation to any choice of platform communication.
                </p>
              </div>
            </div>
          </div>
          <br /> <br />
          <div className="work_container">
            <div className="left-column">
              <div className="left-row">
                <img
                  src={process.env.PUBLIC_URL + 'ms-logo.png'}
                  alt="MS Logo"
                  className="ms-logo"
                />
                <br />
                <br />
                <h className="workheader">Morgan Stanley</h>
                <br />
                <p>Cloud Application Developer</p>
                <p>Jan 2023 - Sep 2023</p>
              </div>
            </div>
            <div className="right-column">
              <div className="ms_description">
                <div className="right-row">
                  <p>Key Takeaways</p>
                  <p>
                    It was quite the challenge to be able to learn cloud
                    application deployment techniques at first given no
                    experience before. I had to quickly become proficient at it
                    to be able to host workshops to experienced employees within
                    the firm, and to develop my own application whilst preparing
                    for workshops. I got exposure to a lot of new technology,
                    both externally and internally used at Morgan Stanley.
                  </p>
                </div>
                <div className="right-row">
                  <p>
                    I created a demo application to present for firmwide
                    workshops. The application is built with Django Python to
                    track workshop attendence and export excel anayltics on such
                    attendance. The data is stored in a on-premise MongoDB
                    backend, with necessary security proxys integrated. Most
                    importantly, it's containerized with Docker, packaged with
                    Helm Chart, and deployed onto a kubernetes cluster. Grafana
                    Loki has been integrated as well for cluster logging.
                    <br></br>
                    <br></br>
                    It was a pleasure to host a week long workshop for other
                    teams at Morgan Stanley. These workshops taught the
                    necessary technologies needed for private cloud deployment.
                    It involved going through the theory of such technologies,
                    with a hands on labortory component for practice, spread
                    throughout the 5 days the workshop was held. I had the
                    oppurtunity to help prepare these workshops, as well as
                    taking part of them as an instructor and presenter.{' '}
                    <br></br>
                    <br></br>
                    These workshop materials and cloud deployment modules can be
                    found on a website, maintained and tested using Cypress.
                    This task was handled through my part time internship at the
                    firm, following my intial full-time experience. This time
                    was balanced with full-time school, and though challenging,
                    excercised my organization and time-management.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br /> <br />
          <div className="work_container">
            <div className="left-column">
              <div className="left-row">
                <img
                  src={process.env.PUBLIC_URL + 'cmic-logo.png'}
                  alt="CMiC Logo"
                  className="cmic-logo"
                />
                <br />
                <h className="workheader">CMiC</h>
                <br />
                <p>Data Integration Developer</p>
                <p>Aug 2022 - Jan 2023</p>
              </div>
            </div>
            <div className="right-column">
              <div className="ms_description">
                <div className="right-row">
                  <p>Key Takeaways</p>
                  <p>
                    This was my first time exposure to Agile Metheolody, using
                    Jira to create and keep track of on-going work, and first
                    hands-on experience with applying academic database studies
                    to real world applications, as well as API testing.
                  </p>
                </div>
                <div className="right-row">
                  <p>
                    I implemented SQL scripts in the goal of creating, updating,
                    and debugging data mapping pipelines between partnering
                    companies with CMiC. This experience not only sharpened my
                    SQL proficiency but also provided valuable insights into the
                    critical role of data management. Furthermore, I validated
                    and tested new features for the companies software
                    application through Postman APIs. I contributed to the
                    continuous improvement of the application's user experience
                    by providing feedback on usability, performance, and the
                    overall effectiveness of implemented features.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="work_container">
            <div className="left-column">
              <div className="left-row">
                <h className="workheader">Computer Science Instructor</h>
                <br />
                <p>Self-Employed</p>

                <p>Oct 2022 - Current</p>
              </div>
            </div>
            <div className="right-column">
              <div className="right-row">
                <p>Key Takeaways</p>
                <p>
                  It's inspirational to see both younger stundents with
                  elementary curiousity, and university students improve and
                  understand the topics I teach. It brings me great joy to see
                  their success, and to know that my teaching made an impact to
                  their understanding. I really try hard to create a fun
                  learning environment in a subject that might appear dry at
                  times. Ever since starting, I made it a goal to improve past
                  the current education system to bring a more enjoyable and
                  higher grade learning experience.
                </p>
              </div>
              <div className="right-row">
                Created and taught individualized curriculums for students ages
                7-24. These students are in elementary, high school, and
                university, looking to either improve there current academics or
                to learn a new interest. I cover variables, conditional
                statements, iteration, functions, OOP concepts, recursion, data
                stuctures and algorithmns. Depending on the proficincy and
                interest of the student, I also introduce them to basic web and
                Android front-end development with various incorporated backend
                technologies.
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </body>
  );
};
export default Experience;
