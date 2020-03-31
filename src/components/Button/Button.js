import React from "react";
import "./Button.css";

const Button = ({ categories }) => {
  return (
    <div key={categories.strCategory}>
      {" "}
      <button className="categorieButton">{categories.strCategory}</button>{" "}
    </div>
  );
};

export default Button;
