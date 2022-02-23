import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';

import { ThemeContext } from "@emotion/react";
import { Articles } from "../Articles/Articles";
import { Chat } from "../Chat";
import { ChatList } from "../ChatList";
import { Home } from "../Home/Home";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import ConnectedProfile from "../Profile";
import { PublicRoute } from "../PublicRoute/PublicRoute";

const Home = () => <h2>Home page</h2>;


export const Router = () => {
    const [messageColor, setMessageColor] = useState('red');
    const [authed, setAuthed] = useState(false);
    const authorize = () => {
        setAuthed(true);
    };
    const unauthorize = () => {
        setAuthed(false);
    };
   
    const contextValue = {
       messageColor,
       setMessageColor,
    };
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
              setAuthed(true);
          } else {
              setAuthed(false);
          }
        });

        return unsubscribe;
    }, []);


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
            <div>
                <NavLink
                style={({isActive}) => ({color: isActive ? 'green' : 'grey'})}
                to="/chats"
                >
                    chats
                    </NavLink>
            </div>
            <div>
                <NavLink
                style={({isActive}) => ({color: isActive ? 'green' : 'grey'})}
                to="/articles"
                >
                    articles
                    </NavLink>
            </div>
            <Routes>
                <Route path="/" element={<PublicRoute authed={authed} />}>
                  <Route path="" element={<Home />} />
                  <Route path="/signup" element={<Home isSignUp />} />
                </Route>
                <Route path="/profile" element={<PrivateRoute authed={authed} />}>

                <Route 
                path="" 
                element={<ConnectedProfile onLogout={unauthorize} />} />
                </Route>
                <Route path="/articles" element={<Articles />} />     
                <Route path="chats" element={<ChatList />}>
                <Route path=":chatId" element={<Chat />} /> 
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

