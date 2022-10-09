import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterService, { IRegisterRequest } from '../../services/registerServices/registerService';
import { acceptIcon, cancelIcon, profileIcon } from '../../shared/icons';
import Modal, { IButton } from '../../shared/Modal';
import styles from './Register.module.scss';


function Register() {
    const [confirm_pass, setConfirmPass] = useState(false)
    const [form, setForm] = useState<IRegisterRequest>({
        user_name: "",
        password: '',
        email: "",
        first_name: "",
        last_name: "",
        phone_number: "",
        birth_date: "",
        profile_image: null,
        isNutritionist: true,
        isPatient: false
    });

    const [loading, setLoading] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleRegister = async (e: React.MouseEvent) => {
        setLoading(true);
        e.preventDefault();
        setTimeout(async () => {
            try {
                if (confirm_pass && form.user_name.length && form.first_name.length && form.last_name.length && form.email.length) {
                    const response = await RegisterService.register(form);
                    if (response.success) {
                        navigate('/login');
                    } else {
                        setLoading(false);
                        console.error(response.message);
                    }
                } else {
                    alert("formulario incompleto")
                }
            } catch (error) {
                console.log('error en catch');
                setLoading(false);
                console.error(error);
            }
        }, 2000);
    };

    const handleBack = (e: React.MouseEvent) => {
        navigate("/login")
    }

    const getBase64 = (file: Blob) => {
        return new Promise(resolve => {
            let fileInfo;
            let baseURL: any = "";
            let reader = new FileReader();
            // Convert the file to base64 text
            reader.readAsDataURL(file);
            reader.onload = () => {
                baseURL = reader.result;
                resolve(baseURL);
            };
        });
    };

    const handleFileInputChange = (e: any) => {
        let file = e.target.files[0];
        getBase64(file)
            .then((result: any) => {
                file["base64"] = result;
                setForm({
                    ...form,
                    profile_image: result
                });
            })
            .catch(err => {
                console.log(err);
            });

    };

    const handleValidatePassword = (e: any) => {
        const passwordConfirm = e.target.value
        console.log(passwordConfirm)
        passwordConfirm == form.password ? setConfirmPass(true) : setConfirmPass(false)
    }

    const handleSetForm = (e: any) => {
        const { name, value } = e.target;
        console.log(confirm_pass)
        setForm({
            ...form,
            [name]: value
        });
    };

    const buttons: Array<IButton> = [{
        label: 'accept',
        icon: acceptIcon,
        callback: () => setShowModal(false)
    },
    {
        label: 'decline',
        icon: cancelIcon,
        callback: () => setShowModal(false)
    }]

    const handlePrevent = (e:any) => {
        e.preventDefault();
        setShowModal(true)
    }

    return (
        <div className={`${styles.login_wrapper} ${loading ? styles.login_loading : ''}`}>
            <form className={styles.login_form}>
                <div className={styles.login_logo}>
                    {form.profile_image !== null ?
                        (<div className={styles.image_container}>
                            <img className={styles.user_photo} src={form.profile_image} alt="user photo" />
                        </div>)
                        : (<>
                            {profileIcon}
                        </>)
                    }
                    <input id="file-input" className={styles.file_input} type={"file"} onChange={handleFileInputChange} />
                </div>
                <h2> Register </h2>
                <fieldset>
                    <div className={styles.login_input_wrapper}>
                        <input className={styles.login_input} id="id" type={'text'} placeholder="name" name="first_name" onChange={handleSetForm} value={form?.first_name} />
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
                        <input className={styles.login_input} id="id" type={'password'} placeholder="confirm you password" name="confirm_pass" onChange={handleValidatePassword} />
                    </div>
                </fieldset>
                <section>
                    <button className={styles.login_btn_login} onClick={handleBack}>
                        Back
                    </button>
                    <button className={`${styles.login_btn_login}  ${styles.login_btn_register}`} onClick={handlePrevent}>
                        Register
                    </button>
                </section>
            </form>
            {showModal ? <Modal title='Confirmar Registro' paragraph='algo para el cuerpo' buttons={buttons} /> : []}
        </div>
    );
}


export default Register;
