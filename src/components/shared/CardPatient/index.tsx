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
      <img className={styles.patient_image} src="https://cdn-icons-png.flaticon.com/512/25/25634.png" alt="user" />
      <div className={styles.patient_info}>
        <h2>{name}</h2>
        <p>{paragraph}</p>
        <p>{age}</p>
        </div>
    </div>
  )
}

export default Card;