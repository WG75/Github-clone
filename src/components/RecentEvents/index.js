// @flow

import React from 'react';
import UserEvent from '../UserEvent';
import PsuedoElemnt from '../PsuedoElemnt';

import './RecentEvents.css';

type Props = {
  userEvents: Array<any>,
  loading: boolean,
};

const RecentEvents = ({ userEvents, loading }: Props) => (
  <section className="recent-events">
    <h3 className="recent-events__title">Recent activity</h3>

    {userEvents.length > 0 ? (
      <ul className="recent-events__list">
        {userEvents.map(userEvent => (
          <UserEvent userEvent={userEvent} />
        ))}
      </ul>
    ) : !loading ? (
      <p className="recent-events__no-events">You don't have any recent activity during the last 90 days.</p>
    ) : (
      [...Array(3)].map(i => (
        <PsuedoElemnt
          width={300}
          height={70}
          borderRadius={3}
          outerBackground="#403f3f"
          innerBackground="#3c3a3a"

        />
      ))
    )}
  </section>
);

export default RecentEvents;
