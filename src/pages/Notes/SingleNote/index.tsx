import { PropsWithChildren } from "react"
import styles from "./SingleNote.module.scss"

interface ISingleNoteProps {
    date: string,
    title: string,
    content: string
}

function SingleNote(props: PropsWithChildren<ISingleNoteProps>) {
    const { date, title, content } = props
    return (
        <article className={styles.noteWrapper}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.content}>{content}</p>
            <p className={styles.date}>{date}</p>
        </article>
    )
}

export default SingleNote