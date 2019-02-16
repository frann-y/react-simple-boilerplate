//must be imported on every jsx file
import React, {Component} from 'react';


class ChatBar extends Component {
  //needs access to current user
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      message: '', 
    }
  }

//  updates the input on Events

//Handle UserName Change and Submit
    handleNameChange = event => {
      this.setState({ 
        username: event.target.value,
      })
    };

    handleNameSubmit = event => {
      if (event.key === 'Enter') {
        this.props.updateUsername(this.state.username);
        this.setState({ username: this.state.username }); //clear the field
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

//Render and return the chatBar (like a form)
    return (
      <footer className="chatbar">
        
        <input 
        className="chatbar-username" 
        placeholder="Your Name (Optional)" 
        type="text"
        name="username"
        value={this.state.username}
        onChange= {this.handleNameChange}
        onKeyUp= {this.handleNameSubmit}
        />

        <input 
        className="chatbar-message" 
        placeholder="Type a message and hit ENTER"
        type= "text" 
        value={this.state.message}
        onChange= {this.handleMessageChange}
        onKeyUp= {this.handleMessageSubmit}
        />
      </footer>
    ) 
  }
}

export default ChatBar;