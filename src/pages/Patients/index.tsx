import styles from './Patients.module.scss';
import Card from '../../components/shared/CardPatient';
import { useEffect, useState } from 'react';
import NutritionistService, { IPatientsResponse } from '../../services/nutritionistServices/nutritionistService';
import NewPatient from '../../components/shared/NewPatientModal';
import Layout from '../../components/Layout';
import decryptJwt from '../../hooks/decriptJwt';


function Patients() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [patients, setPatients] = useState<Array<IPatientsResponse>>([])

  const getPatients = async () => {
    const userInfo = decryptJwt();
    console.log(userInfo)
    if (!userInfo) return;
    const response = await NutritionistService.getNutritionistPatients(userInfo.id);
    if (response.success) {
      console.log(response.response);
      setPatients(response.response)
    } else {
      console.error(response.message);
    }
  };

  const handlePrevent = (e:any) => {
    e.preventDefault();
    setShowModal(true)
}
const getAge=(date:string):string=>  {
    let today = new Date();
    let birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) age=age-1;
    return age.toString();
}

  useEffect(() => {
    getPatients();
  }, []);
  

  return (
    <Layout>
    <div className={styles.patients_wrapper}>
      <h1 className={styles.patients_title}>Patients</h1>
      <input type={'search'} />
      {patients.map((patient)=><Card name={`${patient.first_name} ${patient.last_name} `} profile_image={patient.profile_image} age={getAge(patient.birth_date)}  />)}
      <button className={styles.patient_btn_add}  onClick={handlePrevent}>Add Patient</button>
      {showModal? <NewPatient showModal={showModal} setShowModal={setShowModal}/> :  []}
    </div>
    </Layout>
  );
}

export default Patients;
