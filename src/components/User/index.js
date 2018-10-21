// @flow

import React from 'react';
import PsuedoUser from './PsuedoUser';
import './User.css';

type Props = {
  user: any,
  className?: string,
};

const User = ({ user, loading, className }: Props) => (loading ? (
  <PsuedoUser transparent />
) : user ? (
  <li className={`user ${className || ''}`}>
    <div className="user__info">
      <img src={user.avatar_url} alt="user__avatar" className="user__avatar" />
      <span className="user__tag">
@
        {user.login}
      </span>
    </div>

    <div className="user__details">
      <span className="user__detail-label">
        <b>Id:</b>
        {' '}
        {user.id}
      </span>
      <span className="user__detail-label">
        <b>Score:</b>
        {' '}
        {Math.round(user.score)}
      </span>
      <span className="user__detail-label">
        <b>Type:</b>
        {' '}
        {user.type}
      </span>
    </div>
  </li>
) : null);

export default User;
