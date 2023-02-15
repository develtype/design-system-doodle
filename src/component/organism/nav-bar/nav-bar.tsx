import React from 'react';
import { NavItem } from 'src/component/atom/nav-item/nav-item';
import { NavItemType } from 'src/type/common.type';
import styles from './nav-bar.scss';

type PropsType = {
  navItems: NavItemType[];
};

export const NavBar = ({ navItems }: PropsType) => {
  return (
    <div className={styles.root}>
      <nav>
        {navItems.map((item) => (
          <NavItem key={item.to} to={item.to}>
            {item.content}
          </NavItem>
        ))}
      </nav>
    </div>
  );
};
