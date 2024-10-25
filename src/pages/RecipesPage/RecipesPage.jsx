import React, { useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

const RecipesPage = () => {
  const [filter, setFilter] = useState("");

  const handleSearch = (symbol) => {
    setFilter(symbol);
  };

  return (
    <>
      <SearchForm onSearch={handleSearch} />
      <RecipeCard filter={filter} />
    </>
  );
};

export default RecipesPage;
