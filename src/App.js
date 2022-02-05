
import React, { useState } from "react";
//import logo from './logo.svg';
import './App.css';
import { Message } from './components/Message';
//import { Counter } from './components/Counter';
import { Form } from "./components/Form";
import { useEffect } from "react/cjs/react.development";
import { AUTHORS } from "./utils/constants";



function App() {
  const [messageList, setMessageList] = useState([
    { text: "msg1", author: AUTHORS.ME },
    { text: "i am bot", author: AUTHORS.BOT }
  ]);
  const handleMessageClick = () => {
    console.log('hello!!!')
  };

  const handleAddMessage = (text) => {
    const newMessage = {
      text,
      author: AUTHORS.ME,
    }
    setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
  };

  useEffect(() => {
    let timeout;
    if (messageList[messageList.length - 1].author === AUTHORS.ME) {
      timeout = setTimeout(() => {
        const newMessage = {
          text: 'hi, i am',
          author: AUTHORS.BOT,
      };
      setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
     }, 1000);  
    }
    return () => {
     clearTimeout(timeout);
    }    
  }, [messageList]);

  return (
    <div className="App">
      <div className="App-header">
        {messageList.map((message) => (
          <Message text={message.text} 
          author={message.author}
          onMessageClick={handleMessageClick} 
          />
        ))}
      </div>
      <Form onSubmit={handleAddMessage} />
    </div>
  );
}

export default App;
