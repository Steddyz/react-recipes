import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <h2>Блюда категории {categoryName}</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {meals.map((meal) => (
            <div key={meal.idMeal}>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <p>{meal.strMeal}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MealsByCategory;
