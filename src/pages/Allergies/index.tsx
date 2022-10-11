import React, { ButtonHTMLAttributes, useState } from 'react';
import Layout from '../../components/Layout';
import { addIcon } from '../../shared/icons';
import styles from './Allergies.module.scss';
import SingleNote from './SingleAllergy';
import { testNotes } from './test-allergies';

function Notes() {
  const [personalNotes, setPersonalNotes] = useState<boolean>(false);

  const changeNotesHandler = (e: React.MouseEvent<HTMLElement>, type: string) => {
    e.preventDefault();
    if (type === 'personal') setPersonalNotes(true);
    else setPersonalNotes(false);
  };

  return (
    <Layout>
      <div className={styles.pageWrapper}>
        <header className={styles.headerWrapper}>
          <h2>Allergies</h2>
        </header>
        <div className={styles.content}>
          <section className={styles.mainSection}>
            <div className={styles.allergiesWrapper}>
              <button className={styles.addNote} onClick={() => console.log('create new note')}>
                {addIcon}
                <span> Add new Allergy </span>
              </button>
              {testNotes.map(note => (
                <SingleNote {...{ ...note }} />
              ))}
              {testNotes.map(note => (
                <SingleNote {...{ ...note }} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default Notes;
