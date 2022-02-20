import React, { useState, useEffect, useRef } from "react";
import { AUTHORS } from "./utils/constants";
import { MessageList } from '../MessageList';
import { FormMui, FormWithLogger } from "../FormMui";
import { ChatList } from "../ChatList";
import { Navigate, useParams } from "react-router";
import '../../App.css';
import { useDispatch, useSelector } from "react-redux";
import { useSelector } from "react-redux";
import { selectMessages } from "../../store/messages/selector";

export function Chat() {
    const { chatId } = useParams();

    const messages = useSelector(selectMessages);
    const dispatch = useDispatch();

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
        dispatch(addMessage(chatId, newMsg));
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
                <FormWithLogger messageColor="yellow" onSubmit={handleAddMessage} />
            </div>
        </div>
    );
}

function middleware(store) {
    return function(next) {
        return function(action) {
            // .....
         return next(action);
        };
    };
}
