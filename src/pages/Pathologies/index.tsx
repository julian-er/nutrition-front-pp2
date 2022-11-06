import { useEffect, useState } from 'react';
import { addIcon } from '../../shared/icons';
import Layout from '../../components/Layout';
import SinglePathology from './SinglePathology';
import NewHealthModal from '../../components/shared/NewHealthModal';
import styles from './Pathologies.module.scss';
import PathologiesServices from '../../services/entityServices/PathologiesService';

function Pathologies() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [pathologiesData, setPathologiesData] = useState([]);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    handlePathologiesData();
  }, [showModal]);

  const handlePathologiesData = async () => {
    const response = await PathologiesServices.getPathologiesData();
    if (response.success) {
      setPathologiesData(response.response);
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
          <h2>Pathologies</h2>
          <div className={styles.searchWrapper}>
            <input className={styles.searchWrapper_input} type={'search'} onChange={handleSetSearch} placeholder="search" />
          </div>
        </header>
        <div className={styles.content}>
          <section className={styles.leftSide}>
            <div className={styles.notesWrapper}>
              <button className={styles.addNote} onClick={() => setShowModal(true)}>
                {addIcon}
                <span> Add new Pathology </span>
              </button>
              {pathologiesData.map((pathology: any) =>
                pathology.name.toLowerCase().includes(search.toLowerCase()) ? <SinglePathology name={pathology.name} description={pathology.description} /> : []
              )}
            </div>
          </section>
        </div>
      </div>
      {showModal ? <NewHealthModal type="pathologies" title="pathology" showModal={showModal} setShowModal={setShowModal} /> : []}
    </Layout>
  );
}

export default Pathologies;
