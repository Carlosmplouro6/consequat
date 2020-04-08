import React, { useEffect, useContext, useState } from "react";
import { FoodContext } from "../../context/FoodContext";
import "./recepie.css";

function Recepie() {
  const [category, setCategory, recepie, setRecepie] = useContext(FoodContext);
  const [recepieData, setRecepieData] = useState();
  const [showRecepie, setShowRecepie] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);

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

    for (let i = 1; i < 21; i++) {
      if (
        !recepieJson.meals[0]["strIngredient" + i] == "" ||
        !recepieJson.meals[0]["strIngredient" + i] == null
      ) {
        setIngredients((oldArray) => [
          ...oldArray,
          recepieJson.meals[0]["strIngredient" + i],
        ]);
        setMeasures((oldArray) => [
          ...oldArray,
          recepieJson.meals[0]["strMeasure" + i],
        ]);
      }
    }
    console.log(recepieJson);
    setRecepieData(recepieJson);
    setShowRecepie(true);
    setRecepie("None");
  }

  function resetPage() {
    setShowRecepie(false);
    setIngredients([]);
    setMeasures([]);
  }

  return (
    <div>
      <div>
        {(() => {
          if (showRecepie) {
            return (
              <div className="recepieFieldCardContainer">
                <div className="recepieFieldCard">
                  <h2 className="recepieName">
                    {recepieData.meals[0].strMeal}
                  </h2>
                  <div className="imgIngContainer">
                    <img
                      className="recepiePic"
                      src={recepieData.meals[0].strMealThumb}
                      alt={recepieData.meals[0].strMeal}
                    />
                    <ul>
                      <h4 className="ingredientsTitle">Ingredients:</h4>
                      {ingredients.map((ingredients, index) => (
                        <li key={index}>
                          {ingredients} - {measures[index]}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <h4 className="instructionsTitle">Instructions:</h4>
                  <p className="recepieInstructions">
                    {recepieData.meals[0].strInstructions}
                  </p>
                  <button
                    className="CloseBtn"
                    onClick={() => {
                      resetPage();
                    }}
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
