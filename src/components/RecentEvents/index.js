// @flow

import React from 'react';
import UserEvent from '../UserEvent';
import './RecentEvents.css';

type Props = {
  userEvents: Array<any>,
};

const RecentEvents = ({ userEvents }: Props) => (
  <section className="recent-events">
    <h3 className="recent-events__title">Recent activity</h3>

    {userEvents.length > 0 ? (
      <ul className="recent-events__list">
        {userEvents.map(userEvent => (
          <UserEvent userEvent={userEvent} />
        ))}
      </ul>
    ) : (
      <p>You don't have any recent activity during the last 90 days.</p>
    )}
  </section>
);

export default RecentEvents;
