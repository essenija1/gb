
import React, { useState, useEffect } from "react";
//import logo from './logo.svg';
import './App.css';
import { Message } from './components/Message';
//import { Counter } from './components/Counter';
import { Form } from "./components/Form";
//import { useEffect } from "react/cjs/react.development";
import { AUTHORS } from "./utils/constants";
import { MessageList } from './components/MessageList';
import { FormMui } from "./components/FormMui";
// import { ThemeProvider } from "@emotion/react";
// import { createTheme } from "@mui/system";
// import { green, orange, purple } from "@mui/material/colors";

// const theme = createTheme({
//   palette: {
//     primery: {
//       main: purple[500],
//     },
//     secondary: {
//       main: green[500],
//     },
//   },
// });

const chats = [
  { name: 'Chat1', id: '1' },
  { name: 'Chat2', id: '2' },
];


function App() {
  const [messageList, setMessageList] = useState([]);
  const messageEnd = useRef();


  const handleAddMessage = (text) => {
    sendMessage(text, AUTHORS.ME);
  };

  const sendMessage = (text, author) => {
    const newMessage = {
      text,
      author,
      id: `msg-${Date.now()}`,
    }
    setMessageList((prevMessageList) => [...prevMessageList, newMessage]);
  };

  useEffect(() => {
    messageEnd.current?.scrollIntoView();

    let timeout;
    if (messageList[messageList.length - 1]?.author === AUTHORS.ME) {
      timeout = setTimeout(() => {
        sendMessage('hi, i am', AUTHORS.BOT);
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [messageList]);

  useEffect(() => {
    console.log(messageEnd);
  }, []);




  return (

    <div className="App">
      <ChatList />
      {/* <ul>
        {chats.map((chat) => (
          <li key={chat.id}>{chat.name}</li>
        ))}
      </ul> */}
      <div className="App-content">
        <MessageList messages={messageList} />
        <div ref={messageEnd} />
      </div>
      <FormMui onSubmit={handleAddMessage} />
    </div>

  );
}

export default App;

console.log(<div>Example</div>);