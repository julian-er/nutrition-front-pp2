import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../../services/authServices/authService';
import { logoApp } from '../../shared/icons';
import styles from './Login.module.scss';

function Login() {
  const [form, setForm] = useState({
    user_name: '',
    password: ''
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
        <div className={styles.login_logo}>{logoApp} <span> logging in ...</span></div>
        
        <div className={styles.login_input_wrapper}>
          <input className={styles.login_input} id="id" type={'text'} placeholder="username" name="user_name" onChange={handleSetForm} value={form?.user_name} />
          <Link to="#" className={styles.login_forgot}>
            Forgot your user name ?
          </Link>
        </div>
        <div className={styles.login_input_wrapper}>
          <input className={styles.login_input} type={'password'} placeholder="password" name="password" onChange={handleSetForm} value={form?.password} />
          <Link to="#" className={styles.login_forgot}>
            Forgot your user name ?
          </Link>
        </div>
        <button className={styles.login_btn_login} onClick={handleLogin}>
          login
        </button>
        <Link className={styles.login_btn_register} to="/register">
          Register
        </Link>
      </form>
    </div>
  );
}

export default Login;
