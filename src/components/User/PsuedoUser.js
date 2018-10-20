// @flow

import React from 'react';
import PsuedoElement from '../PsuedoElemnt';

const PsuedoUser = () => (
  <li className="user">
    <div className="user__info">
      <PsuedoElement width={150} height={150} borderRadius={50} />
      <PsuedoElement className="user__name" width={150} height={20} borderRadius={3} />
      <PsuedoElement className="user__tag" width={50} height={20} borderRadius={3} />
    </div>

    <div className="user__details">
      <PsuedoElement className="user__detail-label" width={100} height={20} borderRadius={3} />
      <PsuedoElement className="user__detail-label" width={100} height={20} borderRadius={3} />
      <PsuedoElement className="user__detail-label" width={100} height={20} borderRadius={3} />
    </div>
  </li>
);

export default PsuedoUser;
