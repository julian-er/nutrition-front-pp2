import { useEffect, useState } from 'react';
import { addIcon } from '../../shared/icons';
import Layout from '../../components/Layout';
import SingleAllergy from './SingleAllergy';
import NewHealthModal from '../../components/shared/NewHealthModal';
import styles from './Allergies.module.scss';
import AllergiesServices from '../../services/allergiesServices/allergiesService';

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
                allergy.name.toLowerCase().includes(search.toLowerCase()) ? <SingleAllergy name={allergy.name} description={allergy.description} /> : []
              )}
            </div>
          </section>
        </div>
      </div>
      {showModal ? <NewHealthModal type="allergies" title="allergy" showModal={showModal} setShowModal={setShowModal} /> : []}
    </Layout>
  );
}

export default Allergies;
