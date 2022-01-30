import React from 'react';
import './styles.css';

export class Message extends React.Component {
    tender() {
        const { text, onMessageClick } = this.props;
        return (
            <h3 className="header" onClick={onMessageClick}>
            Message Text, {text}
            </h3> 
        );
    }
}

