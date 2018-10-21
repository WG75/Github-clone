// @flow

import React from 'react';
import Repos from '../../containers/Repos';
import UserEvents from '../../containers/UserEvents';
import './SideBar.css';

type Props = {
  repos: Array<any>,
  recentAactivity: Array<any>,
};

const SideBar = ({
  repos, recentAactivity, loading, show,
}: Props) => (
  <aside className="sidebar">
    <Repos />

    <UserEvents />
  </aside>
);

export default SideBar;
