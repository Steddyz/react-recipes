import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import cl from "./MealsByCategory.module.css";

const MealsByCategory = () => {
  const { categoryName } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleRecipeClick = (meal) => {
    navigate(`/recipes/${meal.idMeal}`, { state: meal });
  };

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
        <div className={cl.loading}>Loading...</div>
      ) : (
        <div className={cl.wrapper_meal}>
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              onClick={() => handleRecipeClick(meal)}
              className={cl.meal_inner}
            >
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
