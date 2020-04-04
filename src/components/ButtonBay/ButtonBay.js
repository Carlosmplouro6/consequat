import React, { useState, useEffect } from "react";
import "./ButtonBay.css";

const ButtonBay = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setACategory] = useState("");

  async function fetchCategories() {
    const categoriesAPI = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
    );
    const categoriesJson = await categoriesAPI.json();
    console.log(categoriesJson);
    setCategories(categoriesJson.meals);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  function buttonClicked(category) {
    setACategory(category);
    console.log(activeCategory);
    var Buttons = document.getElementsByClassName("categorieButton");
    for (var i = 0; i < Buttons.length; i++) {
      if (Buttons[i].id === category) {
        clearActive();
        Buttons[i].className += " active";
      }
    }
  }

  function clearActive() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
  }

  return (
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
  );
};

export default ButtonBay;
