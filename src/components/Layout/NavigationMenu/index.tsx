import React, { PropsWithChildren } from 'react';
import styles from './NavigationMenu.module.scss';
import { routes } from '../../../navigation/routes';
import { Link } from 'react-router-dom';

function NavigationMenu(props: PropsWithChildren) {
  return (
    <aside className={styles.asideMenu}>
      <ul>
        {routes.map(route => (
          <>
            {route.showNavigation && (
              <li>
                <Link to={route.url}>{route.label}</Link>
              </li>
            )}
          </>
        ))}
      </ul>
    </aside>
  );
}

export default NavigationMenu;
