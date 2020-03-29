import React, { Component } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./app.css";

class App extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="Header">
          <Header />
        </div>

        <div className="mainContent"></div>

        <div className="Footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
