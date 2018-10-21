// @flow

import React from 'react';
import { renderTime } from '../../utils';
import './UserEvent.css';

type Props = {
  userEvent: any,
};

const userEvent = ({ userEvent }: Props) => {
  const actiontype = userEvent.type === 'WatchEvent'
    ? 'starred'
    : userEvent.type === 'ForkEvent'
      ? 'forked'
      : 'pushed';
  const { repo, created_at } = userEvent;

  return (
    <li className="user-event">
      <p className="user-event__description">
        {`You ${actiontype} 
`}
        <b className="user-event__repo-name">{repo.name}</b>
      </p>

      <span className="user-event__date">{renderTime(created_at)}</span>
    </li>
  );
};

export default userEvent;
