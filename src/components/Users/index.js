// @flow

import React from 'react';
import type { Node } from 'react';
import User from '../User';
import PsuedoUser from '../User/PsuedoUser';
import NoResults from '../NoResults';
import './Users.css';

type Props = {
  users: Array<any>,
  onScroll: () => void,
  loading: boolean,
  scrollableRef: () => void,
  query: string
};

const Users = ({
  users, onScroll, page, loading, query, scrollableRef,
}: Props) => (
  <section ref={scrollableRef} className="users" onScroll={onScroll}>
    {users.length > 0 ? (
      <ul className="users__list">
        {users.map(user => (
          <User className="users__list-item" user={user} />
        ))}

        {loading && [...Array(10)].map(i => <PsuedoUser />)}
      </ul>
    ) : loading ? (
      <ul className="users__list">
        {[...Array(10)].map(i => (
          <PsuedoUser />
        ))}
      </ul>
    ) : null}
    {users.length === 0 && !loading && query ? <NoResults /> : null}
  </section>
);

export default Users;
