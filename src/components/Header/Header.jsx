import React from "react";

import cl from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={cl.header}>
      <div className={cl.header_left}>
        <div className={cl.logo}>
          <Link to="/">
            <img src="" alt="logo" />
          </Link>
        </div>
      </div>

      <div className={cl.header_right}>
        <ul className={cl.header_nav}>
          <Link to="/" className={cl.header__item}>
            Главная
          </Link>
          <Link to="/recipes" className={cl.header__item}>
            Рецепты
          </Link>
          <Link to="/countries" className={cl.header__item}>
            Страны
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
