import Layout from '../../components/Layout';
import styles from './Dashboard.module.scss';
import DayCard from './DayCard';
import NoteCard from './NoteCard';
import PatientCard from './PatientCard';
import { noteCards, patientCards, testData, testDays } from './testData';

function Dashboard() {
  return (
    <Layout>
      <header className={styles.header}>
        <div className={styles.imageWrapper}>
          <img className={styles.profile_image} src={testData.image}></img>
        </div>
        <h2 className={styles.name}> firstname <span className={styles.surname}>surname</span></h2>
        <div className={styles.buttonsWrapper}>
          <button> New Note </button>
          <button> New Patient </button>
          <button> New Day diet </button>
        </div>
      </header>
      <div className={styles.content}>
        <section className={styles.leftSide}>
          <article className={styles.lastNotes}>
            <h2 className={styles.cardTitle}>Last Notes</h2>
            <div className={styles.contentWrapper}>
              {
                noteCards.map((note) => {
                  return <NoteCard {...{ ...note }} />
                })
              }
            </div>
          </article>
          <article className={styles.lastPatients}>
          <h2 className={styles.cardTitle}>Last Patients added</h2>
            <div className={styles.contentWrapper}>
              {
                patientCards.map((patient) => {
                  return <PatientCard {...{ ...patient }} />
                })
              }
            </div>
          </article>
        </section>
        <section className={styles.rightSide}>
          <h2 className={styles.cardTitle}>Last Diets (by day)</h2>
          <div className={styles.dietsWrapper}>
            {
              testDays.map((day) => {
                return <DayCard {...{ ...day }} />
              })
            }
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Dashboard;
