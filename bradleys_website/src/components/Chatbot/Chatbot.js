import Chatbot from 'react-chatbot-kit';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';
import './Chatbot.css';

function ChatboxComponent() {
  return (
    <div className="chatbox-wrapper">
      <div className="chatbot-container">
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
    </div>
  );
}

export default ChatboxComponent;
