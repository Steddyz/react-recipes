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

      <div className={cl.header_right}>Header</div>
    </div>
  );
};

export default Header;
