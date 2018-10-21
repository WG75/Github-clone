// @flow

import React from 'react';
import Repos from '../../containers/Repos';
import RecentEvents from '../RecentEvents';
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

    <RecentEvents loading={loading} userEvents={show ? recentAactivity : []} />
  </aside>
);

export default SideBar;
