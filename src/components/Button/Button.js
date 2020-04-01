import React, { useState } from "react";
import "./Button.css";

const Button = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState();

  function buttonClicked() {
    console.log(categories.strCategory);
    setActiveCategory(categories.strCategory);
    var Buttons = document.getElementsByClassName("categorieButton");
    for (var i = 0; i < Buttons.length; i++) {
      Buttons[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
      });
    }
  }

  return (
    <div key={categories.strCategory}>
      <button className="categorieButton" onClick={() => buttonClicked()}>
        {categories.strCategory}
      </button>
    </div>
  );
};

export default Button;
