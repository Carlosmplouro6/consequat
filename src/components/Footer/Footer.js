import React, { Component } from "react";
import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <div className="FooterContainer">
        <div className="FooterContent">Made by Carlos Louro</div>
        <div className="FooterContent">
          API courtesy by{" "}
          <a
            href="https://www.themealdb.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.themealdb.com/
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
