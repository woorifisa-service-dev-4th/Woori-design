import React from "react";
import styles from "./Divider.module.css";
import { DividerProps } from "./Divider.types";

export const Divider: React.FC<DividerProps> = ({
  text,
  lineColor = "primary",
  thickness = 2,
  className,
}) => {
  const lineStyles = {
    height: `${thickness}px`,
    backgroundColor:
      lineColor === "primary" ? "var(--color-primary)" : "#e0e0e0",
  };

  const leftLineStyle = { ...lineStyles };
  const rightLineStyle = { ...lineStyles };

  return (
    <div className={`${styles.divider} ${className || ""}`}>
      <div className={styles.dividerLine} style={leftLineStyle} />
      {text && <span className={styles.text}>{text}</span>}
      <div className={styles.dividerLine} style={rightLineStyle} />
    </div>
  );
};
