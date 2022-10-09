import { PropsWithChildren } from "react";
import styles from "./NoteCard.module.scss";

interface INoteCardProps {
    title: string,
    date: string,
    id: number
}



function NoteCard(props: PropsWithChildren<INoteCardProps>) {
    const { title, date, id } = props
    return (
        <div className={styles.noteWrapper} onClick={() => console.log(id)}>
            <h3>{title}</h3>
            <p>{date}</p>
        </div>
    )
}

export default NoteCard