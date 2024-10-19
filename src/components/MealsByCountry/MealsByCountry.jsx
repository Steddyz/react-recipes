import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import cl from "./MealsByCountry.module.css";

const MealsByCountry = () => {
  const { countrieName } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const navigate = useNavigate();

  const handleRecipeClick = async (meal) => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal.strMeal}`
      );
      setSelectedMeal(response.data.meals[0]);
      navigate(`/recipes/${meal.idMeal}`, { state: response.data.meals[0] });
    } catch (eroor) {
      console.error("Error fetching meal details:", error);
    }
  };

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
            <div
              onClick={() => handleRecipeClick(meal)}
              className={cl.countrie_inner}
              key={meal.idMeal}
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

export default MealsByCountry;
