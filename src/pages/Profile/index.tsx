import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import styles from './Profile.module.scss';


function Profile() {
  return (
    <Layout>
      <div  className={styles.login_full}>
        <fieldset>
          <div className={styles.login_input_wrapper}>
            <input className={styles.login_input} type={'text'} required placeholder="name" name="first_name"  />
                    </div>
                    <div className={styles.login_input_wrapper}>
                        <input className={styles.login_input} required type={'text'} placeholder="last name" name="last_name" />
                    </div>
                </fieldset>
                <fieldset>
                    <div className={styles.login_input_wrapper}>
                        <input className={styles.login_input} required type={'text'} placeholder="email" name="email"  />
                    </div>
                    <div className={styles.login_input_wrapper}>
                        <input className={styles.login_input} required type={'text'} placeholder="phone number" name="phone_number"  />
                    </div>
                </fieldset>
                <fieldset>
                    <div className={styles.login_input_wrapper}>
                        <input className={styles.login_input} required type={'text'} placeholder="username" name="user_name"   />
                    </div>
                    <div className={styles.login_input_wrapper}>
                        <input className={`${styles.login_btn_login}  ${styles.date_selector}`} required type={'date'} placeholder="birth date" name="birth_date"   />
                    </div>
                </fieldset>
                <section>
                <button className={styles.login_btn_login} >
                    Sign off
                    </button>
              </section>
      </div>
          </Layout>    
  );
}

export default Profile;
