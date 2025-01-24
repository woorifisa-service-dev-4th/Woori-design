export interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  warning?: boolean;
  indeterminate?: boolean;
  errorMessage?: string;
  warningMessage?: string;
}
