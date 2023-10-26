import type { MouseEventHandler } from "react";

import type { ButtonType } from "../types";

const Button = ({
  type,
  title,
  handleClick,
  customStyles
}: {
  type: ButtonType,
  title: string,
  handleClick?: MouseEventHandler,
  customStyles?: string
}) => {
  customStyles = type === "filled"
    ? `${customStyles} hover:bg-aoi-700 bg-aoi-800 text-aoi-50 border-2 border-transparent transition-colors ease`
    : `${customStyles} hover:bg-aoi-700 hover:border-transparent text-aoi-200 border-2 border-aoi-200 transition-colors ease`;
  return (
    <button onClick={handleClick} className={customStyles}>{title}</button>
  );
};

export default Button;