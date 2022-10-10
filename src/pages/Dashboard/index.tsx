import Layout from '../../components/Layout';
import styles from './Dashboard.module.scss';
import DayCard from '../../components/shared/DayCard';
import NoteCard from '../../components/shared/NoteCard';
import PatientCard from './PatientCard';
import { IDashboardDataResponse } from '../../services/interfaces/IDashboard';
import { useEffect, useState } from 'react';
import DashboardService from '../../services/entityServices/DashboardService';
import decryptJwt, { IUserJWTInfo } from '../../hooks/decriptJwt';
import { profileIcon } from '../../shared/icons';

function Dashboard() {
  const [nutritionistData, setNutritionistData] = useState<IUserJWTInfo | undefined>();
  const [dashboardData, setDashboardData] = useState<IDashboardDataResponse | undefined>();

  useEffect(() => {
    handleDashboardData();
  }, []);

  /**
   *  Recover dashboard data
   */
  const handleDashboardData = async () => {
    const userInfo = decryptJwt();
    if (userInfo && userInfo.id) {
      //Set nutritionist information
      setNutritionistData(userInfo);

      //Set dashboard information
      const response = await DashboardService.getDashboardData(userInfo.id);
      if (response.success) {
        setDashboardData(response.response);
      } else {
        console.error(response.message);
      }
    }
  };

  return (
    <Layout>
      <header className={styles.header}>
        <div className={styles.imageWrapper}>
          {nutritionistData && nutritionistData.profile_image ? <img className={styles.profile_image} src={nutritionistData.profile_image} alt='my-profile' /> : <>{profileIcon}</>}
        </div>
        {nutritionistData && (
          <h2 className={styles.name}>
            {nutritionistData.first_name}
            <span className={styles.surname}>{nutritionistData.last_name}</span>
          </h2>
        )}
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
              {dashboardData && dashboardData.notes.length ? (
                dashboardData.notes.map(note => {
                  return <NoteCard {...{ ...note }} />;
                })
              ) : (
                <p>No notes added yet.</p>
              )}
            </div>
          </article>
          <article className={styles.lastPatients}>
            <h2 className={styles.cardTitle}>Last Patients added</h2>
            <div className={styles.contentWrapper}>
              {dashboardData && dashboardData.patients.length ? (
                dashboardData.patients.map(patient => {
                  return <PatientCard {...{ ...patient }} />;
                })
              ) : (
                <p>No patients added yet.</p>
              )}
            </div>
          </article>
        </section>
        <section className={styles.rightSide}>
          <h2 className={styles.cardTitle}>Last Diets (by day)</h2>
          <div className={styles.dietsWrapper}>
            {dashboardData && dashboardData.days.length ? (
              dashboardData.days.map(day => {
                return <DayCard {...{ ...day }} />;
              })
            ) : (
              <p>No patients added yet.</p>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Dashboard;
