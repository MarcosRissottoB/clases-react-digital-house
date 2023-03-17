import React from 'react'
import styles from './styles.module.css';
import { Card } from '../card';

export const List =  ({list}) => {
  return <div className={styles.list}>
    {list.map(item => <Card key={item.id} item={item}/>)}
  </div>
}