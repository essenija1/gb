import { Unsubscribe } from "@mui/icons-material";
import { onChildAdded } from "firebase/database";
import { useEffect } from "react";
import { selectChats } from "./selectors";

export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const DELETE_CHAT = 'CHATS::DELETE_CHAT';

export const deleteChat = (id) => ({
    type: DELETE_CHAT,
    payload: id,
});

export const deleteChat = (id, name) => ({
    type: ADD_CHAT,
    payload: {
        id,
        name,
    },
});


export const initChatsTracking = () => (dispatch) => {
    onChildAdded(chatsRef, (snapshot) => {
        console.log(snapshot.val());
        dispatch(addChat(snapshot.val()));
    });

    onChildRemoved(chatsRef, (snapshot) => {
        deleteChat(deleteChat(snapshot.val().id, snapshot.val().name));

    });

};