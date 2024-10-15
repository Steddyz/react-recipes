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
        `www.themealdb.com/api/json/v1/1/filter.php?a=${countrieName}`
      );
      setLoading(false);
      setMeals(response.data.meals);
    };
    mealsByCountrie;
  }, [countrieName]);

  return (
    <>
      <h2>Блюда из {countrieName}</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {meals.map((meal) => (
            <div key={meal.idMeal}>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <p className={cl.description}>{meal.strMeal}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MealsByCountry;
