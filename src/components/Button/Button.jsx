import React from "react";

import cl from "./Button.module.css";

const Button = ({ value }) => {
  return <button className={cl.button}>{value}</button>;
};

export default Button;
