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
    error: false,
    warning: false,
  },
  render: (args) => {
    const [size, setSize] = useState(args.size);

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
        <div>
          <Checkbox {...args} size={size} />
          <div style={{ marginTop: "1rem" }}>
            <label>
              <input
                type="radio"
                name="size"
                value="small"
                checked={size === "small"}
                onChange={() => setSize("small")}
              />
              Small
            </label>
            <label style={{ marginLeft: "1rem" }}>
              <input
                type="radio"
                name="size"
                value="medium"
                checked={size === "medium"}
                onChange={() => setSize("medium")}
              />
              Medium
            </label>
            <label style={{ marginLeft: "1rem" }}>
              <input
                type="radio"
                name="size"
                value="large"
                checked={size === "large"}
                onChange={() => setSize("large")}
              />
              Large
            </label>
          </div>
        </div>
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
        textAlign: "left",
        width: "100%",
        margin: "0 auto",
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
        <StateRow label="Default Unselected" />
        <StateRow label="Default Selected" defaultChecked />
        <StateRow label="Disabled Unselected" disabled />
        <StateRow label="Disabled Selected" defaultChecked disabled />
        <StateRow
          label="Error Unselected"
          error
          errorMessage="Invalid text goes here"
        />
        <StateRow
          label="Error Selected"
          defaultChecked
          error
          errorMessage="Invalid text goes here"
        />
        <StateRow
          label="Warning Unselected"
          warning
          warningMessage="Warning text goes here"
        />
        <StateRow
          label="Warning Selected"
          defaultChecked
          warning
          warningMessage="Warning text goes here"
        />
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
        alignItems: "center", // 전체를 중앙 정렬
        justifyContent: "center", // 수직 중앙 정렬
        height: "100vh", // 페이지 전체 높이 사용
        gap: "1rem", // 각 항목 간 간격
        padding: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start", // 항목 왼쪽 정렬 유지
          gap: "1rem",
          width: "fit-content", // 내용에 맞게 크기 조정
        }}
      >
        <OverviewItem label="Default Unselected" />
        <OverviewItem label="Default Selected" defaultChecked />
        <OverviewItem label="Disabled Unselected" disabled />
        <OverviewItem label="Disabled Selected" defaultChecked disabled />
        <OverviewItem
          label="Error Unselected"
          error
          errorMessage="Invalid text goes here"
        />
        <OverviewItem
          label="Error Selected"
          defaultChecked
          error
          errorMessage="Invalid text goes here"
        />
        <OverviewItem
          label="Warning Unselected"
          warning
          warningMessage="Warning text goes here"
        />
        <OverviewItem
          label="Warning Selected"
          defaultChecked
          warning
          warningMessage="Warning text goes here"
        />
      </div>
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
