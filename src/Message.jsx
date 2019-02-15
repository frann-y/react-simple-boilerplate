import React, {Component} from 'react';
//import Notify from './Notify.jsx';

//create Message bar component, copied from html
class Message extends Component {
  render (){
    console.log(this.props.type)
    
    if (this.props.type === "incomingMessage") {
      return (
        <div>

          <div className = "message">
            <span className = "message-username">{this.props.username}</span>
            <span className= "message-content">{this.props.content}</span>
          </div>

          <div className="message system">
          </div>
        </div>
      )
    } else if (this.props.type === 'incomingNotification') {
      return (
        <div>

          <div className="notification">
            <span className="notification-content">{this.props.content}</span>
          </div>

          <div className="message system">
          </div>
        </div>
      )
   
    } else {
      return <div></div>
    }
  }
}

//export the charbar file
export default Message;