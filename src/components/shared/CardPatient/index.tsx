import React, { PropsWithChildren } from 'react'
import styles from './Card.module.scss';

export interface ICard {
    name: string,
    age:string,
    profile_image:string
  }
  

function Card(props: PropsWithChildren<ICard>) {
    const{name,age,profile_image}=props
  return (
    <div className={styles.card_wrapper}>
      <img className={styles.patient_image} src={profile_image} alt="user" />
      <div className={styles.patient_info}>
        <h3><b>{name}</b></h3>
        <p>Age:{age}</p>
        </div>
    </div>
  )
}

export default Card;