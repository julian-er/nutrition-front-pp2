import styles from './Patients.module.scss';
import Card from '../../components/shared/CardPatient';
import getUserLoggedData from '../../services/authServices/loggedUserService';
import { useEffect, useState } from 'react';

function Patients() {
  
  const [user, setUser]:any = useState({ 
    id:"",
    first_name:"",
    last_name:"",
    email:"",
    phone_number:"",
    user_name:"",
    profile_image:""
  })



  useEffect(() => {
    const getUserData = async () => {
      const userData = await getUserLoggedData();
      console.log(userData)
      setUser({
        id:userData.id,
        first_name:userData.first_name,
        last_name:userData.last_name,
        email:userData.email,
        phone_number:userData.phone_number,
        profile_image:userData.profile_image 
      })
    }
    getUserData();
    //getPatients(user);
  }, []);

  return (
    <div className={styles.patients_wrapper}>
      <h1 className={styles.patients_title}>Patients</h1>
      <input type={'search'} />

      <Card
        name="Adan Volken"
        age="22"
        paragraph="Este paciente tiene problemas al cardiacos y es alergico a la coca-colaaa"
        profile_image="https://cdn-icons-png.flaticon.com/512/25/25634.png"
      />
      <Card
        name="Hugo nuñez"
        age="42"
        paragraph="una cara de boludo"
        profile_image="https://los40.com/los40/imagenes/2022/04/13/bigbang/1649847016_940843_1649847228_gigante_normal.jpg"
      />
      <button className={styles.patient_btn_add}>Add Patient</button>
    </div>
  );
}

export default Patients;
