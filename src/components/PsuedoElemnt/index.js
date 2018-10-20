// @flow

import React from 'react';
import './PsuedoElement.css';

type Props = {
  width: number,
  height: number,
  borderRadius: number,
  className?: string,
};

const PsuedoElement = ({
  width, height, borderRadius, className,
}: Props) => (
  <div
    className={`psuedo-element ${className}`}
    style={{
      width,
      height,
      borderRadius: `${borderRadius}%`,
    }}
  />
);

export default PsuedoElement;
