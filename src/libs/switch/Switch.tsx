import * as React from "react";
import styles from "./Switch.module.css";
import { SwitchProps } from "./Switch.type";

const Switch = React.forwardRef<HTMLDivElement, SwitchProps>(({
                                                                  checked = false,
                                                                  onChange,
                                                                  size = "md",
                                                                  disabled = false,
                                                              }, ref) => {
    const [isChecked, setIsChecked] = React.useState<boolean>(checked);

    const handleChange = (newChecked: boolean) => {
        setIsChecked(newChecked);
        onChange?.(newChecked);
    };

    const handleClick = () => {
        if (!disabled) {
            handleChange(!isChecked);
        }
    };

    return (
        <div
            ref={ref}
            id="switch"
            className={`${styles.switch} 
            ${isChecked ? styles.checked : ""} 
            ${disabled ? styles.disabled : ""}`}
            style={{
                width: size === "sm" ? "30px" : size === "lg" ? "50px" : "40px",
                height: size === "sm" ? "15px" : size === "lg" ? "25px" : "20px",
                backgroundColor: isChecked ? "#0d6cc1" : "#bfc2c4",
            }}
            onClick={handleClick}
            role="switch"
            aria-checked={isChecked}
            aria-disabled={disabled}
        >
            <div
                id="slider"
                className={styles.slider}
                style={{
                    width: size === "sm" ? "11px" : size === "lg" ? "19px" : "14px",
                    height: size === "sm" ? "11px" : size === "lg" ? "19px" : "14px",
                    transform: isChecked
                        ? size === "sm"
                            ? "translateX(15px)"
                            : size === "md"
                                ? "translateX(22px)"
                                : "translateX(27px)"
                        : "translateX(0)",
                    backgroundColor: disabled ? "#e0e4ea" : "#ffffff",
                }}
            />
        </div>
    );
});

export default Switch;
