import { PropsWithChildren } from "react";
import styles from "./PatientCard.module.scss";

interface IPatientCardProps {
    name: string,
    age: string,
    id: number
}



function PatientCard(props: PropsWithChildren<IPatientCardProps>) {
    const { name, age, id } = props
    return (
        <div className={styles.patientWrapper} onClick={() => console.log(id)}>
            <h3>{name}</h3>
            <p>{age}</p>
        </div>
    )
}

export default PatientCard