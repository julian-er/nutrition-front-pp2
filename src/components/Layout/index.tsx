import React, { PropsWithChildren } from 'react';
import styles from './Layout.module.scss';
import NavigationMenu from './NavigationMenu';

function Layout(props: PropsWithChildren) {
  return (
    <div className={styles.pageWrapper}>
        <NavigationMenu />
      <main className={styles.mainContent}>{props.children}</main>
    </div>
  );
}

export default Layout;
