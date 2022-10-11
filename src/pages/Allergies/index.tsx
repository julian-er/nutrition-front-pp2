import React, { ButtonHTMLAttributes, useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import NewHealthModal from '../../components/shared/NewHealthModal';
import AllergiesServices from '../../services/allergiesServices/allergiesService';
import { addIcon } from '../../shared/icons';
import styles from './Allergies.module.scss';
import SingleAllergy from './SingleAllergy';
import { testAllergies } from './test-allergies';

function Allergies() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [allergiesData, setAllergiesData] = useState([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    handleAllergiesData();
  }, [showModal]);

  const handleAllergiesData = async () => {
    const response = await AllergiesServices.getAllergiesData();
    if (response.success) {
      setAllergiesData(response.response);
    } else {
      console.error(response.message);
    }
  };

  const handleSetSearch = (e: any) => {
    setSearch(e.target.value);
  };

  return (
    <Layout>
      <div className={styles.pageWrapper}>
        {showModal ? <NewHealthModal type="Allergies" title="allergy" showModal={showModal} setShowModal={setShowModal} /> : []}
        <header className={styles.headerWrapper}>
          <h2>Allergies</h2>
          <div className={styles.searchWrapper}>
            <p>Search</p>
            <input type={'search'} onChange={handleSetSearch} />
          </div>
        </header>
        <div className={styles.content}>
          <section className={styles.mainSection}>
            <div className={styles.allergiesWrapper}>
              <button className={styles.addAllergy} onClick={() => setShowModal(true)}>
                {addIcon}
                <span> Add new Allergy </span>
              </button>
              {allergiesData.map((allergy: any) =>
                allergy.name.toLowerCase().includes(search.toLowerCase()) ? <SingleAllergy title={allergy.title} content={allergy.content} date={''} /> : []
              )}
              {/* { {testAllergies.map(note => (
                <SingleAllergy {...{ ...note }} />
              ))} }
              { {testAllergies.map(note => (
                <SingleAllergy {...{ ...note }} />
              ))} } */}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default Allergies;

// function handleAllergiesData() {
//   throw new Error('Function not implemented.');
// }
