import { useState, useEffect } from 'react';
import Layout from '../../../components/Layout';
import DayCard from '../../../components/shared/DayCard';
import NoteCard from '../../../components/shared/NoteCard';
import { noteCards, testData, testDays } from '../../Dashboard/testData';
import styles from './SinglePatient.module.scss';
import PatientService, { getAge, ISinglePatientResponse } from '../../../services/entityServices/PatientService';
import { useLocation } from 'react-router-dom';


function SinglePatient() {
  const [patientData, setPatientData]= useState<any>({});
  const user_id:number = parseInt(useLocation().pathname.split("/")[2],10);
  
  const getPatientData=async()=>{
    const response= await PatientService.getSingularPatientData(user_id);
    if (response.success) {
      setPatientData(response.response[0]);
    } else {
      console.error(response.message);
    }
  }
  
  
  console.log(patientData)
  useEffect(() => {
    getPatientData()
  }, [])
    
  return (
    <Layout>
      <header className={styles.header}>
        <div className={styles.imageWrapper}>
          <img className={styles.profile_image} src={patientData.profile_image} alt="profile icon"></img>
        </div>
        <div className={styles.profile_data}>
          <h2 className={styles.name}> {`${patientData.first_name} ${patientData.last_name}`} </h2>
          <div className={styles.infoWrapper}>
            <div className={styles.measures}>
              <p>
                <span> Height </span> 1.79mt
              </p>
              <p>
                <span> Weigth </span> 84 kg
              </p>
              <p>
                <span> Age {getAge(patientData.birth_date)}</span> 
              </p>
          </div>
            <div className={styles.measures}>
                <p>
                  <span> Email </span> {patientData.email}
                </p>
                <p>
                  <span> Phone Number </span> {patientData.phone_number}
                </p>
            </div>
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
