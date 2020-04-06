import React, { Component } from "react";
import ButtonBay from "../ButtonBay/ButtonBay";
import RecipeBay from "../RecipeBay/RecipeBay";
import Recepie from "../Recepie/Recepie";
import { FoodProvider } from "../../context/FoodContext";

import "./MainContent.css";

class MainContent extends Component {
  render() {
    return (
      <FoodProvider>
        <div>
          <Recepie />
        </div>
        <div className="mainContentContainer">
          <div className="buttonBay">
            <ButtonBay />
          </div>
          <div className="recipeBay"></div>
          <RecipeBay />
        </div>
      </FoodProvider>
    );
  }
}

export default MainContent;
