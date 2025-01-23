import cx from "classnames";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Checkbox.module.css";

export interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  warning?: boolean;
  /** 인디터미넌트(부분 체크) 상태 */
  indeterminate?: boolean;
  /** 에러 메시지 (error=true일 때 표시) */
  errorMessage?: string;
  /** 경고 메시지 (warning=true일 때 표시) */
  warningMessage?: string;
}

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

  // 인디터미넌트 상태 적용
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (readOnly) return; // readOnly 시 변경 막기
    onChange(e.target.checked);
  };

  return (
    <label
      className={cx(styles.checkbox, {
        [styles.disabled]: disabled,
        [styles.readOnly]: readOnly,
        [styles.error]: error,
        [styles.warning]: warning,
        [styles.focused]: focused,
      })}
    >
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
      {/* 에러/경고 메시지 표시 */}
      {error && errorMessage && (
        <p className={styles.errorMessage}>{errorMessage}</p>
      )}
      {warning && warningMessage && (
        <p className={styles.warningMessage}>{warningMessage}</p>
      )}
    </label>
  );
};
