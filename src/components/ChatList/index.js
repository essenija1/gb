import { List, ListItem } from "@mui/material";
import { Link, Outlet  } from "react-router-dom";


// const handleDeleteChat = (idToDelete) => {
//       const newChats = chats.filter(chat => chat.id !== idToDelete);
//       setChats(newChats);
//       const newMessageList = { ...messageList };
//       delete messageList[idToDelete];
//       setMessageList(newMessageList)
// }

export const ChatList = ({ chats, onAddChat, onDeleteChat }) => (
    <>
        <List>
            {chats.map((chat) => <ChatItem chat={chat} onDeleteChat={onDeleteChat} />)}
        </List>
        <FormMui onSubmit={onAddChat} />
        <Outlet />
    </>
);