// @flow

import React from 'react';
import {Link} from "react-router-dom";
import PsuedoUser from './PsuedoUser';
import './User.css';

type Props = {
  user: any,
  className?: string,
  isProfile?: boolean
};

const User = ({ user, loading, className, isProfile }: Props) => (loading ? (
  <PsuedoUser isProfile={isProfile} />
) : user ? (
  
  <li className={`user ${className || ''}`}>
  <Link className="user__link" to={`/profile/${user.login}`}>
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
        {Math.round(user.score) || 0}
      </span>
      <span className="user__detail-label">
        <b>Type:</b>
        {' '}
        {user.type}
      </span>
    </div>
    </Link>
  </li>
) : null);

export default User;
