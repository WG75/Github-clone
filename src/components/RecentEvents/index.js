// @flow

import React from 'react';
import UserEvent from '../UserEvent';
import PsuedoElemnt from '../PsuedoElemnt';

import './RecentEvents.css';

type Props = {
  userEvents: Array<any>,
  loading: boolean,
  error: boolean,
};

const RecentEvents = ({ userEvents, loading, error }: Props) => (
  <section className="recent-events">
    <h3 className="recent-events__title">Recent activity</h3>

    {userEvents.length > 0 ? (
      <ul className="recent-events__list">
        {userEvents.slice(0, 3).map(userEvent => (
          <UserEvent key={Math.random()} userEvent={userEvent} />
        ))}
      </ul>
    ) : null}

    {userEvents.length === 0 && !loading && !error ? (
      <p className="recent-events__feedback">
        You don't have any recent activity during the last 90 days.
      </p>
    ) : null}

    {error && (
      <p className="recent-events__feedback recent-events__feedback--has-error">
        Something went wrong, please refresh the page.
      </p>
    )}

    {loading
      && [...Array(3)].map(i => (
        <PsuedoElemnt
          key={`psuedo${Math.random()}`}
          className="recent-events__psuedo-element"
          width={300}
          height={70}
          borderRadius={3}
          outerBackground="#403f3f"
          innerBackground="#3c3a3a"
        />
      ))}
  </section>
);

export default RecentEvents;
