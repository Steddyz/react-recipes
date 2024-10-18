import React from "react";
import { useLocation } from "react-router-dom";

const RecipePage = () => {
  const location = useLocation();

  const recipe = location.state;

  return (
    <div>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h2>{recipe.strMeal}</h2>
      <p>Страна:{recipe.strArea}</p>
      <p>Категория: {recipe.strCategory}</p>
      <p>Инструкция: {recipe.strInstructions}</p>
    </div>
  );
};

export default RecipePage;
