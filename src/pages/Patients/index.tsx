import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Patients.module.scss';
import Card from '../../components/shared/CardPatient';

function Patients() {
  return (
      <div className={styles.patients_wrapper}>
        <h1 className={styles.patient_title}>Patients</h1>
        <input type={"search"} />
        <Card name = "Adan Volken" age="22" paragraph='anda' profile_image=''  />
    </div>
  )
}

export default Patients;