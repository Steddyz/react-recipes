import React from "react";

import cl from "./RandomRecipe.module.css";

const RandomRecipe = () => {
  return (
    <div className={cl.random}>
      <div className={cl.random_wrapper}>
        <div className={cl.wrapper_title}>Случайный рецепт</div>
        <img src="" alt="randomRecipe" className={cl.random_dish} />
        <p className={cl.random_title}>Название</p>
        <p className={cl.random_country}>Кухня</p>
      </div>
    </div>
  );
};

export default RandomRecipe;
