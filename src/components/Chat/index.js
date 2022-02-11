import React, { useState, useEffect } from "react";
import { AUTHORS } from "./utils/constants";
import { MessageList } from '../MessageList';
import { FormMui } from "../FormMui";
import { ChatList } from "../ChatList";
import { Navigate, useParams } from "react-router";
import '../../App.css';


const chats = [{ id: 'chat1' }];
const messages = {
    chat1: [],
}

export function Chat() {
    const params = useParams();
    const { chatId } = params;

    console.log(params);
    const [messageList, setMessageList] = useState({
        chat1: [],
        chat2: [],
        chat3: [],
    });
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
        setMessageList((prevMessageList) => ({
            ...prevMessageList,
            [chatId]: [...prevMessageList[chatId], newMsg]
        }));

    };

    useEffect(() => {
        messageEnd.current?.scrollIntoView();

        let timeout;
        if (messageList[chatId]?.[messageList[chatId]?.length - 1]?.author === AUTHORS.ME) {
            timeout = setTimeout(() => {
                sendMessage('hi, i am', AUTHORS.BOT);
            }, 1000);
        }
        return () => clearTimeout(timeout);
    }, [messageList]);

    useEffect(() => {
        console.log(messageEnd);
    }, []);


if (!messageList[chatId]) {
   return <Navigate to="/chats" replace />
}

    return (
        <div className="App">
            <div>
                {/* <ChatList /> */}
                <div className="App-content">
                    <MessageList messages={messageList[chatId]} />
                </div>
                <FormMui onSubmit={handleAddMessage} />
            </div>
        </div>
    );
}


  