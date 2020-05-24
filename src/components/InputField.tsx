import React from "react";

type Props = {
  type?: string;
  label: string;
  value: string;
  onChange: (val: string) => void;
};

export const InputField: React.FC<Props> = ({
  type = "text",
  label,
  value,
  onChange,
}) => (
  <label>
    {label}
    <input
      className="input"
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </label>
);
