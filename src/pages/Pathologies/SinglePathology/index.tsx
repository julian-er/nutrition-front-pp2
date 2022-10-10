import { PropsWithChildren } from "react"
import styles from "./SingleNote.module.scss"

interface ISinglePathologieProps {
    title: string,
    content: string
}

function SinglePathologie(props: PropsWithChildren<ISinglePathologieProps>) {
    const { title, content } = props
    return (
        <article className={styles.noteWrapper}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.content}>{content}</p>
        </article>
    )
}

export default SinglePathologie;