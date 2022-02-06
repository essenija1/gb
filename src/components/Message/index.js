import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

export const Message = ({ text, author }) => {
    return (
        <div>
            <span>
                {author}: {text}
            </span>
        </div>
    );
};

Message.propTypes = {
    text: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number]),
    author: PropTypes.string.isRequired,
}

// export class Message extends React.Component {
//     render() {
//         const { text, author } = this.props;
//         return (
//             <div>
//                 <span>
//                 {author}: {text}
//                 </span>
//             </div>
//         );
//     }
// }

//const foo = () => {
 //   console.log("0-0-0-0-0");
//};

//export default foo;