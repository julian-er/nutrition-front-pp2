import React, { PropsWithChildren } from 'react';
import styles from './Modal.module.scss'

export interface IModal {
  title: string,
  paragraph: string,
  buttons: Array<IButton>
}

export interface IButton {
  label: string,
  icon: JSX.Element,
  callback: () => void,
}



function Modal(props: PropsWithChildren<IModal>) {
  const { title, paragraph, buttons } = props
  return (
    <div className={styles.backdrop}>
      <div className={styles.modalWrapper}>
        <h2>{title}</h2>
        <p>{paragraph}</p>
        <section>
          {buttons.map((button) => (
            <button onClick={button.callback}> {button.label}</button>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Modal;