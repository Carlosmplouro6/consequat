import React, { Component } from "react";
import "./Header.css";
class Header extends Component {
  render() {
    return (
      <div className="headerContainer">
        <div className="logo">
          <a href="index.html">
            <h1>Consequat</h1>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
