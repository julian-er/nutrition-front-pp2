import { PropsWithChildren } from 'react';
import styles from './SingleAllergy.module.scss';

interface ISingleAllergyProps {
  name: string;
  description: string;
}

function SingleAllergy(props: PropsWithChildren<ISingleAllergyProps>) {
  const { name, description } = props;
  return (
    <article className={styles.noteWrapper}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
}

export default SingleAllergy;
