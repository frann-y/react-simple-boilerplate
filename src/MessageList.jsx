import React, {Component} from 'react';

//create Message bar component, copied from html
class MessageList extends Component {
    render (){

      return (
        <div className="message">
            <span className="message-username">Anonymous1</span>
            <span className="message-content">I won't be impressed with technology until I can download food.</span>
        </div>
      ) 
    }
};


//export the charbar file
export default MessageList;
