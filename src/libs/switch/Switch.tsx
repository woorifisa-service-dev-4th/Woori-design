import * as React from "react";
import styles from "./Switch.module.css";
import { SwitchProps } from "./Switch.type";

// 상태 관리 함수
const createCheckedState = (initialChecked: boolean) => {
    let checked = initialChecked;

    return {
        getChecked: () => checked,
        setChecked: (newChecked: boolean) => {
            checked = newChecked;
        }
    };
};

const Switch: React.FC<SwitchProps> = ({
                                           checked = false,
                                           onChange,
                                           size = "md",
                                           disabled = false,
                                       }) => {
    // useState x, closer 사용해 상태 관리
    const {getChecked, setChecked} = createCheckedState(checked);

    // 기본 onChange 함수 설정
    const handleChange = (newChecked: boolean) => {
        setChecked(newChecked);
        onChange?.(newChecked);
        updateUI();
    };

    // UI 업데이트 함수
    const updateUI = () => {
        const switchElement = document.getElementById("50a7d10507a7925c");
        const sliderElement = document.getElementById("7e7ab1119cabaab");
        const checked = getChecked();

        if (switchElement) {
            // 배경색 및 상태에 맞게 클래스 추가/제거
            switchElement.style.backgroundColor = checked ? "#4F46E5" : "#bfc2c4";
            switchElement.classList.toggle(styles.checked, checked);
            switchElement.classList.toggle(styles.disabled, disabled);
        }

        if (sliderElement) {
            // 슬라이더 위치 변경
            sliderElement.style.transform = checked ? size == "sm" ? "translateX(15px)"
                    : size == "md" ? "translateX(22px)" : "translateX(27px)"
                : "translateX(0)";
        }
    }

    // 클릭 이벤트 핸들러
    const handleClick = () => {
        if (!disabled) {
            handleChange(!getChecked());
        }
    };

    return (
        <div
            id="50a7d10507a7925c"
            className={`${styles.switch} 
            ${getChecked() ? styles.checked : ""} 
            ${disabled ? styles.disabled : ""}`}
            style={{
                width: size === "sm" ? "30px" : size === "lg" ? "50px" : "40px",
                height: size === "sm" ? "15px" : size === "lg" ? "25px" : "20px",
                backgroundColor: getChecked() ? "#4F46E5" : "#bfc2c4",
            }}
            onClick={handleClick}
            role="switch"
            aria-checked={getChecked()}
            aria-disabled={disabled}
        >
            <div
                id="7e7ab1119cabaab"
                className={styles.slider}
                style={{
                    width: size === "sm" ? "11px" : size === "lg" ? "19px" : "14px",
                    height: size === "sm" ? "11px" : size === "lg" ? "19px" : "14px",
                    transform: getChecked() ? size == "sm" ? "translateX(15px)"
                        : size == "md" ? "translateX(22px)" : "translateX(27px)"
                        : "translateX(0)",
                    backgroundColor: disabled ? "#e0e4ea" : "#ffffff",
                }}
            />
        </div>
    );
};

export default Switch;
