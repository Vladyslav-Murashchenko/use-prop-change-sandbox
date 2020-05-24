import React from "react";

type Props = {
  label: string;
  checked: boolean;
  onChange: (val: boolean) => void;
};

export const CheckboxField: React.FC<Props> = ({
  label,
  checked,
  onChange,
}) => (
  <label>
    <input
      className="checkbox"
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
    />
    <span>{label}</span>
  </label>
);
