import React, { PropsWithChildren, useState } from 'react';
import styles from './NavigationMenu.module.scss';
import { routes } from '../../../navigation/routes';
import { NavLink } from 'react-router-dom';
import { arrowIcon, profileIcon } from '../../../shared/icons';

function NavigationMenu(props: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = (e: any) => {
    setIsOpen(!isOpen);
  };
  return (
    <aside className={`${styles.asideMenu} ${!isOpen ? styles.hidden : ''}`}>
      <nav className={styles.navMenu}>
        <ul className={styles.navigationPages}>
          {routes.map(route => (
            <>
              {route.showNavigation && (
                <li className={styles.navigationItem}>
                  <NavLink to={route.url} className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}>
                    {route.icon}
                    <span>{route.label}</span>
                  </NavLink>
                </li>
              )}
            </>
          ))}
        </ul>
      </nav>
      <footer className={styles.footer}>
        <ul className={styles.navigationPages}>
          <li className={styles.navigationItem}>
            <NavLink to={'/profile'} className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}>
              {profileIcon}
              <span>Profile</span>
            </NavLink>
          </li>
          <li className={`${styles.closeMenu} ${styles.navigationItem}`}>
            <button className={`${styles.closeArrowButton} ${styles.link} ${styles.collapse}`} onClick={handleClick}>
              {arrowIcon}
            </button>
          </li>
        </ul>
      </footer>
    </aside>
  );
}

export default NavigationMenu;
