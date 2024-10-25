import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import cl from "./MealsByCountry.module.css";
import SearchForm from "../SearchForm/SearchForm";

const MealsByCountry = () => {
  const { countrieName } = useParams();
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
    } catch (eroor) {
      console.error("Error fetching meal details:", error);
    }
  };

  useEffect(() => {
    const mealsByCountrie = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${countrieName}`
      );
      setLoading(false);
      setMeals(response.data.meals || []);
    };
    mealsByCountrie();
  }, [countrieName]);

  const filteredMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h2 className={cl.title}>Блюда из {countrieName}</h2>
      <SearchForm onSearch={handleSearch} />
      {loading ? (
        <div className={cl.loading}>Loading...</div>
      ) : (
        <div className={cl.wrapper_countrie}>
          {filteredMeals.map((meal) => (
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
