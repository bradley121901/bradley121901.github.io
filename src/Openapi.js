import React from 'react';

const Openapi = () => {
  return (
    <div>
      <h1>CLI API Client Tool</h1>
      <p>
        This is an interesting dive on a helpful developers automation tool.
      </p>
      <p>
        This tool utilizes OpenAPI Generator linked here. OpenAPI Generator
        takes a SWAGGER/API specification file and generates API client files to
        send service calls to backend endpoints. This is an open source
        developer tool that comes in useful if you want to save time generating
        such files. It is flexible to configure to include application
        configurations and a wide variety of languages.
      </p>

      <p>
        There is an option to override the class files in the repository to
        custom the generator further to your use. For anyone that lives through
        the command line, curl might've been a common alternative to test APIs
        opposed to Swagger. I propose an alternative to curl with a command line
        tool that automatically gets generated with every new API specificaation
        release, with options to customize language, configurations, and all the
        good stuff from the OpenAPI Generator folks.
      </p>

      <p>
        I'll be customizing OpenAPI Generator to generate API client files in
        Golang, as well Golang code to further generate a command line tool that
        utilizes the generated API client files to test API endpoints. OpenAPI
        starts by taking a Swagger/OpenAPI specification in JSON or YAML format,
        and configures the services and schemas to a CodegenProperty object found here. 

        Then this object is passed through a template engine. By default, the engines avaliable are jmustashe and handlebars, both utlizing the moustashe templating language.
        There's option to customize the template engine to your liking, and we'll be implementing a customized handlebars class. 

        The program starts at the generate function in 
      </p>
    </div>
  );
};

export default Openapi;
