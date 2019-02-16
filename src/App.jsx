import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import NavBar from './NavBar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';
import uuid from "uuid";

class App extends Component {

//setting the state
//Needs acess to info on mesaages and current user
  constructor(props) {
    super(props); 
      this.state = { 
        currentUser: {
          username: 'Anon',
        },
        messages: [],
        clientSize: 0,
      };
  }

//Update UserName
    updateUsername = username => {
      this.sendUpdateUsername(this.state.currentUser.username, username); //finish
      this.setState({
        currentUser: { 
          ...this.state.currentUser, 
          username: username }
      });
    };

//AddingMessage
    updateMessage = message => {
     let newMsg = {
       id: uuid(), 
       username: this.state.currentUser.username, 
       content: message,
       type: 'postMessage',
      };
      this.myWebSocket.send(JSON.stringify(newMsg)); 
    };

//Adding message || Notification for ws
    addNewMessage = msg => {
      let newMessages = this.state.messages.concat(msg);
      this.setState({messages: newMessages});
    };


    addNewNotification = notify => {
      let newNotification = this.state.messages.concat(notify);
      this.setState({messages: newNotification});
    }

//Update/Notify of user name change
    sendUpdateUsername = (oldUsername, newUsername) => {
      const message = {
        type: 'postNotification',
        content: `${oldUsername ||
          'Anon'} has changed its name to ${newUsername}`,
      }
      this.myWebSocket.send(JSON.stringify(message));
    };

//Update the value of Num of Online Users
    incomingUserInfo = (clientSize) => {
      this.setState({clientSize})
    }
  
  componentDidMount() {
    //Connecting my websocket server to App
    this.myWebSocket = new WebSocket(
      "ws://localhost:3001/socketserver", 
      "protocolOne"
    );

    //Switch statement: on messagetype, which notification to send. 
    this.myWebSocket.onmessage = event => {

      const serverMessage = JSON.parse(event.data);
      switch (serverMessage.type) {
        case 'incomingMessage':
          this.addNewMessage(serverMessage);
          break;
        case 'incomingNotification':
          this.addNewNotification(serverMessage);
          break; 
        case 'incomingUserInfo':
          this.incomingUserInfo(serverMessage.clientSize);
        break;
        default:
          console.log(`Unknown input: ${serverMessage.type}`);
      }
    };
}
//call render and new state is passed to children  
  render() {
    return (
      <div>

        {/*setting up properties*/}
        <NavBar
          clientSize= {this.state.clientSize}
        />

        <main className="messages">

          <MessageList 
            messages = {this.state.messages} 
            //currentUser={this.state.currentUser}
            updateUsername= {this.updateUsername}
            updateMessage= {this.updateMessage}
          />
          
          <Message           
            updateUsername= {this.updateUsername}
            updateMessage= {this.updateMessage}
          />
        
        </main>

        <ChatBar 
          currentUser={this.state.currentUser}
          updateUsername= {this.updateUsername}
          updateMessage= {this.updateMessage}
        /> 

      </div>
    )
  }
}

export default App;
