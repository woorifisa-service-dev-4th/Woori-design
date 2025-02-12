import React, { ButtonHTMLAttributes } from "react";

interface FloatButtonOwnProps {
  size?: "small" | "medium" | "large"; // 버튼 크기
  color?: string; // 버튼 배경색
  position?: "left" | "right" | "center"; // 버튼 위치
  shape?: "circle" | "rounded"; // 버튼 모양
  children?: React.ReactNode;
  icon?: React.ReactNode;
  text?: string;
}

export type FloatButtonProps = FloatButtonOwnProps &
  ButtonHTMLAttributes<HTMLButtonElement>;
