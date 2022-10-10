import React, {useState} from 'react'
import { professionalIcon } from '../../../shared/icons';
import styles from './NewPatient.module.scss';

function NewPatient({setShowModal, showModal}:any){
    const [form, setForm] = useState({
        user_name: "",
        password: "",
        email: "",
        first_name: "",
        last_name: "",
        phone_number: "",
        birth_date: "",
        profile_image: null,
        isNutritionist: false,
        isPatient: true
    });

    const handleSetForm = (e: any) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handlePrevent = (e:any) => {
        e.preventDefault();
        setShowModal(false)
    }

return (
    <div className={styles.backdrop}>
        <div className={styles.modal_wrapper}>
            <h2>New Patient</h2>
            <form className={styles.new_user_form}>
            <div className={styles.new_user_logo}>
                    {form.profile_image !== null ?
                        (<div className={styles.image_container}>
                            <img className={styles.user_photo} src={form.profile_image} alt="user photo" />
                        </div>)
                        : (<>
                            {professionalIcon}
                        </>)
                    }
                    <input id="file-input" className={styles.file_input} type={"file"}/>
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
                            <input className={styles.new_user_input} required type={'text'} placeholder="phone number" name="phone_number" onChange={handleSetForm} value={form?.phone_number} />
                        </div>
                </fieldset>
                <fieldset>
                        <div className={styles.new_user_input_wrapper}>
                            <input className={styles.new_user_input} required type={'text'} placeholder="username" name="user_name" onChange={handleSetForm} value={form?.user_name} />
                                        </div>
                        <div className={styles.new_user_input_wrapper}>
                            <input className={`${styles.new_user_btn}  ${styles.date_selector}`} required type={'date'} placeholder="birth date" name="birth_date" onChange={handleSetForm} value={form?.birth_date} />
                        </div>
                </fieldset>
                 <section>
                    <button className={styles.new_user_btn} onClick={handlePrevent}>
                        Back
                    </button>
                    <button className={`${styles.new_user_btn}  ${styles.new_user_btn_register}`}>
                        Register
                    </button>
                </section>
            </form>
        </div>
  </div>
  )
}

export default NewPatient