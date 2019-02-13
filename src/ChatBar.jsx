//must be imported on every jsx file
import React, {Component} from 'react';
//w/out curly braces, uses default


//create chatbar component, copied from html
class ChatBar extends Component {
  //needs access to current user
  render (){
    console.log(this.props) //do something w later??
    console.log(this.props.currentUser)//log user
    return (
      <footer className="chatbar"> {/*classname is a prop*/}
        <input className="chatbar-username" placeholder="Your Name (Optional)" />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    ) 
  }
}


//export the chatbar file
export default ChatBar;