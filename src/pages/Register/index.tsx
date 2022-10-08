import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../../services/authServices/authService';
import { logoApp } from '../../shared/icons';
import styles from './Register.module.scss';

function Register() {
    const [form, setForm] = useState({
        name:"",
        last_name:"",
        email:"",
        phone_number:"",
        user_name:"",
        birth_date:"",
        password: '',
        confirm_pass:""
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
                <div className={styles.login_logo}>{logoApp} <span> Register </span></div>
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
                        <input className={styles.login_input} id="id" type={'date'} placeholder="birth date" name="birth_date" onChange={handleSetForm} value={form?.birth_date} />
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
