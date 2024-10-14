import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import cl from "./MealsByCategory.module.css";

const MealsByCategory = () => {
  const { categoryName } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const mealsByCategory = async () => {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
      );
      setLoading(false);
      setMeals(response.data.meals);
    };
    mealsByCategory();
  }, [categoryName]);

  return (
    <>
      <h2 className={cl.title}>Блюда категории {categoryName}</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className={cl.wrapper_meal}>
          {meals.map((meal) => (
            <div key={meal.idMeal} className={cl.meal_inner}>
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

export default MealsByCategory;
