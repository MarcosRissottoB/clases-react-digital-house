import React, { Component, useEffect, useState } from 'react'
import styles from './styles.module.css';

// export class Card extends Component {

export const CardFC = () => {
  const [nombre, setNombre] = useState("Juan")

  const handlerOnclick = () => {
    setNombre("Pedro")
  }

  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <h1>{nombre}</h1>
        <button onClick={e => handlerOnclick()}>Cambiar nombre</button>
      </div>
    </div>
  );

}

