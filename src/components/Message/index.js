import React from "react";
import "./styles.css";

//export const Message = ({ text, mystring, onMessageClick }) => {
//    return (
//    <h3 className="header" onClick={onMessageClick}>
//   Message Text, {text}</h3>
//   );
//};

export class Message extends React.Component {
    render() {
        const { text, onMessageClick, author } = this.props;
        return (
            <div>
                <span onClick={onMessageClick}> 
                {author}: {text}
                </span>
            </div>
        );
    }
}

//const foo = () => {
 //   console.log("0-0-0-0-0");
//};

//export default foo;