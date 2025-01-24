import React, { useEffect, useRef, useState } from "react";
import styles from "./Checkbox.module.css";
import { CheckboxProps } from "./Checkbox.type";

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled = false,
  readOnly = false,
  error = false,
  warning = false,
  indeterminate = false,
  errorMessage,
  warningMessage,
}) => {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (readOnly) return;
    onChange(e.target.checked);
  };

  const classNames = [
    styles.checkbox,
    disabled ? styles.disabled : "",
    readOnly ? styles.readOnly : "",
    error ? styles.error : "",
    warning ? styles.warning : "",
    focused ? styles.focused : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label className={classNames}>
      <input
        ref={inputRef}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={styles.input}
      />
      <span className={styles.label}>{label}</span>
      {error && errorMessage && (
        <p className={styles.errorMessage}>{errorMessage}</p>
      )}
      {warning && warningMessage && (
        <p className={styles.warningMessage}>{warningMessage}</p>
      )}
    </label>
  );
};
