import React, {Component} from 'react';
import Message from "./Message.jsx"



class MessageList extends Component {
      //Needs access to messages
      //.map

    render (){
      //console.log(this.props) //do something w later??
      const msgs = this.props.messages;//log messages
      
      //map over messages =this.state.messages 
      // make some list, put in key props
      const msgList = msgs.map(msg => (
        <Message 
          key={msg.id} 
          username = {msg.username}
          content = {msg.content}
          type = {msg.type} 
        />

      //update the msg list
      //info gets passed up from chatbar
      //call render and new state is passed to children

      ))

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
