// @flow

import React from 'react';
import './AuthTypeTapper.css';

type Props = {
  className?: string,
  onChange: (type: string) => void,
  authTypes: Array<string>,
  selectedType: string,
};

const AuthTypeTapper = ({
  className, selectedType, authTypes, onChange,
}: Props) => (
  <div className={`auth-type ${className || ''}`}>
    {authTypes.map(type => (
      <label key={type} className={`auth-type_label ${
        type === selectedType ? 'auth-type__input--is-checked' : ''
      }`} htmlFor={type}>
        <input
          className={`auth-type__input `}
          type="radio"
          name="authType"
          value={type}
          id={type}
          onChange={() => {
            onChange(type);
          }}
          checked={type === selectedType}
        />
        <span className="">{type == "basic" ? "Username & Password": "Personal Access Token"}</span>
      </label>
    ))}
  </div>
);

export default AuthTypeTapper;
