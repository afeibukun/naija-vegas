import React from "react";
import logo from "../logo.svg";
import "../App.css";
import { Link } from "react-router-dom";

function NoMatch(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Couldn't find a match for <code> {props.location.pathname} </code>{" "}
          Kindly return to <Link to="/">Home</Link>.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Naija Vegas
        </a>
      </header>
    </div>
  );
}

export default NoMatch;
