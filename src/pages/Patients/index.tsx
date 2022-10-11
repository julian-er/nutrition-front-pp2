import styles from './Patients.module.scss';
import Card from '../../components/shared/CardPatient';
import { useEffect, useState } from 'react';
import NutritionistService, { IPatientsResponse } from '../../services/entityServices/NutritionistService';
import NewPatient from '../../components/shared/NewPatientModal';
import Layout from '../../components/Layout';
import decryptJwt from '../../hooks/decriptJwt';
import {  useNavigate } from 'react-router-dom';
import { getAge } from '../../services/entityServices/PatientService';


function Patients() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [search, setSearch] = useState("")
  const [patients, setPatients] = useState<Array<IPatientsResponse>>([])
  const navigate = useNavigate();
  //get all patients
  
  const getPatients = async () => {
    const userInfo = decryptJwt();
    if (!userInfo) return;
    const response = await NutritionistService.getNutritionistPatients(userInfo.id);
    if (response.success) {
      setPatients(response.response)
    } else {
      console.error(response.message);
    }
  };

  const handlePrevent = (e:any) => {
    e.preventDefault();
    setShowModal(true)
}

 
  const handleSetSearch=(e:any)=>{
    setSearch(e.target.value)
  }

//callback to the patient card component 
const showSingularPatient=(id:number)=>{
  navigate(`/patients/${id}`)
}
  useEffect(() => {
    getPatients();
  }, []);
  
  return (
    <Layout>
    {showModal? <NewPatient showModal={showModal} setShowModal={setShowModal}/> :  []}
    <div className={styles.patients_wrapper}>
      <h1 className={styles.patients_title}>Patients</h1>
      <input type={'search'} placeholder={"Search patient"} onChange={handleSetSearch}/>
      { patients.map((patient)=> patient.first_name.toLowerCase().includes(search.toLowerCase())? 
        <Card name={`${patient.first_name} ${patient.last_name} `} profile_image={patient.profile_image} age={getAge(patient.birth_date)} callback={()=>showSingularPatient(patient.id)}/>
        :[])
    }

      <button className={styles.patient_btn_add}  onClick={handlePrevent}>Add Patient</button>
    </div>
    </Layout>
  );
}

export default Patients;
