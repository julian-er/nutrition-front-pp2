import { MouseEventHandler, PropsWithChildren, useState  }from 'react'
import styles from "./NewHealthModal.module.scss"
import CreateItemService from "../../../services/itemServices/itemService"
interface INewHealthModal {
    title:string,
    type: string,
    showModal:boolean,
    setShowModal:any,
}

function NewHealthModal(props:PropsWithChildren<INewHealthModal>) {
    const { type, title, showModal, setShowModal} = props
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
     
  return (
    <div className={styles.backdrop}>
        <div className={styles.modal_wrapper}>
            <h2>Create {title}</h2>
            <input type={"text"} name="name" placeholder={`New ${title} name..`} onChange={handleSetForm} value={form?.name} />
            <textarea  name="description"  placeholder={`Description of your new ${title} ..`}   onChange={handleSetForm} value={form?.description}/>
            <section>
                    <button className={styles.btn} onClick={handlePrevent}>
                        Back
                    </button>
                    <button className={`${styles.btn_create}  ${styles.new_user_btn_register}`} onClick={handleCreateItem}>
                        Register
                    </button>
                </section>
        </div>
    </div>
  )
}

export default NewHealthModal