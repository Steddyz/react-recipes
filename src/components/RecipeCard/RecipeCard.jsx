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
        <div className={cl.wrapper_recipe}>
          {recipes.map((recipe) => (
            <div className={cl.recipe_inner} key={recipe.idMeal}>
              <img
                className={cl.image}
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
              />
              <div className={cl.recipe_options}>
                <p>{recipe.strMeal}</p>
                <p>{recipe.strArea}</p>
              </div>

              {/* <p>{recipe.strInstructions}</p> */}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default RecipeCard;
