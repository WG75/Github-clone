// @flow

import React from 'react';
import ReposList from '../ReposList';
import RecentEvents from '../RecentEvents';
import './SideBar.css';

type Props = {
  repos: Array<any>,
  recentAactivity: Array<any>,
};

const SideBar = ({ repos, recentAactivity, loading, show }: Props) => (
  <aside className="sidebar">
    <ReposList loading={loading} repos={show ? repos : []} />

    <RecentEvents loading={loading} userEvents={show ? recentAactivity : []} />
  </aside>
);

export default SideBar;
