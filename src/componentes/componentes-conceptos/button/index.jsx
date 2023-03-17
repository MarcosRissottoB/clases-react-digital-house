import styles from './styles.module.css';

export const Button = ({size = 'sm', children}) => (
  <button 
    className={
      size === 'md' ? styles.buttonGrande: styles.button
    }>
    {children}
  </button>
)