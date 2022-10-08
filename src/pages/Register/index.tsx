import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/authServices/authService';
import { professionalIcon } from '../../shared/icons';
import styles from './Register.module.scss';

function Register() {
    const [form, setForm] = useState({
        name: "",
        last_name: "",
        user_photo: "",
        email: "",
        phone_number: "",
        user_name: "",
        birth_date: "",
        password: '',
        confirm_pass: ""
    }) as any;
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleLogin = async (e: React.MouseEvent) => {
        setLoading(true);
        e.preventDefault();
        setTimeout(async () => {
            try {
                const response = await AuthService.login(form);
                if (response.success) {
                    navigate('/dashboard');
                } else {
                    setLoading(false);
                    console.error(response.message);
                }
            } catch (error) {
                console.log('error en catch');
                setLoading(false);
                console.error(error);
            }
        }, 2000);
    };

    const getBase64 = (file: Blob) => {
        return new Promise(resolve => {
            let fileInfo;
            let baseURL: any = "";
            // Make new FileReader
            let reader = new FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);

            // on reader load somthing...
            reader.onload = () => {
                // Make a fileInfo Object
                console.log("Called", reader);
                baseURL = reader.result;
                console.log(baseURL);
                resolve(baseURL);
            };
            console.log(fileInfo);
        });
    };

    const handleFileInputChange = (e: any) => {
        console.log(e.target.files[0]);
        let file = e.target.files[0];
        getBase64(file)
            .then(result => {
                file["base64"] = result;
                console.log("File Is", file);
                setForm({
                    ...form,
                    user_photo: result,
                    file
                });
            })
            .catch(err => {
                console.log(err);
            });

    };


    const handleSetForm = (e: any) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    return (
        <div className={`${styles.login_wrapper} ${loading ? styles.login_loading : ''}`}>
            <form className={styles.login_form}>
                    <div className={styles.login_logo}>
                        {form.user_photo !== "" ?
                            <div className={styles.image_container}>
                                <img className={styles.user_photo} src={form.user_photo} alt="user photo" />
                            </div>
                            : <>
                                {professionalIcon}
                            </>
                        }
                    <input id="file-input" className={styles.file_input} type={"file"} onChange={handleFileInputChange} />
                </div>
                <h2> Register </h2>
                <fieldset>
                    <div className={styles.login_input_wrapper}>
                        <input className={styles.login_input} id="id" type={'text'} placeholder="name" name="name" onChange={handleSetForm} value={form?.name} />
                    </div>
                    <div className={styles.login_input_wrapper}>
                        <input className={styles.login_input} id="id" type={'text'} placeholder="last name" name="last_name" onChange={handleSetForm} value={form?.last_name} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className={styles.login_input_wrapper}>
                        <input className={styles.login_input} id="id" type={'text'} placeholder="email" name="email" onChange={handleSetForm} value={form?.email} />
                    </div>
                    <div className={styles.login_input_wrapper}>
                        <input className={styles.login_input} id="id" type={'text'} placeholder="phone number" name="phone_number" onChange={handleSetForm} value={form?.phone_number} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className={styles.login_input_wrapper}>
                        <input className={styles.login_input} id="id" type={'text'} placeholder="username" name="user_name" onChange={handleSetForm} value={form?.user_name} />
                    </div>
                    <div className={styles.login_input_wrapper}>
                        <input className={`${styles.login_btn_login}  ${styles.date_selector}`} id="id" type={'date'} placeholder="birth date" name="birth_date" onChange={handleSetForm} value={form?.birth_date} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className={styles.login_input_wrapper}>
                        <input className={styles.login_input} type={'password'} placeholder="password" name="password" onChange={handleSetForm} value={form?.password} />
                    </div>
                    <div className={styles.login_input_wrapper}>
                        <input className={styles.login_input} id="id" type={'text'} placeholder="confirm you password" name="confirm_pass" onChange={handleSetForm} value={form?.confirm_pass} />
                    </div>
                </fieldset>
                <section>
                    <button className={styles.login_btn_login} onClick={handleLogin}>
                        Back
                    </button>
                    <button className={`${styles.login_btn_login}  ${styles.login_btn_register}`} onClick={handleLogin}>
                        Register
                    </button>
                </section>
            </form>
        </div>
    );
}


export default Register;
