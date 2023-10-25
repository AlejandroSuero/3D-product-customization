import type { MouseEventHandler } from "react";

type ButtonType = "filled" | "outlined";

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
    ? `${customStyles} hover:bg-indigo-500 bg-indigo-600 text-white border-2 border-transparent transition-colors ease`
    : `${customStyles} hover:bg-indigo-600 hover:text-white text-indigo-600 border-2 border-indigo-600 transition-colors ease`;
  return (
    <button onClick={handleClick} className={customStyles}>{title}</button>
  );
};

export default Button;