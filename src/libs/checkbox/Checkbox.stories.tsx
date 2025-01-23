import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Checkbox, CheckboxProps } from "./Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
    error: { control: "boolean" },
    warning: { control: "boolean" },
    indeterminate: { control: "boolean" },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

/**
 * 1) 기본 플레이그라운드 (Controls에서 size, checked 등을 바꾸며 확인)
 */
export const Playground: Story = {
  args: {
    label: "Checkbox Example",
    checked: false,
    size: "medium",
  },
  render: (args) => {
    // 내부적으로 checked 상태를 제어
    const [checked, setChecked] = useState(args.checked);
    return <Checkbox {...args} checked={checked} onChange={setChecked} />;
  },
};

/**
 * 2) Small, Medium, Large 스토리를 따로
 */
export const Small: Story = {
  args: {
    label: "Small Checkbox",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    label: "Medium Checkbox",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    label: "Large Checkbox",
    size: "large",
  },
};

/**
 * 3) Overview 스토리
 * - 여러 상태를 한 화면에서 확인
 */
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
        {/* 1) Default Unselected */}
        <tr style={{ borderBottom: "1px solid #eee" }}>
          <td style={cellStyle}>Default Unselected</td>
          <td style={cellStyle}>
            <OverviewItem label="Small" size="small" checked={false} />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Medium" size="medium" checked={false} />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Large" size="large" checked={false} />
          </td>
        </tr>

        {/* 2) Default Selected */}
        <tr style={{ borderBottom: "1px solid #eee" }}>
          <td style={cellStyle}>Default Selected</td>
          <td style={cellStyle}>
            <OverviewItem label="Small" size="small" checked />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Medium" size="medium" checked />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Large" size="large" checked />
          </td>
        </tr>

        {/* 3) Disabled Unselected */}
        <tr style={{ borderBottom: "1px solid #eee" }}>
          <td style={cellStyle}>Disabled Unselected</td>
          <td style={cellStyle}>
            <OverviewItem label="Small" size="small" disabled checked={false} />
          </td>
          <td style={cellStyle}>
            <OverviewItem
              label="Medium"
              size="medium"
              disabled
              checked={false}
            />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Large" size="large" disabled checked={false} />
          </td>
        </tr>

        {/* 4) Disabled Selected */}
        <tr style={{ borderBottom: "1px solid #eee" }}>
          <td style={cellStyle}>Disabled Selected</td>
          <td style={cellStyle}>
            <OverviewItem label="Small" size="small" checked disabled />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Medium" size="medium" checked disabled />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Large" size="large" checked disabled />
          </td>
        </tr>

        {/* 5) Read-only Unselected */}
        <tr style={{ borderBottom: "1px solid #eee" }}>
          <td style={cellStyle}>Read-only Unselected</td>
          <td style={cellStyle}>
            <OverviewItem label="Small" size="small" readOnly checked={false} />
          </td>
          <td style={cellStyle}>
            <OverviewItem
              label="Medium"
              size="medium"
              readOnly
              checked={false}
            />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Large" size="large" readOnly checked={false} />
          </td>
        </tr>

        {/* 6) Read-only Selected */}
        <tr style={{ borderBottom: "1px solid #eee" }}>
          <td style={cellStyle}>Read-only Selected</td>
          <td style={cellStyle}>
            <OverviewItem label="Small" size="small" checked readOnly />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Medium" size="medium" checked readOnly />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Large" size="large" checked readOnly />
          </td>
        </tr>

        {/* 7) Error Unselected */}
        <tr style={{ borderBottom: "1px solid #eee" }}>
          <td style={cellStyle}>Error Unselected</td>
          <td style={cellStyle}>
            <OverviewItem label="Small" size="small" error checked={false} />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Medium" size="medium" error checked={false} />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Large" size="large" error checked={false} />
          </td>
        </tr>

        {/* 8) Error Selected */}
        <tr style={{ borderBottom: "1px solid #eee" }}>
          <td style={cellStyle}>Error Selected</td>
          <td style={cellStyle}>
            <OverviewItem label="Small" size="small" checked error />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Medium" size="medium" checked error />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Large" size="large" checked error />
          </td>
        </tr>

        {/* 9) Warning Unselected */}
        <tr style={{ borderBottom: "1px solid #eee" }}>
          <td style={cellStyle}>Warning Unselected</td>
          <td style={cellStyle}>
            <OverviewItem label="Small" size="small" warning checked={false} />
          </td>
          <td style={cellStyle}>
            <OverviewItem
              label="Medium"
              size="medium"
              warning
              checked={false}
            />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Large" size="large" warning checked={false} />
          </td>
        </tr>

        {/* 10) Warning Selected */}
        <tr style={{ borderBottom: "1px solid #eee" }}>
          <td style={cellStyle}>Warning Selected</td>
          <td style={cellStyle}>
            <OverviewItem label="Small" size="small" checked warning />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Medium" size="medium" checked warning />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Large" size="large" checked warning />
          </td>
        </tr>

        {/* 필요하다면 Focus, Indeterminate 등 더 추가 */}
      </tbody>
    </table>
  ),
};

/**
 * 테이블 셀에 공통으로 적용할 스타일
 * (가독성을 위해 별도 상수로 뽑아둠)
 */
const cellStyle: React.CSSProperties = {
  padding: "8px 12px",
  borderRight: "1px solid #eee",
};

/** 보조 컴포넌트: OverviewItem
 *  - 스토리 전용으로 checked를 state로 관리해,
 *    props.checked가 없으면 false로 처리.
 */
function OverviewItem(
  props: Omit<CheckboxProps, "onChange"> & { checked?: boolean }
) {
  const [checked, setChecked] = useState<boolean>(props.checked ?? false);

  return (
    <div>
      <Checkbox {...props} checked={checked} onChange={setChecked} />
    </div>
  );
}
