// @flow

import React from 'react';
import './User.css';

type Props = {
  user: any,
};

const User = ({ user }: Props) => !console.log(user.avatar_url) && (
<li className="user">
  <div className="user__info">
    <img src={user.avatar_url} alt="user__avatar" className="user__avatar" />
    <h3 className="user__name">{user.name}</h3>
    <span className="user__tag">@{user.login}</span>
  </div>

  <div className="user__details">
    <span className="user__detail-label">
      <b>Repos:</b>
      {' '}
      {user.public_repos}
    </span>
    <span className="user__detail-label">
      <b>Followers:</b>
      {' '}
      {user.followers}
    </span>
    <span className="user__detail-label">
      <b>Country:</b>
      {' '}
      {user.country}
    </span>
  </div>
</li>
);

export default User;
