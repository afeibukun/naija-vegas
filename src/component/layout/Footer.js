import React from "react";
import "../../App.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <footer className="App-footer">
          <p>IT is the footer again </p>{" "}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Build Something
          </a>
        </footer>
      </div>
    );
  }
}

export default Footer;
