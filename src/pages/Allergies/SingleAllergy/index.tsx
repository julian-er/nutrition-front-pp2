import { PropsWithChildren } from 'react';
import styles from './SingleAllergy.module.scss';

interface ISingleAllergyProps {
  title: string;
  content: string;
  date: string;
}

function SingleAllergy(props: PropsWithChildren<ISingleAllergyProps>) {
  const { date, title, content } = props;
  return (
    <article className={styles.noteWrapper}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>{content}</p>
      <p className={styles.date}>{date}</p>
    </article>
  );
}

export default SingleAllergy;
