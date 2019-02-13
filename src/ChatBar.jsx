//must be imported on every jsx file
import React, {Component} from 'react';
//w/out curly braces, uses default


//create chatbar component, copied from html
class ChatBar extends Component {
  //needs access to current user
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      message: '', // ****content: this.props.content,or message? //set to strings
    }
  }

    //  updates the input - typing somthing

    //Handle UserName Change and Submit
    handleNameChange = event => {
      this.setState({ 
        username: event.target.value,
      })
    };

    handleNameSubmit = event => {
      if (event.key === 'Enter') {
        this.props.updateUsername(this.state.username);
        this.setState({ username: '' }); //clear the field
      }
    };

    //Handle Message Change and Submit
    handleMessageChange = event => {
      this.setState({
        message: event.target.value,
      })
    }

    handleMessageSubmit = event => {
      if (event.key === 'Enter') {
        this.props.updateMessage(this.state.message);
        this.setState({ message: '' }); //clear the field
      }
    };

    
  
  render () {
    //console.log(this.props) //do something w later??
    //console.log(this.props.currentUser)//log user
    
    return (
      <footer className="chatbar"> {/*classname is a prop*/}
        
        <input 
        className="chatbar-username" 
        placeholder="Your Name (Optional)" 
        type="text"
        name="username"
        value={this.state.username}
        onChange= {this.handleNameChange} //wont allow if enterkey
        onKeyUp= {this.handleNameChange}
        />

        <input 
        className="chatbar-message" 
        placeholder="Type a message and hit ENTER"
        type= "text" 
        value={this.state.message}
        onChange= {this.handleMessageChange}
        onKeyUp= {this.handleMessageChange}
        />
      </footer>
    ) 
  }
}


//export the chatbar file
export default ChatBar;