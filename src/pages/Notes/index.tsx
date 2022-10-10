import React, { ButtonHTMLAttributes, useState } from 'react';
import Layout from '../../components/Layout';
import { addIcon } from '../../shared/icons';
import styles from './Notes.module.scss';
import SingleNote from './SingleNote';
import { testNotes } from './test-notes';

function Notes() {
  const [personalNotes, setPersonalNotes] = useState<boolean>(false)

  const changeNotesHandler = (e: React.MouseEvent<HTMLElement>, type: string) => {
    e.preventDefault();
    if (type === 'personal') setPersonalNotes(true)
    else setPersonalNotes(false)
  }

  return (
    <Layout>
      <div className={styles.pageWrapper}>
        <header className={styles.headerWrapper}>
          <h2>{personalNotes ? 'Personal Notes' : 'Patient Notes'}</h2>
        </header>
        <div className={`${styles.content} ${personalNotes ? styles.personalNotes : styles.patientNotes}`}>
          <div className={styles.selectorWrapper}>
            <button className={`${personalNotes ? styles.selected : ''}`} onClick={(e) => changeNotesHandler(e, 'personal')}>My Notes</button>
            <button className={`${!personalNotes ? styles.selected : ''}`} onClick={(e) => changeNotesHandler(e, 'patient')}>Patient Notes</button>
          </div>
          <section className={styles.leftSide}>
            <div className={styles.notesWrapper}>
              <button className={styles.addNote} onClick={() => console.log('create new note')}>
                {addIcon}
                <span> Add new Note </span>
              </button>
              {
                testNotes.map((note) => <SingleNote {...{ ...note }} />)
              }
              {
                testNotes.map((note) => <SingleNote {...{ ...note }} />)
              }
            </div>
          </section>
          <section className={styles.rightSide}>
            <div className={styles.notesWrapper}>
              <button className={styles.addNote} onClick={() => console.log('create new note')}>
                {addIcon}
                <span> Add new Note </span>
              </button>
              {
                testNotes.map((note) => <SingleNote {...{ ...note }} />)
              }
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default Notes;
