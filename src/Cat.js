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
      <p style={paragraphStyle}>
        I was reading about the Raspberry Pi and thought it would be a fun
        project to prototype with. I started off this project with the latest
        Raspberry Pi 5 and Raspberry Pi Camera Module 3 as of August 2024. I got
        a few jumper cables, two servos, and a laser module. I planned the
        project without the breadboard, as there were only three simple
        components to be connected to the Pi. What I did not plan for was
        finding out that the Raspberry Pi 5 is not compatible with servos. I
        discovered that the Pi 5 does not have hardware PWM but instead a
        virtual PWM, resulting in inconsistent pulses to the servos. I also had
        trouble connecting the camera to the Pi due to wanting to keep my
        libraries organized in virtual environments. There was a workaround I
        found to copy the global libraries to the environment and then delete
        them tediously off the Pi.
      </p>
      <p style={paragraphStyle}>
        For the hardware PWM, I needed a microcontroller, which I could then
        control with the Pi. I had a Pi Zero 2W from some previous tinkering and
        figured I could do without a true microcontroller for now. Currently,
        the backend server handles UDP sent frames from the Pi 5 and has
        endpoints to control the horizontal and vertical servos set up on the
        Zero.
      </p>
      <img
        src={process.env.PUBLIC_URL + '/tools.png'}
        alt="components"
        style={imageStyle}
      />
      <p style={paragraphStyle}>
        I will keep this page updated. Currently waiting for a monitor and
        playing around with OpenCV and TensorFlow - Sept 17
      </p>
    </div>
  );
};

export default Cat;
