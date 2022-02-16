import { ThemeContext } from "@emotion/react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import { Chat } from "../Chat";
import { ChatList } from "../ChatList";
import { Profile } from "../Profile";

const Home = () => <h2>Home page</h2>

export const Router = () => {
    const [messageColor, setMessageColor] = useState('red');


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
                <Route path="/profile" element={<Profile />} />
                <Route path="chats" element={<ChatList />}>
                <Route path=":chatId" element={<Chat />} />
                </Route>
                <Route element={<h4>404</h4>} />
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

