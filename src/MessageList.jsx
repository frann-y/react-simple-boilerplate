import React, {Component} from 'react';
import Message from "./Message.jsx"

class MessageList extends Component {
    render (){

      //grap message properties
      const msgs = this.props.messages;
      
      //loop over messages w .map 
      const msgList = msgs.map(msg => (
        <Message 
          key={msg.id} 
          username = {msg.username}
          content = {msg.content}
          type = {msg.type} 
        />
      ))

      //return the message list to be displayed
      return (
        <div className="message">
            <ul> 
              {msgList}
            </ul>
        </div>
      ) 
    }
}

//export the charbar file
export default MessageList;
