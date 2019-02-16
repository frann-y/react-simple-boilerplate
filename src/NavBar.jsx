import React, {Component} from 'react';

//create Navbar component
//Nav bar: title text AND connected User count display
class NavBar extends Component {
    render (){
      return (
        <nav className ="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
          
          <div className="navbar-users">{this.props.clientSize} Users Online</div>
        </nav>
      ) 
    }
}

export default NavBar;