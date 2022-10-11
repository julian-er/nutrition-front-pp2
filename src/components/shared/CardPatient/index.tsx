import React, { PropsWithChildren } from 'react'
import styles from './Card.module.scss';

export interface ICard {
    name: string,
    age:string,
    callback:any,
    profile_image:string
  }
  

function Card(props: PropsWithChildren<ICard>) {
    const{name,age,profile_image,callback}=props
  return (
  <button className={styles.card_wrapper} onClick={callback}>
        <img className={styles.patient_image} src={profile_image} alt="user" />
        <div className={styles.patient_info}>
          <h3><b>{name}</b></h3>
          <p>Age:{age}</p>
    </div>
  </button>
  )
}

export default Card;