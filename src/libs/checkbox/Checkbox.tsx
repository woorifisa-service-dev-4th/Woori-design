import cx from "classnames";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Checkbox.module.css";

/** 체크박스 컴포넌트에 필요한 Props 인터페이스 */
export interface CheckboxProps {
  /** 라벨 텍스트 */
  label: string;
  /** 현재 체크 여부 (필수) */
  checked: boolean;
  /** 체크 상태가 변할 때 호출 */
  onChange: (checked: boolean) => void;

  /** 비활성화 여부 */
  disabled?: boolean;
  /** 읽기 전용 여부 */
  readOnly?: boolean;
  /** 에러 상태 */
  error?: boolean;
  /** 경고 상태 */
  warning?: boolean;
  /** 부분 체크(Indeterminate) 상태 */
  indeterminate?: boolean;

  /**
   * 체크박스 크기
   * - small: 작게
   * - medium: 기본값
   * - large: 크게
   */
  size?: "small" | "medium" | "large";
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
  size = "medium",
}) => {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // 인디터미넌트 상태
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  // 이벤트 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (readOnly) return;
    onChange(e.target.checked);
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
          [styles.focused]: focused,
        },
        // size별로 추가 클래스
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
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={styles.input}
      />
      <span className={styles.label}>{label}</span>
    </label>
  );
};
