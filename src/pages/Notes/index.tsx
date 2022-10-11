import React, { ButtonHTMLAttributes, useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import decryptJwt, { IUserJWTInfo } from '../../hooks/decriptJwt';
import NoteService, { INoteResponse } from '../../services/entityServices/NotesService';
import { addIcon } from '../../shared/icons';
import styles from './Notes.module.scss';
import SingleNote from './SingleNote';

function Notes() {
  const [notes, setNotes] = useState<Array<INoteResponse> | undefined>();
  const [personalNotes, setPersonalNotes] = useState<boolean>(false);

  const changeNotesHandler = (e: React.MouseEvent<HTMLElement>, type: string) => {
    e.preventDefault();
    if (type === 'personal') setPersonalNotes(true);
    else setPersonalNotes(false);
  };

  const getPersonalNotes = async () => {
    const userInfo = decryptJwt();

    if (!userInfo) return;
    //Set dashboard information
    const response = await NoteService.getPersonalNotes(userInfo.id);
    if (response.success) {
      setNotes(response.response);
    } else {
      console.error(response.message);
    }
  };

  const getPatientNotes = async () => {
    const userInfo = decryptJwt();

    if (!userInfo) return;

    //Set dashboard information
    const response = await NoteService.getPatientNotes(userInfo.id);
    if (response.success) {
      setNotes(response.response);
    } else {
      console.error(response.message);
    }
  };

  useEffect(() => {
    if (personalNotes) getPersonalNotes();
    else getPatientNotes();
  }, [personalNotes]);

  return (
    <Layout>
      <div className={styles.pageWrapper}>
        <header className={styles.headerWrapper}>
          <h2>{personalNotes ? 'Personal Notes' : 'Patient Notes'}</h2>
        </header>
        <div className={`${styles.content} ${personalNotes ? styles.personalNotes : styles.patientNotes}`}>
          <div className={styles.selectorWrapper}>
            <button className={`${personalNotes ? styles.selected : ''}`} onClick={e => changeNotesHandler(e, 'personal')}>
              My Notes
            </button>
            <button className={`${!personalNotes ? styles.selected : ''}`} onClick={e => changeNotesHandler(e, 'patient')}>
              Patient Notes
            </button>
          </div>
          <section className={styles.mainSection}>
            <div className={styles.notesWrapper}>
              <button className={styles.addNote} onClick={() => console.log('create new note')}>
                {addIcon}
                <span> Add new Note </span>
              </button>
              {notes?.map(note => (
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
