// @flow

import React from 'react';
import type { Node } from 'react';

import './SideBar.css';

const SideBar = ({ children }: { children: Node }) => <aside className="sidebar">{children}</aside>;

export default SideBar;
