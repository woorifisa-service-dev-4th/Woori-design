import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Checkbox, CheckboxProps } from "./Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    defaultChecked: { control: "boolean" }, // 초기 상태
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

/** Playground: 자유롭게 props를 테스트 */
export const Playground: Story = {
  args: {
    label: "Checkbox Example",
    defaultChecked: false,
    size: "medium",
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.defaultChecked);

    return (
      <Checkbox
        {...args}
        defaultChecked={checked}
        onChange={(newChecked) => {
          setChecked(newChecked);
          alert(`Playground Checkbox state changed to: ${newChecked}`);
        }}
      />
    );
  },
};

/** Overview: 모든 상태와 크기를 한눈에 확인 */
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
        {/* Default 상태 */}
        <tr>
          <td style={cellStyle}>Default Unselected</td>
          <td style={cellStyle}>
            <OverviewItem label="Small" size="small" />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Medium" size="medium" />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Large" size="large" />
          </td>
        </tr>
        <tr>
          <td style={cellStyle}>Default Selected</td>
          <td style={cellStyle}>
            <OverviewItem label="Small" size="small" defaultChecked />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Medium" size="medium" defaultChecked />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Large" size="large" defaultChecked />
          </td>
        </tr>

        {/* Disabled 상태 */}
        <tr>
          <td style={cellStyle}>Disabled Unselected</td>
          <td style={cellStyle}>
            <OverviewItem label="Small" size="small" disabled />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Medium" size="medium" disabled />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Large" size="large" disabled />
          </td>
        </tr>
        <tr>
          <td style={cellStyle}>Disabled Selected</td>
          <td style={cellStyle}>
            <OverviewItem label="Small" size="small" defaultChecked disabled />
          </td>
          <td style={cellStyle}>
            <OverviewItem
              label="Medium"
              size="medium"
              defaultChecked
              disabled
            />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Large" size="large" defaultChecked disabled />
          </td>
        </tr>

        {/* Read-only 상태 */}
        <tr>
          <td style={cellStyle}>Read-only Unselected</td>
          <td style={cellStyle}>
            <OverviewItem label="Small" size="small" readOnly />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Medium" size="medium" readOnly />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Large" size="large" readOnly />
          </td>
        </tr>
        <tr>
          <td style={cellStyle}>Read-only Selected</td>
          <td style={cellStyle}>
            <OverviewItem label="Small" size="small" defaultChecked readOnly />
          </td>
          <td style={cellStyle}>
            <OverviewItem
              label="Medium"
              size="medium"
              defaultChecked
              readOnly
            />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Large" size="large" defaultChecked readOnly />
          </td>
        </tr>

        {/* Error 상태 */}
        <tr>
          <td style={cellStyle}>Error Unselected</td>
          <td style={cellStyle}>
            <OverviewItem label="Small" size="small" error />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Medium" size="medium" error />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Large" size="large" error />
          </td>
        </tr>
        <tr>
          <td style={cellStyle}>Error Selected</td>
          <td style={cellStyle}>
            <OverviewItem label="Small" size="small" defaultChecked error />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Medium" size="medium" defaultChecked error />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Large" size="large" defaultChecked error />
          </td>
        </tr>

        {/* Warning 상태 */}
        <tr>
          <td style={cellStyle}>Warning Unselected</td>
          <td style={cellStyle}>
            <OverviewItem label="Small" size="small" warning />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Medium" size="medium" warning />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Large" size="large" warning />
          </td>
        </tr>
        <tr>
          <td style={cellStyle}>Warning Selected</td>
          <td style={cellStyle}>
            <OverviewItem label="Small" size="small" defaultChecked warning />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Medium" size="medium" defaultChecked warning />
          </td>
          <td style={cellStyle}>
            <OverviewItem label="Large" size="large" defaultChecked warning />
          </td>
        </tr>
      </tbody>
    </table>
  ),
};

const cellStyle: React.CSSProperties = {
  padding: "8px 12px",
  borderRight: "1px solid #eee",
};

/** OverviewItem 보조 컴포넌트 */
function OverviewItem(
  props: Omit<CheckboxProps, "onChange"> & { defaultChecked?: boolean }
) {
  const [checked, setChecked] = useState<boolean>(
    props.defaultChecked ?? false
  );

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
      <Checkbox
        {...props}
        defaultChecked={checked}
        onChange={(newChecked) => {
          setChecked(newChecked);
          alert(`Checkbox [${props.label}] state changed to: ${newChecked}`);
        }}
      />
    </div>
  );
}
