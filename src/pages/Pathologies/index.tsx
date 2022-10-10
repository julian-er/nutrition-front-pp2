//import React, { ButtonHTMLAttributes, useState } from 'react';
import Layout from '../../components/Layout';
import { addIcon } from '../../shared/icons';
import styles from './Pathologies.module.scss';
//import SingleNote from './SinglePathology';


function Pathologies() {

  const changeNotesHandler = (e: React.MouseEvent<HTMLElement>, type: string) => {
    e.preventDefault();
    if (type === 'personal') setPathology(true)
    else setPathology(false)
  }
  return (
    <Layout>
      <div className={styles.pageWrapper}>
        <header className={styles.headerWrapper}>
          <h2>{"Patient Pathology"}</h2>
        </header>
        <div className={styles.content}>
          <div className={styles.selectorWrapper}>
            <button className={styles.personalPathologie } onClick={(e) => changeNotesHandler(e, 'personal')}>Pathology</button>
          </div>
          <section className={styles.leftSide}>
            <div className={styles.notesWrapper}>
              <button className={styles.addNote} onClick={() => console.log('create new Pathology')}>
                {addIcon}
                <span> Add new Pathology </span>
              </button>

            </div>
          </section>
          <section className={styles.rightSide}>
            <div className={styles.notesWrapper}>
              <button className={styles.addNote} onClick={() => console.log('create new Patalogy')}>
                {addIcon}
                <span> Add new Pathology </span>
              </button>
              
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

function setPathology(arg0: boolean) {
  throw new Error('Function not implemented.');
}

export default Pathologies;

