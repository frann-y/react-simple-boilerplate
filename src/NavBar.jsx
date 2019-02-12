import React, {Component} from 'react';

//create Navbar component, copied from html
class NavBar extends Component {
    render (){
      return (
        <nav className ="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
      ) 
    }
}


//export the charbar file
export default NavBar;