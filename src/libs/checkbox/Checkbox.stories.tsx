// Checkbox.stories.ts
import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Checkbox, CheckboxProps } from "./Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    label: { control: "text" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
    error: { control: "boolean" },
    warning: { control: "boolean" },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

/**
 * 1) 기존 스토리들
 */
export const Default: Story = {
  args: {
    label: "Default Checkbox",
    checked: false,
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return <Checkbox {...args} checked={checked} onChange={setChecked} />;
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Checkbox",
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    label: "Read-only Checkbox",
    readOnly: true,
    checked: true,
  },
};

export const Error: Story = {
  args: {
    label: "Error Checkbox",
    error: true,
  },
};

export const Warning: Story = {
  args: {
    label: "Warning Checkbox",
    warning: true,
  },
};

/**
 * 2) Overview 스토리
 * - 여러 상태를 한 화면에서 확인하기 위한 예시
 * - 아래 OverviewItem을 사용
 */
export const Overview: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 250px)",
        gap: "1.5rem",
        padding: "1rem",
      }}
    >
      {/* Disabled 상태 */}
      <OverviewItem label="Disabled unselected" disabled checked={false} />
      <OverviewItem label="Disabled selected" disabled checked />

      {/* Read-only 상태 */}
      <OverviewItem label="Read-only unselected" readOnly checked={false} />
      <OverviewItem label="Read-only selected" readOnly checked />

      {/* Error 상태 */}
      <OverviewItem label="Error unselected" error checked={false} />
      <OverviewItem label="Error selected" error checked />

      {/* Warning 상태 */}
      <OverviewItem label="Warning unselected" warning checked={false} />
      <OverviewItem label="Warning selected" warning checked />

      {/* Default 상태 (ex: unselected, selected) */}
      <OverviewItem label="Default unselected" checked={false} />
      <OverviewItem label="Default selected" checked />

      {/* 더 필요하다면 Focus, Indeterminate 등 추가 */}
    </div>
  ),
};

/**
 * 3) 보조 컴포넌트: OverviewItem
 * - 실제로는 checked가 필수인 `CheckboxProps`에서
 *   onChange, checked를 제거하고,
 *   checked?: boolean → 넘어오지 않으면 false
 */
function OverviewItem(
  props: Omit<CheckboxProps, "onChange"> & { checked?: boolean }
) {
  // 체크값이 주어지면 그걸 사용하고,
  // 안 주어지면 기본 false로 처리
  const [checked, setChecked] = useState<boolean>(props.checked ?? false);

  return (
    <div>
      <Checkbox {...props} checked={checked} onChange={setChecked} />
    </div>
  );
}
