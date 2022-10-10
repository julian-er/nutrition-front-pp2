import Layout from '../../components/Layout';
import DayCard from '../../components/shared/DayCard';
import NoteCard from '../../components/shared/NoteCard';
import { noteCards, testData, testDays } from '../Dashboard/testData';
import styles from './SinglePatient.module.scss';

function SinglePatient() {
  return (
    <Layout>
      <header className={styles.header}>
        <div className={styles.imageWrapper}>
          <img className={styles.profile_image} src={testData.image}></img>
        </div>
        <div className={styles.profile_data}>
          <h2 className={styles.name}> firstname surname </h2>
          <div className={styles.measures}>
            <p>
              {' '}
              <span> Height :</span> 1,80 mt
            </p>
            <p>
              {' '}
              <span> Width :</span> 78 kg{' '}
            </p>
            <p>
              {' '}
              <span> Age :</span> 22{' '}
            </p>
          </div>
        </div>
      </header>
      <div className={styles.content}>
        <section className={styles.leftSide}>
          <h2 className={styles.cardTitle}> Diets </h2>
          <div className={styles.dietsWrapper}>
            {testDays.map(day => (
              <DayCard {...{ ...day }} />
            ))}
          </div>
        </section>

        <section className={styles.rightSide}>
          <div>
            <h2 className={styles.cardTitle}> Notes </h2>
            <div className={styles.notesWrapper}>
              {noteCards.map(note => (
                <NoteCard {...{ ...note }} />
              ))}
            </div>
          </div>

          <div>
            <h2 className={styles.cardTitle}> Pathologies </h2>
            <div className={styles.pathologyWrapper}>
              {noteCards.map(note => (
                <NoteCard {...{ ...note }} />
              ))}
            </div>
          </div>

          <div>
            <h2 className={styles.cardTitle}> Allergies </h2>
            <div className={styles.allergiesWrapper}>
              {noteCards.map(note => (
                <NoteCard {...{ ...note }} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default SinglePatient;
