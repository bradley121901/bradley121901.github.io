import React from 'react';
import './Landing.css';
const Landing = () => {
  return (
    <>
      <body>
        <div className="landing-container">
          <div className="topd slide-in">
            <h>Hello!</h>
          </div>
          <br></br>
          <div className="desc slide-in">
            <p>
              My name is Bradley and I am in my final year of undergraduate
              studies at the University of Ottawa. I have a high interest
              towards the frontier of development and enjoy coding to solve
              complex problems with interesting solutions. This website is to
              share with you my experiences. It's built on React.js with ongoing
              backend projects built on Flask and hosted on Azure. I will keep
              on updating it with enhanced features. Stay tuned and feel free to
              reach out with questions!
              <br />
              <br />
              <br />
            </p>
            <p className="version-note"></p>
          </div>
        </div>
      </body>
    </>
  );
};
export default Landing;
