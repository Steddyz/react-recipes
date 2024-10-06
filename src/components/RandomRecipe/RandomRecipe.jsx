import React, { useEffect, useState } from "react";

import cl from "./RandomRecipe.module.css";
import axios from "axios";

const RandomRecipe = () => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const getRandomRecipe = async () => {
      const responce = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      console.log(responce.data.meals[0]);
      setRecipe(responce.data.meals[0]);
    };
    getRandomRecipe();
  }, []);

  return (
    <div className={cl.random}>
      <div className={cl.random_wrapper}>
        <div className={cl.wrapper_title}>Случайный рецепт</div>
        {recipe ? (
          <div>
            <img
              src={recipe.strMealThumb}
              alt="randomRecipe"
              className={cl.random_dish}
            />
            <div className={cl.wapper_inner}>
              <p className={cl.random_title}>{recipe.strMeal}</p>
              <p className={cl.random_country}>{recipe.strArea}</p>
            </div>
          </div>
        ) : (
          <div>Загрузка...</div>
        )}
      </div>
    </div>
  );
};

export default RandomRecipe;
