import React from "react";

export interface FloatButtonProps {
  size?: "small" | "medium" | "large"; // 버튼 크기
  color?: string; // 버튼 위치
  position?: "left" | "right" | "center"; // 버튼 위치
  icon?: React.ReactNode; // 아이콘
  text?: string; // 버튼 텍스트
  style?: React.CSSProperties; // 추가적인 커스텀 디자인
  shape?: "circle" | "rounded"; // 버튼 모양

  // 제공하는 이벤트 핸들러
  onClick?: () => void;
  onDoubleClick?: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
}
