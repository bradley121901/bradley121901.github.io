import React, { useState } from 'react';
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse = async (message) => {
    try {
      const response = await fetch(
        'https://black-dune-6e27155ae23d440bbbc296643f4514f5.azurewebsites.net/get',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `msg=${message}`,
        }
      );

      if (response.ok) {
        const result = await response.text();
        this.actionProvider.greet(result);
      } else {
        console.error('Error sending message to Flask backend');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
}

export default MessageParser;
