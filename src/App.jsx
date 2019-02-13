import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import NavBar from './NavBar.jsx';
import MessageBar from './Message.jsx';
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
        currentUser: {},
        messages: [{ id: uuid.v1(), username: "", content: ""}],
      };
  }

  render() {
    return (
      <div>

        {/*Importing Nav bar*/}
        <NavBar />

        <main className="messages">

          <MessageList messages = {this.state.messages} />
          
          <MessageBar />
        
        </main>

        <ChatBar currentUser={this.state.currentUser}/> {/*setting up prop*/}

      </div>
    )
  }
}

export default App;
