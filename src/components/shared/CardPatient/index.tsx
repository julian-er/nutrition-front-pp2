import React, { PropsWithChildren } from 'react'
import styles from './Card.module.scss';

export interface ICard {
    name: string,
    paragraph: string,
    age:string,
    profile_image:string
  }
  

function Card(props: PropsWithChildren<ICard>) {
    const{name,paragraph,age,profile_image}=props
  return (
    <div className={styles.card_wrapper}>
      <img className={styles.patient_image} src={profile_image} alt="user" />
      <div className={styles.patient_info}>
        <h3>{name}</h3>
        <p>{paragraph}</p>
        <p>Age: {age}</p>
        </div>
    </div>
  )
}

export default Card;