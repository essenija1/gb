import { useCallBack } from "react";

export const DeleteButton = ({ id, onClick }) => {
    const handleClick = useCallBack(() => {
        onClick(id)
    }, [onClick, id]);
    return <div onClick={handleClick}>x</div>
};