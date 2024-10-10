import React from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

const RecipesPage = () => {
  return (
    <>
      <SearchForm />
      <RecipeCard />
    </>
  );
};

export default RecipesPage;
