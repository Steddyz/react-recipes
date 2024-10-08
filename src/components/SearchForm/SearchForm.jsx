import React from "react";

import cl from "./SearchForm.module.css";
import Button from "../Button/Button";

const SearchForm = () => {
  return (
    <div>
      <form className={cl.form}>
        <input className={cl.input} placeholder="Поиск рецепта" />
        <Button value={"Поиск"} />
      </form>
    </div>
  );
};

export default SearchForm;
