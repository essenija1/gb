import React, { useState, useEffect } from "react";
import { AUTHORS } from "./utils/constants";
import { MessageList } from '../MessageList';
import { FormMui } from "../FormMui";
import { ChatList } from "../ChatList";
import { Navigate, useParams } from "react-router";
import '../../App.css';


// const chats = [{ id: 'chat1' }];
// const messages = {
//     chat1: [],
// }

export function Chat({ messages, addMessage }) {
    const params = useParams();
    // const navigate = useNavigate();
    const { chatId } = params;

    const messageEnd = useRef();

    const handleAddMessage = (text) => {
        sendMessage(text, AUTHORS.ME);
    };

    const sendMessage = (text, author) => {
        const newMsg = {
            text,
            author,
            id: `msg-${Date.now()}`,
        }
        addMessage(chatId, newMsg);
    };

    useEffect(() => {
        messageEnd.current?.scrollIntoView();

        let timeout;
        if (messages[chatId]?.[messages[chatId]?.length - 1]?.author === 
            AUTHORS.ME
            ) {
               
            timeout = setTimeout(() => {
                sendMessage('hi, i am', AUTHORS.BOT);
            }, 1000);
        }



        return () => clearTimeout(timeout);
    }, [messages]);

    
    // useEffect(() => {
    //     console.log(messageEnd);
    // }, []);


if (!messages[chatId]) {
   return <Navigate to="/chats" replace />
}

    return (
        <div className="App">
            <div>
                {/* <ChatList /> */}
                <div className="App-content">
                    <MessageList messages={messages[chatId]} />
                </div>
                <FormWithLogger onSubmit={handleAddMessage} />
            </div>
        </div>
    );
}


  