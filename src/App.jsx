import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import NavBar from './NavBar.jsx';
import MessageBar from './Message.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  render() {
    return (
      <div>

        {/*Importing Nav bar*/}
        <NavBar />

        <main className="messages">
          <MessageList />
          <MessageBar />
        </main>

        <ChatBar />
        
      </div>
    )
  }
}

export default App;
