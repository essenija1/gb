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
import { onChildAdded, push } from "firebase/database";
import { getMessagesRefByChatId } from "../../services/firebase";

export function Chat() {
    const { chatId } = useParams();

    //const messages = useSelector(selectMessages);
    const [messages, setMessages] = useState([]);
    const dispatch = useDispatch();

    const messagesEnd = useRef();

    const handleAddMessage = (text) => {
        sendMessage(text, AUTHORS.ME);
    };

    const sendMessage = (text, author) => {
        const newMsg = {
            text,
            author,
            id: `msg-${Date.now()}`,
        }
       // dispatch(addMessageWhithThunk(chatId, newMsg));
       set(getMessageRefById(chatId, newMsg.id), newMsg);
    };

    useEffect(() => {
        const unsubscribe = onValue(
            getMessageListRefByChatId(chatId), 
             (snapshot) => {
               if (!snapshot.val()?.empty) {
                 setMessages(null);
               }
           });

          return unsubscribe;
    }, [chatId]);


    useEffect(() => {
      const unsubscribe = onChildAdded(
          getMessageListRefByChatId(chatId), 
          (snapshot) => {
          console.log(snapshot.val());
          setMessages(prevMessages => [...prevMessages, snapshot.val()]);
      });

      return unsubscribe;
    }, [chatId]);


    useEffect(() => {
        const unsubscribe = onChildAdded(
            getMessageListRefByChatId(chatId), 
            (snapshot) => {
            console.log(snapshot.val());
             setMessages((prevMessages) => 
                prevMessages.filter(({ id }) => id !== snapshot.val()?.id)
            );
          }
        );
  
        return unsubscribe;
      }, [chatId]);


    useEffect(() => {
        messagesEnd.current?.scrollIntoView();
    }, [messages]);
    
     if (!messages) {
         return <Navigate to="/chats" replace />;
     }

    return (
        <div className="App">
            <div>
                {/* <ChatList /> */}
                <div className="App-content">
                    <MessageList messages={messages} />
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
