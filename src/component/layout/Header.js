import React from "react";
import "../../App.css";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <header className="App-header">
          <p>Header here</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            SIGN
          </a>
        </header>
      </div>
    );
  }
}

export default Header;
