import React from "react";
import RandomRecipe from "../../components/RandomRecipe/RandomRecipe";
import IngredientsForm from "../../components/IngredientsForm/IngredientsForm";

const MainPage = () => {
  return (
    <>
      <RandomRecipe />
      <IngredientsForm />
    </>
  );
};

export default MainPage;
