import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import "./ButtonBay.css";

const ButtonBay = () => {
  const [categories, setCategories] = useState([]);

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

  return (
    <div className="buttonGrid">
      {categories.map((categories, index) => (
        <Button key={index} categories={categories} />
      ))}
    </div>
  );
};
export default ButtonBay;
