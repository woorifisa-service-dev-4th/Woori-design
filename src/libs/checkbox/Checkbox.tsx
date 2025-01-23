import cx from "classnames";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Checkbox.module.css";

/** 체크박스 Props 정의 */
export interface CheckboxProps {
  label: string;
  defaultChecked?: boolean; // 초기 상태
  onChange?: (checked: boolean) => void; // 상태 변경 시 호출
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  warning?: boolean;
  indeterminate?: boolean;
  size?: "small" | "medium" | "large"; // 크기 옵션
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  defaultChecked = false,
  onChange,
  disabled = false,
  readOnly = false,
  error = false,
  warning = false,
  indeterminate = false,
  size = "medium",
}) => {
  const [checked, setChecked] = useState(defaultChecked);
  const inputRef = useRef<HTMLInputElement>(null);

  // 인디터미넌트 상태 적용
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (readOnly) return; // 읽기 전용일 경우 무시
    const newChecked = e.target.checked;
    setChecked(newChecked); // 내부 상태 업데이트
    onChange?.(newChecked); // 외부 핸들러 호출 (옵션)
  };

  return (
    <label
      className={cx(
        styles.checkbox,
        {
          [styles.disabled]: disabled,
          [styles.readOnly]: readOnly,
          [styles.error]: error,
          [styles.warning]: warning,
        },
        {
          [styles.small]: size === "small",
          [styles.large]: size === "large",
        }
      )}
    >
      <input
        ref={inputRef}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className={styles.input}
      />
      <span className={styles.label}>{label}</span>
    </label>
  );
};
