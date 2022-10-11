import { PropsWithChildren } from "react"
import styles from "./SinglePathology.module.scss"

interface ISinglePathologyProps {
    name: string,
    description: string
}

function SinglePathology(props: PropsWithChildren<ISinglePathologyProps>) {
    const { name, description } = props
    return (
        <article className={styles.noteWrapper}>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.content}>{description}</p>
        </article>
    )
}

export default SinglePathology;