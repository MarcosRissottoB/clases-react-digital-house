import React from 'react'
import styles from './styles.module.css';

export const Card =  ({data}) => {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <h2>Datos ingresados</h2>
        <span>Nombre: <strong>{data.nombre}</strong></span>
        <br />
        <span>Tu dia favorito: <strong>{data.dia}</strong></span>
        <br />
        <span>Tu tema: <strong>{data.tema}</strong></span>
      </div>
    </div>
  );
}