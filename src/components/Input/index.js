// @flow

import React from 'react';
import './Input.css';

type Props = {
  id: string,
  onChange?: (id: string, value: string) => void,
  label: string,
  type?: string,
  className?: string,
};

type State = {
  value: string,
};

export default class TextInput extends React.Component<Props, State> {
  static defaultProps = {
    type: 'text',
  };

  state = {
    value: '',
  };

  handleChange(e: any) {
    this.setState({ value: e.target.value }, () => {
      const { onChange, id } = this.props;
      const { value } = this.state;

      if (onChange) {
        onChange(id, value);
      }
    });
  }

  render() {
    const {
      id, label, type, className,
    }: Props = this.props;

    const { value } = this.state;
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
          onChange={(e: any) => this.handleChange(e)}
        />
      </label>
    );
  }
}
