import 'src/style/css/common.scss';
import React from 'react';
import { NavBar } from 'src/component/organism/nav-bar/nav-bar';
import { NavItemType } from 'src/type/common.type';
import { AppRoute } from './app.route';
import styles from './app.scss';

export const App = () => (
  <div className={styles.root}>
    <NavBar navItems={NavItems} />
    <header className={styles.title}>Webpack react template!</header>
    <AppRoute />
  </div>
);

const NavItems: NavItemType[] = [
  {
    to: '/',
    content: 'Home',
  },
  {
    to: '/button',
    content: 'Buttons',
  },
];
