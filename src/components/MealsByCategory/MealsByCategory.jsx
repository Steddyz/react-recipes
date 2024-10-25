import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import cl from "./MealsByCategory.module.css";
import SearchForm from "../SearchForm/SearchForm";

const MealsByCategory = () => {
  const { categoryName } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [filter, setFilter] = useState("");

  const navigate = useNavigate();

  const handleSearch = (symbol) => {
    setFilter(symbol.trim());
  };

  const handleRecipeClick = async (meal) => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal.strMeal}`
      );
      setSelectedMeal(response.data.meals[0]);
      navigate(`/recipes/${meal.idMeal}`, { state: response.data.meals[0] });
    } catch (error) {
      console.error("Error fetching meal details:", error);
    }
  };

  useEffect(() => {
    const mealsByCategory = async () => {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
      );
      setLoading(false);
      setMeals(response.data.meals || []);
    };
    mealsByCategory();
  }, [categoryName]);

  const filteredMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h2 className={cl.title}>Блюда категории {categoryName}</h2>
      <SearchForm onSearch={handleSearch} />

      {loading ? (
        <div className={cl.loading}>Loading...</div>
      ) : (
        <div className={cl.wrapper_meal}>
          {filteredMeals.map((meal) => (
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
