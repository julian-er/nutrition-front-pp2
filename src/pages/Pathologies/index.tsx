import { useState } from 'react';
import { addIcon } from '../../shared/icons';
import { testPathology } from './test-pathology';
import Layout from '../../components/Layout';
import SinglePathology from './SinglePathology';
import NewHealthModal from '../../components/shared/NewHealthModal';
import styles from './Pathologies.module.scss';

function Pathologies() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [form, setForm] = useState({
    name: "",
    description:""
});

  return (
    <Layout>
      <div className={styles.pageWrapper}>
        {showModal? <NewHealthModal type='pathologies' title="pathology" showModal={showModal} setShowModal={setShowModal}/>  :  []}
        <header className={styles.headerWrapper}>
          <h2>Pathologies</h2>
          <div className={styles.searchWrapper}>
            <p>Search</p>
            <input type={'search'} />
          </div>
        </header>
        <div className={styles.content}>
          <section className={styles.leftSide}>
            <div className={styles.notesWrapper}>
              <button className={styles.addNote} onClick={()=>setShowModal(true)}>
                {addIcon}
                <span> Add new Pathology </span>
              </button>
              {
                testPathology.map((note)=> <SinglePathology {...{ ...note }} />)
              }
              {
                testPathology.map((note) => <SinglePathology {...{ ...note }} />)
              }
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}  

export default Pathologies;

