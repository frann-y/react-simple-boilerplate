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
        <form>
        <input className="chatbar-username" 
        placeholder="Your Name (Optional)" 
        type="text"
        />
        </form>

        <input className="chatbar-message" 
        placeholder="Type a message and hit ENTER"
        type= "text" 
        />
      </footer>
    ) 
  }
}


//export the chatbar file
export default ChatBar;