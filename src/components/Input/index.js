// @flow

import React from 'react';
import './Input.css';

type Props = {
  id: string,
  onChange?: (id: string, value: string) => void,
  label: string,
  type?: string,
  className?: string,
  value: string,
};

const TextInput = ({
  id, label, type, className, value, onChange,
}: Props) => {
  const handleChange = (e: any): void => {
    const value = e.target.value;

    if (onChange) {
      onChange(id, value);
    }
  };

  return (
    <label className={`${'input_wapper'} ${className || ''}`} htmlFor={id}>
      <span className="input_wapper__label">
        {label}
:
      </span>
      <input
        className="input_wapper__input"
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
};

TextInput.defaultProps = {
  type: 'text',
};

export default TextInput;
