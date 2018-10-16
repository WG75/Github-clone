// @flow

import React from 'react';

type Props = {
  className?: string,
  onChange: (type: string) => void,
  authTypes: Array<string>,
  selectedType: string,
};

const AuthTypeTapper = ({
  className, selectedType, authTypes, onChange,
}: Props) => (
  <div className={`${''} ${className || ''}`}>
    {authTypes.map(type => (
      <label key={type} className={`${''} ${className || ''}`} htmlFor={type}>
        <input
          className=""
          type="radio"
          name="authType"
          value={type}
          id={type}
          onChange={() => {
            onChange(type);
          }}
          checked={type === selectedType}
        />
        <span className="">{type}</span>
      </label>
    ))}
  </div>
);

export default AuthTypeTapper;
