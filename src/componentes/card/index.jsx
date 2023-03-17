import React from 'react'
import styles from './styles.module.css';

export const Card =  ({item}) => {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
      </div>
    </div>
  );
}