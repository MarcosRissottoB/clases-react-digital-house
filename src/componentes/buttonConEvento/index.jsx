import styles from './styles.module.css';

export const ButtonConEvento = ({evento, children}) => (
  <button 
    className={styles.button}
    onClick={evento}
    >
    {children}
  </button>
)