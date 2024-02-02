import React from 'react';
import './Projects.css';
import ChatBotComponent from '../components/Chatbot/Chatbot';
const Projects = () => {
  return (
    <body>
      <div className="header-container">
        <div className="header">
          <h3>Hobby Projects</h3>
        </div>
      </div>
      <p className="outer-container">
        <a
          className="al"
          href="https://github.com/bradley121901"
          target="_blank"
          rel="noreferrer"
        >
          (Click here to navigate to my GitHub)
        </a>
      </p>

      <div className="c">
        <div className="l-column">
          <p>
            I am currently working on the Flask backend to this project to
            incorporate a chat bot feature to this website. Be kind to the bot's
            ability to answer questions as I am generating and refining my
            training data set. The chatbot will answer any questions related to
            me using a self-learning approach. I've chosen a generative model,
            specifically Punkt, a pretrained tokenizer model for the English
            language. This model will be created with three layers, 128 neurons
            in the first layer, 64 neurons in the second layer, and the third
            layer will have a number of neurons equal to the intents needed to
            predict the output. I would love to talk more about my ongoing hobby
            projects as well as my exisiting ones!
            <br></br>
            <br></br> I am have high interest in cutting-edge technologies and
            this ongoing project is an extension of one of my interest in AI/ML
            topics. More AI/ML projects can be found on my Github, including
            implementing a DBScan clutering technique to predict best waiting
            areas for taxis in New York City from a NYC 2009 taxi dataset, and
            making music genre predictions from an arbitrary dataset using a
            decision tree. Furthermore my Github has both full-stack web and
            Android development projects. These applications have a working
            backend to do basic SQL retrievals, additions, and updates.
            Furthermore I have front-end React.js hobby projects to experiment
            with solely front-end development.
          </p>
        </div>
        <div className="r-column">
          <p>
            <ChatBotComponent />
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
    </body>
  );
};
export default Projects;
