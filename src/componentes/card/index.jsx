import React, { Component } from 'react'
import styles from './styles.module.css';

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Title',
      body: 'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    };
  }

  render() {
    return (
      <div className={styles.card}>
        <div className={styles.container}>
          <h1>{this.state.title}</h1>
          <p>{this.state.body}.</p>
        </div>
      </div>
    );
  }
}