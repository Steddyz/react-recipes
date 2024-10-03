import React from "react";

import cl from "./IngredientsForm.module.css";

const IngredientsForm = () => {
  return (
    <div className={cl.ingredients_title}>
      <h1 className={cl.title}>Поиск по ингредиентам</h1>
      <hr />
      <form className={cl.ingredients_form}>
        <div className={cl.form_group}>
          <label className={cl.form_label}>Желаемые ингредиенты </label>
          <input
            className={cl.form_input}
            placeholder="Введите желаемые ингредиенты"
          />
        </div>
        <div className="form-group">
          <label className={cl.form_label}>Нежелаемые ингредиенты</label>

          <input
            className={cl.form_input}
            placeholder="Введите нежелаемые ингредиенты"
          />
        </div>
        <button className={cl.form_button}>Отправить</button>
      </form>
    </div>
  );
};

export default IngredientsForm;
