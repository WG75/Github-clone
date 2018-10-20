// @flow

import React from 'react';
import User from '../User';
import PsuedoUser from '../User/PsuedoUser';
import NoResults from '../NoResults';
import './Users.css';

type Props = {
  users: Array<any>,
  onScroll: () => void,
  page: number,
  loading: boolean,
};

const Users = ({
  users, onScroll, page, loading,
}: Props) => (
  <section className="users">
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
    {!loading ? <NoResults /> : null}
  </section>
);

export default Users;
