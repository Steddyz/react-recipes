import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import cl from "./MealsByCountry.module.css";

const MealsByCountry = () => {
  const { countrieName } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mealsByCountrie = async () => {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${countrieName}`
      );
      setLoading(false);
      setMeals(response.data.meals);
    };
    mealsByCountrie();
  }, [countrieName]);

  return (
    <>
      <h2 className={cl.title}>Блюда из {countrieName}</h2>
      {loading ? (
        <div className={cl.loading}>Loading...</div>
      ) : (
        <div className={cl.wrapper_countrie}>
          {meals.map((meal) => (
            <div className={cl.countrie_inner} key={meal.idMeal}>
              <img
                className={cl.image}
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />
              <p className={cl.description}>{meal.strMeal}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MealsByCountry;
