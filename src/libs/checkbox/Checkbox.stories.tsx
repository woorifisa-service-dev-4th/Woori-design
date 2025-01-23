import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Checkbox, CheckboxProps } from "./Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    defaultChecked: { control: "boolean" },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
    error: { control: "boolean" },
    warning: { control: "boolean" },
    indeterminate: { control: "boolean" },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof Checkbox>;

/** Playground: 단일 상태 테스트 */
export const Playground: Story = {
  args: {
    label: "Checkbox Example",
    defaultChecked: false,
    size: "medium",
  },
  render: (args) => {
    // 내부 상태 관리
    const [checked, setChecked] = useState<boolean>(
      args.defaultChecked ?? false
    );

    const handleChange = (newChecked: boolean) => {
      setChecked(newChecked);
      alert(`Checkbox state changed to: ${newChecked}`); // 상태 변경 시 alert 표시
    };

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Checkbox {...args} defaultChecked={checked} onChange={handleChange} />
      </div>
    );
  },
};

/** Overview: 상태와 크기별로 테이블로 확인 */
export const Overview: Story = {
  render: () => (
    <table
      style={{
        borderCollapse: "collapse",
        textAlign: "center",
        width: "100%",
      }}
    >
      <thead>
        <tr style={{ borderBottom: "1px solid #ccc" }}>
          <th style={cellStyle}>State</th>
          <th style={cellStyle}>Small</th>
          <th style={cellStyle}>Medium</th>
          <th style={cellStyle}>Large</th>
        </tr>
      </thead>
      <tbody>
        {/* 다양한 상태들을 테이블 형식으로 표시 */}
        <StateRow label="Default Unselected" />
        <StateRow label="Default Selected" defaultChecked />
        <StateRow label="Disabled Unselected" disabled />
        <StateRow label="Disabled Selected" defaultChecked disabled />
        <StateRow label="Read-only Unselected" readOnly />
        <StateRow label="Read-only Selected" defaultChecked readOnly />
        <StateRow label="Error Unselected" error />
        <StateRow label="Error Selected" defaultChecked error />
        <StateRow label="Warning Unselected" warning />
        <StateRow label="Warning Selected" defaultChecked warning />
      </tbody>
    </table>
  ),
};

/** AllStates: 다양한 상태를 일렬로 표시 */
export const AllStates: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <OverviewItem label="Default Unselected" />
      <OverviewItem label="Default Selected" defaultChecked />
      <OverviewItem label="Disabled Unselected" disabled />
      <OverviewItem label="Disabled Selected" defaultChecked disabled />
      <OverviewItem label="Read-only Unselected" readOnly />
      <OverviewItem label="Read-only Selected" defaultChecked readOnly />
      <OverviewItem label="Error Unselected" error />
      <OverviewItem label="Error Selected" defaultChecked error />
      <OverviewItem label="Warning Unselected" warning />
      <OverviewItem label="Warning Selected" defaultChecked warning />
    </div>
  ),
};

const cellStyle: React.CSSProperties = {
  padding: "8px 12px",
  borderRight: "1px solid #eee",
};

/** Helper 컴포넌트: 테이블 행(Row) 생성 */
function StateRow(props: CheckboxProps) {
  return (
    <tr>
      <td style={cellStyle}>{props.label}</td>
      <td style={cellStyle}>
        <OverviewItem {...props} size="small" />
      </td>
      <td style={cellStyle}>
        <OverviewItem {...props} size="medium" />
      </td>
      <td style={cellStyle}>
        <OverviewItem {...props} size="large" />
      </td>
    </tr>
  );
}

/** Helper 컴포넌트: 단일 Checkbox 표시 */
function OverviewItem(
  props: Omit<CheckboxProps, "onChange"> & { defaultChecked?: boolean }
) {
  const [checked, setChecked] = useState<boolean>(
    props.defaultChecked ?? false
  );

  return (
    <Checkbox
      {...props}
      defaultChecked={checked}
      onChange={(newChecked) => {
        setChecked(newChecked);
        alert(`Checkbox [${props.label}] state changed to: ${newChecked}`);
      }}
    />
  );
}
