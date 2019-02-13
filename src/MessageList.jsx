import React, {Component} from 'react';

//create Message bar component, copied from html
class MessageList extends Component {
      //Needs access to messages
      //.map

    render (){
      console.log(this.props) //do something w later??
      console.log(this.props.messages)//log messages

      
      //map over messages =this.state.messages 
      // make some list, put in key props

      return (
        <div className="message">
            <span className="message-username">Anonymous1</span>
            <span className="message-content">I won't be impressed with technology until I can download food.</span>
        </div>
      ) 
    }
};


///const MessageList = ({ messages }) => {
//  const messageEl = messages.map(message => (
//<
//))
//}

// function MessageList(props) {
//   const mess = props.messages;
//   const messItems = mess.map((messnumber) =>
//     <li>{mess}</li>
//   );
//   return (
//     <ul>{messItems}</ul>
//   );
// }

//export the charbar file
export default MessageList;
