import React, {Component} from 'react';

//create Message bar component, copied from html
class MessageBar extends Component {
    render (){



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
    }
}


//export the charbar file
export default MessageBar;