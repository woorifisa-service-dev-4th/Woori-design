import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
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
      <OverviewItem label="Disabled unselected" disabled checked={false} />
      <OverviewItem label="Disabled selected" disabled checked />

      <OverviewItem label="Read-only unselected" readOnly checked={false} />
      <OverviewItem label="Read-only selected" readOnly checked />

      <OverviewItem label="Error unselected" error checked={false} />
      <OverviewItem label="Error selected" error checked />

      <OverviewItem label="Warning unselected" warning checked={false} />
      <OverviewItem label="Warning selected" warning checked />

      <OverviewItem label="Default unselected" checked={false} />
      <OverviewItem label="Default selected" checked />
    </div>
  ),
};

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
