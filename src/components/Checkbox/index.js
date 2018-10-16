// @flow

import React from 'react';

type Props = {
  checked: boolean,
  label: string,
  name: string,
  id: string,
  onChange: () => void,
  value?: string,
};

const Checkbox = ({
  checked, label, onChange, id, name, value,
}: Props) => (
  <label htmlFor={id}>
    <span>{label}</span>
    <input
      type="checkbox"
      name={name}
      value={value}
      id={id}
      checked={checked}
      onChange={onChange}
    />
  </label>
);

export default Checkbox;
