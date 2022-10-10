import { PropsWithChildren } from "react"
import styles from "./DayCard.module.scss"

interface IDayCard {
  title: string,
  totalDishes: number,
  patientName: string,
  patientImage: string,
  id: number
}
function DayCard(props: PropsWithChildren<IDayCard>) {
  const { title, totalDishes, patientName, patientImage, id } = props
  return (
    <div className={styles.wrapper} onClick={() => console.log(id)}>
      <div className={styles.info}>
        <h3>{title}</h3>
        <span>Total dishes : {totalDishes}</span>
      </div>
      <div className={styles.profile}>
        <div className={styles.imageWrapper}>
          <img src={patientImage} alt='user-profile'/>
        </div>
        <p>{patientName}</p>
      </div>
    </div>
  )
}

export default DayCard