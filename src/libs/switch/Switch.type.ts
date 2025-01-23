// props: 체크여부, 체크 변경 이벤트, 사이즈, 비활성화 여부
export interface SwitchProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
}