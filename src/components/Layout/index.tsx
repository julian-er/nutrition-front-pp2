import React, { PropsWithChildren } from 'react';
import styles from './Layout.module.scss';
import NavigationMenu from './NavigationMenu';

function Layout(props: PropsWithChildren) {
  return (
    <div className={styles.pageWrapper}>
      <NavigationMenu />
      <section className={styles.content}>
        <main className={styles.mainWrapper}>{props.children}</main>
      </section>
    </div>
  );
}

export default Layout;
