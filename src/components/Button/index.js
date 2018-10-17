// @flow

import React, { type Node } from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

type props = {
  className?: string,
  onClick?: () => void,
  isLink?: boolean,
  path?: string,
  children: Node,
  disabled?: boolean,
  type?: string,
  isPrimary?: boolean,
  isSecondary?: boolean,
};

const Button = ({
  className,
  onClick,
  isLink,
  path,
  children,
  disabled,
  type,
  isPrimary,
  isSecondary,
}: props) => (isLink ? (
  <Link
    className={`button ${isPrimary ? 'button--is_primary' : ''} ${
      isSecondary ? 'button--is_secondary' : ''
    }  isLink ${className || ''}`}
    to={path || '/'}
  >
    {children}
  </Link>
) : (
  <button
    disabled={disabled}
    className={`button ${isPrimary ? 'button--is_primary' : ''} ${
      isSecondary ? 'button--is_secondary' : ''
    } ${disabled ? 'button--is_disabled' : ''} ${className || ''}`}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
));

Button.defaultProps = {
  isLink: false,
  disabled: false,
  isPrimary: true,
  type: 'button',
};

export default Button;
