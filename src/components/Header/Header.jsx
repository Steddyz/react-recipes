import React from "react";

import cl from "./Header.module.css";

const Header = () => {
  return (
    <div className={cl.header}>
      <div className={cl.header_left}>
        <div className={cl.logo}>
          <img src="" alt="logo" />
        </div>
      </div>

      <div className={cl.header_right}>
        <ul className={cl.header_nav}>
          <li>Главная</li>
          <li>Рецепты</li>
          <li>Страны</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
