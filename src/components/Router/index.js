import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { addChat, deleteChat } from "../../store/chats/actions";
import { ThemeContext } from "@emotion/react";
import { Chat } from "../Chat";
import { ChatList } from "../ChatList";
import ConnectedProfile, { Profile } from "../Profile";



const Home = () => <h2>Home page</h2>;

// const initialChats = [
//     {
//         name: 'Chat 1',
//         id: 'chat1',
//     },
//     {
//         name: 'Chat 2',
//         id: 'chat2',
//     },
//     {
//         name: 'Chat 3',
//         id: 'chat3',
//     },
// ];

// const initialMessage = initialChats.reduce((acc, el) => {
//     acc[el.id] = [];
//     return acc;
// }, {});

export const Router = () => {
    const [messageColor, setMessageColor] = useState('red');
    const messages = useSelector(selectMessage);

   const chatList = useSelector(selectChats) ;
   const dispatch = useDispatch();

    const handleAddMessage = (chatId, newMsg) => {
     dispatch(addMessage(chatId, newMsg));
   };
   
    const contextValue = {
       messageColor,
       setMessageColor,
    };

    return (
        <ThemeContext.Provider value={contextValue}>
        <BrowserRouter>
            <div>
                <NavLink to="/" 
                style={({isActive}) => ({color: isActive ? 'green' : 'grey'})}
                >
                    home
                    </NavLink>
            </div>
            <div>
                <NavLink
                style={({isActive}) => ({color: isActive ? 'green' : 'grey'})}
                to="/profile"
                >
                    profile
                    </NavLink>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<ConnectedProfile />} />
                <Route path="chats" element={
                <ChatList 
                />
                }
                >

                <Route 
                   path=":chatId" 
                    element={
                      <Chat messages={messages} addMessage={handleAddMessage} />
                      } 
                     /> 
                </Route>
                <Route path="*" element={<h4>404</h4>} />
            </Routes>
        </BrowserRouter>
        </ThemeContext.Provider>
    );
};


//  const withLogger = (Component) => {
//      return (...props) => {
//          console.log(props);
//          return <Component {...props} />;
//      };
//  };

