import React from "react";
import styles from "./FloatButton.module.css";
import { FloatButtonProps } from "./FloatButton.type";

const FloatButton = ({
  size = "medium",
  color,
  position = "right",
  icon = "+",
  text = "",
  style = {},
  shape = "circle",

  onClick,
  onDoubleClick,
  onKeyDown,
  onKeyUp,
}: FloatButtonProps) => {
  const buttonClasses = [
    styles.floatButton,
    styles[size],
    styles[shape],
    color ? styles.custom : styles.default,
    styles[position],
  ].join(" ");

  return (
    <button
      className={buttonClasses}
      style={color ? { backgroundColor: color, ...style } : style}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
    >
      {icon}
      {text && <span>{text}</span>}
    </button>
  );
};

export default FloatButton;
