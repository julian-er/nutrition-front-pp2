import styles from './Patients.module.scss';
import Card from '../../components/shared/CardPatient';
import getUserLoggedData from '../../services/authServices/loggedUserService';
import { useEffect, useState } from 'react';
import NutritionistService , { IPatientsRequest }from '../../services/nutritionistServices/nutritionistService';
import NewPatient from '../../components/shared/RegisterPatient';
import Layout from '../../components/Layout';

function Patients() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [user, setUser]:any = useState<IPatientsRequest>({ 
    id:0,
    first_name:"",
    last_name:"",
    user_name:"",
    profile_image:""
  })

  const getPatients= async(id:any)=>{
    const response = await NutritionistService.getNutritionistPatients(id);
  }

  const handlePrevent = (e:any) => {
    e.preventDefault();
    setShowModal(true)
}

  useEffect(() => {
    const getUserData = async () => {
      const userData = await getUserLoggedData();
      setUser({
        id:userData.id,
        first_name:userData.first_name,
        last_name:userData.last_name,
        user_name:userData.user_name,
        profile_image:userData.profile_image 
      })
      getPatients(userData.id);
    }
    getUserData();
  }, []);
  

  return (
    <Layout>
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
      <button className={styles.patient_btn_add}  onClick={handlePrevent}>Add Patient</button>
      {showModal? <NewPatient showModal={showModal} setShowModal={setShowModal}/> :  []}
    </div>
    </Layout>
  );
}

export default Patients;
