import React from "react";
import { Sun, Moon } from "../../utils/assets";

const Switch = ({ setDarkMode }) => {
  return (
    <button
      className="mode-switch"
      onClick={() => setDarkMode((prevState) => !prevState)}
    >
      <Sun />
      <Moon />
    </button>
  );
};

export default Switch;
