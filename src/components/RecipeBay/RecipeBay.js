import React, { useContext, useState, useEffect } from "react";
import { FoodContext } from "../../context/FoodContext";

import "./RecipeBay.css";

function RecipeBay() {
  const [category, setCategory, recepie, setRecepie] = useContext(FoodContext);
  const [recepies, setRecepies] = useState([]);
  useEffect(() => {
    if (category !== "None") {
      fetchRecepies();
    }
  }, [category]);

  async function fetchRecepies() {
    const recepiesAPI = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category
    );
    const recepiesJson = await recepiesAPI.json();
    console.log(recepiesJson);
    setRecepies(recepiesJson.meals);
  }

  function prepareRecepie(recepieID) {
    console.log(recepieID);
    setRecepie(recepieID);
  }

  return (
    <div className="RecepieCardContainer">
      {recepies.map((recepies) => (
        <div
          className="recepieCard"
          key={recepies.idMeal}
          onClick={() => prepareRecepie(recepies.idMeal)}
        >
          <img
            className="recepieImg"
            src={recepies.strMealThumb}
            alt={recepies.strMeal}
          />
          <h3 className="recepieTitle">{recepies.strMeal}</h3>
        </div>
      ))}
    </div>
  );
}

export default RecipeBay;
