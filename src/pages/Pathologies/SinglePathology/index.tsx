import { PropsWithChildren } from "react"
import styles from "./SinglePathology.module.scss"

interface ISinglePathologyProps {
    title: string,
    content: string
}

function SinglePathology(props: PropsWithChildren<ISinglePathologyProps>) {
    const { title, content } = props
    return (
        <article className={styles.noteWrapper}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.content}>{content}</p>
        </article>
    )
}

export default SinglePathology;