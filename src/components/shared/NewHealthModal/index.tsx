import { MouseEventHandler, PropsWithChildren, useState  }from 'react'
import styles from "./NewHealthModal.module.scss"
import CreateItemService from "../../../services/entityServices/ItemService"
import { IObjectValidationsProperties, objectValidations } from '../../../helpers/index';
interface INewHealthModal {
    title:string,
    type: string,
    showModal:boolean,
    setShowModal:any,
}

function NewHealthModal(props:PropsWithChildren<INewHealthModal>) {
    const { type, title, showModal, setShowModal} = props
    const [error, setError]= useState<any>()
    const [form, setForm] = useState<any>({
        name:"",
        description:""
    });

    const handleSetForm = (e: any) => {
    const { name, value } = e.target;
    setForm({
        ...form,
        [name]: value
        });
    };

    const handleCreateItem= async()=>{
        setShowModal(false);
        try {
            console.log(form);
            const response = await CreateItemService.createItem(form, type);
            if (response.success) {
               alert(`${title} created`);
            } else {
                console.error(response.message);
            }
        } catch (error) {
            console.log('error en catch');}
    }

    const handlePrevent = (e:any) => {
        e.preventDefault();
        setShowModal(false)
    }

    const validateInputs = (e: React.MouseEvent) => {
        const validations: Array<IObjectValidationsProperties> = [
            {
                key: "name",
                type: "string",
                required: true,
            },
            {
                key: "description",
                type: "string",
                required: false,
            },
        ];

        const properties = objectValidations(form, validations);

        if(properties?.passTypeValidations) handleCreateItem()
        else{
            let errors: any;
            properties?.inputs.forEach((input) => {
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
    <div className={styles.backdrop}>
        <div className={styles.modal_wrapper}>
            <h2>Create {title}</h2>
            <input type={"text"} required name="name" placeholder={`New ${title} name..`} onChange={handleSetForm} value={form?.name} />
            {error &&  error.name && <p> {error.name}</p>}
            <textarea  name="description"  placeholder={`Description of your new ${title} ..`}   onChange={handleSetForm} value={form?.description}/>
            {error &&  error.description && <p> {error.description}</p>}
            <section>
                    <button className={styles.btn} onClick={handlePrevent}>
                        Back
                    </button>
                    <button className={`${styles.btn_create}  ${styles.new_user_btn_register}`} onClick={validateInputs}>
                        Register
                    </button>
                </section>
        </div>
    </div>
  )
}

export default NewHealthModal