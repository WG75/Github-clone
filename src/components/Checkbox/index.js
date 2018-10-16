// @flow

import React from 'react';
import './Checkbox.css';

type Props = {
  checked: boolean,
  label: string,
  name: string,
  id: string,
  onChange: () => void,
  value?: string,
  className?: string,
};

const Checkbox = ({
  checked, label, onChange, id, name, value, className,
}: Props) => (
  <label className={`checkbox ${className || ''}`} htmlFor={id}>
    <input
      className="checkbox__input"
      type="checkbox"
      name={name}
      value={value}
      id={id}
      checked={checked}
      onChange={onChange}
    />
    <span className="checkbox__label">{label}</span>
  </label>
);

export default Checkbox;
