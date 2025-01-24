import React, { forwardRef } from "react";
import { ButtonProps } from ".";
import styles from "./Button.module.css";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size = "xlarge", width, children, onClick, ...props }, ref) => {
    const sizeClassName = styles[`button--${size}`];

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onClick?.(event as unknown as React.MouseEvent<HTMLButtonElement>);
      }
    };

    return (
      <button
        ref={ref}
        className={`${styles.button} ${sizeClassName}`}
        disabled={props.disabled}
        style={width ? { width } : undefined}
        onKeyDown={handleKeyDown}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);
