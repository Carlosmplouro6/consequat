import React, { useState, useEffect, useContext } from "react";
import { FoodContext } from "../../context/FoodContext";
import "./ButtonBay.css";

const ButtonBay = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useContext(FoodContext);
  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    const categoriesAPI = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
    );
    const categoriesJson = await categoriesAPI.json();
    console.log(categoriesJson);
    setCategories(categoriesJson.meals);
  }

  function buttonClicked(pressedCategory) {
    setCategory(pressedCategory);
    var Buttons = document.getElementsByClassName("categorieButton");
    document.getElementById("checkbox").checked = false;
    for (var i = 0; i < Buttons.length; i++) {
      if (Buttons[i].id === pressedCategory) {
        clearActive();
        Buttons[i].className += " activeBtn";
      }
    }
  }

  function clearActive() {
    var current = document.getElementsByClassName("activeBtn");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" activeBtn", "");
    }
  }

  return (
    <div id="menuToggle">
      <input id="checkbox" type="checkbox" defaultChecked />
      <span></span>
      <span></span>
      <span></span>
      <div className="buttonGrid">
        {categories.map((categories) => (
          <button
            key={categories.strCategory}
            id={categories.strCategory}
            className="categorieButton"
            onClick={() => buttonClicked(categories.strCategory)}
          >
            {categories.strCategory}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonBay;
