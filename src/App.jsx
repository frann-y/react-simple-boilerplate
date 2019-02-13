import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import NavBar from './NavBar.jsx';
import Message from './Message.jsx';
import MessageList from './MessageList.jsx';
import uuid from "uuid";

class App extends Component {
  //Needs acess to info on mesaages and current user
  constructor(props) {
    
    //setting the state?
    super(props); //cause using a class, 
    //dont need when inside a function, just a class
      this.state = { 
        //state app has when first launched. 
        //messages won be equal to anything. so empty array
        //initialization : barebones, bare bare
        currentUser: {
          username: 'Janet',
        },

        messages: [{ 
          id: uuid.v1(), 
          username: "Bob", 
          content: "Pickles"
        }],
      };
  }

    //update the msg list
    //info gets passed up from chatbar
    //call render and new state is passed to children   
    updateUsername = username => {
      // this.sendUpdateUsername(this.state.currentUser, username); //finish
      this.setState({
        currentUser: { 
          ...this.state.currentUser, 
          username: username }
      });
    };

    updateMessage = message => {
      // this.sendUpdateMessage(this.state.messages.username, username);  
     let newMsg = {
       id: uuid(), 
       username: this.state.currentUser.username, 
       content: message
      };

      this.setState({
        messages: [ 
          ...this.state.messages, 
          newMsg ],
      });
    };


  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
  }

  render() {
    return (
      <div>

        {/*Importing Nav bar*/}
        <NavBar />

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
        /> {/*setting up prop*/}

      </div>
    )
  }
}

export default App;
