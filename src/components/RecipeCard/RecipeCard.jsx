import axios from "axios";
import React, { useEffect, useState } from "react";

import cl from "./RecipeCard.module.css";

const RecipeCard = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const allRecipes = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      setRecipes(response.data.meals);
      setLoading(false);
    };
    allRecipes();
  }, []);
  return (
    <>
      {loading ? (
        <div>Загрузка...</div>
      ) : (
        <div>
          {recipes.map((recipe) => (
            <div key={recipe.idMeal}>
              <p>{recipe.strMeal}</p>
              <img
                className={cl.image}
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
              />
              <p>{recipe.strInstructions}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default RecipeCard;
