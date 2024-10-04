import React from 'react';

const Cat = () => {
  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
    maxWidth: '800px',
    margin: 'auto',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '2.5em',
    margin: '0.5em 0',
    color: '#333',
  };

  const paragraphStyle = {
    fontSize: '1.2em',
    lineHeight: '1.6',
    margin: '0.5em 0',
    color: '#555',
  };

  const imageStyle = {
    maxWidth: '50%',
    height: 'auto',
    width: 'auto',
    margin: '20px 0',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Intelligent Cat Toy</h1>
      <p style={paragraphStyle}>
        Raspberry Pi + TensorFlow + YOLOv8 + Servos + Laser
      </p>
      <p style={paragraphStyle}>
        I want to create the most high-tech cat toy on the market. The end goal
        is to have a laser optimized to move in a mouse-like manner according to
        the cat's movements. It will take into consideration objects and only
        direct to the floor within the camera's view. A mobile/web frontend will
        allow remote access to the laser and camera. Credits to my cat who
        easily gets bored.
      </p>
      <p style={{ ...paragraphStyle, fontWeight: 'bold' }}>Prototyping</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={process.env.PUBLIC_URL + '/preview.jpg'}
          alt="components"
          style={imageStyle}
        />
      </div>
      <p style={paragraphStyle}>
        I started off this project with the latest Raspberry Pi 5 and Raspberry
        Pi Camera Module 3 as of August 2024. I got a few jumper cables, two
        servos, and a laser module. I planned the project without the
        breadboard, as there were only three simple components to be connected
        to the Pi. What I did not plan for was finding out that the Raspberry Pi
        5 iterations removed its hardware PWM in place of a virtual PWM. This
        results in inconsistent pulses causing jitter to the servos. I also had
        trouble connecting the camera to the Pi using picamera installed on a
        virtual environment instead of system-wide. I personally want to keep my
        environments organized, and not directly installed in my machine. There
        was a workaround I found to copy the global libraries to the environment
        and then delete them tediously off the Pi.
      </p>
      <p style={paragraphStyle}>
        For the hardware PWM, I had a Pi Zero 2W from some previous tinkering
        but with a half a GB of RAM, VS code extensions would even be too much
        for the zero. So another Raspberry Pi 4 was purchased to build the first
        prototype. My money spent on the Pi 5 will not be wasted, as I will find
        another function for the machine. Just lots of disappointment from
        Raspberry Pi.
      </p>
      <img
        src={process.env.PUBLIC_URL + '/catandtoy.jpg'}
        alt="cat and toy"
        style={imageStyle}
      />
      <img
        src={process.env.PUBLIC_URL + '/screen.jpg'}
        alt="screen"
        style={imageStyle}
      />
      <p style={paragraphStyle}>
        I will keep this page updated once I finish the algorithmn to sync cat
        detection (YOLOv8) with servo movements. - Oct 3
      </p>
    </div>
  );
};

export default Cat;
