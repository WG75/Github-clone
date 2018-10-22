// @flow

import React from 'react';
import './PsuedoElement.css';

type Props = {
  width?: number,
  height?: number,
  borderRadius: number,
  className?: string,
  outerBackground?: string,
  innerBackground?: string,
};

const PsuedoElement = ({
  width,
  height,
  borderRadius,
  className,
  innerBackground,
  outerBackground,
}: Props) => (
  <div
    className={`psuedo-element ${className || ''}`}
    style={{
      width,
      height,
      borderRadius: `${borderRadius}%`,
      background: outerBackground,
    }}
  >
    <div className="psuedo-element__inner" style={{ background: innerBackground }} />
  </div>
);

export default PsuedoElement;
