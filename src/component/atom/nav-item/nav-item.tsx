import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import styles from './nav-item.scss';

type PropsType = {
  to: string;
  children: ReactNode;
} & NavLinkProps &
  React.RefAttributes<HTMLAnchorElement>;

export const NavItem = ({ to, children, ...props }: PropsType) => {
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        classNames(styles.root, { [styles.isActive]: isActive })
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};
