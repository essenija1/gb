import { useCallBack } from "react";
import { useDispatch } from "react-redux";
import { deleteChat } from "../../store/chats/actions";


export const DeleteButton = ({ id }) => {
    const dispatch = useDispatch();
    
    const handleDeleteChat = () => {
       // dispatch(deleteChat(id));
       //set(getChatsRefById(id), null);
       remove(getChatsRefById(id));
    };


    return <div onClick={handleDeleteChat}>x</div>
};