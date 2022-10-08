import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterService, { IRegisterRequest } from '../../services/registerServices/registerService';
import { acceptIcon, cancelIcon, professionalIcon } from '../../shared/icons';
import Modal, { IButton } from '../../components/shared/NutModal';
import styles from './Register.module.scss';
import { IObjectValidationsProperties, objectValidations } from '../../helpers';


function Register() {
    const [confirm_pass, setConfirmPass] = useState(false)
    const [loading, setLoading] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const navigate = useNavigate();
    const [error, setError]= useState<any>()
    const [form, setForm] = useState<IRegisterRequest>({
        user_name: "",
        password: "",
        email: "",
        first_name: "",
        last_name: "",
        phone_number: "",
        birth_date: "",
        profile_image: null,
        isNutritionist: true,
        isPatient: false
    });

    const handleRegister = async (e: React.MouseEvent) => {
        e.preventDefault();  


        setShowModal(false);
        setTimeout(async () => {
            try {
                    console.log(form);
                    setLoading(true);
                    const response = await RegisterService.register(form);
                    if (response.success) {
                        navigate('/login');
                    } else {
                        setLoading(false);
                        console.error(response.message);
                    }
            } catch (error) {
                console.log('error en catch');
                setLoading(false);
                setError("incomplete form, please check if there are any errors")
                console.error(error);
            }
        }, 2000);
    };

    const getBase64 = (file: Blob) => {
        return new Promise(resolve => {
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
        if(passwordConfirm == form.password){
            setConfirmPass(true);
            setError("")
            }
        else {setConfirmPass(false);
            setError("Passwords do not match");
            }
    
        console.log("password match: ", confirm_pass)
    }

    const handleSetForm = (e: any) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handlePrevent = (e:any) => {
        e.preventDefault();
        setShowModal(true)
    }

    const buttons: Array<IButton> = [{
        label: 'accept',
        icon: acceptIcon,
        callback: handleRegister
    },
    {
        label: 'decline',
        icon: cancelIcon,
        callback: (e: React.MouseEvent) => setShowModal(false)
    }]

    const validateInputs = (e: React.MouseEvent) => {

        const validations: Array<IObjectValidationsProperties> = [
            {
                key: "user_name",
                type: "string",
                required: true,
            },
            {
                key: "password",
                type: "string",
                required: true,
            },
            {
                key: "email",
                type: "string",
                required: true,
            },
            {
                key: "first_name",
                type: "string",
                required: true,
            },
            {
                key: "last_name",
                type: "string",
                required: true,
            },
            {
                key: "birth_date",
                type: "string",
                required: true,
            },
            {
                key: "phone_number",
                type: "string",
                required: true,
            },
            {
                key: "profile_image",
                type: "string",
                required: false,
            },
            {
                key: "isNutritionist",
                type: "boolean",
                required: true,
            },
            {
                key: "isPatient",
                type: "boolean",
                required: true,
            },
        ];

        const properties = objectValidations(form, validations);

        if(properties?.passTypeValidations) handleRegister (e)
        else{
            let errors: any;
            properties?.inputs.forEach(input => {
                let key = input.key;
                let required = input.has;
                let valid = input.typeValid;
                let message;
                if (required && valid) return;
                if (!required && !valid) message = "This field is required, please provide a value";
                if (required && !valid) message = `This is not a accepted value`;
                errors = {
                    ...errors,
                    [key]: message,
                };
            });
            setError(errors)
        }

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
                            {professionalIcon}
                        </>)
                    }
                    <input id="file-input" className={styles.file_input} type={"file"} onChange={handleFileInputChange} />
                </div>
                <h2> Register </h2>
                <fieldset>
                    <div className={styles.login_input_wrapper}>
                        <input className={styles.login_input} type={'text'} required placeholder="name" name="first_name" onChange={handleSetForm} value={form?.first_name} />
                        {error &&  error.first_name && <p> {error.first_name}</p>}
                    </div>
                    <div className={styles.login_input_wrapper}>
                        <input className={styles.login_input} required type={'text'} placeholder="last name" name="last_name" onChange={handleSetForm} value={form?.last_name} />
                        {error &&  error.last_name && <p> {error.last_name}</p>}
                    </div>
                </fieldset>
                <fieldset>
                    <div className={styles.login_input_wrapper}>
                        <input className={styles.login_input} required type={'text'} placeholder="email" name="email" onChange={handleSetForm} value={form?.email} />
                        {error &&  error.email && <p> {error.email}</p>}
                    </div>
                    <div className={styles.login_input_wrapper}>
                        <input className={styles.login_input} required type={'text'} placeholder="phone number" name="phone_number" onChange={handleSetForm} value={form?.phone_number} />
                        {error &&  error.phone_number && <p> {error.phone_number}</p>}
                    </div>
                </fieldset>
                <fieldset>
                    <div className={styles.login_input_wrapper}>
                        <input className={styles.login_input} required type={'text'} placeholder="username" name="user_name" onChange={handleSetForm} value={form?.user_name} />
                        {error &&  error.user_name && <p> {error.user_name}</p>}
                    </div>
                    <div className={styles.login_input_wrapper}>
                        <input className={`${styles.login_btn_login}  ${styles.date_selector}`} required type={'date'} placeholder="birth date" name="birth_date" onChange={handleSetForm} value={form?.birth_date} />
                        {error &&  error.birth_date && <p> {error.birth_date}</p>}
                    </div>
                </fieldset>
                <fieldset>
                    <div className={styles.login_input_wrapper}>
                        <input className={styles.login_input} type={'password'} required placeholder="password" name="password" onChange={handleSetForm} value={form?.password} />
                        {error &&  error.password && <p> {error.password}</p>}
                    </div>
                    <div className={styles.login_input_wrapper}>
                        <input className={styles.login_input} required type={'password'} placeholder="confirm you password" name="confirm_pass" onChange={handleValidatePassword} />
                        {!confirm_pass && form.password!=""? <p> "Passwords do not match"</p>:[]}
                    </div>
                </fieldset>
                <section>
                    <button className={styles.login_btn_login} onClick={()=> navigate(-1)}>
                        Back
                    </button>
                    <button className={`${styles.login_btn_login}  ${styles.login_btn_register}`} onClick={validateInputs}>
                        Register
                    </button>
                </section>
            </form>
            {showModal ? <Modal title='Confirm register?' paragraph={error} buttons={buttons} /> : []}
        </div>
    );
}


export default Register;
