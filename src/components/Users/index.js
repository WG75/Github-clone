// @flow

import React from 'react';
import User from '../User';
import PsuedoUser from '../User/PsuedoUser';

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
    <ul className="users__list">
      {users.length > 0
        ? users.map(user => <User className="users__list-item" user={user} />)
        : !loading
          ? 'no result found'
          : null}

      {loading && [...Array(10)].map(i => <PsuedoUser />)}
    </ul>
  </section>
);

export default Users;
