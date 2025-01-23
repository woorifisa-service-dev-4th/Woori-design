import React, { forwardRef } from "react";
import { ButtonProps } from ".";
import styles from "./Button.module.css";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size = "xlarge", width, children, ...props }, ref) => {
    const sizeClassName = styles[`button--${size}`];

    return (
      <button
        ref={ref}
        className={`${styles.button} ${sizeClassName}`}
        disabled={props.disabled}
        style={width ? { width } : undefined}
        {...props}
      >
        {children}
      </button>
    );
  }
);
