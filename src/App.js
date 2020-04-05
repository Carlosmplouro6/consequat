import React, { Component } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainContent from "./components/MainContent/MainContent";
import { FoodContext } from "./FoodContext";
import "./app.css";

class App extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="Header">
          <Header />
        </div>
        <FoodContext.Provider>
          <div className="mainContent">
            <MainContent />
          </div>
        </FoodContext.Provider>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
