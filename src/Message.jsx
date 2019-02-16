import React, {Component} from 'react';

//create Message bar component
class Message extends Component {
  render (){

    //If Statement for type of Message/Notification rendered to the chat body
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

export default Message;