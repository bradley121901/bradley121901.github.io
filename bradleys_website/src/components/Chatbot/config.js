import { createChatBotMessage } from 'react-chatbot-kit';
import React from 'react';
import bot from './bot.png';
const config = {
  botName: 'Chat',
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to learn?"),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: 'white',
    },
    chatButton: {
      backgroundColor: 'green',
    },
    userMessageInput: {
      backgroundColor: 'lightgray',
      width: '100px',
      height: '60px',
      padding: '10px',
      borderRadius: '8px',
      border: '1px solid #ccc',
    },
    userMessageBox: {
      backgroundColor: '#f0f0f0',
      fontSize: '16px',
      padding: '10px',
    },
  },
  customComponents: {
    header: () => (
      <div
        style={{
          backgroundColor: '#B0B0B0',
          padding: '5px',
          borderRadius: '3px',
        }}
      >
        Portfolio Chat Bot (beta)
      </div>
    ),
    botAvatar: () => (
      <div
        style={{
          backgroundColor: 'white',
          padding: '5px',
          borderRadius: '3px',
        }}
      >
        <img src={bot} alt="bot avatar" width="50pt" />
      </div>
    ),
    userAvatar: () => (
      <div
        style={{
          backgroundColor: 'white',
          padding: '5px',
          borderRadius: '3px',
        }}
      ></div>
    ),
  },
  openChatButton: true,
};

export default config;
