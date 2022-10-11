import React, { useState } from 'react';
import RegisterService, { getBase64 } from '../../../services/entityServices/RegisterService';
import { profileIcon } from '../../../shared/icons';
import styles from './NewPatient.module.scss';

interface INewPAtientModal {
  setShowModal: () => void;
  nutritionist_id: number
}

function NewPatient(props: INewPAtientModal) {
  const { setShowModal } = props;
  const [form, setForm] = useState({
    user_name: '',
    password: '',
    email: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    birth_date: '',
    profile_image: null,
    isNutritionist: false,
    isPatient: true,
    nutritionist_id: 2
  });

  const handleSetForm = (e: any) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleCreatePatient = (e: any) => {
    e.preventDefault();
    setTimeout(async () => {
      try {
        const response = await RegisterService.registerPatient(form);
        console.log(response);
        if (response.success) {
          console.log('USUARIO CREADO');
          setShowModal();
        } else {
          console.error(response.message);
        }
      } catch (error) {
        console.log('error en catch');
        console.error(error);
      }
    }, 2000);
  };

  const handleFileInputChange = (e: any) => {
    let file = e.target.files[0];
    getBase64(file)
      .then((result: any) => {
        file['base64'] = result;
        setForm({
          ...form,
          profile_image: result
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handlePrevent = (e: any) => {
    e.preventDefault();
    setShowModal();
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal_wrapper}>
        <h2>New Patient</h2>
        <form className={styles.new_user_form}>
          <div className={styles.new_user_logo}>
            {form.profile_image !== null ? (
              <div className={styles.image_container}>
                <img className={styles.user_photo} src={form.profile_image} alt="user" />
              </div>
            ) : (
              <>{profileIcon}</>
            )}
            <input id="file-input" className={styles.file_input} type={'file'} onChange={handleFileInputChange} />
          </div>
          <fieldset>
            <div className={styles.new_user_input_wrapper}>
              <input className={styles.new_user_input} type={'text'} required placeholder="name" name="first_name" onChange={handleSetForm} value={form?.first_name} />
            </div>
            <div className={styles.new_user_input_wrapper}>
              <input className={styles.new_user_input} required type={'text'} placeholder="last name" name="last_name" onChange={handleSetForm} value={form?.last_name} />
            </div>
          </fieldset>
          <fieldset>
            <div className={styles.new_user_input_wrapper}>
              <input className={styles.new_user_input} required type={'text'} placeholder="email" name="email" onChange={handleSetForm} value={form?.email} />
            </div>
            <div className={styles.new_user_input_wrapper}>
              <input
                className={styles.new_user_input}
                required
                type={'text'}
                placeholder="phone number"
                name="phone_number"
                onChange={handleSetForm}
                value={form?.phone_number}
              />
            </div>
          </fieldset>
          <fieldset>
            <div className={styles.new_user_input_wrapper}>
              <input className={styles.new_user_input} required type={'text'} placeholder="username" name="user_name" onChange={handleSetForm} value={form?.user_name} />
            </div>
            <div className={styles.new_user_input_wrapper}>
              <input
                className={`${styles.new_user_btn}  ${styles.date_selector}`}
                required
                type={'date'}
                placeholder="birth date"
                name="birth_date"
                onChange={handleSetForm}
                value={form?.birth_date}
              />
            </div>
          </fieldset>
          <section>
            <button className={styles.new_user_btn} onClick={handlePrevent}>
              Back
            </button>
            <button className={`${styles.new_user_btn}  ${styles.new_user_btn_register}`} onClick={handleCreatePatient}>
              Register
            </button>
          </section>
        </form>
      </div>
    </div>
  );
}

export default NewPatient;
