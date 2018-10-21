// @flow

import React from 'react';
import Repos from '../../containers/Repos';
import UserEvents from '../../containers/UserEvents';
import './SideBar.css';

const SideBar = () => (
  <aside className="sidebar">
    <Repos />

    <UserEvents />
  </aside>
);

export default SideBar;
