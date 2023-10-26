import type { MouseEventHandler } from "react";

import type { ButtonType } from "../types";

const Button = ({
  type,
  title,
  handleClick,
  customStyles,
  isDisabled
}: {
  type: ButtonType,
  title: string,
  handleClick?: MouseEventHandler,
  customStyles?: string,
  isDisabled?: boolean
}) => {
  const disableStyle = isDisabled ? "pointer-events-none " : "";
  customStyles = type === "filled"
    ? `${disableStyle}${customStyles} hover:bg-aoi-700 bg-aoi-800 text-aoi-50 border-2 border-transparent transition-colors ease`
    : `${disableStyle}${customStyles} hover:bg-aoi-700 hover:border-transparent text-aoi-200 border-2 border-aoi-200 transition-colors ease`;
  return (
    <button onClick={handleClick} className={customStyles}>{title}</button>
  );
};

export default Button;