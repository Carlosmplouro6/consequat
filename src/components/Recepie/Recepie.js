import React, { useEffect, useContext, useState } from "react";
import { FoodContext } from "../../context/FoodContext";
import "./recepie.css";

function Recepie() {
  const [category, setCategory, recepie, setRecepie] = useContext(FoodContext);
  const [recepieData, setRecepieData] = useState();
  const [showRecepie, setShowRecepie] = useState(false);
  useEffect(() => {
    if (recepie !== "None") {
      fetchRecepie();
    }
  }, [recepie]);

  async function fetchRecepie() {
    const recepieAPI = await fetch(
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + recepie
    );
    const recepieJson = await recepieAPI.json();
    console.log(recepieJson);
    setRecepieData(recepieJson);
    setShowRecepie(true);
    setRecepie("None");
  }

  return (
    <div>
      <div>
        {(() => {
          if (showRecepie) {
            return (
              <div className="recepieFieldCardContainer">
                <div className="recepieFieldCard">
                  <h2> {recepieData.meals[0].strMeal} </h2>
                  <img
                    className="recepiePic"
                    src={recepieData.meals[0].strMealThumb}
                    alt={recepieData.meals[0].strMeal}
                  />
                  <h4>Ingredients:</h4>
                  <ul>
                    <li>
                      {recepieData.meals[0].strIngredient1 + " "}
                      {recepieData.meals[0].strMeasure1}
                    </li>
                    <li>
                      {recepieData.meals[0].strIngredient2 + " "}
                      {recepieData.meals[0].strMeasure2}
                    </li>
                    <li>
                      {recepieData.meals[0].strIngredient3 + " "}
                      {recepieData.meals[0].strMeasure3}
                    </li>
                    <li>
                      {recepieData.meals[0].strIngredient4 + " "}
                      {recepieData.meals[0].strMeasure4}
                    </li>
                    <li>
                      {recepieData.meals[0].strIngredient5 + " "}
                      {recepieData.meals[0].strMeasure5}
                    </li>
                    <li>
                      {recepieData.meals[0].strIngredient6 + " "}
                      {recepieData.meals[0].strMeasure6}
                    </li>
                    <li>
                      {recepieData.meals[0].strIngredient7 + " "}
                      {recepieData.meals[0].strMeasure7}
                    </li>
                    <li>
                      {recepieData.meals[0].strIngredient8 + " "}
                      {recepieData.meals[0].strMeasure8}
                    </li>
                    <li>
                      {recepieData.meals[0].strIngredient9 + " "}
                      {recepieData.meals[0].strMeasure9}
                    </li>
                    <li>
                      {recepieData.meals[0].strIngredient10 + " "}
                      {recepieData.meals[0].strMeasure10}
                    </li>
                    <li>
                      {recepieData.meals[0].strIngredient11 + " "}
                      {recepieData.meals[0].strMeasure11}
                    </li>
                    <li>
                      {recepieData.meals[0].strIngredient12 + " "}
                      {recepieData.meals[0].strMeasure12}
                    </li>
                    <li>
                      {recepieData.meals[0].strIngredient13 + " "}
                      {recepieData.meals[0].strMeasure13}
                    </li>
                    <li>
                      {recepieData.meals[0].strIngredient14 + " "}
                      {recepieData.meals[0].strMeasure14}
                    </li>
                    <li>
                      {recepieData.meals[0].strIngredient15 + " "}
                      {recepieData.meals[0].strMeasure15}
                    </li>
                    <li>
                      {recepieData.meals[0].strIngredient16 + " "}
                      {recepieData.meals[0].strMeasure16}
                    </li>
                    <li>
                      {recepieData.meals[0].strIngredient17 + " "}
                      {recepieData.meals[0].strMeasure17}
                    </li>
                    <li>
                      {recepieData.meals[0].strIngredient18 + " "}
                      {recepieData.meals[0].strMeasure18}
                    </li>
                    <li>
                      {recepieData.meals[0].strIngredient19 + " "}
                      {recepieData.meals[0].strMeasure19}
                    </li>
                    <li>
                      {recepieData.meals[0].strIngredient20 + " "}
                      {recepieData.meals[0].strMeasure20}
                    </li>
                  </ul>
                  <p className="recepieInstructions">
                    {recepieData.meals[0].strInstructions}
                  </p>
                  <button
                    className="CloseBtn"
                    onClick={() => setShowRecepie(false)}
                  >
                    X
                  </button>
                </div>
              </div>
            );
          } else {
            return <div></div>;
          }
        })()}
      </div>
    </div>
  );
}

export default Recepie;
