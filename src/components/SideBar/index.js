// @flow

import React from 'react';
import ReposList from '../ReposList';
import RecentEvents from '../RecentEvents';
import './SideBar.css';

type Props = {
  repos: Array<any>,
  recentAactivity: Array<any>,
};

const SideBar = ({ repos, recentAactivity }: Props) => (
  <aside className="sidebar">
    <ReposList repos={repos} />

    <RecentEvents userEvents={recentAactivity} />
  </aside>
);

export default SideBar;
