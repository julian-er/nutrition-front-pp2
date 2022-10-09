import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Patients.module.scss';
import Card from '../../components/shared/CardPatient';

function Patients() {
  return (
      <div className={styles.patients_wrapper}>
        <h1 className={styles.patients_title}>Patients</h1>
        <input type={"search"} />
        <Card name = "Adan Volken" age="22" paragraph='Este pasiente tiene problemas al cardiacos y es alergico a la coca-colaaa' profile_image='https://cdn-icons-png.flaticon.com/512/25/25634.png'  />
        <Card name = "Hugo nuñez" age="42" paragraph="una cara de boludo" profile_image="https://los40.com/los40/imagenes/2022/04/13/bigbang/1649847016_940843_1649847228_gigante_normal.jpg"  />

    </div> 
  )
}

export default Patients;