import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../../services/authServices/authService';
import { logoApp } from '../../shared/icons';
import styles from './Login.module.scss';

function Login() {
  const [form, setForm] = useState() as any;
  const navigate = useNavigate();

  const handleLogin = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const response = await AuthService.login(form);

      if (response.success) {
        navigate('/dashboard');
      } else {
        console.error(response.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSetForm = (e: any) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  return (
    <div className={styles.login_wrapper}>
      <form className={styles.login_form}>
        {logoApp}
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
