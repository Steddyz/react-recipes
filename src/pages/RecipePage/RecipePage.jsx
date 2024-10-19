import React from "react";
import { useLocation } from "react-router-dom";

import cl from "./RecipePage.module.css";

const RecipePage = () => {
  const location = useLocation();
  const recipe = location.state;

  if (!recipe) {
    return <div>Загрузка...</div>;
  }

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];

    if (ingredient) {
      ingredients.push({ ingredient, measure });
    }
  }

  return (
    <div className={cl.recipe_wrapper}>
      <img
        className={cl.recipe_image}
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
      />
      <div>
        <h2 className={cl.recipe_title}>{recipe.strMeal}</h2>
        <p className={cl.recipe_countrie}>Страна: {recipe.strArea}</p>
        <p className={cl.recipe_category}>Категория: {recipe.strCategory}</p>
        <p className={cl.recipe_instruction}>
          Инструкция: {recipe.strInstructions}
        </p>
      </div>
      <div>
        <h3>Ингредиенты</h3>
        <ul>
          {ingredients.map((item, index) => (
            <li ley={index}>
              {item.ingredient} {item.measure}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipePage;
